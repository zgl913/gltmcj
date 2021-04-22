<template>
  <div class="home">

<!--    <img alt="Vue logo" src="../assets/logo.png" />-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <div class="bigsquare">
      <div style="height: 99%">
<!--        <Button @click="showdata">1111</Button>-->
<!--        <div>{{namejx}}</div>-->

              <diamond :onlinedevice1="devicelist.length" :devicetotal="devicetotal" :onlinestore="onlinestore" :abnormal="abnormal" :lixianshu="offlinenum"></diamond>

        <div class="layout" id = 'layy'>
<!--          <Bar></Bar>-->
          <div class="leftlayout">
              <div class="lefttop">
                  <Pie :lixian="lixianlv"></Pie>
                  <div>离线设备总数{{offlinenum}}</div>
              </div>
              <div class="leftbottom">
                  <PieTotal :lixianshu="lixianshu"></PieTotal>
<!--                  <div class="font">离线相机数{{offlinenum}}</div>-->
              </div>

          </div>
          <div class="mapdjbj">
              <Map></Map>
          </div>
          <!--        <Map></Map>-->
        </div>

<!--          <div class="homebottom">-->
<!--              <div class='bottomcompont1'>-->
<!--                  -->
<!--              </div>-->
<!--              <div class='bottomcompont'>-->
<!--                      -->
<!--              </div>-->
<!--              <div class="numbeibj">-->
<!--                  -->
<!--              </div>-->
<!--&lt;!&ndash;              <Divider type="vertical"/>&ndash;&gt;-->
<!--&lt;!&ndash;              <div style="position: relative;height: 100%">&ndash;&gt;-->

<!--&lt;!&ndash;                  &lt;!&ndash;          <Carousel></Carousel>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                  &lt;!&ndash;          <Swiper></Swiper>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                  <div style="clear:both;margin-top: 1%;width:90%;float: left;position: relative">&ndash;&gt;-->

<!--&lt;!&ndash;                      <Swiperone></Swiperone>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--          </div>-->
      </div>
    </div>
  </div>
</template>
<script type="text/javascript" src="@/js/china.js" ></script>
<script>

import diamond from "@/components/firstcomponents/diamond";
import Bar from "@/components/firstcomponents/Bar";
import Pie from "@/components/firstcomponents/Pie";
import PieTotal from "@/components/firstcomponents/PieTotal";
// import Carousel from "@/components/firstcomponents/Carousel";
import Map from "@/components/firstcomponents/Map";
import Swiperone from "@/components/firstcomponents/Swiperone";
import {getDealerDeviceHeartList,getDeviceList} from "@/api/api";
import {getDealerList,getGroupList} from "@/api/api";
// import Swiper from "@/components/firstcomponents/Swiper"
// import Map from "@/components/firstcomponents/Map";
// @ is an alias to /src
// import Bar from "@/components/Bar";
// import {getdata} from "@/api/api";
// import {getdata1} from "@/api/api";
// import {getbardata} from "@/api/api";

