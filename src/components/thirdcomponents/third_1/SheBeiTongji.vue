<template>
  <div>
    <div style="float: left;display: flex;justify-content: space-around;width: 300px;margin-bottom: 15px;">
      <div><router-link to="/viewdata/SheBeiTongji/DeviceNumber">设备总数</router-link></div>
      <div><router-link to="/viewdata/SheBeiTongji/OnlineDevice">在线设备</router-link></div>
      <div><router-link to="/viewdata/SheBeiTongji/OfflineDevice">离线设备</router-link></div>
    </div>
    <Divider></Divider>
    <div style="float: left">
      <Button class="datalayout">今日</Button>
      <Button class="datalayout">本周</Button>
      <Button class="datalayout">本月</Button>
      <Button class="datalayout">本年</Button>
      <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 250px;height: 100%" class="datalayout"></DatePicker>
      <Button class="datalayout">查询</Button>
    </div>
    <div style="display: flex;justify-content: space-around;clear: both;">
      <!--      <DualAxesEcharts></DualAxesEcharts>-->
      <!--      <Bar></Bar>-->
      <!--      <DualAxes></DualAxes>-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
name: "SheBeiTongji"
}
</script>

<style scoped>

</style>