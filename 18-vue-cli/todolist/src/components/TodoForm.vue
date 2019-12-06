<template>
    <div>
        <input type="text" v-model='name'>
        <button>增加</button>
    </div>
</template>
<script>
export default {
    date(){
        return{
        name:''
        }
    },
    methods:{
        add(){
            var params={
                id:Math.ceil(Math.random()*1000),
                name:this.name,
                isedit:false
            }
            this.$store.commit('ADD',params)
        }
    }
}
</script>script>