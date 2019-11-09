<template>
    <div id="app" class="vertical full">
        <Header></Header>
        <div class="flex p10">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>

import Header from './main/header'
export default {
    data () {
        return {
        }
    },
    components: {
        Header
    }
}
</script>
<style lang="scss" scoped>

</style>

</style>


