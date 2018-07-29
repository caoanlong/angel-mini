<template>
    <div>
        <view class="section section-top wx-1px-b margin-b10">
            <input class="ipt" placeholder="请输入手机号" placeholder-class="ipt-placeholder" v-model="mobile" disabled/>
            <div class="btn">
                <button size="mini" type="primary" :disabled="isGetVCode" @click="getVCode">{{getVcodeText}}</button>
            </div>
        </view>
        <view class="section wx-1px-b">
            <input class="ipt" placeholder="请输入短信验证码" placeholder-class="ipt-placeholder" v-model="vcode"/>
        </view>
        <view class="section wx-1px-b">
            <input class="ipt" placeholder="请输入新手机号" placeholder-class="ipt-placeholder" v-model="newMobile"/>
        </view>
        <view class="section btn-section">
            <button type="primary" class="add-btn" :disabled="!mobile||!newMobile||!vcode" @click="updateMobile()">确认</button>
        </view>
    </div>
</template>

<script>
import { checkMobile } from '../../utils/validator'
import Auth from '../../api/Auth'
export default {
    data() {
        return {
            mobile: '',
            newMobile: '',
            vcode: '',
            wait: 60,
			isGetVCode: false,
			getVcodeText: '获取验证码',
        }
    },
    onLoad() {
        const { mobile } = wx.getStorageSync('member')
        if (mobile) this.mobile = mobile
    },
    methods: {
        /**
		 * 	获取短信验证码
		 */
		getVCode() {
            if (this.isGetVCode) return
            if (!this.mobile.trim()) {
                wx.showToast({
                    title: '手机号不能为空',
                    icon: 'error',
                    duration: 2000
                })
                return
            }
            if (!checkMobile(this.mobile)) {
                wx.showToast({
                    title: '手机号错误',
                    icon: 'error',
                    duration: 2000
                })
                return
            }
            this.timeGo()
            Auth.getSmsCode({ mobile: this.mobile }).then(res => {
                console.log(res.data)
                wx.showToast({
                    title: res.data.data,
                    icon: 'success',
                    duration: 2000
                })
            })
        },
        updateMobile() {
            Auth.updateMobile({
                mobile: this.mobile,
                newMobile: this.newMobile,
                vcode: this.vcode
            }).then(res => {
                console.log(res.data.msg)
                wx.showToast({
                    title: res.data.msg,
                    icon: 'success',
                    duration: 2000
                })
                this.getUserInfo()
                wx.navigateBack({ delta: 1 })
            })
        },
        /**
		 * 	倒计时
		 */
		timeGo() {
			if (this.wait == 0) {
				this.getVcodeText = '重新获取'
				this.isGetVCode = false
				this.wait = 30
				return
			} else {
				this.isGetVCode = true
				this.getVcodeText = this.wait+'s'
				this.wait--
				setTimeout(() => {
					this.timeGo()
				}, 1000)
			}
        },
        getUserInfo() {
            Auth.getUserInfo().then(res => {
                wx.setStorageSync('member', res.data.data)
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.section-top
    display flex
    .ipt
        flex 1
    .btn
        flex 1
        text-align right
        background-color #fff
        button
            position relative
            top 8px
            right 10px
            background-color #78d300
.btn-section
    padding 0 10px
    .add-btn
        margin-top 20px
        background-color #78d300
</style>
