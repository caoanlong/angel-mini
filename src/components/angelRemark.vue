<template>
    <div class="remark-card">
        <div class="remark-top">
            <div class="remark-left">
                <img class="remark-avatar" :src="imgUrl + remark.avatar" v-if="remark.avatar"/>
                <img class="remark-avatar" src="../../static/icons/defaultAvatar.png" v-else/>
            </div>
            <div class="remark-right">
                <span class="remark-name">{{remark.member}}</span>
                <span class="remark-post">天使</span>
            </div>
        </div>
        <div class="remark-bottom">
            <p>{{remark.remark}}</p>
            <p class="time">{{remark.createTime}}</p>
        </div>
    </div>
</template>

<script>
import { _imgUrl } from '../utils'
export default {
    props: {
        remark: {
            type: Object
        }
    },
    data() {
        return {
        }
    },
    computed: {
        imgUrl: () => _imgUrl
    },
    created() {
    },
    methods: {
    }
}
</script>

<style lang="stylus" scoped>
.remark-card
    background-color #fff
    padding 10px
    margin-bottom 10px
    .remark-top
        display flex
        height 60px
        line-height 60px
        .remark-left
            flex 0 0 60px
            padding-top 5px
            .remark-avatar
                display block
                width 50px
                height 50px
                border-radius 25px
        .remark-right
            flex 1
            padding-left 10px
            .remark-name
                font-size 14px
            .remark-post
                margin-left 15px
                font-size 12px
                color #999
    .remark-bottom
        padding 6px 0
        font-size 13px
        color #666
        line-height 1.8
        .time
            font-size 11px
            line-height 1.5
            color #999
</style>