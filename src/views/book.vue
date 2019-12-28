<template>
    <div class="bookMain">
        <div class="top">
            <div class="topOne">
                <span style="font-size:30px;margin-right:100px">12月15号</span>
                <div style="width:10%;font-size:20px;text-align:center">
                    <span>国泰航班</span>
                    <span style="font-size:18px">AK91</span>
                </div>
                <div style="text-align:center;margin-left:170px">
                    <div style="width:400px;font-size:25px;display:flex;align-items:center;justify-content:space-around;">
                        <div>
                            <span>14:40</span>
                            <br>
                            <span style="font-size:20px">流亭</span>
                        </div>
                        <img src="../assets/rightArrow.svg" alt="" style="height:80px;width:100px">
                        <div>
                            <span>16:45</span>
                            <br>
                            <span style="font-size:20px">香港</span>
                        </div>
                    </div>
                    <span style="font-size:20px">3小时45分钟</span>
                </div>
            </div>
            <div class="topTwo">
                <span>经济舱</span>
                <span style="color:#f60">￥2877</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
  .bookMain{
    height:96%;
    width:100%;
    padding: 10px 300px;
    box-sizing: border-box;
    .top{
        height: 250px;
        width: 100%;
        box-sizing: border-box;
        border: 1px solid rgb(209, 208, 208);
        padding: 10px;
        .topOne{
            height:60%;
            width: 100%;
            display: flex;
            align-items: center;
        }
        .topTwo{
            height:40%;
            width: 100%;
            font-size: 25px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span{
                margin: 0 40px;
            }
        }
    }
  }
</style>
