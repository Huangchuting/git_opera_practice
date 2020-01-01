<template>
    <el-table
        v-if="tableData.length!== 0"
        class="my-table"
        :data="tableData"
        row-class-name="row-class"
        @cell-dblclick="dbEditCell"
    >
        <el-table-column type="index">
        </el-table-column>
        <template v-for="(item,index) in headers" :index="index">
            <el-table-column 
                :key="item.prop" 
                :prop="item.prop"
                :label="item.label"
                :column-key="item.type"
                :render-header="renderHeader"
            >
            <template slot-scope="scope">
                <!--编辑单元格 start-->
                <template v-if="item.edit">
                    <el-input 
                        v-if="scope.row[item.prop+'edit']" 
                        v-model="scope.row[item.prop]"
                        v-focus
                        @keyup.enter.native="saveEdit(scope.row, item.prop)"
                        @blur="saveEdit(scope.row, item.prop)">
                    </el-input>
                    <span v-else>{{scope.row[item.prop]}}</span>
                </template>
                <!--编辑单元格 end-->
                <template v-else>{{scope.row[item.prop]}}</template>
            </template>
            </el-table-column>
        </template>
    </el-table>
</template>
<script>
import API from '../api/api.js'
import RenderHeader from './renderHeader'
export default {
    name: 'myTable',
    props: {
        uuid: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            tableFields: [],
            tableData: [],
            filtersData: {},
            curEditCellText: '',
            isFirstGet: true
        }
    },
    mounted () {
        this.init()
    },
    watch: {
        uuid: function (val) {
            console.log(val)
            this.init()
        }
    },
    computed: {
        headers: function () {
            let temp = []
            console.log('3', this.tableFields[2].prop)
            this.tableFields.forEach(item => {
                temp.push(item)
            })
            return temp
        }
    },
    methods: {
        init () {
            let tempTableTields
            let tempTableData
            let editCells = []
            API.getTableData().then(res => {
                res.fields.forEach(item => {
                    if (item.edit && editCells.indexOf(item.prop) === -1) {
                        editCells.push(item.prop)
                    }
                })
                 for (let i = 0; i < res.data.length; i++) {
                    for (let j = 0; j < editCells.length; j++) {
                        let key = editCells[j] + 'edit'
                        res.data[i][key] = false
                    }
                }
                
                tempTableTields = res.fields
                tempTableData = res.data
                if (!this.isFirstGet) {
                    this.$nextTick(() => {
                        this.tableFields = tempTableTields
                        this.tableData = tempTableData
                    })
                }
                return tempTableTields
            }).then(tableFields => {
                if (this.isFirstGet) {
                    this.getFieldsData (tableFields).then(() => {
                        this.$nextTick(() => {
                            this.tableFields = tempTableTields
                            this.tableData = tempTableData
                            this.isFirstGet = false
                        })
                    })
                }
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
            let that = this
            return h(RenderHeader, {
                props: {
                    COLUMN: column,
                    MULTIPLE: (this.filtersData[column.property] && this.filtersData[column.property].multiple) || false,
                    DATA: (this.filtersData[column.property] && this.filtersData[column.property].data) || [],
                    TEXT: (this.filtersData[column.property] && this.filtersData[column.property].data) || ''
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
        },
        // 双击单元格编辑
        dbEditCell (row, column, cell, event) {
            row[column.property + 'edit'] = true
            // 保存当前单元格内容，防止取消修改时可以还原
            if (row[column.property + 'edit']) {
                this.curEditCellText = row[column.property]
            }
        },
        // 保存单元格的修改
        saveEdit (row, property) {
            console.log('dfdf')
            if (!row[property]) {
                row[property] = this.curEditCellText
            }
            row[property + 'edit'] = false
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


