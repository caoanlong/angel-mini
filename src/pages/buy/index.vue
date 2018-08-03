<template>
    <div class="main-content">
        <div class="tabs">
            <tab-top 
                :list="tabList" 
                :select="selectTab" 
                @selectHandClick="selectTabHandClick">
            </tab-top>
        </div>
        <div v-if="selectTab == '首页推荐'">
            <swiper 
                class="swiper-container"
                :indicator-dots="true"
                :autoplay="true" 
                :interval="5000"
                :circular="true" 
                indicator-color="rgba(255,255,255,.3)" 
                indicator-active-color="#ffffff">
                <block v-for="(item, index) in imgUrls" :key="index">
                    <swiper-item>
                        <img :src="item" class="swiper-img"/>
                    </swiper-item>
                </block>
            </swiper>
            <title-line :name="tabList[1]" @more="more"></title-line>
            <div class="goods">
                <div class="goods-item" v-for="item in hotLessons" :key="item.productId">
                    <goods category="lessonInfo" :product="item"></goods>
                </div>
            </div>
            <title-line :name="tabList[2]" @more="more"></title-line>
            <div class="goods">
                <div class="goods-item" v-for="item in hotProducts" :key="item.productId">
                    <goods category="goods" :product="item"></goods>
                </div>
            </div>
        </div>
        <div class="padding-5" v-else-if="selectTab == '课程套餐'">
            <div class="left">
                <div class="goods-item" v-for="item in lessons" :key="item.productId" v-if="index % 2 == 0">
                    <goods category="lessonInfo" :product="item"></goods>
                </div>
            </div>
            <div class="right">
                <div class="goods-item" v-for="item in lessons" :key="item.productId" v-if="index % 2 != 0">
                    <goods category="lessonInfo" :product="item"></goods>
                </div>
            </div>
        </div>
        <div class="padding-5" v-else-if="selectTab == '平台产品'">
            <div class="left">
                <div class="goods-item" v-for="item in products" :key="item.productId" v-if="index % 2 == 0">
                    <goods category="goods" :product="item"></goods>
                </div>
            </div>
            <div class="right">
                <div class="goods-item" v-for="item in products" :key="item.productId" v-if="index % 2 != 0">
                    <goods category="goods" :product="item"></goods>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import tabTop from '../../components/tabTop'
import titleLine from '../../components/titleLine'
import goods from '../../components/goods'
import Product from '../../api/Product'
import { resizeImg } from '../../utils'
export default {
    components: {
        tabTop, titleLine, goods
    },
    data() {
        return {
            selectTab: '首页推荐',
            tabList: ['首页推荐', '课程套餐', '平台产品'],
            imgUrls: [
                'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
                'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
            ],
            pageIndex: 1,
            pageSize: 20,
            hotLessons: [],
            hotProducts: [],
            lessons: [],
            products: []
        }
    },
    onLoad() {
        this.getHotLessons()
        this.getHotProducts()
    },
    methods: {
        selectTabHandClick(tab) {
            this.selectTab = tab
            this.pageIndex = 1
            this.lessons = []
            this.products = []
            if (this.selectTab == '首页推荐') {
                this.getHotLessons()
                this.getHotProducts()
            } else if (this.selectTab == '课程套餐') {
                this.getLessons()
            } else if (this.selectTab == '平台产品') {
                this.getProducts()
            }
        },
        more(name) {
            this.selectTabHandClick(name)
        },
        getHotLessons() {
            Product.find({ pageSize: 2, type: 'lessonSet' }).then(res => {
                const list = res.rows.map(item => {
                    return {
                        productId: item.productId,
                        image: resizeImg(item.image, '300x300'),
                        name: item.name,
                        label: item.label.value,
                        price: item.price
                    }
                })
                this.hotLessons = list
            })
        },
        getHotProducts() {
            Product.find({ pageSize: 2, type: 'platformProduct' }).then(res => {
                const list = res.rows.map(item => {
                    return {
                        productId: item.productId,
                        image: resizeImg(item.image, '300x300'),
                        name: item.name,
                        price: item.price
                    }
                })
                this.hotProducts = list
            })
        },
        getLessons() {
            Product.find({
                pageIndex: this.pageIndex,
                pageSize: this.pageSize, 
                type: 'lessonSet'
            }).then(res => {
                const list = res.rows.map(item => {
                    return {
                        productId: item.productId,
                        image: resizeImg(item.image, '300x300'),
                        name: item.name,
                        label: item.label.value,
                        price: item.price
                    }
                })
                this.lessons.push(...list)
            })
        },
        getProducts() {
            Product.find({
                pageIndex: this.pageIndex,
                pageSize: this.pageSize, 
                type: 'platformProduct'
            }).then(res => {
                const list = res.rows.map(item => {
                    return {
                        productId: item.productId,
                        image: resizeImg(item.image, '300x300'),
                        name: item.name,
                        price: item.price
                    }
                })
                this.products.push(...list)
            })
        },
        onPullDownRefresh() {
            wx.showNavigationBarLoading()
            setTimeout(() => {
                wx.hideNavigationBarLoading()
                wx.stopPullDownRefresh()
            }, 1000)
        }
    },
    onPullDownRefresh() {
        this.onPullDownRefresh()
    }
}
</script>

<style lang="stylus" scoped>
.main-content
    padding-top 44px
    .tabs
        position fixed
        top 0
        left 0
        z-index 9999
        width 100%
    .swiper-container
        .swiper-img
            width 100%
            height 100%
    .goods
        display flex
        padding 0 5px
        .goods-item
            flex 1
            padding 10px 5px
    .left,.right
        float left
        width 50%
        .goods-item
            padding 5px
</style>
