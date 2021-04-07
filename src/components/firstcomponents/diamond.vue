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
    <div class="sum sum-2">
      <div>{{devicetotal }}台</div>
      <div>设备总数</div>
    </div>
    <div class="sum sum-3">
      <div>{{onlinedevice}}台</div>
      <div>在线设备数</div>
    </div>
  </div>
</template>

<script>
export default {
name: "diamond",
  data () {
    return {
      onlinestore:356,
      devicetotal:3162,
      onlinedevice:123,
    }
  }
}
</script>

<style scoped>
  .diamond {
  width: 100%;
  display: flex;
    height: 10%;
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