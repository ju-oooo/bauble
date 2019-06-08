<template>
	<div>
		<Header :activeIndex="'/commodity'" :backgroundColor="'#fff'" :color="'#545C64'"></Header>
		<router-view></router-view>
	</div>
</template>


<script>
    import Header from '../../components/include/Header'
    export default {
        name: "Home",
        components: {Header},
      created() {
          this.$store.dispatch('classifyListAction')
      },


    }
</script>

<style scoped lang="scss">

</style>
