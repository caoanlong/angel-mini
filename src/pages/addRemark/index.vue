<template>
    <div class="main-content">
        <text-line name="老师" :info="personName" href="selectTeacher"></text-line>
        <div style="padding: 10px">
            <div class="add-remark">
                <textarea placeholder="请输入..." v-model="remark"/>
            </div>
            <button type="primary" class="add-btn" @click="submitRemark()">提交留言</button>
        </div>
    </div>
</template>

<script>
import textLine from '../../components/textLine'
import AngelRemark from '../../api/AngelRemark'
export default {
    data() {
        return {
            personId: '',
            personName: '',
            remark: ''
        }
    },
    components: { textLine },
    onShow() {
        this.personId = wx.getStorageSync('personId')
        this.personName = wx.getStorageSync('personName')
    },
    destroyed() {
        wx.removeStorageSync('personId')
        wx.removeStorageSync('personName')
    },
    methods: {
        submitRemark() {
            AngelRemark.add({
                personId: this.personId,
                remark: this.remark
            }).then(res => {
                wx.removeStorageSync('personId')
                wx.removeStorageSync('personName')
                wx.switchTab({
                    url: '/pages/home/main'
                })
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.main-content
    .add-remark
        padding 10px
        font-size 14px
        line-height 1.5
        border 1px solid #ddd
        border-radius 5px
        background-color #fff
    .add-btn
        margin-top 20px
        background-color #78d300
</style>
