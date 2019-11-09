var strategies = {
    phone: (value, errorMsg) => {
        if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
            return errorMsg
        }
    },
    email: (value, errorMsg) => {
        if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
            return errorMsg
        }
        
    },
    isNotEmpty: (value, errorMsg) => {
        if (value.trim() === '') {
            return errorMsg
        }
    },
    maxLength: (value, length, errorMsg) => {
        if (value.trim().length > length) {
            return errorMsg
        }
    },
    minLength: (value, length, errorMsg) => {
        if (value.trim().length < length) {
            return errorMsg
        }
    }
}
export default strategies