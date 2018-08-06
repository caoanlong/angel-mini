<template>
	<div class="record-info" @click="gotoInfo()">
		<div class="left">
			<image class="record-img" :lazy-load="true" mode="widthFix" src="../../static/icons/pdf.png"/>
		</div>
		<div class="right">
			<div class="record-title"><span>{{record.name}}</span><span class="record-type">{{record.type}}</span></div>
            <div class="record-info">老师：{{record.person}}</div>
            <div class="record-date">日期：{{record.recordDate}}</div>
		</div>
	</div>
</template>

<script>
import { _imgUrl } from '../utils'
export default {
	props: {
		record: Object
	},
	methods: {
		gotoInfo() {
            // wx.navigateTo({
            //     url: `/pages/record/main?file=${this.record.file}`
			// })
			wx.showLoading({ title: '玩命加载中' })
			wx.downloadFile({
                url: _imgUrl + this.record.file,
                success: (res) => {
                    const filePath = res.tempFilePath
                    wx.openDocument({
                        filePath,
                        fileType: 'pdf',
                        success: (res) => {
                            wx.hideLoading()
                        }
                    })
                }
            })
        }
	}
}
</script>

<style lang="stylus" scoped>
	.record-info
		display flex
		background-color #fff
		margin-bottom 10px
		.left
			flex 0 0 60px
			padding 10px
			.record-img
				width 70px
		.right
			flex 1
			padding 10px
			.record-title
				font-size 14px
				line-height 32px
				position relative
				.record-type
					display inline-block
					color #78d300
					font-size 12px
					border 1px solid #78d300
					height 24px
					line-height 24px
					padding 0 10px
					border-radius 15px
					position absolute
					top 2px
					right 0
			.record-info, .record-date
				font-size 12px
				color #999
				line-height 16px
</style>

