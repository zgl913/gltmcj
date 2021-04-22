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
  props:['lixianshu'],
  data(){
    return {
      piedata:[]
    }
  },
  methods: {
  showpietotal() {
    const data = this.piedata;
    // const data =
    //         [
    //   { type: '分类一', value: 27 },
    //   { type: '分类二', value: 25 },
    //   { type: '分类三', value: 18 },
    //   { type: '分类四', value: 15 },
    //   { type: '分类五', value: 10 },
    //   { type: '其他', value: 5 },
    // ];

    const piePlot = new Pie('container2', {
      appendPadding: 10,
      data,
      width:250,
      height:250,
      angleField: 'value',
      colorField: 'type',
      radius: 0.8,
      legend:false,
      label: {
        type: 'outer',
        content: '{name}：{value}',
      },
      interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
    });

    piePlot.render();

  }
  },
  mounted() {
  // this.showpietotal()

  },
  watch: {
    lixianshu(newValue){
      console.log(newValue);
      this.piedata= newValue
      this.showpietotal()
    }
  }
}
</script>

<style scoped>
  .piestyle {
    height: 100%;
    width: 100%;
  }
</style>