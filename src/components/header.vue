<template>
    <div class="main">
        <div class="iconDiv">
            <img src="@/assets/airplan.svg"/>
            <div style="width:10px;"></div>
            <span>世界这么大，我想去看看</span>
        </div>
        <div>
            <span class="pointer">我的订单</span>
            <div style="width:10px;"></div>
            <span style="color:black">/</span>
            <div style="width:10px;"></div>
            <span class="pointer">您好，请登录</span>
            <div style="width:10px;"></div>
            <span style="color:black">/</span>
            <div style="width:10px;"></div>
            <span class="pointer">注册</span>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="scss" scoped>
    .main{
        width: 100%;
        box-sizing: border-box;
        padding: 0 100px;
        background-color: #F4F4F4;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .iconDiv{
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgb(168, 164, 164);
            img{
                height: 70%
            }
        }
        .iconDiv + div{
            display: flex;
            align-items: center;
            color: rgb(36, 139, 235);
        }
    }
    .main > span{
        color:rgb(135, 144, 153);
    }
    .pointer{
        cursor:pointer;
    }
</style>
