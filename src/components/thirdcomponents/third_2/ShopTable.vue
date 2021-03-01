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

        <template slot-scope="{ row, index }" slot="address">
          <Input type="text" v-model="editaddress" v-if="editIndex === index" />
          <span v-else>{{ row.address }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="devicetotal">
          <Input type="text" v-model="editdevicetotal" v-if="editIndex === index" />
          <span v-else>{{ row.devicetotal }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="operation">
          <div v-if="editIndex === index">
            <Button @click="handleSave(index)">保存</Button>
            <Button @click="editIndex = -1">取消</Button>
          </div>
          <div v-else>
<!--            <Button @click="addrow()">新增</Button>-->
<!--            <Button @click="handleEdit(row, index)">编辑</Button>-->
            <Button>查看</Button>
          </div>
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
          title: '地址',
          slot: 'address'
        },
        {
          title: '设备数',
          slot: 'devicetotal'
        },
        {
          title: '操作',
          slot: 'operation'

        }
      ],
      data: [
        {
          regional: '相机1',
          secondaryregion: '相机类型1',
          provience: '相机型号1',
          dealers: '代码1',
          phone: '店端IP1',
          address: '店端端口1',
          devicetotal: 'Isc平台标识1',
        },
        {
          regional: '相机1',
          secondaryregion: '相机类型1',
          provience: '相机型号1',
          dealers: '代码1',
          phone: '店端IP1',
          address: '店端端口1',
          devicetotal: 'Isc平台标识1',
        },
        {
          regional: '相机1',
          secondaryregion: '相机类型1',
          provience: '相机型号1',
          dealers: '代码1',
          phone: '店端IP1',
          address: '店端端口1',
          devicetotal: 'Isc平台标识1',
        },
      ],
      editIndex: -1,  // 当前聚焦的输入框的行数
      editregional: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
      editsecondaryregion: '',  // 第二列输入框
      editprovience: '',  // 第三列输入框
      editdealers: '',  // 第四列输入框
      editphone: '',
      editaddress: '',
      editdevicetotal: '',
      edituseproject: '',
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