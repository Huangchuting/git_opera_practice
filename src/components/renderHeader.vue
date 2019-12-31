<template>
    <div>
        {{COLUMN.label}}
        <template v-if="COLUMN.columnKey === 'input'">
            <el-popover trigger="hover" popoer-class="filter-popover">
                <el-input v-model="text" clearable @keyup.enter.native="inputEnter"></el-input>
                <span class="el-icon-arrow-down" slot="reference"></span>
            </el-popover>
        </template>
        <template v-if="COLUMN.columnKey === 'select'">
            <el-popover trigger="hover" popoer-class="filter-popover">
                <el-checkbox-group v-if="MULTIPLE" v-model="check" @change="checkChange">
                    <el-checkbox v-for="item in DATA" :label="item.value" :key="item.value" class="block">{{item.text}}</el-checkbox>
                </el-checkbox-group>
                <el-radio-group v-else v-model="radio"  @change="checkChange">
                    <el-radio v-for="item in DATA" :label="item.value" :key="item.value" class="block">{{item.text}}</el-radio>
                </el-radio-group>
                <span class="el-icon-arrow-down" slot="reference"></span>
            </el-popover>
        </template>
    </div>
</template>
<script>
export default {
    props: ['COLUMN', 'MULTIPLE', 'DATA', 'TEXT'],
    data () {
        return {
            text: '', // 输入框
            check: [], // 多选框
            radio: '' // 单选框
        }
    },
    watch: {
        TEXT (val) {
            this.text = this.radio = val
            this.check = val.split(',')
        }
    },
    methods: {
        inputEnter () {
            this.$emit('inputFilter', this.COLUMN.property, this.text)
        },
        checkChange (value) {
            if (this.MULTIPLE) {
                console.log(value)
                this.$emit('checkboxFilter', this.COLUMN.property, value)
            } else {
                this.$emit('radioFilter', this.COLUMN.property, value)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.block{display: block; margin-left: 0;}
</style>