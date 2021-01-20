<!--
  Pie -- 镂空饼图组件 --
  v1.0.0
  author xuxiaoqiang,2462170438@qq.com
  copyright Hangzhou QianNeng 2021.1.5
-->
<template>
  <div>
    <div id="container1" class="piestyle"></div>
  </div>

</template>

<script>
import { RingProgress } from '@antv/g2plot';
export default {
  name: "Pie",
  methods: {
    showpie() {
      const ringProgress = new RingProgress('container1', {
        height: 200,
        width: 200,
        autoFit: false,
        percent: 0.7,
        color: ['#5B8FF9', '#E8EDF3'],
      });

      ringProgress.render();

    }
  },
  mounted() {
    this.showpie()
  }
}
</script>

<style scoped>
  .piestyle canvas {
    width: 300px !important;
    height: 300px !important;
  }
</style>