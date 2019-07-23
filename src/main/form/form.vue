<template>
<div class="form">
    <ul>
        <li>
            <dl>
                <dt class="title"><span class="va-star">姓名：</span></dt>
                <dt class="text va">
                    <el-input type="text" v-model="name" name="name" v-validate="'required'"></el-input>
                    <i v-show="errors.has('name')" class="fa fa-warning"></i>
                    <span v-show="errors.has('name')" class="va-down va-danger">{{ errors.first('name') }}</span>
                </dt>
            </dl>
        </li>
        <li>
            <dl>
                <dt class="title"><span class="va-star">邮箱：</span></dt>
                <dt class="text va">
                    <el-input name="email" type="text" v-validate="'required|email'" v-model="email"></el-input>
                    <i v-show="errors.has('email')" class="fa fa-warning"></i>
                    <span v-show="errors.has('email')" class="va-down va-danger">{{ errors.first('email') }}</span>
                </dt>
            </dl>
        </li>
    </ul>
</div>
</template>
<script>
export default {
    data () {
        return {
            email: '',
            Password: '',
            name: ''
        }
    },
    created () {
    },
    computed: {
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
