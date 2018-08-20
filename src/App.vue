<script>
import Weixin from './api/Weixin'
export default {
  created() {
		// 调用API从本地缓存中获取数据
		// const token = wx.getStorageSync("token")
		// // wx.setStorageSync("logs", logs)
		// if (!token) {
		// 	wx.redirectTo({
		// 		url: '/pages/login/main'
		// 	})
		// }
	},
	onLaunch() {
		wx.login({
			success: (res) => {
				console.log(res.code)
				if (res.code) {
					Weixin.getOpenId({ code: res.code }).then(res => {
						console.log(res.data)
					})
				} else {
					console.log('gg')
				}
			}
		})
	},
};
</script>

<style lang="stylus">

</style>
