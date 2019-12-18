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
          <div class="inputSearch">
            <div class="inputPlace"></div>
          </div>
        </div>
      </div>
      <div class="bottom-carousel">
        <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item,index) in imgs" :key="index">
          <img :src = item.img alt="" style="height:100%;width:100%">
        </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>s
<script>
import Header from '@/components/header.vue'
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
      ]
    }
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
        .inputPlace{
          height: 50px;
          width: 60%;
          background-color: #e2e4e5;
          padding: 5px;
          box-sizing: border-box;
          border-radius: 25px;
        }
      }
    }
  }
  .bottom-carousel{
      box-sizing: border-box;
      padding:  50px 150px 0 150px;
      height: 50%;
      width: 100%
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
