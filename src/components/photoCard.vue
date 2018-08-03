<template>
    <div class="photo-card" @click="gotoInfo">
        <image class="photo-img" lazy-load="true" mode="widthFix" :src="card.photo"/>
        <div class="photo-text">
            <div class="photo-title">{{card.title}}</div>
            <div class="photo-info">{{card.createTime}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        card: {
            type: Object
        }
    },
    methods: {
        gotoInfo() {
            wx.navigateTo({
                url: `/pages/photo/main?id=${this.card.lessonPhotoId}`
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
    .photo-card
        background #fff
        border-radius 4px
        box-shadow 2px 2px 5px rgba(0,0,0,.2)
        overflow hidden
        margin 5px 5px 10px 5px
        .photo-img
            width 100%
            background-color #ddd
            margin-bottom 8px
        .photo-text
            padding 10px 12px
            background-color #fff
            .photo-title
                font-size 14px
                line-height 1.6
            .photo-info
                font-size 12px
                color #999
                line-height 1.6
</style>