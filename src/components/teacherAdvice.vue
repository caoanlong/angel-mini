<template>
    <div class="advice-card">
        <div class="advice-top">
            <div class="advice-left">
                <img class="advice-avatar" :src="advice.avatar" v-if="advice.avatar"/>
                <img class="advice-avatar" src="../../static/icons/defaultAvatar.png" v-else/>
            </div>
            <div class="advice-right">
                <div class="advice-right-top">
                    <span class="advice-name">{{advice.person}}</span>
                    <span class="advice-post">康复师</span>
                </div>
                <div class="advice-right-bottom">{{advice.personRemark}}</div>
            </div>
        </div>
        <div class="advice-bottom">
            <p>{{advice.remark}}</p>
            <p class="time">{{advice.createTime}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        advice: {
            type: Object
        }
    }
}
</script>

<style lang="stylus" scoped>
.advice-card
    background-color #fff
    padding 10px
    margin-bottom 10px
    .advice-top
        display flex
        height 60px
        .advice-left
            flex 0 0 60px
            padding-top 5px
            .advice-avatar
                display block
                width 50px
                height 50px
                border-radius 25px
        .advice-right
            flex 1
            padding-left 10px
            .advice-right-top
                line-height 30px
                .advice-name
                    font-size 14px
                .advice-post
                    margin-left 15px
                    font-size 12px
                    color #999
            .advice-right-bottom
                font-size 12px
                color #999
                line-height 18px
    .advice-bottom
        padding 6px 0
        font-size 13px
        color #666
        line-height 1.8
        .time
            font-size 11px
            line-height 1.5
            color #999
</style>