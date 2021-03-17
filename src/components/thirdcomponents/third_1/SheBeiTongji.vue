<template>
  <div>
    <div class="shebeitongjibiaoti">
      <div><router-link to="/viewdata/SheBeiTongji/DeviceNumber">设备总数</router-link></div>
      <div><router-link to="/viewdata/SheBeiTongji/OnlineDevice">在线设备</router-link></div>
      <div><router-link to="/viewdata/SheBeiTongji/OfflineDevice">离线设备</router-link></div>
    </div>
    <Divider></Divider>
    <div class="shebeitongjibutton">
      <Button class="datalayout">今日</Button>
      <Button class="datalayout">本周</Button>
      <Button class="datalayout">本月</Button>
      <Button class="datalayout">本年</Button>
      <div class="cxbuju">
        <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" class="datalayout shebeitongjidata"></DatePicker>
        <Button class="datalayout">查询</Button>
      </div>

    </div>
    <div class="shebeitongjirouter">
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
  .shebeitongjibiaoti {
    float: left;
    display: flex;
    justify-content: space-around;
    width: 300px;
    margin-bottom: 15px;
  }
  .shebeitongjirouter {
    display: flex;
    justify-content: space-around;
    clear: both;
  }
  .shebeitongjibutton {
    float: left
  }
  .shebeitongjidata {
    width: 250px;
    height: 100%
  }
  .cxbuju {
    display: flex;
  }
</style>