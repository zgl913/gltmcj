<template>
  <div>
    <div style="float: left;">上线门店数</div>
    <Divider></Divider>
    <div style="float: left">
      <Button class="datalayout">今日</Button>
      <Button class="datalayout">本周</Button>
      <Button class="datalayout">本月</Button>
      <Button class="datalayout">本年</Button>
      <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 250px;height: 100%" class="datalayout"></DatePicker>
      <Button class="datalayout">查询</Button>
    </div>
    <div style="clear:both">
      <div style="float:left">上线门店数量</div>
      <div style="clear:both">
        <DualAxesEcharts></DualAxesEcharts>
      </div>
    </div>

  </div>
</template>

<script>
import DualAxesEcharts from "@/components/thirdcomponents/third_1/DualAxesEcharts";
export default {
  name: "ShangXianMengDian",
  components: {
    DualAxesEcharts
  }
}
</script>

<style scoped>

</style>