export default {
  name: "Home",
  data () {
    return {
        offlinenum: '0',
        namejx: '123',
        name: 1,
        age: 2,
        layoutheight: '',
        barxdata: [],
        barydata: [],
        group_code: 'uni',
        dealer_Name: '',
        devicelist:[],
        pingfail:[],
        lixianlv:'',
        jxsmsg:[],
        onlinestore:'',
        devicetotal:'',
        mapkuandu:'',
        leftlayoutwidth:'',
        pingfail:[],
        lixianshu:[],
        abnormal:0,
        shebeitotal:[],
    }
  },
  components: {
    Map,
    diamond,
    // Bar,
    Pie,
    PieTotal,
    Swiperone,
    // Swiper,
    // Carousel,
    // Map,

  },
  methods: {
      getdevicenumber() {
          console.log(this.jxsmsg)
          console.log(this.jxsmsg)
      },
      //获取离线数量
      getoffline() {
        let map = {}
        for (let i = 0; i<this.pingfail.length;i++) {
            var v = this.pingfail[i].type
            var counts = map[v]
            if(counts) {
                map[v] +=1
            }else {
                map[v] = 1
            }
        }
        console.log(map)
          for(var d in map) {
              this.lixianshu.push({
                  type:d,
                  value:map[d]
              })
              console.log(d)
              console.log(map[d])
          }
        console.log(this.lixianshu)
      },
      // getheight() {
      //     let allheight = document.getElementById('layy')
      //     console.log(allheight.offsetHeight)
      //     this.layoutheight = allheight.offsetHeight
      //     console.log(this.layoutheight)
      // }
//      randomData() {
//     return Math.round(Math.random()*500);
// }
       fn() {
           getGroupList().then(res => {
              console.log(res)
              return res
          }).then(res => {
              console.log(res)
              this.onlinestore = 0
              for(let i=0;i<res.data.result_content.length;i++) {
                  getDealerList(res.data.result_content[i].group_code).then(data => {
                      console.log(data)
                      this.onlinestore +=data.data.result_content.length
                      this.devicetotal = 0
                      for(let j=0;j<data.data.result_content.length;j++) {
                          getDeviceList(data.data.result_content[j].group_code,data.data.result_content[j].dealer_code).then(jieguo => {
                              // this.devicetotal1 += jieguo.data.result_content.length
                              for(let k=0;k<jieguo.data.result_content.length;k++) {
                                  this.shebeitotal.push(jieguo.data.result_content[k])
                                  // if(k==jieguo.data.result_content.length-1) {
                                  //     this.showxiugai =true
                                  // }
                              }
                          })
                      }
                  })
              }
          })
      },
      async fn1() {
          await this.fn()
          this.abnormal = this.devicetotal - this.onlinestore - this.offlinenum
      }
},
  mounted () {
      this.mapkuandu = `${document.documentElement.clientWidth * 0.6}`
      this.leftlayoutwidth = `${document.documentElement.clientWidth * 0.3}`
      document.getElementsByClassName('mapdjbj')[0].style.width =  this.mapkuandu + 'px';
      document.getElementsByClassName('leftlayout')[0].style.width =  this.leftlayoutwidth + 'px';
    this.getdevicenumber()
      getDealerDeviceHeartList(this.group_code,this.dealer_Name).then(res => {
          console.log(res)
          res.data.result_content.forEach(item => {
              if(item.device_pingmsg =='ping成功') {
                  this.devicelist.push({
                      group_code: item.group_code,
                      dealer_code:item.dealer_code,
                      dealer_name:item.dealer_name,
                      device_code:item.device_code,
                      device_ip:item.device_ip,
                      device_name:item.device_name,
                      device_ping:item.device_ping,
                      device_pingmsg:item.device_pingmsg,
                      create_time:item.create_time,
                  })
              }else {
                    this.pingfail.push({
                        type:item.device_name,
                    })
              }
          })
          console.log(this.pingfail)
          this.getoffline()

          this.lixianlv = 1-(this.devicelist.length/res.data.result_content.length)
          console.log(this.lixianlv)
          this.lixianlv = this.lixianlv.toFixed(4)
          this.offlinenum = res.data.result_content.length-this.devicelist.length
          console.log(this.lixianlv)
      }).catch(error => {
          console.log(error)
      })

        this.fn1()
  },
    watch: {
        '$route': function (to) {

        },
        shebeitotal: function() {
            this.$nextTick(function(){
                this.devicetotal = this.shebeitotal.length
            })
        }
    },
    // beforeRouteEnter:(to,from,next)=>{
    //     next(vm=>{
    //         alert(vm.num)
    //     })
    // },

};
</script>
<style scoped>
    .lefttop {
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .leftlayout {
        /*margin-left: 8%;*/
        /* margin-right: 2%; */
        width: 500px;
    }
  .layout {
    width: 100%;
    height: 100%;
      margin-top: 1%;
      padding-right: 5%;
    display: flex;
    /*justify-content: space-between;*/
    overflow: hidden;
      position: relative;
  }
  .homebottom {
    width: 100%;
    height: 25%;
    display: flex;
    /*justify-content: space-around;*/
    align-items: center;
    margin-top:1%;
    background-color: white;
  }
  .home {
    height: 95%;
  }
  .bigsquare {
    height: 100%;
      position: relative;
  }
  .ivu-divider {
    height: 70%;
    width: 3px;
  }
    .bottomcompont {
        height: 100%;
        width:20%;
        /*display: flex;*/
        /*align-items: center;*/
        /*flex-direction: column;*/
    }
  .bottomcompont1 {
      height: 100%;
      width:20%;
      display: flex;
      flex-direction: column;
  }
    .font {
        white-space:nowrap;
    }
  .mapdjbj:focus {
      border-bottom: 1px solid black;
  }
  .mapdjbj {
      /*width: 80%;*/
  }
    .numbeibj {

    }
</style>
