<template>
    <div class="goods-container">
        <div class="goods-img">
            <image :src="goods.image" mode="widthFix"/>
        </div>
        <div class="goods-text">
            <div class="goods-title">{{goods.name}}</div>
            <div class="goods-info">
                <div class="left price">¥{{goods.price}}</div>
                <div class="middle">快递：{{goods.freight > 0 ? goods.freight + '元' : '免运费'}}</div>
                <div class="right">销量{{goods.saleNum}}</div>
            </div>
        </div>
        <div class="goods-detail">
            <div class="goods-detail-title wx-1px-b">商品详情</div>
            <div class="detail" v-html="goods.remark"></div>
        </div>
        <buy-tool></buy-tool>
    </div>
</template>

<script>
import { resizeImg } from '../../utils'
import buyTool from '../../components/buyTool'
import Product from '../../api/Product'
export default {
    components: {
        buyTool
    },
    data() {
        return {
            goods: {}
        }
    },
    onLoad(option) {
        this.getInfo(option.id)
    },
    methods: {
        getInfo(productId) {
            Product.findById({ productId }).then(res => {
                const data = res
                data.image = resizeImg(res.image, '400x400')
                this.goods = data
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.goods-container
    width 100%
    .goods-img
        width 100%
        image
            display block
            width 100%
    .goods-text
        width 100%
        padding 10px 0
        background-color #fff
        .goods-title
            padding 0 10px
            font-size 16px
            line-height 30px
        .goods-info
            display flex
            height 30px
            line-height 30px
            .left
                flex 1
                padding-left 10px
                color #ff6900
            .middle
                flex 1
                text-align center
                font-size 13px
                color #999
            .right
                flex 1
                text-align right
                font-size 13px
                color #999
                padding-right 10px
    .goods-detail
        width 100%
        padding-bottom 50px
        .goods-detail-title
            width 100%
            height 44px
            line-height 44px
            text-align center
            font-size 13px
            color #666
            margin-top 5px
            background-color #ffffff
        .detail
            background-color #ffffff
</style>
