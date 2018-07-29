<template>
    <div class="main-content lesson-content" @click="gotoInfo">
        <lesson-li :lesson="lesson" v-for="(lesson, index) in lessons" :key="index"></lesson-li>
    </div>
</template>

<script>
import lessonLi from '../../components/lessonLi'
export default {
    components: {
        lessonLi
    },
    data() {
        return {
            lessons: [
                {
                    img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1886039655,3949384447&fm=200&gp=0.jpg',
                    title: '正姿舞蹈',
                    type: '48节课半年卡',
                    use: '已上12节课/未上36节课',
                    time: '有效期至：2018年10月08日'
                },
                {
                    img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1886039655,3949384447&fm=200&gp=0.jpg',
                    title: '正姿舞蹈',
                    type: '48节课半年卡',
                    use: '已上12节课/未上36节课',
                    time: '有效期至：2018年10月08日'
                },
                {
                    img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1886039655,3949384447&fm=200&gp=0.jpg',
                    title: '正姿舞蹈',
                    type: '48节课半年卡',
                    use: '已上12节课/未上36节课',
                    time: '有效期至：2018年10月08日'
                },
            ]
        }
    },
    methods: {
        gotoInfo() {
            wx.navigateTo({
                url: '/pages/lessonInfo/main?id=1'
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.lesson-content
    padding 10px
</style>
