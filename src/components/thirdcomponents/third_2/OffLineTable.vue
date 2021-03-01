<template>
  <div>
      <Table :columns="columns" :data="data">
        <template slot-scope="{ row, index }" slot="regional">
          <Input type="text" v-model="editregional" v-if="editIndex === index" />
          <span v-else>{{ row.regional }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="secondaryregion">
          <Input type="text" v-model="editsecondaryregion" v-if="editIndex === index" />
          <span v-else>{{ row.secondaryregion }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="provience">
          <Input type="text" v-model="editprovience" v-if="editIndex === index" />
          <span v-else>{{row.provience}}</span>
        </template>

        <template slot-scope="{ row, index }" slot="dealers">
          <Input type="text" v-model="editdealers" v-if="editIndex === index" />
          <span v-else>{{ row.dealers }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="phone">
          <Input type="text" v-model="editphone" v-if="editIndex === index" />
          <span v-else>{{ row.phone }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="devicetype">
          <Input type="text" v-model="editdevicetype" v-if="editIndex === index" />
          <span v-else>{{ row.devicetype }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="deviceorign">
          <Input type="text" v-model="editdeviceorign" v-if="editIndex === index" />
          <span v-else>{{ row.deviceorign }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="devicename">
          <Input type="text" v-model="editdevicename" v-if="editIndex === index" />
          <span v-else>{{ row.devicename }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="deviceofflinetime">
          <Input type="text" v-model="editdeviceofflinetime" v-if="editIndex === index" />
          <span v-else>{{ row.deviceofflinetime }}</span>
        </template>
      </Table>
<!--    <Table border ref="selection" :columns="columns4" :data="data1"></Table>-->
    <!--    <Button @click="handleSelectAll(true)">Set all selected</Button>-->
    <!--    <Button @click="handleSelectAll(false)">Cancel all selected</Button>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns: [

        // {
        //   type: 'selection',
        //   width: 60,
        //   align: 'center'
        // },
        {
          // type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '大区',
          slot: 'regional'
        },
        {
          title: '二级区域',
          slot: 'secondaryregion'
        },
        {
          title: '省份',
          slot: 'provience'
        },
        {
          title: '经销商',
          slot: 'dealers'
        },
        {
          title: '联系方式',
          slot: 'phone'
        },
        {
          title: '设备类型',
          slot: 'devicetype'
        },
        {
          title: '设备区域',
          slot: 'deviceorign'
        },
        {
          title: '设备名称',
          slot: 'devicename'
        },
        {
          title: '离线时间',
          slot: 'deviceofflinetime'
        },
      ],
      data: [
        {
          regional: '相机1',
          secondaryregion: '相机类型1',
          provience: '相机型号1',
          dealers: '代码1',
          phone: '店端IP1',
          devicetype: '1',
          deviceorign: '店端端口1',
          devicename: 'Isc平台标识1',
          deviceofflinetime: '2'
        },
        {
          regional: '相机1',
          secondaryregion: '相机类型1',
          provience: '相机型号1',
          dealers: '代码1',
          phone: '店端IP1',
          devicetype: '1',
          deviceorign: '店端端口1',
          devicename: 'Isc平台标识1',
          deviceofflinetime: '2'
        },
        {
          regional: '相机1',
          secondaryregion: '相机类型1',
          provience: '相机型号1',
          dealers: '代码1',
          phone: '店端IP1',
          devicetype: '1',
          deviceorign: '店端端口1',
          devicename: 'Isc平台标识1',
          deviceofflinetime: '2'
        },
        {
          regional: '相机1',
          secondaryregion: '相机类型1',
          provience: '相机型号1',
          dealers: '代码1',
          phone: '店端IP1',
          devicetype: '1',
          deviceorign: '店端端口1',
          devicename: 'Isc平台标识1',
          deviceofflinetime: '2'
        },
      ],
      editIndex: -1,  // 当前聚焦的输入框的行数
      editregional: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
      editsecondaryregion: '',  // 第二列输入框
      editprovience: '',  // 第三列输入框
      editdealers: '',  // 第四列输入框
      editphone: '',
      editdevicetype: '',
      editdeviceorign: '',
      editdevicename: '',
      editdeviceofflinetime: ''
    }
  },
  methods: {
    // handleSelectAll (status) {
    //   this.$refs.selection.selectAll(status);
    // },
    // addrow() {
    //   this.data.push({
    //     name: {},
    //     type: {},
    //     model: {},
    //     code: {},
    //     storeip: {},
    //     storeport: {},
    //     iscPlatformidentity: {},
    //     useproject: {},
    //   })
    // },
    //   handleEdit (row, index) {
    //     this.editname = row.name;
    //     this.edittype = row.type;
    //     this.editmodel = row.model;
    //     this.editcode = row.code;
    //     this.editstoreip = row.storeip;
    //     this.editstoreport = row.storeport;
    //     this.editiscPlatformidentity = row.iscPlatformidentity;
    //     this.edituseproject = row.useproject;
    //     this.editIndex = index;
    //   },
    //   handleSave (index) {
    //     this.data[index].name = this.editname;
    //     this.data[index].type = this.edittype;
    //     this.data[index].model = this.editmodel;
    //     this.data[index].code = this.editcode;
    //     this.data[index].storeip = this.editstoreip;
    //     this.data[index].storeport = this.editstoreport;
    //     this.data[index].iscPlatformidentity = this.editiscPlatformidentity;
    //     this.data[index].useproject = this.edituseproject;
    //     this.editIndex = -1;
    //   },
    //   remove (index) {
    //     this.data.splice(index, 1);
    //   }
    // }
  }
}
</script>