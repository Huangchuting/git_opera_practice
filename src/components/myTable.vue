<template>
    <el-table
        class="my-table"
        :data="tableData"
        row-class-name="row-class"
      >
      <template v-for="(item,index) in tableFields" :index="index">
          <el-table-column 
            :key="item.prop" 
            :prop="item.prop"
            :label="item.label">
        </el-table-column>
      </template>
      <el-table-column class-name="cell-class">
    </el-table-column>
    </el-table>
</template>
<script>
import API from '../api/api.js'
export default {
    name: 'myTable',
    data () {
        return {
            tableFields: [],
            tableData: []
        }
    },
    mounted () {
        this.init()
    },
    methods: {
        init () {
            this.tableFields.length = 0
            this.tableData.length = 0
            API.getTableData().then(res => {
                console.log(res)
                if (res.data && res.data.length !== 0) {
                    res.data.forEach(item => {
                        this.tableData.push(item)
                    })
                    res.fields.forEach(item => {
                        this.tableFields.push(item)
                    })
                }
            }).catch(error => {
                console.log(error)
            })
        },
        tableCellClassName({row, column, rowIndex, columnIndex}) {
            console.log(column)
            return 'cell-class';
        }
    }
}
</script>
<style lang="scss" scoped>
.my-table{
    display: flex;
    flex-direction:column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    /deep/ .el-table__header-wrapper{
        height: 40px;
    }
    /deep/ .el-table__body-wrapper{
        flex: 1;
        overflow: auto;
        .row-class{
            position: relative;
        }
    }
}
</style>


