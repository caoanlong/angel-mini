<template>
    <div class="tool-container" @click="pay">
        <div class="tool-btn">立即购买</div>
    </div>
</template>

<script>
export default {
    methods: {
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
.tool-container
    position fixed
    bottom 0
    left 0
    width 100%
    height 50px
    background-color #fff
    .tool-btn
        margin 5px 20px
        height 40px
        line-height 40px
        text-align center
        color #fff
        font-size 14px
        border-radius 22px
        background-color #78d300
</style>
