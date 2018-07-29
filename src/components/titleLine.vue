<template>
    <div class="title-line wx-1px-b">
        <div class="title-left"><div class="block"></div>{{name}}</div>
        <div class="title-right">
            <div class="title-right-txt" @click="more()">更多</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        name: String
    },
    methods: {
        more() {
            this.$emit('more', this.name)
        }
    }
}
</script>
<style lang="stylus" scoped>
    .title-line
        display flex
        height 44px
        line-height 44px
        padding 0 10px
        background-color #fff
        .title-left
            flex 1
            font-size 14px
            color #666
            padding-left 10px
            position relative
            .block
                position absolute
                left 0
                top 16px
                width 4px
                height 12px
                background-color #78d300
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


