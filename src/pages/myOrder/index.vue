<template>
    <div>
        <order v-for="order in orders" :key="order.orderId" :order="order"></order>
        <load-status :statusText="statusText"></load-status>
    </div>
</template>

<script>
import order from '../../components/order'
import loadStatus from '../../components/loadStatus'
import Order from '../../api/Order'
import { getDateFromDate } from '../../utils'
export default {
    components: {
        order, loadStatus
    },
    data() {
        return {
            pageIndex: 1,
            pageSize: 20,
            orders: [],
            statusText: '加载中...'
        }
    },
    onLoad() {
        this.reload()
    },
    methods: {
        reload(bool) {
            this.statusText = '加载中...'
            this.orders = []
            this.pageIndex = 1
            this.getList(bool)
        },
        getList(refresh) {
            Order.find({
                pageIndex: this.pageIndex,
                pageSize: this.pageSize
            }).then(res => {
                if (res.rows.length == 0) {
                    this.statusText = '~已经到底了~'
                } else {
                    if (res.rows.length < 20) this.statusText = '~已经到底了~'
                    const list = res.rows.map(item => {
                        return {
                            orderId: item.orderId,
                            image: item.product.image,
                            name: item.product.name,
                            label: item.product.label ? item.product.label.value : '',
                            totalPrice: item.totalPrice,
                            status: item.status,
                            createTime: getDateFromDate(item.createTime)
                        }
                    })
                    this.orders.push(...list)
                    console.log(this.orders)
                    if (refresh) {
                        wx.hideNavigationBarLoading()
                        wx.stopPullDownRefresh()
                    }
                }
            })
        },
        onPullDownRefresh() {
            wx.showNavigationBarLoading()
            this.reload(true)
        },
        onReachBottom() {
            if (this.statusText == '~已经到底了~') return
            this.pageIndex++
            this.reload()
        }
    },
    onPullDownRefresh() {
        this.onPullDownRefresh()
    },
    onReachBottom() {
        this.onReachBottom()
    },
}
</script>

<style lang="stylus" scoped>

</style>
