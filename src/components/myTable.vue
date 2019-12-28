<template>
    <el-table
        class="my-table"
        :data="tableData"
        row-class-name="row-class"
    >
        <el-table-column type="index">
        </el-table-column>
        <template v-for="(item,index) in tableFields" :index="index">
            <el-table-column 
                :key="item.prop" 
                :prop="item.prop"
                :label="item.label"
                :column-key="item.type"
                :render-header="renderHeader"
            >
            </el-table-column>
        </template>
    </el-table>
</template>
<script>
import API from '../api/api.js'
import RenderHeader from './renderHeader'
export default {
    name: 'myTable',
    data () {
        return {
            tableFields: [],
            tableData: [],
            filtersData: {}
        }
    },
    mounted () {
        this.init()
    },
    methods: {
        init () {
            let tempTableTields
            let tempTableData
            API.getTableData().then(res => {
                tempTableTields = res.fields
                tempTableData = res.data
                return tempTableTields
            }).then(tableFields => {
                this.getFieldsData (tableFields).then(() => {
                    this.tableFields = tempTableTields
                    this.tableData = tempTableData
                    
                })
            }).catch(error => {
                console.log(error)
            })
        },
        async getFieldsData (tableFields) {
            for (let i = 0; i < tableFields.length; i++) {
                let key = tableFields[i].prop
                await API.getFieldFilterData().then(res => {
                    this.filtersData[key] = {
                        multiple: res.multiple,
                        data: res.data
                    }
                })
            }
        },
        tableCellClassName ({row, column, rowIndex, columnIndex}) {
            console.log(column)
            return 'cell-class';
        },
        renderHeader (h, { column, $index }) {
            console.log(column)
            console.log($index)
            let that = this
            return h(RenderHeader, {
                props: {
                    COLUMN: column,
                    MULTIPLE: (this.filtersData[column.property] && this.filtersData[column.property].multiple) || false,
                    DATA: (this.filtersData[column.property] && this.filtersData[column.property].data) || []
                },
                on: {
                    'inputFilter': (property, value) => that.handleInput(property, value),
                    'checkboxFilter': (property, value) => that.handleCheckbox(property, value),
                    'radioFilter': (property, value) => that.handleRadio(property, value)
                }
            })
        },
        handleInput (property, value) {
            console.log('input')
            this.init()
        },
        handleCheckbox (property, value) {
            console.log('checkbox')
            this.init()
        },
        handleRadio (property, value) {
            console.log('radio')
            this.init()
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


