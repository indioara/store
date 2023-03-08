<template>
  <p @click="aaa">asdasdasdsad</p>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
    product() {
      return this.list.filter(item => item.id == this.$route.params.id)
    },
    ...mapState({
      list: state => state.catalog.list
    })
  },
  methods: {
    aaa() {
      console.log(this.product)
    }
  }
}
</script>

<style>

</style>