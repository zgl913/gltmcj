<template>
  <div>
    <Table :columns="columns" :data="data">
      <template slot-scope="{ row, index }" slot="number">
        <Input type="text" v-model="editnumber" v-if="editIndex === index" />
        <span v-else>{{ row.number }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="devicetype">
        <Input type="text" v-model="editdevicetype" v-if="editIndex === index" />
        <span v-else>{{ row.devicetype }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="deviceorign">
        <Input type="text" v-model="editdeviceorign" v-if="editIndex === index" />
        <span v-else>{{row.deviceorign}}</span>
      </template>

      <template slot-scope="{ row, index }" slot="devicename">
        <Input type="text" v-model="editdevicename" v-if="editIndex === index" />
        <span v-else>{{ row.devicename }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="devicestatus">
        <Input type="text" v-model="editdevicestatus" v-if="editIndex === index" />
        <span v-else>{{ row.devicestatus }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="operation">
        <div v-if="editIndex === index">
          <Button @click="handleSave(index)">保存</Button>
          <Button @click="editIndex = -1">取消</Button>
        </div>
        <div v-else>
          <!--            <Button @click="addrow()">新增</Button>-->
          <Button>查看</Button>
          <Button @click="handleEdit(row, index)">编辑</Button>
          <Button @click="remove(index)">删除</Button>
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
  name: "DeviceTable",
  data() {
    return {
      columns: [

        // {
        //   type: 'selection',
        //   width: 60,
        //   align: 'center'
        // },
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '序号',
          slot: 'number'
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
          title: '设备状态',
          slot: 'devicestatus'
        },
        {
          title: '操作',
          slot: 'operation'
        }
      ],
      data: [
        {
          number: '相机1',
          devicetype: '相机类型1',
          deviceorign: '相机型号1',
          devicename: '代码1',
          devicestatus: '店端IP1',
        },
        {
          number: '相机1',
          devicetype: '相机类型1',
          deviceorign: '相机型号1',
          devicename: '代码1',
          devicestatus: '店端IP1',
        },
        {
          number: '相机1',
          devicetype: '相机类型1',
          deviceorign: '相机型号1',
          devicename: '代码1',
          devicestatus: '店端IP1',
        },
      ],
      editIndex: -1,
      editnumber: '',  // 当前聚焦的输入框的行数
      editdevicetype: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
      editdeviceorign: '',  // 第二列输入框
      editdevicename: '',  // 第三列输入框
      editdevicestatus: '',  // 第四列输入框

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
    handleEdit (row, index) {
      this.editnumber = row.number;
      this.editdevicetype = row.devicetype;
      this.editdeviceorign = row.deviceorign;
      this.editdevicename = row.devicename;
      this.editdevicestatus = row.devicestatus;
      this.editIndex = index;
    },
    handleSave (index) {
      this.data[index].number = this.editnumber;
      this.data[index].devicetype = this.editdevicetype;
      this.data[index].deviceorign = this.editdeviceorign;
      this.data[index].devicename = this.editdevicename;
      this.data[index].devicestatus= this.editdevicestatus;
      this.editIndex = -1;
    },
    remove (index) {
      this.data.splice(index, 1);
    }
  }
}
</script>