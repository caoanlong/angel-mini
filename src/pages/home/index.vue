<template>
    <div class="main-content">
        <div class="tabs">
            <tab-top 
                :list="tabList" 
                :select="selectTab" 
                @selectHandClick="selectTabHandClick">
            </tab-top>
        </div>
        <div class="list" v-if="selectTab == '课间剪影'">
            <div class="left">
                <photo-card
                    v-if="index % 2 == 0" :card="card" 
                    v-for="(card, index) in cardList" :key="index">
                </photo-card>
            </div>
            <div class="right">
                <photo-card 
                    v-if="index % 2 != 0" :card="card" 
                    v-for="(card, index) in cardList" :key="index">
                </photo-card>
            </div>
        </div>
        <div v-else-if="selectTab == '健康报告'">
            <record v-for="record in recordList" :key="record.healthRecordId" :record="record"></record>
        </div>
        <div v-else-if="selectTab == '老师建议'">
            <teacher-advice v-for="advice in adviceList" :key="advice.teacherAdviceId" :advice="advice"></teacher-advice>
        </div>
        <div v-else-if="selectTab == '天使留言'">
            <angel-remark v-for="remark in remarkList" :key="remark.angelRemarkId" :remark="remark"></angel-remark>
            <div class="add-remark-btn" @click="addRemark()">
                <span class="txt">添加</span>
            </div>
        </div>
        <load-status :statusText="statusText"></load-status>
    </div>
</template>

