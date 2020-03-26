<template>
    <div></div>
</template>
<script>
export default {
    data () {
        return {}
    },
    mounted () {
        this.asyncPrint('hello async', 1000).then(val => {
            this.log(val)
        })
    },
    methods: {
        timeout (ms) {
            return new Promise(resolve => {
                setTimeout(resolve, ms);
            })
        },
        async asyncPrint (value, ms) {
            await this.timeout(ms)
            this.log(value)
            return 'hct'
        },
        isThisAZipCode (candidate) {
            
        }
    }
}
</script>
<style lang="scss" scoped>

</style>