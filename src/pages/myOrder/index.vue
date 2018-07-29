<template>
    <div>
        <order v-for="i in 5" :key="i"></order>
    </div>
</template>

<script>
import order from '../../components/order'
export default {
    components: {
        order
    }
}
</script>

<style lang="stylus" scoped>

</style>
