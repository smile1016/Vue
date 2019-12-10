<template>
  <el-container class="home-container">
    <el-header>
      <el-row>
        <el-col :span="4" :offset="18">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              欢迎，{{username}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="quit" icon="el-icon-plus">退出</el-dropdown-item>
              <el-dropdown-item command="set" icon="el-icon-circle-plus">用户设置</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <MenuBar></MenuBar>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import MenuBar from '../components/MenuBar'
export default {
  data() {
    return {
      username: ""
    };
  },
  name: "home",
  components: {
    MenuBar
  },
  
  mounted() {
    this.username = sessionStorage.getItem("username");
  },
  methods: {
    async handleCommand(command) {
      if (command === "quit") {        
        let result = await this.$http.get("/api/user/logout");
        if (result.data.code === 1) {
          this.$message({
            message: result.data.message,
            type: "success"
          });
          setTimeout(() => {
            sessionStorage.removeItem("username");
          this.$router.push("/login");
          }, 1000);
          
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.el-menu{
  text-align: left;
}
.home-container {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
