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
    props:['lixian'],
  name: "Pie",
    data() {
      return {
          piegaodu:'',
          piekuandu:'',
          lixianshuju:0,
      }
    },
  methods: {
      getdiv() {
          console.log(this.lixianshuju)
          // console.log(`${document.getElementById("container1").offsetHeight}`)
          this.piegaodu = `${document.getElementById("container1").offsetHeight}`
          this.piekuandu = `${document.getElementById("container1").offsetWidth}`
          console.log(this.piegaodu)
      },
    async showpie() {
          await this.getdiv()
        console.log(this.piegaodu)
      const ringProgress = new RingProgress('container1', {
          width:200,
          height:200,
        autoFit: false,
        percent: this.lixianshuju,
        color: ['#F4664A', '#5B8FF9'],
          statistic: {
              title: {
                  style: { color: '#363636', fontSize: '12px', lineHeight: '14px' },
                  formatter: () => '离线率',
              },
          },
      });

      ringProgress.render();

    }
  },
    // watch: {
    //     lixian() {
    //         this.lixianshuju = this.lixian;
    //         console.log(this.lixianshuju)
    //     }
    // },
  mounted() {
          // this.showpie()
  },
    computed: {

    },
    watch:{
        lixian(newValue){
            console.log(newValue);
            this.lixianshuju = Number(newValue)
            this.showpie()
        }
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
      height: 70%;
    display: flex;
      justify-content: center;
    align-items: center;
    /*width: 50%;*/
    /*height: 50%;*/
    /*width: 50% !important;*/
    /*height: 50% !important;*/
  }
</style>