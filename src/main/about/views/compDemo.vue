<template>
    <div>
        <ul class="todo">
            <todo-item v-for="item in list" :key="item.title" :title="item.title" :del="item.del"></todo-item>
        </ul>
    </div>
</template>
<script>
import api from '../../../api/api.js'
export default {
    data () {
        return {
            list: []
        }
    },
    mounted () {
        this.init()
    },
    methods: {
        init () {
           api.getTodoItemData().then(res => {
               this.list = res.data
           }).catch(error => {
               console.log(error)
           })
        }
    }
}
</script>
<style lang="scss" scoped>

</style>