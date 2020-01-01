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

let tableData1 = {
    'fields': [
        {
            label: '日期',
            prop: 'date'
        },
        {
            label: '姓名',
            prop: 'name',
            type: 'select',
            edit: true
        },
        {
            label: '性别',
            prop: 'sex',
            type: 'select'
        },
        {
            label: '年龄',
            prop: 'age',
            type: 'input'
        },
        {
            label: '地址',
            prop: 'address',
            type: 'input'
        }
    ],
    'data|5-10': [
        {
            id: Mock.Random.id(),
            date: '@datetime("yyyy-MM-dd HH:mm:ss")',
            name: '@cname',
            'sex|1': ['男', '女'],
            age: Random.natural(1, 100),
            address: '@county(true)'
        }
    ]
}
let tableData2 = {
    'fields': [
        {
            label: '日期',
            prop: 'date'
        },
        {
            label: '姓名',
            prop: 'name',
            type: 'select',
            edit: true
        },
        {
            label: '年龄',
            prop: 'age',
            type: 'input'
        },
        {
            label: '性别',
            prop: 'sex',
            type: 'select'
        },
        {
            label: '地址',
            prop: 'address',
            type: 'input'
        }
    ],
    'data|5-10': [
        {
            id: Mock.Random.id(),
            date: '@datetime("yyyy-MM-dd HH:mm:ss")',
            name: '@cname',
            'sex|1': ['男', '女'],
            age: Random.natural(1, 100),
            address: '@county(true)'
        }
    ]
}
Mock.mock(/(\/getTableData1)/, 'post', tableData1)
Mock.mock(/(\/getTableData2)/, 'post', tableData2)

let filterData = {
    'multiple|1': true,
    'data|3-6': [
        {
            text: '@cname',
            value: '@name'
        }
    ],
    value: ''
}
Mock.mock(/(\/filterData)/, 'post', filterData)