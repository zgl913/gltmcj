<template>
  <div>
    <div class="daochubj">
      <Button type="primary" size="large" @click="exportData()"><Icon type="ios-download-outline" ref="table"></Icon>导出</Button>
    </div>
  <div class="leftright">
<!--    <DualAxesEcharts></DualAxesEcharts>-->
    <DualAxes v-on:showtable="showtb"></DualAxes>
    <div v-show="showif" class="tubiao">
      <Table :columns="columns" :data="nowData" :height="bgheight" ref="table">
        <!--         <template slot-scope="{ row, index }" slot="group_code">-->
        <!--           <Input type="text" v-model="editgroup_code" v-if="editIndex === index" />-->
        <!--           <span v-else>{{ row.group_code }}</span>-->
        <!--         </template>-->

        <!--         <template slot-scope="{ row, index }" slot="device_id">-->
        <!--           <Input type="text" v-model="editdevice_id" v-if="editIndex === index" />-->
        <!--           <span v-else>{{ row.device_id }}</span>-->
        <!--         </template>-->

        <!--         <template slot-scope="{ row, index }" slot="dealer_code">-->
        <!--           <Input type="text" v-model="editdealer_code" v-if="editIndex === index" />-->
        <!--           <span v-else>{{row.dealer_code}}</span>-->
        <!--         </template>-->

        <template slot-scope="{ row, index }" slot="onliondata">
          <Input type="text" v-model="editdevice_type" v-if="editIndex === index" />
          <span v-else>{{ row.device_type }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="province">
          <Input type="text" v-model="editdevice_type_ex" v-if="editIndex === index" />
          <span v-else>{{ row.device_type_ex }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="jxs_name">
          <Input type="text" v-model="editdevice_code" v-if="editIndex === index" />
          <span v-else>{{ row.device_code }}</span>
        </template>
      </Table>
    </div>
  </div>
  </div>
</template>

<script>
// import DualAxesEcharts from "@/components/thirdcomponents/third_1/DualAxesEcharts";
import DualAxes from "@/components/thirdcomponents/third_1/DualAxes";
export default {
  name: "ShangXianMengDian",
  data() {
    return {
      bgheight:'450',
      showif:false,
      columns: [
        {
          // type: 'selection',
          type: 'index',
          width: 50,
          align: 'center'
        },
        {
          title: '日期',
          slot: 'onliondata'
        },
        {
          title: '省份',
          slot: 'province'
        },
        {
          title: '经销商名称',
          slot: 'jxs_name'
        },
      ],
      nowData: [],
      prov:'',
      city:'',
    }
  },
  methods: {
    exportData() {
      this.$refs.table.exportCsv({
        filename: '系统上线',
        // columns: this.columns.filter((col, index) => index < 5),
        // data: this.nowData.filter((data, index) => index < 4)
        columns:this.columns,
        data:this.nowData
      });
    },
    showtb() {
      this.showif= true
      console.log(this.showif)
    }
  },
  mounted() {
    this.bgheight = `${document.documentElement.clientHeight * 0.6}`
  },
  components: {
    // DualAxesEcharts,
    DualAxes
  },
  watch: {
    $route: function (to, from) {
      this.prov = to.query.prov
      this.city = to.query.prov
      console.log(this.prov,this.city)
      console.log(to, from)
    }
  }
}
</script>

<style scoped>
  .leftright {
    height: 70%;
    display: flex;
    flex-direction: row;
    margin-top: 3%;
  }
  .tubiao {
    margin-left: 1%;
  }
  .daochubj {
    display: flex;
    margin-top:-2%;
    margin-left:40%
  }
</style>