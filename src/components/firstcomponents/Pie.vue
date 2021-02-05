<!--
  Pie -- 镂空饼图组件 --
  v1.0.0
  author xuxiaoqiang,2462170438@qq.com
  copyright Hangzhou QianNeng 2021.1.5
-->
<template>
<!--  <div style="height: 80%;width:100%">-->
    <div id="container1" class="piestyle"></div>
<!--  </div>-->

</template>

<script>
import { RingProgress } from '@antv/g2plot';
export default {
  name: "Pie",
  methods: {
    showpie() {
      const ringProgress = new RingProgress('container1', {
        // height: 150,
        // width: 150,
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
  /*.piestyle canvas {*/
  /*  position: relative;*/
  /*  width: 50% !important;*/
  /*  height: 50% !important;*/
  /*}*/
  .piestyle {
    height: 100%;
    width:100%;
    display: flex;
    align-items: center;
    /*width: 50%;*/
    /*height: 50%;*/
    /*width: 50% !important;*/
    /*height: 50% !important;*/
  }
</style>