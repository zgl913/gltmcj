<template>
  <div>
    <select1>
      <template slot-scope="city" slot="ServiceStation">
        经销商：
        <Select v-model="model4" style="width:100px" placeholder="选择经销商">
          <Option v-for="item in city.data" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </template>
      <Input v-model="value" placeholder="请输入经销商名称" style="width: 300px" slot="inputtotal"/>
<!--      <template slot-scope="city1" slot="ServiceStation">-->
<!--        <Select v-model="model5" style="width:100px" placeholder="设备类型" slot="shebeitype">-->
<!--          <Option v-for="item in city1.data" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
<!--        </Select>-->
<!--      </template>-->
      <template slot-scope="cityList" slot="shebeitype">
        <Select v-model="model4" size="large" style="width:100px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </template>
      <Input placeholder="请输入设备关键字" slot="shebeiword"/>
    </select1>
    <OffLineTable></OffLineTable>
    <div style="margin-top: 20px;float: right;"><Pagetotal></Pagetotal></div>

  </div>
</template>

<script>
import Select1 from "@/components/common/Select1";
import Pagetotal from "@/components/common/Pagetotal";
import OffLineTable from "@/components/thirdcomponents/third_2/OffLineTable";
export default {
  name: "OffLine",
  components: {Select1,OffLineTable,Pagetotal}
}
</script>

<style scoped>

</style>