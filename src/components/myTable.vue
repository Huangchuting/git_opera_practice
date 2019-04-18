<template>

        <el-table
        class="my-table"
      :data="tableData"
      row-class-name="row-class"
      >
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column class-name="cell-class">
      <template slot-scope="scope">
        <el-button
          size="mini"
          >编辑</el-button>
      </template>
    </el-table-column>
    </el-table>
</template>
<script>
import API from '../api/api.js'
export default {
    data () {
        return {
            tableData: []
        }
    },
    mounted () {
        this.init()
    },
    methods: {
        init () {
            this.tableData.length = 0
            API.getTableData().then(res => {
                if (res.data && res.data.length !== 0) {
                    res.data.forEach(item => {
                        this.tableData.push(item)
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
            .cell-class{
                position: absolute;
                right: 0;
                top:0;
            }
        }
    }
}
</style>


