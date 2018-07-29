<template>
    <div class="order margin-b10 wx-1px-b">
        <div class="order-top wx-1px-b">
            <div class="order-time">下单时间：2018-05-03 11:20:25</div>
            <div class="order-status">支付成功</div>
        </div>
        <div class="order-bottom">
            <div class="order-img">
                <image class="img" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2813434517,83142011&fm=200&gp=0.jpg" />
            </div>
            <div class="order-info">
                <div class="order-title">正姿舞蹈</div>
                <div class="order-remark">10节课体验卡</div>
            </div>
            <div class="order-price">¥200</div>
        </div>
    </div>
</template>

<script>
export default {
    
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
