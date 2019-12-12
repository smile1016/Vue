<template>
  <div>
    <Child/>
    <button @click="handleClick">add</button>
    <button @click="handleClickAsync">async add </button>

  </div>
</template>
<script>
import Child from "./Child"
export default {
  components: {
    Child
  },
  methods: {
    handleClick() {
      this.$store.commit("updateCount", 2)
    },
    handleClickAsync() {
      this.$store.dispatch("updateCountAsycn", 3)
    }
  }
}
</script>

