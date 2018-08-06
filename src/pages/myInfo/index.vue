<template>
    <div class="myInfo-container">
        <div class="margin-b10">
            <head-line name="头像" :info="member.avatar"/>
        </div>
        <div>
            <text-line name="手机" :info="member.mobile" href="modifyMobile"/>
            <!-- <text-line name="修改密码" href="modifyPassword"/> -->
        </div>
        <div class="cancel-btn">
            <button type="default" @click="exit">解除微信绑定</button>
        </div>
    </div>
</template>

<script>
import headLine from '../../components/headLine'
import textLine from '../../components/textLine'
export default {
    components: {
        headLine,
        textLine
    },
    data() {
        return {
            member: {}
        }
    },
    onShow() {
        const member = wx.getStorageSync('member')
        if (member) this.member = member
    },
    methods: {
        exit() {
            wx.clearStorage()
            wx.reLaunch({ url: '/pages/login/main'})
        }
    }
}
</script>

<style lang="stylus" scoped>
    .cancel-btn
        margin-top 20px
        padding 0 10px
</style>
