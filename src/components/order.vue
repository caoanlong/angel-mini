<template>
    <div class="order margin-b10 wx-1px-b">
        <div class="order-top wx-1px-b">
            <div class="order-time">下单时间：{{order.createTime}}</div>
            <div class="order-status">
                <span v-if="order.status == 'success'">支付成功</span>
                <span style="color: red" v-else>支付失败</span>
            </div>
        </div>
        <div class="order-bottom">
            <div class="order-img">
                <image class="img" :src="order.image"/>
            </div>
            <div class="order-info">
                <div class="order-title">{{order.name}}</div>
                <div class="order-remark">{{order.label}}</div>
            </div>
            <div class="order-price">¥{{order.totalPrice}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        order: Object
    }
}
</script>

<style lang="stylus" scoped>
.order
    background-color #fff
    .order-top
        display flex
        height 40px
        line-height 40px
        font-size 13px
        .order-time
            flex 1
            padding-left 10px
            color #666
        .order-status
            flex 0 0 100px
            text-align right
            padding-right 10px
            color #78d300
    .order-bottom
        display flex
        height 90px
        .order-img
            flex 0 0 90px
            padding 10px
            .img
                width 90px
                height 70px
        .order-info
            flex 1
            padding 10px
            .order-title
                font-size 14px
                height 28px
                line-height 28px
            .order-remark
                font-size 13px
                color #999
                height 24px
                line-height 24px
        .order-price
            flex 0 0 100px
            text-align right
            padding-right 10px
            line-height 90px
            color #ff6900
</style>
