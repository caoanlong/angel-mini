<template>
    <div class="main-content">
    </div>
</template>

<script>
import { _imgUrl } from '../../utils'
export default {
    data() {
        return {
            icon: '',
            selectTab: {},
        }
    },
    methods: {
        readPDF(file) {
            wx.showLoading({ title: '玩命加载中' })
            wx.downloadFile({
                url: _imgUrl + file,
                success: (res) => {
                    const filePath = res.tempFilePath
                    wx.openDocument({
                        filePath,
                        fileType: 'pdf',
                        success: (res) => {
                            wx.hideLoading()
                            console.log('打开文档成功')
                        }
                    })
                }
            })
        }
    },
    onLoad(option) {
        this.readPDF(option.file)
    }
}
</script>

<style lang="stylus" scoped>
    .record-img
        background-color #ddd
        height 500px
        margin 5px
</style>
