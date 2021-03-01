<template>
  <div class="auser">
    <FormTable class="adduserformtable">
      <template slot-scope="city" slot="place">
        服务站：
        <Select v-model="model4" class="adduserselect" placeholder="选择服务站">
          <Option v-for="item in city.data" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </template>
      <template slot-scope="city" slot="direction">
        服务站：
        <Select v-model="model4" class="adduserselect" placeholder="选择服务站">
          <Option v-for="item in city.data" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </template>
    </FormTable>
  </div>

</template>

<script>
  import FormTable from "@/components/fifthcomponents/FormTable";
export default {
  name: "AddUser",
  components: {FormTable},
}
</script>

<style scoped>
  .auser {
    width:30%;
    border: 1px solid black;
  }
  .adduserformtable {
    width: 80%
  }
  .adduserselect {
    width:100px
  }
</style>