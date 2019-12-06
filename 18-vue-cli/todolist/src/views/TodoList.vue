<template>
    <div>
        <TodoForm></TodoForm>
        <TodoLists></TodoLists>
    </div>
</template>

<script>
    import TodoForm from'../components/TodoForm';
    import TodoLists from'../components/TodoLists';
    import {mapActions} from "vuex";
    export default{
        created(){
            // this.$store.dispatch('getList');//分发actions
            this.getList()
        },
        components:{
            TodoForm,
            TodoLists
        },
        methods:{
            ...mapActions(['getList'])
        }
    }
</script>