<script>
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
		// wx.login({
		// 	success: (res) => {
		// 		console.log(res.code)
		// 		if (res.code) {
		// 			wx.request({
		// 				url: `https://api.weixin.qq.com/sns/jscode2session?appid=wx6d8a92e6b3c016e4&secret=tianshiwuyou&js_code=${res.code}&grant_type=authorization_code`,
		// 				success: (result) => {
		// 					console.log(result)
		// 				}
		// 			})
		// 		}
		// 	}
		// })
	},
};
</script>

<style lang="stylus">

</style>
