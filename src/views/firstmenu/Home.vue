<template>
  <div class="home">

<!--    <img alt="Vue logo" src="../assets/logo.png" />-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <div class="bigsquare">
      <div style="height: 99%">
<!--        <Button @click="showdata">1111</Button>-->
<!--        <div>{{namejx}}</div>-->
        <diamond></diamond>
        <div class="layout" id = 'layy'>
          <Bar></Bar>
          <div style="height:100%;width: 60%;position:relative;">
              <Map></Map>
          </div>
          <!--        <Map></Map>-->
        </div>

          <div class="homebottom">
              <div class='bottomcompont'>
                  <Pie></Pie>
                  <div>离线设备总数{{offlinenum}}</div>
              </div>
              <div class='bottomcompont'>
                      <PieTotal></PieTotal>
                      <div class="font">离线屏幕数{{offlinenum}}</div>
                      <div class="font">离线相机数{{offlinenum}}</div>
              </div>
              <Divider type="vertical"/>
              <div style="width: 58%">
                  <div style="float:right;">
                      <Input placeholder="请输入服务站" style="width: 50%"/>
                      <Button style="margin: 0 10px">查询</Button>
                      <div style="display: inline-block">查看全部</div>
                  </div>
                  <!--          <Carousel></Carousel>-->
                  <!--          <Swiper></Swiper>-->
                  <div style="clear:both;margin-top: 1%;width:80%;float: right;margin-right: 10%">
                      <Swiperone></Swiperone>
                  </div>
              </div>
          </div>
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
      offlinenum:'136',
      namejx: '123',
      name:1,
      age:2,
        layoutheight:'',
      barxdata:[],
      barydata:[],
        // mydata : [
        //     {name: '北京',value: '100' },{name: '天津',value: this.randomData() },
        //     {name: '上海',value: this.randomData() },{name: '重庆',value: randomData() },
        //     {name: '河北',value: randomData() },{name: '河南',value: randomData() },
        //     {name: '云南',value: randomData() },{name: '辽宁',value: randomData() },
        //     {name: '黑龙江',value: randomData() },{name: '湖南',value: randomData() },
        //     {name: '安徽',value: randomData() },{name: '山东',value: randomData() },
        //     {name: '新疆',value: randomData() },{name: '江苏',value: randomData() },
        //     {name: '浙江',value: randomData() },{name: '江西',value: randomData() },
        //     {name: '湖北',value: randomData() },{name: '广西',value: randomData() },
        //     {name: '甘肃',value: randomData() },{name: '山西',value: randomData() },
        //     {name: '内蒙古',value: randomData() },{name: '陕西',value: randomData() },
        //     {name: '吉林',value: randomData() },{name: '福建',value: randomData() },
        //     {name: '贵州',value: randomData() },{name: '广东',value: randomData() },
        //     {name: '青海',value: randomData() },{name: '西藏',value: randomData() },
        //     {name: '四川',value: randomData() },{name: '宁夏',value: randomData() },
        //     {name: '海南',value: randomData() },{name: '台湾',value: randomData() },
        //     {name: '香港',value: randomData() },{name: '澳门',value: randomData() }
        // ],
    }
  },
  components: {
    Map,
    diamond,
    Bar,
    Pie,
    PieTotal,
    Swiperone,
    // Swiper,
    // Carousel,
    // Map,
  },
  methods: {
      // getheight() {
      //     let allheight = document.getElementById('layy')
      //     console.log(allheight.offsetHeight)
      //     this.layoutheight = allheight.offsetHeight
      //     console.log(this.layoutheight)
      // }
//      randomData() {
//     return Math.round(Math.random()*500);
// }
},
  mounted () {
      // this.getheight()
    // getdata(this.name,this.age).then(res => {
    //   this.namejx = res.result_msg
    // }).catch(error => {
    //   console.log(error);
    // });
    // getdata1().then((res)=>{
    //   // console.log(res)
    // }).catch(error => {
    //   console.log(error);
    // });
    // getbardata().then((res) =>{
    //   // console.log(res)
    //   // res.data.xdata.forEach((item) => {
    //   //   this.barxdata.push(item)
    //   // })
    //   // res.data.ydata.forEach((item) => {
    //   //   this.barydata.push(item)
    //   // })
    //   // console.log(this.barxdata)
    // }).catch(error => {
    //   console.log(error);
    // });
  }
};
</script>
<style scoped>
  .layout {
    width: 100%;
    height: 60%;
    display: flex;
    margin-top:2%;
    justify-content: space-between;
    overflow: hidden;
      position: relative;
  }
  .homebottom {
    /*width: 90%;*/
    height: 30%;
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
        display: flex;
        flex-direction: column;
    }
    .font {
        white-space:nowrap;
    }
</style>
