<!--
  Bar -- 横向柱状图组件 --
  v1.0.0
  author xuxiaoqiang,2462170438@qq.com
  copyright Hangzhou QianNeng 2021.1.5
-->
<template>
  <div class="barlayout">
    <div id="container" class="barstyle"></div>
  </div>
</template>

<script>
import { Bar } from '@antv/g2plot';
export default {
  name: "Bar",
  methods: {
    showbar(){
      const data = [
        {
          type: '冀蒙区',
          sales: 38,
        },
        {
          type: '西南区',
          sales: 52,
        },
        {
          type: '晋陕区',
          sales: 61,
        },
        {
          type: '华南区',
          sales: 145,
        },
        {
          type: '华东区',
          sales: 48,
        },
        {
          type: '苏沪区',
          sales: 38,
        },
        {
          type: '河南区',
          sales: 38,
        },
        {
          type: '东北区',
          sales: 38,
        },
        {
          type: '西北区',
          sales: 38,
        },
        {
          type: '河南区',
          sales: 38,
        },
      ];
     // for (let i = 0; i < data.length; i++) {
     //    xAxis.push(data[i].type);
     //    yData.push(data[i].sales);
     //  }
      const barPlot = new Bar('container', {
        data,
        width: 300,
        height: 300,
        xField: 'sales',
        yField: 'type',
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
        color: ({ type }) => {
          return type === '美容洗护' ? '#FAAD14' : '#5B8FF9';
        },
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
    this.showbar()
  }
}
</script>

<style scoped>
  .barlayout {
    width: 50%;
    height: 100%;
    margin-top: 50px;
    background-color: white;


  }
  .barstyle{
    width: 100%;
    height: 100%;
    position: relative;
    top:0px;

  }
</style>