<template>
    <div class="lesson margin-b10" @click="gotoInfo">
        <div class="lesson-img">
            <image class="img" :lazy-load="true" mode="widthFix" :src="lesson.image"/>
        </div>
        <div class="lesson-info">
            <div class="lesson-top">
                <div class="lesson-title">{{lesson.name}}</div>
                <div class="lesson-label">{{lesson.label}}</div>
            </div>
            <div class="lesson-middle">已上课时{{lesson.num}}/总课时{{lesson.totalNum}}</div>
            <div class="lesson-bottom">到期时间：{{lesson.validityDate}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        lesson: Object
    },
    methods: {
        gotoInfo() {
            wx.navigateTo({
                url: `/pages/lessonInfo/main?id=${this.lesson.productId}`
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.lesson
    display flex
    height 100px
    background-color #fff
    .lesson-img
        flex 0 0 110px
        padding 10px
        .img
            width 110px
            height 80px
    .lesson-info
        flex 1
        .lesson-top
            position relative
            height 40px
            .lesson-title
                line-height 40px
                font-size 14px
            .lesson-label
                position absolute
                right 10px
                top 10px
                font-size 12px
                padding 0 5px
                color #78d300
                border 1px solid #78d300
                border-radius 3px
        .lesson-middle,.lesson-bottom
            height 26px
            line-height 26px
            font-size 13px
            color #999
</style>
