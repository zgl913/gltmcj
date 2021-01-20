<!--
  PieTotal -- 饼图组件 --
  v1.0.0
  author xuxiaoqiang,2462170438@qq.com
  copyright Hangzhou QianNeng 2021.1.5
-->
<template>
  <div id="container2" class="piestyle"></div>
</template>

<script>
import { Pie } from '@antv/g2plot';
export default {
name: "PieTotal",
  methods: {
  showpietotal() {
    const data = [
      { type: '分类一', value: 27 },
      { type: '分类二', value: 25 },
      { type: '分类三', value: 18 },
      { type: '分类四', value: 15 },
      { type: '分类五', value: 10 },
      { type: '其他', value: 5 },
    ];

    const piePlot = new Pie('container2', {
      appendPadding: 10,
      data,
      width:230,
      height:230,
      angleField: 'value',
      colorField: 'type',
      radius: 0.9,
      legend: false,
      label: {
        type: 'inner',
        offset: '-30%',
        content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
        style: {
          fontSize: 14,
          textAlign: 'center',
        },
      },
      interactions: [{ type: 'element-active' }],
    });

    piePlot.render();
  }
  },
  mounted() {
  this.showpietotal()
  }
}
</script>

<style scoped>

</style>