<template>
    <div class="orderMain">
        <div class="everyOne">
            <div class="top">
                <span style="margin-left:10px">订单号：</span>
                <span style="margin-right:20px">111123123</span>
                <span>预定日期：</span>
                <span>2019-12-18</span>
            </div>
            <div class="bottom">
                <div class="left">
                    <div style="font-size:20px;font-weight: bold">
                        <span>北京</span>
                        <span>-</span>
                        <span>香港</span>
                    </div>
                    <div>
                        <span>出发日期：</span>
                        <span style="margin-right:10px">2019-12-30</span>
                        <span style="margin-right:10px">12:17</span>
                        <span style="margin-right:10px">至</span>
                        <span style="margin-right:10px">15:34</span>
                        <span>AK91</span>
                    </div>
                    <div>
                        <span>出行人：</span>
                        <span>孟庆佳</span>
                    </div>
                </div>
                <div class="right">
                    <div>
                        <span style="color:#f60">￥1900</span>
                        |
                        <span class="pointer">可取消</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
    .orderMain{
        height: 96%;
        width: 100%;
        padding: 20px 300px;
        box-sizing: border-box;
        .everyOne{
            height: 180px;
            width: 100%;
            border: 1px solid #3333;
            box-sizing: border-box;
            border-radius: 10px;
            margin-bottom: 20px;
            .top{
                height: 20%;
                width: 100%;
                border-bottom: 1px solid #3333;
                box-sizing: border-box;
                font-size: 15px;
                display: flex;
                align-items: center;
                background-color: #3333;
                border-radius: 10px 10px 0 0;
            }
            .bottom{
                height: 80%;
                width: 100%;
                display: flex;
                .left{
                    width: 80%;
                    height: 100%;
                    padding: 10px 20px;
                    box-sizing: border-box;
                    line-height: 2
                }
                .right{
                    width: 20%;
                    height: 100%;
                    padding: 10px 20px;
                    box-sizing: border-box;
                    div{
                        height: 30px;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-around
                    }
                }
            }
        }
    }
    .pointer{
        cursor:pointer;
    }
</style>
