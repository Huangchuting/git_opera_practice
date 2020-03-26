<template>
<div>
    <el-button @click="refresh">刷新</el-button>
    <my-table :uuid="uuid">
    </my-table>
</div>
    
</template>
<script>
import MyTable from '../../../components/myTable'
import * as Util from '../../../util/util'
export default {
    data () {
        return {
            uuid: ''
        }
    },
    components: {
        MyTable
    },
    methods: {
        refresh () {
            this.uuid = Util.uuid()
            console.log('uuid ' + this.uuid)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

