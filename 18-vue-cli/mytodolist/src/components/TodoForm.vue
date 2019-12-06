<template>
    <div>
        <input type="text" v-model="name">
        <button @click='add'>增加</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name:''
        }
    },
    methods:{
        add(){
            var params={
                id:Math.ceil(Math.random()*10000),
                name:this.name,
                isedit:false
            }
            // 调用mutation
            this.$store.commit('ADD',params)
        }
    }
}
</script>