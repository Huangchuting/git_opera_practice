import axios from 'axios'

export default {
    getTabData () {
        return axios.post('/getTabData').then(res => {
            return res.data
        }).catch(error => {
            console.log(error)
        })
    },
    getTabData2 () {
        return axios.post('/getTabData2').then(res => {
            return res.data
        }).catch(error => {
            console.log(error)
        })
    },
    getChatData () {
        return axios.post('/getChatData').then(res => {
            return res.data
        }).catch(error => {
            console.log(error)
        })
    },
    addChatData () {
        return axios.post('/getChatAdd').then(res => {
            return res.data
        }).catch(error => {
            console.log(error)
        })
    },
    getTableData () {
        let rand = Math.floor(Math.random()*(100 - 1) + 1)
        let num = (rand % 2) === 0 ? 1 : 2
        let url = `getTableData${num}`
        return axios.post(`/${url}`).then(res => {
            return res.data
        }).catch(error => {
            console.log(error)
        })
    }
    ,
    getFieldFilterData () {
        return axios.post('/filterData').then(res => {
            return res.data
        }).catch(error => {
            console.log(error)
        })
    }
}