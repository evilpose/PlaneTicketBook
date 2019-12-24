<template>
    <div class="main">
      <Header style="height:2.5%"></Header>
      <!-- 顶部搜索框 -->
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
            <div class="search pointer" @click="submit()">
              <span>查询</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 所有航班的详情页 -->
      <div class="allplane">
          <div class="allplaneMain">
            <div class="sort"></div>
          </div>
      </div>
    </div>
</template>
<script>
import Header from '@/components/header.vue'
export default {
  name: 'allplane',
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
    // 查询飞机详细内容
    submit () {
    //   this.$router.push({ path: '/details' })
      console.log('查询')
    }
  }
}
</script>
<style lang="scss" scoped>
  .main{
      width: 100%;
      height: 200%;
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
      box-shadow: 0 0 10px #cfd0d3;
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
  .pointer{
    cursor:pointer;
  }
  .allplane{
    height: 50%;
    width: 100%;
    box-sizing: border-box;
    padding: 0 10%;
    background-color: #fcc97d;
    .allplaneMain{
      height: 100%;
      width: 100%;
      border: 1px solid #13227a;
      border-radius: 25px 25px 0 0;
      .sort{
        height: 50px;
        width: 100%;
        background-color: #cfd0d3;
      }
    }
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
