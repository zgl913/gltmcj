<template>
  <div>
    <div class="contentselect">
      <Select1>
        <template slot-scope="city" slot="ServiceStation">
          经销商：
          <Select v-model="model4" style="width:100px" placeholder="选择经销商">
            <Option v-for="item in city.data" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </template>
        <Input v-model="value" placeholder="请输入经销商名称" style="width: 300px" slot="inputtotal"/>
      </Select1>
    </div>
    <div>
      <Button>导入</Button>
      <Button>导出</Button>
    </div>
    <ShopTable></ShopTable>
    <div style="margin-top: 20px;float: right;"><Pagetotal></Pagetotal></div>
  </div>
</template>

<script>
import Select1 from "@/components/common/Select1";
import Pagetotal from "@/components/common/Pagetotal";
import ShopTable from "@/components/thirdcomponents/third_2/ShopTable";
export default {
  name: "Shop",
  components: {Select1,ShopTable,Pagetotal}
}
</script>

<style scoped>
  .contentselect {
    display: flex;
    flex-direction: row;
  }
</style>