import Vue from 'vue'
import App from './App'
import '../static/css/index.styl'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
	// 这个字段走 app.json
	config: {
		// 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
		pages: [
			'^pages/home/main',
			'pages/buy/main',
			'pages/my/main',
			'pages/myInfo/main',
			'pages/photo/main',
			'pages/record/main',
			'pages/addRemark/main',
			'pages/goods/main',
			'pages/modifyPassword/main',
			'pages/modifyMobile/main',
			'pages/myLesson/main',
			'pages/myOrder/main',
			'pages/faq/main',
			'pages/lessonInfo/main',
			'pages/login/main',
			'pages/register/main',
			'pages/selectTeacher/main',
		],
		window: {
			backgroundTextStyle: 'dark',
			navigationBarBackgroundColor: '#78d300',
			navigationBarTitleText: '天使无忧',
			navigationBarTextStyle: 'white',
			enablePullDownRefresh: true
		},
		tabBar: {
			color: "#bbbbbb",
			selectedColor: "#78d300",
			list: [
				{
					pagePath: "pages/home/main",
					text: "助长中心",
					iconPath: "static/icons/manage_fill.png",
					selectedIconPath: "static/icons/manage_fill2.png"
				},{
					pagePath: "pages/buy/main",
					text: "我要购买",
					iconPath: "static/icons/service_fill.png",
					selectedIconPath: "static/icons/service_fill2.png"
				},{
					pagePath: "pages/my/main",
					text: "个人中心",
					iconPath: "static/icons/people_fill.png",
					selectedIconPath: "static/icons/people_fill2.png"
				},
			]
		}
	}
}
