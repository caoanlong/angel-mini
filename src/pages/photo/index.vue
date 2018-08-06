<template>
    <scroll-view scroll-y class="main-content">
        <image class="photo-img" :lazy-load="true" mode="widthFix" v-for="(item, index) in list" :key="index" :src="imgUrl + item" />
    </scroll-view>
</template>

<script>
import LessonPhoto from '../../api/LessonPhoto'
import { _imgUrl } from '../../utils'
export default {
    data() {
        return {
            icon: '',
            selectTab: {},
            list: []
        }
    },
    computed: {
        imgUrl: () => _imgUrl
    },
    destroyed() {
        this.list = []
    },
    methods: {
        getInfo(lessonPhotoId) {
            LessonPhoto.findById({ lessonPhotoId }).then(res => {
                this.list = res.photos.split(',')
            })
        }
    },
    onLoad(option) {
        this.getInfo(option.id)
    }
}
</script>

<style lang="stylus" scoped>
.main-content
    padding 5px
    height 100%
    .photo-img
        display block
        width 100%
        margin-bottom 10px
        background-color #ddd
</style>
