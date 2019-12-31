<template>
    <div class="orderMain">
        <div class="everyOne" v-for="(item, index) in orderList" :key="index">
            <div class="top">
                <span style="margin-left:10px">订单号：</span>
                <span style="margin-right:20px">{{item.oid}}</span>
                <span>预定日期：</span>
                <span>{{item.odate}}</span>
            </div>
            <div class="bottom">
                <div class="left">
                    <div style="font-size:20px;font-weight: bold">
                        <span>{{item.departure}}</span>
                        <span>-</span>
                        <span>{{item.destination}}</span>
                    </div>
                    <div>
                        <span>出发日期：</span>
                        <span style="margin-right:10px">2019年{{item.date}}</span>
                        <span style="margin-right:10px">{{item.getofftime}}</span>
                        <span style="margin-right:10px">至</span>
                        <span style="margin-right:10px">{{item.launchtime}}</span>
                        <span>{{item.flightNum}}</span>
                    </div>
                    <div>
                        <span>出行人：</span>
                        <span>{{item.name}}</span>
                    </div>
                </div>
                <div class="right">
                    <div>
                        <span style="color:#f60">￥{{item.price}}</span>
                        |
                        <span class="pointer" @click="cancel(index)">可取消</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import service from '../request/request'
// import Axios from 'axios'
export default {
  data () {
    return {
      orderList: []
    }
  },
  methods: {
    // 获取订单1
    getList () {
      service.get('api/getorder').then((response) => {
        console.log(response)
        this.orderList = response.data.data
      })
    },
    // 取消订单
    cancel (index) {
      this.$confirm('此操作将取消订单, 是否继续?', '提示', {
        lockScroll: false,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // console.log(this.orderList[index].id)
        service.get('api/cancelorder', {
          params: {
            id: this.orderList[index].id
          }
        }).then((response) => {
          console.log(response)
          if (response.data.code === 200) {
            this.orderList.splice(index, 1)
            this.$message({
              type: 'success',
              message: '取消订单成功!'
            })
          }
        }).catch((error) => {
          console.log(error)
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已放弃'
        })
      })
    }
  },
  created () {
    this.getList()
  }
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
