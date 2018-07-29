<template>
    <div>
        <view class="section wx-1px-b margin-b10">
            <input class="ipt" placeholder="请输入原密码" placeholder-class="ipt-placeholder"/>
        </view>
        <view class="section wx-1px-b">
            <input class="ipt" placeholder="请输入新密码" placeholder-class="ipt-placeholder"/>
        </view>
        <view class="section wx-1px-b margin-b10">
            <input class="ipt" placeholder="确认密码" placeholder-class="ipt-placeholder"/>
        </view>
        <view class="section btn-section">
            <button type="primary" class="add-btn" @click="submit()">确认</button>
        </view>
    </div>
</template>

<script>
export default {
    methods: {
        submit() {
            
        }
    }
}
</script>

<style lang="stylus" scope>
    .btn-section
        padding 0 10px
        .add-btn
            margin-top 20px
            background-color #78d300
</style>
