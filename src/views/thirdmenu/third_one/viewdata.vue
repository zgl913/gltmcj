<template>
  <div>
    <div class="contentelect">
      <Select1>
        <template slot-scope="city" slot="ServiceStation">
          服务站：
          <Select v-model="model4" style="width:100px" placeholder="选择服务站">
            <Option v-for="item in city.data" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </template>
        <Input v-model="value" placeholder="请输入区域/服务站名" style="width: 300px" slot="inputtotal"/>
      </Select1>
    </div>
    <div class="buttontotal">
      <div class="buttontwo">
        <Button type="text">上线门店统计</Button>
        <Button type="text">设备统计</Button>
      </div>
      <Button>导出列表</Button>
    </div>
    <div>
      <div style="text-align: left;margin: 20px;">数据概览</div>
      <div class="dataoverview">
        <div class="dataviewtotal">3640设备总数</div>
        <div class="dataviewtotal">201今日新增</div>
        <div class="dataviewtotal">419本周新增</div>
      </div>
    </div>
    <Divider></Divider>
    <div style="float: left;display: flex;justify-content: space-around;width: 300px;margin-bottom: 15px;">
      <div><router-link to="/viewdata/DeviceNumber">设备总数</router-link></div>
      <div><router-link to="/viewdata/OnlineDevice">在线设备</router-link></div>
      <div><router-link to="/viewdata/OfflineDevice">离线设备</router-link></div>
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
import Select1 from "@/components/common/Select1";
// import DualAxes from "@/components/thirdcomponents/third_1/DualAxes";
// import Bar from "@/components/firstcomponents/Bar";
// import DualAxesEcharts from "@/components/thirdcomponents/third_1/DualAxesEcharts";
export default {
  name: "viewdata",
  components:{
    // DualAxesEcharts,
    // DualAxes,
    Select1,
    // Bar,
  }
}
</script>

<style scoped>
  .contentelect {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }
  .buttontotal {
    margin:10px;
    width:40%;
    display: flex;
    justify-content: space-between;
  }
  .dataoverview {
    width: 30%;
    display: flex;
    justify-content: space-around;
  }
  .dataviewtotal {
    width: 100px;
    height: 100px;
    background-color: 	#D3D3D3;
    line-height: 100px;
  }
  /*.dualaxes {*/
  /*  margin-top: 100px;*/
  /*}*/
  .deviceroutelayout {
    margin: 10px;
  }
  .datalayout {
    margin: 0 5px;
  }
</style>