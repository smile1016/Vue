<template>
    <div>
        <Child></Child>
        <button @click="handleClick">添加</button>
        <button @click="handleClickAsync">add async</button>
    </div>
</template>
<script>
import Child from './Child' 
export default {
    components:{
        Child
    },
    methods:{
        handleClick(){
            this.$store.commit('updateCount',2)
        },
        handleClickAsync(){
            this.$store.dispatch('updateCountAsync',3)
        }
    }
}
</script>