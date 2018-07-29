<template>
    <div class="main-content lesson-content">
        <lesson-li :lesson="lesson" v-for="(lesson, index) in lessons" :key="index"></lesson-li>
        <load-status :statusText="statusText"></load-status>
    </div>
</template>

<script>
import lessonLi from '../../components/lessonLi'
import loadStatus from '../../components/loadStatus'
import Lesson from '../../api/Lesson'
import { getDateFromDate } from '../../utils'
export default {
    components: {
        lessonLi, loadStatus
    },
    data() {
        return {
            pageIndex: 1,
            pageSize: 20,
            lessons: [],
            statusText: '加载中...'
        }
    },
    onLoad() {
        this.reload()
    },
    methods: {
        reload(bool) {
            this.statusText = '加载中...'
            this.lessons = []
            this.pageIndex = 1
            this.getList(bool)
        },
        getList(refresh) {
            Lesson.find({
                pageIndex: this.pageIndex,
                pageSize: this.pageSize
            }).then(res => {
                if (res.rows.length == 0) {
                    this.statusText = '~已经到底了~'
                } else {
                    if (res.rows.length < 20) this.statusText = '~已经到底了~'
                    const list = res.rows.map(item => {
                        return {
                            lessonId: item.lessonId,
                            productId: item.productId,
                            image: item.product.image,
                            name: item.product.name,
                            label: item.product.label && item.product.label.value,
                            num: item.num,
                            totalNum: item.totalNum,
                            validityDate: getDateFromDate(item.validityDate, true)
                        }
                    })
                    this.lessons.push(...list)
                    if (refresh) {
                        wx.hideNavigationBarLoading()
                        wx.stopPullDownRefresh()
                    }
                }
            })
        },
        onPullDownRefresh() {
            wx.showNavigationBarLoading()
            this.reload(true)
        },
        onReachBottom() {
            if (this.statusText == '~已经到底了~') return
            this.pageIndex++
            this.reload()
        }
    },
    onPullDownRefresh() {
        this.onPullDownRefresh()
    },
    onReachBottom() {
        this.onReachBottom()
    },
}
</script>

<style lang="stylus" scoped>
.lesson-content
    padding 10px
</style>
