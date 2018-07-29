<template>
    <div class="loading">{{statusText}}</div>
</template>
<script>
export default {
    props: {
        statusText: {
            type: String,
            default: '加载中...'
        }
    }
}
</script>
<style lang="stylus" scoped>
.loading
    width 100%
    height 50px
    line-height 50px
    font-size 14px
    color #999999
    text-align center
</style>
