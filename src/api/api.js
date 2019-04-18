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
        console.log('pppp')
        return axios.post('/getTableData').then(res => {
            return res.data
        }).catch(error => {
            console.log(error)
        })
    }
}