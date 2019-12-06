<template>
    <div>
        <table>
            <tr>
                <td>ID</td>
                <td>名称</td>
                <td>操作</td>
            </tr>
            <ListItem  v-for="item in list" :key="item.id" :item='item'></ListItem>
        </table>
    </div>
</template>

<script>
import ListItem from './ListItem.vue'
import {mapState} from 'vuex'
export default {
    components:{
        ListItem
    },
    // computed:{
    //     //取storel里是数据
    //     ...mapState(['datalist'])
    // }
    computed:mapState({
        list:(state)=>state.datalist
    })
}
</script>

<style lang="scss" scoped>
// scoped 样式只对当前组件生效
    table{
        border-collapse: collapse;
        width: 500px;
        tr td{
            border: 1px solid #eeeeee;
        }
    }
</style>