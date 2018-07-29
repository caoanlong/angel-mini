<template>
    <div class="title-line wx-1px-b" 
        :style="{'height': height , 'line-height': height}"
        @click="gotoInfo(href)">
        <div class="title-left">{{name}}</div>
        <div class="title-right">
            <div class="title-right-txt">{{info}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        height: {
            type: String,
            default: '44px'
        },
        name: String,
        info: String,
        href: String
    },
    methods: {
        gotoInfo(href) {
            href && wx.navigateTo({
                url: `/pages/${href}/main?id=1`
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
    .title-line
        display flex
        padding 0 10px
        background-color #fff
        .title-left
            flex 1
            font-size 14px
            color #666
            position relative
        .title-right
            flex 0 0 120px
            position relative
            .title-right-txt
                text-align right
                font-size 13px
                color #aaa
                padding-right 12px
                &:before
                    display block
                    content ""
                    position absolute
                    top 18px
                    right 4px
                    width 7px
                    height 7px
                    border-top 2px solid #bbb
                    border-right 2px solid #bbb
                    transform rotate(45deg)
</style>


