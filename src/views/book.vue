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
        <div style="width:100%;height:20px;"></div>
        <div class="bottom">
            <div class="main" v-for="(item, index) in passenger" :key="index">
                <div style="display:flex;width:100%;justify-content:space-between">
                    <span style="line-height:2">第{{index+1}}位乘客</span>
                    <span class="pointer" style="color:#248beb" @click="del">删除</span>
                </div>
                <div style="width:300px;display:flex;align-items:center;">
                    <span style="width:70px;font-size:17px">姓名：</span>
                    <input v-model="passenger[index].name" placeholder="请输入身份证姓名" style="width:220px">
                </div>
                <div style="width:300px;display:flex;align-items:center;">
                    <span style="width:70px;font-size:17px">身份证：</span>
                    <input v-model="passenger[index].number" placeholder="请输入身份证号" style="width:220px">
                </div>
            </div>
            <div class="add pointer" @click="add()">
                + 添加
            </div>
        </div>
        <div class="submit pointer">
            提交订单
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      passenger: [
        {
          'name': '',
          'number': ''
        }
      ]
    }
  },
  methods: {
    add () {
      if (this.passenger.length < 5) {
        this.passenger.push({ 'name': '', 'number': '' })
      } else {
        this.$message.error('最多只能添加5位乘客!')
      }
    },
    del () {
      if (this.passenger.length > 1) {
        this.passenger.splice(this.passenger.length - 1, 1)
      }
    }
  }
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
        background-color: #EFF6FC;
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
    .bottom{
        width: 100%;
        padding: 20px 20px;
        box-sizing: border-box;
        box-sizing: border-box;
        border: 1px solid rgb(209, 208, 208);
        .main{
            height:150px;
            width:100%;
            background-color:rgb(224, 223, 223);
            padding: 10px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-bottom: 20px;
            input{
                outline: none;
                height: 30px;
                width: 100px;
                border: none;
                padding: 5px;
                box-sizing: border-box;
                border-radius: 5px;
            }
        }
        .add{
            height: 30px;
            width: 80px;
            border: 1px solid #248beb;
            color: #248beb;
            font-size: 17px;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 1;
            border-radius: 5px;
        }
    }
    .submit{
        height:50px;
        width: 150px;
        background-color: #f60;
        color: white;
        margin: 20px 0 100px 400px;
        font-size: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }
  }
  .pointer{
    cursor:pointer;
  }
</style>
