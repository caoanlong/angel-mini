<template>
    <div>
        <view class="section section-top wx-1px-b margin-b10">
            <input class="ipt" placeholder="请输入手机号" placeholder-class="ipt-placeholder" v-model="mobile"/>
            <div class="btn">
                <button size="mini" type="primary" :disabled="isGetVCode" @click="getVCode">{{getVcodeText}}</button>
            </div>
        </view>
        <view class="section wx-1px-b">
            <input class="ipt" placeholder="请输入短信验证码" placeholder-class="ipt-placeholder" v-model="vcode"/>
        </view>
        <view class="section btn-section">
            <button type="primary" class="add-btn" @click="login()">确认</button>
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
            vcode: '',
            wait: 60,
			isGetVCode: false,
			getVcodeText: '获取验证码',
        }
    },
    created() {
        const token = wx.getStorageSync("token")
		if (token) {
			wx.redirectTo({
				url: '/pages/home/main'
			})
		}
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
        /**
		 * 	登录
		 */
        login() {
            wx.getUserInfo({
                lang: 'zh_CN',
                success: (res) => {
                    console.log(res)
                }
            })
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
            if (!this.vcode.trim()) {
                wx.showToast({
                    title: '验证码不能为空',
                    icon: 'error',
                    duration: 2000
                })
                return
            }
            wx.showLoading({ title: '加载中' })
            Auth.login({
                mobile: this.mobile,
                vcode: this.vcode
            }).then(res => {
                const token = res.headers['x-access-token']
                if (token) {
                    wx.setStorageSync('token', token)
                    wx.hideLoading()
                    wx.switchTab({
                        url: '/pages/home/main'
                    })
                }
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
