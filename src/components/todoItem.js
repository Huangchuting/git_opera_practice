
import Vue from 'vue'

Vue.component('todo-item', {
    props: {
        title: String,
        del: {
            type: Boolean,
            default: false
        }
    },
    template: `
        <li>
            <span>{{title}}</span>
            <span v-show="del">删除</span>
        </li>
    `,
    data () {
        return {}
    },
    methods: {

    }
})