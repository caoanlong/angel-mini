<template>
    <div class="goods" @click="gotoInfo()">
        <image class="goods-img" mode="scaleToFill" :src="imgUrl + product.image"/>
        <div class="goods-text">
            <div class="goods-title">{{product.name}}</div>
            <div class="goods-info" v-if="product.label">{{product.label.value}}</div>
            <div class="goods-bottom">
                <div class="price">¥{{product.price}}</div>
                <div class="buy" @click.stop="pay">一键购买</div>
            </div>
        </div>
    </div>
</template>

<script>
import { _imgUrl } from '../utils'
export default {
    props: {
        category: String,
        product: Object
    },
    computed: {
        imgUrl: () => _imgUrl
    },
    methods: {
        gotoInfo() {
            wx.navigateTo({
                url: `/pages/${this.category}/main?id=${this.product.productId}`
            })
        },
        pay() {
            wx.requestPayment({
                'timeStamp': String(new Date().getTime()),
                'nonceStr': 'gg',
                'package': 'prepay_id=123',
                'signType': 'MD5',
                'paySign': 'hh',
                'success': res => {
                    console.log(res)
                },
                'fail': res =>{
                    console.log(res)
                }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
    .goods
        width 100%
        background-color #fff
        .goods-img
            width 100%
            height 120px
            background-color #ddd
        .goods-text
            padding 6px 10px
            .goods-title
                font-size 14px
                line-height 30px
            .goods-info
                font-size 12px
                color #999
                line-height 20px
            .goods-bottom
                display flex
                height 40px
                line-height 40px
                .price
                    flex 1
                    font-size 18px
                    color #ff6900
                .buy
                    flex 0 0 80px
                    position relative
                    top 5px
                    color #78d300
                    font-size 12px
                    height 28px
                    line-height 28px
                    border-radius 16px
                    border 1px solid #78d300
                    text-align center
                    background-color rgba(120,211,0,.2)
</style>

