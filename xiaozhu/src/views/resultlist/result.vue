<template>
    <div class="result-container">
        <div class="result-top">
            <i class="iconfont icon-zuojiantou" @click="$router.go(-1)"></i>
            <h3>北京</h3>
            <i class="iconfont icon-caidan"></i>
        </div>
        <div class="result-head">
            <input type="text" name="" id="">
        </div>
        <Download class="download"></Download>
    </div>
</template>
<script>
import Download from '../../components/Download'
export default {
    components:{
        Download
    }
}
</script>
<style lang="scss" scoped>
    .result-container{
        position: absolute;
        height: 667px;
        width: 375px;
        overflow: hidden;
        .result-top{
            line-height: 50px;
            display: flex;
            i{
                margin:0 15px;
            }
            h3{
                flex: 1;
                font-size: 16px;
                color: #333;
                font-weight: 700;
                text-align: center;
            }
        }
        .download{
            position: fixed;
            bottom: 0;
            width: 100%
        }
    }
</style>