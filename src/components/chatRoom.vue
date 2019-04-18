<template>
    <div class="chat-wrap">
        <div class="chat-header">
            聊天窗口
            <span class="online-num">在线8人</span>
        </div>
        <div class="chat-body" ref="chatMain">
            <div class="chat-content-wrap" ref="chatGroup">
                <div class="chat-list" :class="[item.type ? 'self' : 'other']" v-for="(item, index) in chatList" :key="index">
                    <span class="user-pic"></span>
                    <div class="chat-content">
                        <p class="user-name">{{item.name}}</p>
                        <div class="content">{{item.content}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="chat-footer">
            <input type="text" v-model="content"><button @click="addChat">发送</button>
        </div>
    </div>
</template>
<script>
import API from '../api/api.js'
export default {
    data () {
        return {
            chatList: [],
            content: ''
        }
    },
    mounted () {
        this.initChatList()
    },
    methods: {
        initChatList () {
            API.getChatData().then(res => {
                this.chatList = res.data.chatlist
            })
        },
        addChat () {
            API.addChatData().then(res => {
                this.chatList.push(res.data.add)
                this.$nextTick(() => {
                    let containerHeight = this.$refs.chatMain.clientHeight
                    let actualHeight = this.$refs.chatGroup.clientHeight
                    if (actualHeight > containerHeight) {
                        let diff = actualHeight - containerHeight
                        this.$refs.chatMain.scrollTop = diff
                    }
                })
                
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .chat-wrap{
        display: flex;
        height: 100%;
        flex-direction: column;
        overflow: hidden;
        .chat-header{
            font-size: 20px;
            font-weight: bold;
            color: #3b50ce;
            .online-num{
                float:right;
                font-size: 14px;
                color: limegreen;
            }
        }
        .chat-body{
            flex:1;
            overflow: hidden;
            overflow-y: auto;
            border:1px solid #3b50ce;
            .chat-list{
                display: flex;
                padding: 10px;
                .user-pic{
                    width: 80px;
                    height: 80px;
                    border-radius: 3px;   
                }
                &.self .user-pic{
                    background: #3b50ce;
                }
                &.other .user-pic{
                    background: yellowgreen;
                }
                .chat-content{
                    flex: 1;
                    padding: 0 40px 5px 10px;
                    .user-name{
                        color: #999;
                        padding-bottom: 5px;
                    }
                    .content{
                        position: relative; 
                        display: inline-block;
                        padding: 5px;
                        border-radius: 3px; 
                        &:before{
                            position: absolute;
                            content: '';
                            left: -6px;
                            width: 9px;
                            height: 9px;
                            border:1px solid transparent;
                            transform:rotate(-45deg);
                        } 
                    }
                }
                &.self .content{
                    border:1px solid #3b50ce;
                    background: #b4bdf0;
                    &::before{
                        background: #b4bdf0;
                        border-left-color: #3b50ce;
                        border-top-color: #3b50ce;
                    }
                }
                &.other .content{
                    border:1px solid #999;
                    background: rgb(223, 222, 222);
                    &::before{
                        background: rgb(223, 222, 222);
                        border-left-color: #999;
                        border-top-color: #999;
                    }
                }
            }
        }
        .chat-footer{

        }
    }
</style>

