<template>
    <div>
        <table>
            <tr>
                <td>ID</td>
                <td>名称</td>
                <td>操作</td>
            </tr>
            <ListItem v-for="item in list" :key='item.id'></ListItem>

        </table>
    </div>
</template>
<script>
import ListItem from "./Listitem.vue";
import {mapState} from 'vuex'
export default {
    components:{
        ListItem
    },
    //第一种方式
    //computed:{
    //    ...mapState(['dataList'])
    //}
     computed:mapState({list:state=>state.dataList})
}
</script>
<style lang="scss" scoped>
    table{
        border-collapse: collapse;
        width: 500px;
        border:1px solid #eee;
        tr td{
            padding: 3px;
            border:1px solid #eee;
        }
    }
</style>