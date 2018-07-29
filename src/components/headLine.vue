<template>
    <div class="title-line wx-1px-b" :style="{'height': height , 'line-height': height}">
        <div class="title-left">{{name}}</div>
        <div class="title-right">
            <div class="title-right-txt">
                <img class="title-avatar" :src="imgUrl + info" v-if="info"/>
                <img class="title-avatar" src="../../static/icons/defaultAvatar.png" v-else/>
            </div>
        </div>
    </div>
</template>
<script>
import { _imgUrl } from '../utils'
export default {
    props: {
        height: {
            type: String,
            default: '80px'
        },
        name: String,
        info: String,
        href: String
    },
    computed: {
        imgUrl: () => _imgUrl
    },
    onShow() {
        // console.log(this.info)
    },
    methods: {
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
            flex 0 0 80px
            position relative
            .title-right-txt
                text-align right
                font-size 13px
                color #aaa
                padding-right 12px
                padding-top 10px
                &:before
                    display block
                    content ""
                    position absolute
                    top 32px
                    right 4px
                    width 7px
                    height 7px
                    border-top 2px solid #bbb
                    border-right 2px solid #bbb
                    transform rotate(45deg)
                .title-avatar
                    display block
                    width 54px
                    height 54px
                    border-radius 27px
</style>


