const Mock = require('mockjs')

const Random = Mock.Random

let sliderData = {
    'data': {
        'tabData|8-20': [
            {
                'id': '@guid',
                'name': '@ctitle()'
            }
        ]
    }
}
Mock.mock(/(\/getTabData)/, 'post', sliderData)

let sliderData2 = {
    'data': {
        'tabData|3': [
            {
                'id': '@guid',
                'name': '@ctitle()'
            }
        ]
    }
}
Mock.mock(/(\/getTabData2)/, 'post', sliderData2)

let chatData = {
    'data': {
        'chatlist|8-20': [
            {
                'id': '@guid',
                'content':'@csentence(100,200)',
                'name': '@cname',
                'type|1': true
            }
        ]
    }
}
Mock.mock(/(\/getChatData)/, 'post', chatData)

let chatDataAdd = {
    'data': {
        'add': 
        {
            'id': '@guid',
            'content':'@csentence(100,200)',
            'name': '@cname',
            'type|1': true
        }
        
    }
}
Mock.mock(/(\/getChatAdd)/, 'post', chatDataAdd)

let tableData = {
    'fields': [
        {
            label: '日期',
            prop: 'date'
        },
        {
            label: '姓名',
            prop: 'name'
        },
        {
            label: '地址',
            prop: 'address'
        }
    ],
    'data|5-10': [
        {
            date: '@datetime("yyyy-MM-dd HH:mm:ss")',
            name: '@cname',
            address: '@county(true)'
        }
    ]
}
Mock.mock(/(\/getTableData)/, 'post', tableData)