<template>
    <div>
        <TodoForm></TodoForm>
        <TodoLists></TodoLists>
    </div>
</template>
<script>
import TodoForm from '../components/TodoForm.vue'
import TodoLists from '../components/TodoLists.vue'
import {mapActions} from  'vuex'
export default {
    created(){
        //  通知action取数据方法1
        // this.$store.dispatch('getlist')
        // 通知action取数据方法2
        this.getlist()
    },
    components:{
        TodoLists,
        TodoForm
    },
    // 通知action取数据方法2
    methods:{
        ...mapActions(['getlist'])
    }
}
</script>