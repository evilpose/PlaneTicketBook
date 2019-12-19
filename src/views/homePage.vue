<template>
  <div class="homePage">
    <Header style="height:2.5%"></Header>
    <div class="mainDiv">
      <div class="topSearch">
        <div class="topSearchMain">
          <div class="Tab">
            <div class="domestic pointer">
              国内航班
            </div>
            <div class="international pointer">
              国际航班
            </div>
          </div>
          <!-- 国内航班 -->
          <div class="inputSearch">
            <!-- 输入起飞和降落的地点 -->
            <div class="inputPlace">
              <img src="@/assets/takeOff.svg"/>
              <div style="width:42%;">
                <el-input v-model="start" placeholder="出发地"></el-input>
              </div>
              <img src="@/assets/land.svg"/>
              <div style="width:42%">
                <el-input v-model="end" placeholder="目的地"></el-input>
              </div>
            </div>
            <!-- 出发时间 -->
            <div class="inputTime">
              <img src="@/assets/time.svg"/>
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期"
                  :editable = false>
                </el-date-picker>
            </div>
            <!-- 舱位 -->
            <div class="inputSeat">
              <img src="@/assets/seat.svg"/>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <!-- 人数 -->
            <div class="inputNumber">
              <img src="@/assets/man.svg"/>
              <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
            </div>
            <!-- 查询按钮 -->
            <div class="search pointer">
              <span>查询</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 轮播图区域 -->
      <div class="bottom-carousel">
        <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item,index) in imgs" :key="index">
          <img :src = item.img alt="" style="height:100%;width:100%">
        </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 特价机票 -->
      <div class="Special">
        <div style="height:50px;color:#005797;display:flex;align-items:center;;border-bottom:2px solid #005797;font-size:20px;">
          <span>国际·国内·港澳台特价机票</span>
        </div>
        <div class="SpecialMain">
          <div class="SpecialMainTop">
            <div style="background-color: #347dece1;;color:white">亚洲</div>
            <div>欧洲</div>
            <div>美洲</div>
            <div>非洲</div>
          </div>
          <div class="SpecialMainMain">
            <div class="every" v-for="(item,index) in specialList" :key="index">
              <p>{{item.start}}→{{item.end}}</p>
              <p style="color:#999">{{item.date}}</p>
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <div style="font-size:10px;">
                  <span>￥</span><span style="color:red;font-size:20px;">{{item.price}}</span><span>起</span>
                </div>
                <div class="pointer" style="height:25px;width:60px;background-color:#fcc97d;font-size:12px;display:flex;justify-content:center;
                color:white;align-items:center;border-radius:5px;">
                  立抢
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>s
<script>
import Header from '@/components/header.vue'
import axios from 'axios'
export default {
  name: 'homePage',
  components: {
    Header
  },
  data () {
    return {
      imgs: [
        { img: require('../assets/Advertisement-1.jpg') },
        { img: require('../assets/Advertisement-2.jpg') },
        { img: require('../assets/Advertisement-3.jpg') }
      ],
      start: '',
      end: '',
      value1: '',
      options: [{
        value: '选项1',
        label: '头等舱/公务舱'
      }, {
        value: '选项2',
        label: '经济舱'
      }],
      value: '选项1',
      num: 1,
      specialList: []
    }
  },
  methods: {
    handleChange (value) {
      // 这两个都ok
      console.log(value)
      console.log(this.num)
    },
    // 获取特接机票
    getList () {
      axios({
        method: 'get',
        url: 'http://rap2api.taobao.org/app/mock/239895/special'
      })
        .then((response) => {
          console.log(response)
          this.specialList = response.data.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  created () {
    this.getList()
  }
}
</script>
<style lang="scss" scoped>
  .homePage{
    width: 100%;
    height: 200%;
    background-image:url('../assets/main-bg.jpg');
    background-position-x: center;
    background-position-y: top;
    background-size: initial;
    background-repeat-x: no-repeat;
    background-repeat-y: no-repeat;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
  }
  .mainDiv{
    width: 100%;
    height: 97.5%;
  }
  .topSearch{
    height: 28%;
    width: 100%;
    box-sizing: border-box;
    padding: 80px 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    .topSearchMain{
      width: 900px;
      min-width: 900px;
      height: 100%;
      border-radius:10px;
      background-color: white;
      .Tab{
        height: 20%;
        width: 100%;
        background-color: #005797;
        border-radius:10px 10px  0 0;
        display: flex;
        .domestic{
          width: 20%;
          height: 100%;
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          border-radius:10px 0  0 0;
        }
        .international{
          width: 20%;
          height: 100%;
          background-color: #005797;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: white
        }
      }
      .inputSearch{
        height: 80%;
        box-sizing: border-box;
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        .inputPlace{
          height: 50px;
          width: 60%;
          background-color: #f1f4f5;
          box-shadow:inset 0px 0px 4px 2px rgb(206, 204, 204);
          padding: 5px 5px;
          box-sizing: border-box;
          border-radius: 25px;
          display: flex;
          img{
            width:8%;border:1.5px solid #13227a;border-radius:20px;padding:5px;box-sizing:border-box;
          }
        }
        .inputTime{
          height: 50px;
          width: 35%;
          background-color: #f1f4f5;
          padding: 5px;
          box-sizing: border-box;
          border-radius: 25px;
          box-shadow:inset 0px 0px 4px 2px rgb(206, 204, 204);
          display: flex;
          margin-left: 20px;
          img{
            height:100%;box-sizing:border-box;
          }
        }
        .inputSeat{
          width:30%;
          height: 50px;
          background-color: #f1f4f5;
          padding: 5px;
          box-sizing: border-box;
          border-radius: 25px;
          box-shadow:inset 0px 0px 4px 2px rgb(206, 204, 204);
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          img{
            height:100%;width:40px;;border:1.5px solid #13227a;border-radius:20px;padding:5px;box-sizing:border-box;
          }
        }
        .inputNumber{
          width:20%;
          height: 50px;
          background-color: #f1f4f5;
          padding: 5px;
          box-sizing: border-box;
          border-radius: 25px;
          box-shadow:inset 0px 0px 4px 2px rgb(206, 204, 204);
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          margin-left: 20px;
          img{
            height:100%;width:40px;;border:1.5px solid #13227a;border-radius:20px;padding:5px;box-sizing:border-box;
          }
        }
        .search{
          width:20%;
          height: 50px;
          background-color: #fcc97d;
          color: white;
          font-size: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 25px;
          margin-left: 215px;
          margin-top: 20px;
        }
      }
    }
  }
  .bottom-carousel{
      box-sizing: border-box;
      padding:  10px 150px 0 150px;
      height: 25%;
      width: 100%;
  }
  .Special{
    box-sizing: border-box;
    padding:  20px 150px 0 150px;
    height: 500px;
    width: 100%;
    .SpecialMain{
      padding: 10px;
      box-sizing: border-box;
      height: 450px;
      width: 100%;
      background-color: white;
      min-width: 1219px;
      .SpecialMainTop{
        height: 6%;
        width: 100%;
        padding: 5px;
        box-sizing: border-box;
        display: flex;
        div{
          width:60px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color:#347dece1;
          margin-left: 10px;
          border-radius: 5px;
          font-size: 12px;
        }
      }
      .SpecialMainMain{
        height: 94%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        box-sizing: border-box;
        .every{
          padding:10px;
          box-sizing: border-box;
          background-color: #f8f8f8;
          height:120px;
          width:225px;
          margin: 0px 10px 10px 0px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          p{
            margin: 0px;
            font-size: 13px
          }
        }
      }
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .pointer{
    cursor:pointer;
  }
</style>
<style lang="scss">
  .inputPlace{
    input{
      background-color: #f1f4f5;
      outline: none;
      border: none;
      border-radius: 20px
    }
  }
  .inputTime{
    input{
      background-color: #f1f4f5;
      outline: none;
      border: none;
      border-radius: 20px
    }
    .el-input__prefix{
      display: none
    }
  }
  .inputSeat{
    input{
      background-color: #f1f4f5;
      outline: none;
      border: none;
      border-radius: 20px
    }
  }
  .inputNumber{
    input{
      background-color: #f1f4f5;
      outline: none;
      border: none;
      border-radius: 20px
    }
    .el-input-number__decrease{
      border-radius: 0 0 10px 0!important
    }
    .el-input-number__increase{
      border-radius: 0 10px 0 0!important;
    }
  }
</style>
