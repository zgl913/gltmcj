<!--
  Bar -- 横向柱状图组件 --
  v1.0.0
  author xuxiaoqiang,2462170438@qq.com
  copyright Hangzhou QianNeng 2021.1.5
-->
<template>
  <div class="barlayout">
<!--    <Button @click="showbar">显示数据</Button>-->
    <div id="container" class="barstyle"></div>
  </div>
</template>

<script>
import { Bar } from '@antv/g2plot';
import {getbardata} from "@/api/api";
export default {
  name: "Bar",
  data () {
    return {
      bardata:[]
    }
  },
  methods: {
    getbardata1(){
      getbardata().then((res) =>{
        // console.log(res)
        res.data.xdata.forEach((item) => {
          this.bardata.push(item)
        })

        this.showbar()
      }).catch(error => {
        console.log(error);
      });
    },
    showbar(){
      const data = this.bardata
      // console.log(this.bardata)
      // console.log(data)
      //     [
      //   {
      //     type: '冀蒙区',
      //     sales: 38,
      //   },
      //   {
      //     type: '西南区',
      //     sales: 52,
      //   },
      //   {
      //     type: '晋陕区',
      //     sales: 61,
      //   },
      //   {
      //     type: '华南区',
      //     sales: 145,
      //   },
      //   {
      //     type: '华东区',
      //     sales: 48,
      //   },
      //   {
      //     type: '苏沪区',
      //     sales: 38,
      //   },
      //   {
      //     type: '河南区',
      //     sales: 38,
      //   },
      //   {
      //     type: '东北区',
      //     sales: 38,
      //   },
      //   {
      //     type: '西北区',
      //     sales: 38,
      //   },
      //   {
      //     type: '河南区',
      //     sales: 70,
      //   },
      // ];
     // for (let i = 0; i < data.length; i++) {
     //    xAxis.push(data[i].type);
     //    yData.push(data[i].sales);
     //  }
      const barPlot = new Bar('container', {
        data,
        width: 300,
        height: 300,
        padding:[0,80,30,50],
        xField: 'sales',
        yField: 'type',
        label: {
          // layout:{
          //   type:'limit-in-plot',
          //
          // },
          style: {
            fill: 'red',
            opacity: 0.6,
            fontSize: 24,

          },
          position: 'right',
          formatter:(data)=>{
            // console.log(data)
            // var data1=data.sales;
            // console.log(data1);
            return JSON.stringify(data.sales)+'%';
          }

        },
        xAxis: {
            grid: {
              line: null,
            }
        },
        yAxis: {
            line: {
              // stroke: 'red'
            }
        },
        seriesField: 'type',
        // color: ({ type }) => {
        //   return type === '华东区' ? '#FAAD14' : '#5B8FF9';
        // },
        color: '#5B8FF9',
        legend: false,
        meta: {
          type: {
            alias: '类别',
          },
          sales: {
            alias: '销售额',
          },
        },
      });
      barPlot.render();
    }
  },
  mounted() {
    this.getbardata1()
    // this.getbardata1().then(()=> {
    //   this.showbar()
    // })
  }
}
</script>

<style scoped>
  .barlayout {
    width: 40%;
    height: 100%;
    background-color: white;


  }
  .barstyle{
    width: 100%;
    height: 100%;
    position: relative;
    top:0px;

  }
</style>