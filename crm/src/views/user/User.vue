<template>
  <div>
    <UserAdd v-if="showadd" @close="handleAddClose"></UserAdd>
    <UserEdit v-if="showEdit" :item="currentUser" @close="handleEditClose" />
    <el-row class="toolbar">
      <el-col class="textInput">
        <el-input v-model="name" placeholder="姓名"></el-input>
      </el-col>
      <el-col class="btnBox">
        <el-button type="primary" @click="handleQuery">查询</el-button>
        <el-button type="primary" @click="handleAdd">新增</el-button>
      </el-col>
    </el-row>

    <el-table :data="tableData" :loading="true" :height="getHeight()" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}" @selection-change="handleSelect">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="name" label="姓名" sortable width="180">
      </el-table-column>
      <el-table-column label="性别" sortable width="90">
        <template slot-scope="scope">{{ scope.row.sex|formatsex }}</template>
      </el-table-column>
      <el-table-column prop="age" label="年龄" sortable width="90">
      </el-table-column>
      <el-table-column prop="birthday" label="生日" sortable width="150">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="danger" @click="handleDel(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row class="footer">
      <el-col :span="4">
        <el-button type="danger" @click="handleBatchDel">批量删除</el-button>
      </el-col>
      <el-col :span="20">
        <el-pagination background :page-size="pagesize" :page-count="pagenos" layout="prev, pager, next" @current-change="currentChange" :total="total">
        </el-pagination>

      </el-col>
    </el-row>

  </div>
</template>

<script>
import UserAdd from "./UserAdd"
import UserEdit from "./UserEdit"
export default {
  data() {
    return {
      //显示数据的添加
      showadd: false,
      //显示数据编辑
      showEdit: false,
      //选中数据的列表
      selectedList: [],
      pagesize: 15,
      pageno: 1,
      name: "",
      total: 0,
      tableData: [],
      currentUser: {}
    }
  },
  components: {
    UserAdd,
    UserEdit
  },
  computed: {
    pagenos() {
      return Math.floor(this.total / this.pagesize)
    }
  },
  filters: {
    formatsex(val) {
      return val == "0" ? "男" : "女"
    }
  },
  created() {
    this.querylist()
  },
  methods: {
    getHeight() {
      return window.innerHeight - 215
    },
    async querylist() {
      let params = {
        pageno: this.pageno,
        pagesize: this.pagesize,
        name: this.name
      }
      let rs = await this.$http.post("/api/user/list", params)
      this.tableData = rs.data.list
      this.total = rs.data.total
    },
    handleQuery() {
      this.querylist()
    },
    handleDel(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let rs = await this.$http.post("/api/user/del", { id })
          console.log(rs)
          if (rs.data.code === 1) {
            this.$message({
              type: "success",
              message: rs.data.message
            })
            this.querylist()
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
    handleEdit(user) {
      this.showEdit = true
      this.currentUser = user
    },
    currentChange(size) {
      this.pageno = size
      this.querylist()
    },
    handleAdd() {
      this.showadd = true
    },
    handleAddClose(message) {
      console.log("close dialog")
      if ("success" === message) {
        this.$message({
          type: "success",
          message: "添加数据成功"
        })
        this.querylist()
      }
      this.showadd = false
    },
    handleEditClose(message) {
      if ("success" === message) {
        this.$message({
          type: "success",
          message: "添加更新成功"
        })
        this.querylist()
      }
      this.showEdit = false
    },
    async handleBatchDel() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          var rs = await this.$http.post(
            "/api/user/batchdel",
            this.selectedList
          )
          if (rs.data.code === 1) {
            this.$message({
              type: "success",
              message: rs.data.message
            })
            this.querylist()
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
    handleSelect(val) {
      console.log(val)
      this.selectedList = []
      val.forEach(item => {
        this.selectedList.push(item.id)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.toolbar {
  line-height: 60px;
  .textInput {
    width: 180px;
  }
  .btnBox {
    width: 180px;
  }
}
.footer {
  background: white;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: left;
  padding-left: 15px;
}
.el-pagination {
  text-align: right;
}
</style>


