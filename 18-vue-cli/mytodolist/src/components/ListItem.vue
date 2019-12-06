<template>
  <tr>
    <td>{{item.id}}</td>
    <td>
      <span v-if="!item.isedit">{{item.name}}</span>
      <input type="text" v-else />
    </td>
    <td>
      <button @click="handleEdit(item.id)">编辑</button>
      <button @click="handleDel(item.id)">删除</button>
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
    }
  }
};
</script>