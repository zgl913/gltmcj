<!--
  diamond -- 正方形div组件 --
  v1.0.0
  author xuxiaoqiang,2462170438@qq.com
  copyright Hangzhou QianNeng 2021.1.5
-->
<template>
  <div class="diamond">
    <div class="sum sum-1">
      <div>{{onlinestore}}家</div>
      <div>全国上线门店总数</div>
    </div>
<!--    <div class="sum sum-2">-->
<!--      <div>{{devicetotal }}台</div>-->
<!--      <div>设备总数</div>-->
<!--    </div>-->
<!--    <div class="sum sum-2">-->
<!--      <div>{{devicetotal-onlinedevice1-lixianshu}}台</div>-->
<!--      <div>设备异常数</div>-->
<!--    </div>-->
    <div class="sum sum-3">
      <div>{{onlinedevice1}}台</div>
      <div>在线设备数</div>
    </div>
  </div>
</template>

<script>

export default {
  props:['onlinedevice1',
    'devicetotal','onlinestore','abnormal','lixianshu'],
name: "diamond",
  data () {
    return {
      // onlinestore:0,
      // devicetotal:3162,
      onlinedevice:123,
      group_code:'uni',
      dealer_Name:'',
      devicelist:[],
      yichangshu:'',
    }
  },
  methods: {
    // async fn() {
    //   await getDealerList().then(data => {
    //     console.log(data)
    //   })
    // }

  },
  mounted() {

  },
  watch:{
  }
}
</script>

<style scoped>
  .diamond {
  width: 100%;
  display: flex;
    height: 13%;
  justify-content: space-around;
}
  .sum {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #515a6e;
    text-align: center;
    /*line-height: 100px;*/
    background-color: white;
    width: 10%;
    height: 100%;
    color: #2d8cf0;
  }
</style>