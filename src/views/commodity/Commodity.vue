<template>
<div>
    <Header :activeIndex="activeIndex" :backgroundColor="'#fff'" :color="'#545C64'"></Header>
    <router-view></router-view>
</div>
</template>

<script>
import Header from '../../components/include/Header'
export default {
    name: "Home",
    components: {
        Header
    },
    data() {
        return {
            activeIndex: '/commodity',
        }
    },
    created() {
        let fullPath = this.$route.fullPath
        if (fullPath !== "/commodity/") {
            this.activeIndex = fullPath;
        }
        this.$store.dispatch('classifyListAction')
    },

}
</script>

<style scoped lang="scss">

</style>
