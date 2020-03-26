<template>
<div class="form">
    <ul>
        <li>
            <dl>
                <dt class="title"><span class="va-star">姓名：</span></dt>
                <dt class="text">
                    <el-input type="text" class="v-check" v-model="name" v-verify="[{strategy: 'isNotEmpty', msg: '姓名不能为空'}]"></el-input>
                </dt>
            </dl>
        </li>
        <li>
            <dl>
                <dt class="title"><span class="va-star">邮箱：</span></dt>
                <dt class="text">
                    <el-input type="text" class="v-check" v-verify="[{strategy: 'email', msg: '邮箱格式：11111111@xx.com'}]" v-model="email"></el-input>
                </dt>
            </dl>
        </li>
        <li>
            <dl>
                <dt class="title"><span class="va-star">电话：</span></dt>
                <dt class="text">
                    <el-input type="text" class="v-check" v-verify="[{strategy: 'phone', msg: '手机号码不正确'}]" v-model="phone"></el-input>
                </dt>
            </dl>
        </li>
        <li>
            <dl>
                <dt class="title"><span class="va-star">简介：</span></dt>
                <dt class="text">
                    <el-input type="text" class="v-check" v-verify="[{strategy: 'maxLength:10', msg: '长度不能超过10个'},{strategy: 'minLength:2', msg: '长度不能小于2个'}]" v-model="desc"></el-input>
                </dt>
            </dl>
        </li>
        <li>
            <dl>
                <dt class="title"></dt>
                <dt class="text">
                    <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-upload="beforeUpload"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </dt>
            </dl>
        </li>
        <li></li>
        <li>
            <dl>
                <dt class="title"></dt>
                <dt class="text">
                    <el-button>提交</el-button>
                </dt>
            </dl>
        </li>
    </ul>
</div>
</template>
<script>
import api from '../../api/api.js';
export default {
    data () {
        return {
            email: '',
            Password: '',
            name: '',
            phone: '',
            desc: '',
            fileList: []
        }
    },
    created () {
    },
    computed: {
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        async beforeUpload(file, fileList) {
            let isUpload
            isUpload = await api.fileIsExits().then(res => {
                return res.data
            }).then(flag => {
                if (flag) {
                    return this.$confirm('此文件已存在, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    })
                } else {
                    return new Promise((resolve, reject) => {
                        resolve()
                    })
                }
            }).catch(() => {
                return new Promise((resolve, reject) => {
                        reject()
                })
            })
            console.log('isUpload', isUpload)
            return isUpload
        }
    }
}
</script>
<style lang="scss" scoped>
    .form{
        ul{
            font-size: 0;
            padding: 30px;
            li{
                display: inline-block;
                width: 50%;
                padding-bottom: 20px;
                dt{
                    display: inline-block;
                    &.title{
                        width: 30%;
                        text-align:right;
                        font-size: 14px;
                    }
                    &.text{
                        width: 70%;
                    }
                }
            }
        }
    }
</style>
