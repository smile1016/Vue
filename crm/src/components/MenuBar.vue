<template>
  <el-menu default-active="1-1" :default-openeds="['1','2']" class="el-menu-vertical-demo">
    <el-submenu v-for="(item,index) in getNav(this.$router.options.routes)" :key="index" :index="item.meta.id">
      <template slot="title">
        <i :class="item.meta.iconclass"></i>
        <span>{{item.meta.name}}</span>
      </template>
      <el-menu-item @click="handleOpen(sub)" v-for="sub in getNav(item.children)" :key="sub.meta.id" :index="sub.meta.id">
        {{sub.meta.name}}
      </el-menu-item>
    </el-submenu>

  </el-menu>

</template>

<script>
export default {
  mounted() {
    console.log(this.$router)
  },
  computed: {},
  methods: {
    getNav(list) {
      return list.filter(item => {
        return item.meta && item.meta.name
      })
    },
    handleOpen(obj) {
      console.log(this.$route)
      this.$router.push(obj.path)
    }
  }
}
</script>

