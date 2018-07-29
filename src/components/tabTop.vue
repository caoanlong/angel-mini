<template>
    <div class="tab-top wx-1px-b">
        <div 
            class="tab-item" 
            @click="selectTab(item)"
            v-for="item in list" 
            :key="item">
            <div class="tab-item-in" :class="{'active': select == item}" >{{item}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        list: Array,
        select: String
    },
    methods: {
        selectTab(item) {
            this.$emit('selectHandClick', item)
        }
    }
}
</script>

<style lang="stylus" scoped>
    .tab-top
        display flex
        width 100%
        height 44px
        line-height 44px
        font-size 13px
        background-color #fff
        .tab-item
            flex 1
            text-align center
            .tab-item-in
                position relative
                width 100%
                height 100%
                color #888
                &.active
                    color #78d300
                    &:before
                        position absolute
                        bottom 0
                        content ''
                        display block
                        width 100%
                        height 3px
                        background-color #78d300
</style>
