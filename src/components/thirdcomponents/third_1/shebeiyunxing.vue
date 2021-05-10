<template>
  <div>
    <div class="daochubj">
      <Button type="primary" size="large" @click="exportData()"><Icon type="ios-download-outline"></Icon>导出</Button>
    </div>
  <div class="leftright">
    <Columndevice v-on:showtable="showtb(arguments)" :devicedata1='devicedata'></Columndevice>
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

<!--        <template slot-scope="{ row, index }" slot="onliondata">-->
<!--          <Input type="text" v-model="editdevice_type" v-if="editIndex === index" />-->
<!--          <span v-else>{{ row.device_type }}</span>-->
<!--        </template>-->
<!--        <template slot-scope="{ row, index }" slot="province">-->
<!--          <Input type="text" v-model="editdevice_type_ex" v-if="editIndex === index" />-->
<!--          <span v-else>{{ row.device_type_ex }}</span>-->
<!--        </template>-->
<!--        <template slot-scope="{ row, index }" slot="jxs_name">-->
<!--          <Input type="text" v-model="editdevice_code" v-if="editIndex === index" />-->
<!--          <span v-else>{{ row.device_code }}</span>-->
<!--        </template>-->
<!--        <template slot-scope="{ row, index }" slot="device_name">-->
<!--          <Input type="text" v-model="editdevice_code" v-if="editIndex === index" />-->
<!--          <span v-else>{{ row.device_code }}</span>-->
<!--        </template>-->
      </Table>
    </div>
  </div>
  </div>
</template>

<script>
  import {getDealerDeviceHeartList} from '@/api/api'
  import Columndevice from "@/components/firstcomponents/Columndevice";
export default {
name: "Shebeiyunxing",
  components: {
    Columndevice
  },
  data() {
    return {
      showif:false,
      bgheight:'450',
      // bgwidth:'450',
      group_code:'uni',
      dealer_Name:'',
      devicepos:[],
    columns: [
        {
          // type: 'selection',
          width: 100,
          title: '序号',
          align:'center',
          key:'index',
        },
        {
          title: '日期',
          key:'create_time'
        },
        {
          title: '省份',
          key:'province'
        },
        {
          title: '经销商名称',
          key:'dealer_name'
        },
        {
          title: '设备名称',
          key:'device_name'
        },
      ],
      nowData: [],
      devicedata:[
        {
          type: '工位1',
          sales: 0,
        },
        {
          type: '工位2',
          sales: 0,
        },
        {
          type: '工位3',
          sales: 0,
        },
        {
          type: '工位4',
          sales: 0,
        },
        {
          type: '工位5',
          sales: 0,
        },
        {
          type: '工位6',
          sales: 0,
        },
        {
          type: '工位7',
          sales: 0,
        },
        {
          type: '工位8',
          sales: 0,
        },
        {
          type: '工位9',
          sales: 0,
        },
        {
          type: '入口',
          sales: 0,
        },
        {
          type: '出口',
          sales: 0,
        },
        {
          type: 'NVR',
          sales: 0,
        },
      ],
      prov:'',
      city:'',
    }
  },
  methods: {
    exportData() {
      this.$refs.table.exportCsv({
        filename: '设备运行',
        // columns: this.columns.filter((col, index) => index < 5),
        // data: this.nowData.filter((data, index) => index < 4)
        columns:this.columns,
        data:this.nowData
      });
    },
    showtb(params) {
      this.showif= true
      console.log(this.showif)
      console.log(params)
      switch (params[0]) {
        case '工位1':
          this.nowData = this.devicepos[0]
          break;
        case '工位2':
          this.nowData = this.devicepos[1]
          break;
        case '工位3':
          this.nowData = this.devicepos[2]
          break;
        case '工位4':
          this.nowData = this.devicepos[3]
          break;
        case '工位5':
          this.nowData = this.devicepos[4]
          break;
        case '工位6':
          this.nowData = this.devicepos[5]
          break;
        case '工位7':
          this.nowData = this.devicepos[6]
          break;
        case '工位8':
          this.nowData = this.devicepos[7]
          break;
        case '工位9':
          this.nowData = this.devicepos[8]
          break;
        case '入口':
          this.nowData = this.devicepos[9]
          break;
        case '出口':
          this.nowData = this.devicepos[10]
          break;
        case 'NVR':
          this.nowData = this.devicepos[11]
      }
      let indexx = 0
      this.nowData.forEach(item => {
        item.index = indexx+1
        indexx += 1
      })
    },
    getDealerDeviceHeart() {
      getDealerDeviceHeartList(this.group_code, this.dealer_Name).then(res => {
        console.log(res)
        this.devicepos[0] = []
        this.devicepos[1] = []
        this.devicepos[2] = []
        this.devicepos[3] = []
        this.devicepos[4] = []
        this.devicepos[5] = []
        this.devicepos[6] = []
        this.devicepos[7] = []
        this.devicepos[8] = []
        this.devicepos[9] = []
        this.devicepos[10] = []
        this.devicepos[11] = []
        res.data.result_content.forEach(item => {
          if(item.device_pingmsg =='ping失败') {
            switch (item.device_name) {
              case '工位1':
                this.devicepos[0].push(item)
                this.devicedata[0].sales +=1
                break;
              case '工位2':
                this.devicepos[1].push(item)
                this.devicedata[1].sales +=1
                break;
              case '工位3':
                this.devicepos[2].push(item)
                this.devicedata[2].sales +=1
                break;
              case '工位4':
                this.devicepos[3].push(item)
                this.devicedata[3].sales +=1
                break;
              case '工位5':
                this.devicepos[4].push(item)
                this.devicedata[4].sales +=1
                break;
              case '工位6':
                this.devicepos[5].push(item)
                this.devicedata[5].sales +=1
                break;
              case '工位7':
                this.devicepos[6].push(item)
                this.devicedata[6].sales +=1
                break;
              case '工位8':
                this.devicepos[7].push(item)
                this.devicedata[7].sales +=1
                break;
              case '工位9':
                this.devicepos[8].push(item)
                this.devicedata[8].sales +=1
                break;
              case '入口':
                this.devicepos[9].push(item)
                this.devicedata[9].sales +=1
                break;
              case '出口':
                this.devicepos[10].push(item)
                this.devicedata[10].sales +=1
                break;
              case 'NVR':
                this.devicepos[11].push(item)
                this.devicedata[11].sales +=1
            }
          }

        })
        console.log(this.devicepos,this.devicedata)
      })
    }
  },
  mounted() {
    this.bgheight = `${document.documentElement.clientHeight * 0.6}`
    this.getDealerDeviceHeart()
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