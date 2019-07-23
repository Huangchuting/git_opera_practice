<template>
    <div>
        <el-button type="text" @click="dialogVisible=true">点击打击对话框</el-button>
        <el-dialog title="hello" :visible.sync="dialogVisible" v-dialogDrag>
            啦啦啦
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button @click="dialogVisible = false">确定</el-button>
            </span>

        </el-dialog>
    </div>
</template>
<script>
export default {
    data () {
        return {
            dialogVisible: false
        }
    }
}
</script>
