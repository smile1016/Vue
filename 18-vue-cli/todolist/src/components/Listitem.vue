<template>
  <tr>
    <td>{{item.id}}</td>
    <td>
      <span v-if="!item.isedit">{{item.name}}</span>
      <input :value="item.name" ref="name" type="text" v-else />
    </td>
    <td>
      <div v-if="item.isedit">
        <button @click="handleSubmit(item.id)">提交</button>
      </div>
      <div v-else>
        <button @click="handleEdit(item.id)">编辑</button>
        <button @click="handleDel(item.id)">删除</button>
      </div>
    </td>
  </tr>
</template>
<script>
export default {
  props: ["item"],
  methods: {
    handleDel(id) {
      this.$store.commit("DEL", id);
    },
    handleEdit(id) {
      this.$store.commit("UPDATE_STATUS", { id, status: true });
    },
    handleSubmit(id) {
      this.$store.commit("UPDATE", { id,name: this.$refs.name.value});
      this.$store.commit("UPDATE_STATUS", { id, status: false });
    }
  }
};
</script>