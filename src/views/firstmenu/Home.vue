<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png" />-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <div class="bigsquare">
      <div style="height: 100%">
<!--        <Button @click="showdata">1111</Button>-->
<!--        <div>{{namejx}}</div>-->
        <diamond></diamond>
        <div class="layout">
          <Bar></Bar>
          <div style="height:100%;width: 50%;position: relative;">
            <Map></Map>
          </div>

          <!--        <Map></Map>-->
        </div>
      </div>
      <div class="homebottom">
        <div>
          <Pie></Pie>
          <div>离线设备总数{{offlinenum}}</div>
        </div>
        <div>
          <div>
            <PieTotal></PieTotal>
          </div>
          <div>
            <div>离线屏幕数{{offlinenum}}</div>
            <div>离线相机数{{offlinenum}}</div>
          </div>
        </div>
        <Divider type="vertical"/>
        <div style="width: 85%">
          <div style="float:right;">
            <Input placeholder="请输入服务站" style="width: 50%"/>
            <Button style="margin: 0 10px">查询</Button>
            <div style="display: inline-block">查看全部</div>
          </div>
<!--          <Carousel></Carousel>-->
<!--          <Swiper></Swiper>-->
          <div style="clear:both;margin-top: 50px;width:80%;float: right">
            <Swiperone></Swiperone>
          </div>



        </div>
      </div>
    </div>

  </div>
</template>

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

      barxdata:[],
      barydata:[],

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
    showdata (){

    }
  },
  mounted () {
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
    height: 50%;
    display: flex;
    margin-top:30px;
    justify-content: space-between;
    overflow: hidden;
  }
  .homebottom {
    /*width: 90%;*/
    height: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 0px;
    background-color: white;
  }
  .home {
    height: 100%;
  }
  .bigsquare {
    height: 100%;
  }
  .ivu-divider {
    height: 70%;
    width: 3px;
  }
</style>
