<template>
    <div class="main-content">
        <image class="photo-img" :lazy-load="true" mode="widthFix" v-for="(item, index) in list" :key="index" :src="imgUrl + item" />
    </div>
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
    .photo-img
        display block
        width 100%
        margin-bottom 10px
        background-color #ddd
</style>