<script>
import tabTop from '../../components/tabTop'
import loadStatus from '../../components/loadStatus'
import photoCard from '../../components/photoCard'
import record from '../../components/record'
import teacherAdvice from '../../components/teacherAdvice'
import angelRemark from '../../components/angelRemark'
import LessonPhoto from '../../api/LessonPhoto'
import HealthRecord from '../../api/HealthRecord'
import TeacherAdvice from '../../api/TeacherAdvice'
import AngelRemark from '../../api/AngelRemark'
import { getDateFromDate, resizeImg } from '../../utils'
export default {
    components: {
        tabTop, loadStatus, photoCard, record, teacherAdvice, angelRemark
    },
    data() {
        return {
            icon: '',
            selectTab: '课间剪影',
            tabList: ['课间剪影', '健康报告', '老师建议', '天使留言'],
            isAll: false,
            pageIndex: 1,
            pageSize: 20,
            cardList: [],
            recordList: [],
            adviceList: [],
            remarkList: [],
            statusText: '加载中...'
        }
    },
    created() {
    },
    onLoad() {
    },
    onShow() {
        this.reload()
    },
    methods: {
        addRemark() {
            wx.navigateTo({
                url: '/pages/addRemark/main'
            })
        },
        reload(bool) {
            this.statusText = '加载中...'
            this.cardList = []
            this.recordList = []
            this.adviceList = []
            this.remarkList = []
            this.pageIndex = 1
            if (this.selectTab == '课间剪影') {
                this.getPhotoList(bool)
            } else if (this.selectTab == '健康报告') {
                this.getRecordList(bool)
            } else if (this.selectTab == '老师建议') {
                this.getAdviceList(bool)
            } else if (this.selectTab == '天使留言') {
                this.getRemarkList(bool)
            }
        },
        getPhotoList(refresh) {
            LessonPhoto.find({
                pageIndex: this.pageIndex,
				pageSize: this.pageSize
            }).then(res => {
                if (res.rows.length == 0) {
                    this.statusText = '~已经到底了~'
                } else {
                    if (res.rows.length < 20) this.statusText = '~已经到底了~'
                    const list = res.rows.map(item => {
                        return {
                            lessonPhotoId: item.lessonPhotoId,
                            title: item.title,
                            photo: resizeImg(item.photos.split(',')[0], '300x300'),
                            createTime: getDateFromDate(item.createTime)
                        }
                    })
                    this.cardList.push(...list)
                }
                if (refresh) {
                    wx.hideNavigationBarLoading()
                    wx.stopPullDownRefresh()
                }
            })
        },
        getRecordList(refresh) {
            HealthRecord.find({
                pageIndex: this.pageIndex,
				pageSize: this.pageSize
            }).then(res => {
                if (res.rows.length == 0) {
                    this.statusText = '~已经到底了~'
                } else {
                    if (res.rows.length < 20) this.statusText = '~已经到底了~'
                    const list = res.rows.map(item => {
                        return {
                            healthRecordId: item.healthRecordId,
                            name: item.name,
                            type: item.type.value,
                            person: item.person.name,
                            file: item.file,
                            recordDate: getDateFromDate(item.recordDate, true)
                        }
                    })
                    this.recordList.push(...list)
                }
                if (refresh) {
                    wx.hideNavigationBarLoading()
                    wx.stopPullDownRefresh()
                }
            })
        },
        getAdviceList(refresh) {
            TeacherAdvice.find({
                pageIndex: this.pageIndex,
				pageSize: this.pageSize
            }).then(res => {
                if (res.rows.length == 0) {
                    this.statusText = '~已经到底了~'
                } else {
                    if (res.rows.length < 20) this.statusText = '~已经到底了~'
                    const list = res.rows.map(item => {
                        return {
                            teacherAdviceId: item.teacherAdviceId,
                            person: item.person.name,
                            personRemark: item.person.remark,
                            remark: item.remark,
                            avatar: resizeImg(item.person.avatar, '100x100'),
                            createTime: getDateFromDate(item.createTime)
                        }
                    })
                    this.adviceList.push(...list)
                }
                if (refresh) {
                    wx.hideNavigationBarLoading()
                    wx.stopPullDownRefresh()
                }
            })
        },
        getRemarkList(refresh) {
            AngelRemark.find({
                pageIndex: this.pageIndex,
				pageSize: this.pageSize
            }).then(res => {
                if (res.rows.length == 0) {
                    this.statusText = '~已经到底了~'
                } else {
                    if (res.rows.length < 20) this.statusText = '~已经到底了~'
                    const list = res.rows.map(item => {
                        return {
                            angelRemarkId: item.angelRemarkId,
                            avatar: resizeImg(item.member.avatar, '100x100'),
                            member: item.member.name,
                            remark: item.remark,
                            createTime: getDateFromDate(item.createTime)
                        }
                    })
                    this.remarkList.push(...list)
                }
                if (refresh) {
                    wx.hideNavigationBarLoading()
                    wx.stopPullDownRefresh()
                }
            })
        },
        selectTabHandClick(tab) {
            this.selectTab = tab
            this.reload()
        },
        onPullDownRefresh() {
            wx.showNavigationBarLoading()
            this.reload(true)
        },
        onReachBottom() {
            if (this.statusText == '~已经到底了~') return
            this.pageIndex++
            if (this.selectTab == '课间剪影') {
                this.getPhotoList()
            } else if (this.selectTab == '健康报告') {
                this.getRecordList()
            } else if (this.selectTab == '老师建议') {
                this.getAdviceList()
            } else if (this.selectTab == '天使留言') {
                this.getRemarkList()
            }
        }
    },
    onLoad() {
        const token = wx.getStorageSync("token")
		if (!token) {
			wx.redirectTo({
				url: '/pages/login/main'
			})
		}
    },
    onPullDownRefresh() {
        this.onPullDownRefresh()
    },
    onReachBottom() {
        this.onReachBottom()
    }
}
</script>

<style lang="stylus" scoped>
.main-content
    padding-top 44px
    .tabs
        position fixed
        top 0
        left 0
        z-index 9999
        width 100%
    .list
        display flex
        padding 5px
        .left,.right
            flex 1
    .add-remark-btn
        position fixed
        z-index 99
        bottom 20px
        right 20px
        width 56px
        height 56px
        line-height 72px
        font-size 11px
        text-align center
        border-radius 30px
        color #ffffff
        background-color #78d300
        box-shadow 0px 2px 5px rgba(0,0,0,.2)
        background-image url('../../../static/icons/add.png')
        background-repeat no-repeat
        background-size 16px
        background-position 20px 12px
        .txt
            margin-top 10px
</style>
