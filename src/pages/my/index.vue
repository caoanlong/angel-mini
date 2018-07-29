<template>
    <div class="my-container">
        <div class="my-header" @click="gotoInfo('myInfo')">
            <div class="left">
                <img class="my-avatar" :src="imgUrl + member.avatar" v-if="member.avatar"/>
                <img class="my-avatar" src="../../../static/icons/defaultAvatar.png" v-else/>
            </div>
            <div class="right">
                <div class="my-name">{{member.name}}</div>
            </div>
        </div>
        <div class="margin-b10">
            <text-line name="我的课程" href="myLesson"/>
            <text-line name="我的订单" href="myOrder"/>
        </div>
        <div>
            <text-line name="联系客服"/>
            <text-line name="常见问题" href="faq"/>
        </div>
    </div>
</template>

<script>
import { _imgUrl } from '../../utils'
import textLine from '../../components/textLine'
import Auth from '../../api/Auth'
export default {
    components: {
        textLine
    },
    data() {
        return {
            member: {}
        }
    },
    computed: {
        imgUrl: () => _imgUrl
    },
    onLoad() {
        const member = wx.getStorageSync('member')
        if (member) this.member = member
        this.getUserInfo()
    },
    methods: {
        getUserInfo() {
            Auth.getUserInfo().then(res => {
                this.member = res.data.data
                wx.setStorageSync('member', res.data.data)
            })
        },
        gotoInfo(href) {
            wx.navigateTo({
                url: `/pages/${href}/main?id=1`
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.my-container
    .my-header
        display flex
        width 100%
        height 80px
        padding 20px 0
        background-color #78d300
        .left
            flex 0 0 80px
            padding-left 10px
            .my-avatar
                display block
                width 70px
                height 70px
                border-radius 35px
        .right
            .my-name
                padding-left 10px
                line-height 70px
                font-size 14px
                color #fff
            &:before
                display block
                content ""
                position absolute
                top 50px
                right 20px
                width 7px
                height 7px
                border-top 2px solid #fff
                border-right 2px solid #fff
                transform rotate(45deg)
</style>
