<template>
    <div class="allPlanemain">
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
                  value-format="yyyy-MM-dd"
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
            <!-- 顶部栏 -->
            <div class="sort">
              <span style="color:white;font-size:20px;margin-right:600px">筛选</span>
              <!-- 起飞时间 -->
              <el-select v-model="takeOffTime" placeholder="起飞时间" style="margin-right:20px;">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <!-- 耗时 -->
              <el-select v-model="time" placeholder="消耗时长" style="margin-right:20px;">
                <el-option
                  v-for="item in options3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <!-- 价格 -->
              <el-select v-model="price" placeholder="价格" style="margin-right:20px;">
                <el-option
                  v-for="item in options4"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <!-- 下面的航班 -->
            <div style="height:92%;width:100%;overflow-y: scroll;">
            <div style="width:100%;text-align:center">
              <span v-if="specialList.length === 0" style="font-size:40px;line-height:5;">
                暂无此航班
              </span>
            </div>
            <!-- 每一班航班 -->
            <div class="everyPlane" v-for="(item,index) in specialList" :key="index">
              <div class="top">
                <img src="../assets/logo-small.gif" alt="" style="width:50px;height:50px;margin:20px;">
                <!-- 飞机公司 -->
                <div class="name">
                    <span style="font-size:20px;">国泰航空</span>
                    <span style="color:#898989">{{item.flightnum}}</span>
                </div>
                <!-- 起飞时间和地点 -->
                <div class="main">
                  <div style="width:30%;font-size:30px;text-align:center">
                    <span>{{item.getofftime}}</span>
                    <br>
                    <span style="font-size:25px;">{{item.departure}}</span>
                  </div>
                  <div style="width:40%;text-align:center">
                    <img src="../assets/rightArrow.svg" alt="" style="height:80px;width:100px">
                  </div>
                  <div style="width:30%;font-size:30px;text-align:center">
                    <span>{{item.launchtime}}</span>
                    <br>
                    <span style="font-size:25px;">{{item.destination}}</span>
                  </div>
                </div>
                <!-- 用时 -->
                <div class="time">
                  {{item.hours}}小时{{item.minute}}分钟
                </div>
              </div>
              <div class="bottom">
                <div class="main">
                  <span style="margin-right:600px">经济舱</span>
                  <span style="margin-right:100px;color:#f60;width:50px">￥{{item.price}}</span>
                  <div class="pointer" @click="book(item)">
                    <span style="line-height: 1;font-size:20px;">订票</span>
                  </div>
                </div>
                <div class="main">
                  <span style="margin-right:600px">头等舱</span>
                  <span style="margin-right:100px;color:#f60;width:50px">￥{{item.price2}}</span>
                  <div class="pointer" @click="book2(item)">
                    <span style="line-height: 1;font-size:20px;">订票</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
      </div>
    </div>
</template>
<script>
import Axios from 'axios'
// import qs from 'qs'
export default {
  name: 'allplane',
  components: {
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
      specialList: [],
      options2: [{
        value: '选项1',
        label: '从早到晚'
      }, {
        value: '选项2',
        label: '从晚到早'
      }],
      takeOffTime: '',
      options3: [{
        value: '选项1',
        label: '耗时最短'
      }, {
        value: '选项2',
        label: '耗时最长'
      }],
      time: '',
      options4: [{
        value: '2',
        label: '从高到低'
      }, {
        value: '1',
        label: '从低到高'
      }],
      price: ''
    }
  },
  watch: {
    price (val, oldVal) {
      let time
      time = this.value1.split('-')[1] + '月' + this.value1.split('-')[2] + '日'
      console.log(val)
      Axios.get('http://123.57.29.99:8100/flights/search', {
        params: {
          departure: this.start,
          destination: this.end,
          date: time,
          order: val
        }
      }).then((response) => {
        if (response.data.code === 200) {
          this.specialList = response.data.data
        }
      }).catch((error) => {
        console.log(error)
        this.$message.error('出现不知名的错误！')
      })
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
      if (this.start === '' || this.end === '' || this.value1 === '') {
        this.$message.error('请完善查询信息！')
      } else {
        // console.log(this.start, this.end, this.value1)
        let time
        time = this.value1.split('-')[1] + '月' + this.value1.split('-')[2] + '日'
        let params = {
          departure: this.start,
          destination: this.end,
          date: time
        }
        console.log(params)
        Axios.get('http://123.57.29.99:8100/flights/search', {
          params
        }).then((response) => {
          console.log(response)
          if (response.data.code === 200) {
            this.specialList = response.data.data
          } if (response.data.code === 404) {
            this.specialList = []
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    // 预定经济舱票
    book (item) {
      console.log(item)
      this.$router.push({ path: '/book',
        query: {
          fid: item.fid,
          flightnum: item.flightnum,
          date: item.date,
          getofftime: item.getofftime,
          launchtime: item.launchtime,
          departure: item.departure,
          destination: item.destination,
          price: item.price,
          hours: item.hours,
          minute: item.minute
        }
      })
    },
    // 预定头等舱票
    book2 (item) {
      this.$router.push({ path: '/book',
        query: {
          fid: item.fid,
          flightnum: item.flightnum,
          date: item.date,
          getofftime: item.getofftime,
          launchtime: item.launchtime,
          departure: item.departure,
          destination: item.destination,
          price2: item.price2,
          hours: item.hours,
          minute: item.minute
        }
      })
    }
  },
  created () {
    console.log(this.$route.query)
    this.start = this.$route.query.start
    this.end = this.$route.query.end
    this.value1 = '2019-' + this.$route.query.time.replace(/月/g, '-').replace(/日/g, '')
    this.submit()
    console.log('2019-' + this.$route.query.time.replace(/月/g, '-').replace(/日/g, ''))
  }
}
</script>
<style lang="scss" scoped>
  @import './allplane.scss';
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
  .sort{
    input{
      // background-color: #f1f4f5;
      outline: none;
      border: none;
      width:150px;
      border-radius: 40px;
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
