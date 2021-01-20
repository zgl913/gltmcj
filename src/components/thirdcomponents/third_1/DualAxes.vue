<!--
  DualAxes -- 柱状折线图组件 --
  v1.0.0
  author xuxiaoqiang,2462170438@qq.com
  copyright Hangzhou QianNeng 2021.1.5
-->
<template>
  <div style="height: 10%;width: 300px">
    <div id="container2">
    </div>
  </div>

</template>

<script>
import { DualAxes } from '@antv/g2plot';
export default {
  name: "DualAxes",
  methods: {
    showdualaxes() {
      const data = [
        { time: '2019-03', value: 350, count: 800 },
        { time: '2019-04', value: 900, count: 600 },
        { time: '2019-05', value: 300, count: 400 },
        { time: '2019-06', value: 450, count: 380 },
        { time: '2019-07', value: 470, count: 220 },
      ];

      const dualAxes = new DualAxes('container2', {
        data: [data, data],
        height: 300,
        width:300,
        xField: 'time',
        yField: ['value', 'count'],
        yAxis: [
          {},
          {
            // type:"value",
            // meta: {
            //   formatter:"{value}%"
            // }
          }
        ],
        geometryOptions: [
          {
            geometry: 'column',
          },
          {
            geometry: 'line',
            lineStyle: {
              lineWidth: 2,
            },
          },
        ],
      });

      dualAxes.render();
    },
  },

  mounted() {
    this.showdualaxes()
  }
}
</script>

<style scoped>
</style>