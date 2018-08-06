<template>
    <div class="main-content">
        <div class="docter wx-1px-b" v-for="teacher in teachers" :key="teacher.personId">
            <div class="left">
                <image class="avatar" :src="teacher.avatar" v-if="teacher.avatar"/>
                <image class="avatar" src="../../static/icons/defaultAvatar.png" v-else/>
            </div>
            <div class="right">
                <div class="name">{{teacher.name}}</div>
                <div class="info">{{teacher.remark}}</div>
            </div>
            <div class="sel" @click="select(teacher)">
                <radio class="radio" :value="teacher.personId" :checked="selected.personId == teacher.personId"/>
            </div>
        </div>
    </div> 
</template>

<script>
import { resizeImg } from '../../utils'
import Person from '../../api/Person'
export default {
    data() {
        return {
            teachers: [],
            selected: {}
        }
    },
    created() {
        this.getList()
    },
    methods: {
        select(teacher) {
            this.selected = teacher
            wx.setStorageSync('personId', teacher.personId)
            wx.setStorageSync('personName', teacher.name)
            wx.navigateBack({ delta: 1 })
        },
        getList() {
            Person.suggest({ type: 'teacher'}).then(res => {
                const list = res.data.data.map(item => {
                    return {
                        personId: item.personId,
                        avatar: resizeImg(item.avatar, '100x100'),
                        name: item.name,
                        remark: item.remark
                    }
                })
                this.teachers = list
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.docter
    display flex
    width 100%
    height 70px
    margin-bottom 10px
    background-color #fff
    .left
        flex 0 0 70px
        .avatar
            width 50px
            height 50px
            border-radius 25px
            margin 10px 0 0 10px
    .right
        flex 1
        padding 10px 0
        position relative
        .name
            height 28px
            line-height 28px
            font-size 14px
            color #333
        .info
            height 22px
            line-height 22px
            color #999
            font-size 12px
    .sel
        flex 0 0 40px
        .radio
            margin-top 20px
</style>
