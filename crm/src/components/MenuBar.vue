<template>
  <el-menu default-active="1-1" :default-openeds = "['1','2']" class="el-menu-vertical-demo" >
    <el-submenu v-if="item.meta && item.meta.name" v-for="(item,index) in this.$router.options.routes" :key="index"        index="item.meta.id">
      <template slot="title">
        <i :class="item.meta.iconclass"></i>
        <span>{{item.meta.name}}</span>
      </template>
      <el-menu-item @click='handleOpen(sub)' v-for="sub in item.children" :key="sub.meta.id" index="sub.meta.id">{{sub.meta.name}}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  mounted() {
    console.log(this.$router);
  },
  computed: {
      getNav(){
          var result = [];
          this.$router.options.routes
      }
  },
  methods:{
      handleOpen(obj){
          console.log(obj)
          this.$router.push(obj.path)
      }
  }
};
</script>