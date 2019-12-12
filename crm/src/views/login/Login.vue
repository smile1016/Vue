<template>
  <div class="login-wrapper">
    <el-form :model="user" :rules="userRules" ref="userFrom" class="login-form">
      <h1>系统登录</h1>
      <el-form-item prop="username">
        <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input v-model="user.password" placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-checkbox label="" v-model="user.checked"></el-checkbox> 记住密码
      </el-form-item>

      <el-form-item label="">
        <el-button type="primary" :loading="isloading" @click="handleSubmit">登录</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isloading: false,
      user: {
        username: "",
        password: "",
        checked: false
      },
      userRules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.userFrom.validate(async valid => {
        console.log(valid)
        if (valid) {
          this.isloading = true
          let result = await this.$http.post("/api/user/login", {
            username: this.user.username,
            password: this.user.password
          })
          this.isloading = false
          if (result.data.code === 0) {
            this.$message({
              message: result.data.message,
              type: "warning"
            })
          } else if (result.data.code === 1) {
            console.log("checked:", this.user.checked)
            sessionStorage.setItem("username", this.user.username)
            if (this.user.checked) {
              localStorage.setItem("checked", this.user.checked)
              localStorage.setItem("username", this.user.username)
              localStorage.setItem("password", this.user.password)
            } else {
              localStorage.removeItem("checked")
              localStorage.removeItem("username")
              localStorage.removeItem("password")
            }
            this.$router.push("/home")
          }
        }
      })
    }
  },

  mounted() {
    let checked = localStorage.getItem("checked")
    if (checked) {
      this.user.checked = true
      this.user.username = localStorage.getItem("username")
      this.user.password = localStorage.getItem("password")
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    box-sizing: border-box;
    padding: 30px;
    width: 500px;
    height: 400px;
    box-shadow: 0px 0px 15px #858282;
    border-radius: 7px;
    h1 {
      text-align: center;
      line-height: 50px;
      font-size: 26px;
      margin-bottom: 30px;
    }
    button {
      width: 100%;
    }
  }
}
</style>


