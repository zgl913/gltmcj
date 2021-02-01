<template>
  <div>
      <Table :columns="columns" :data="data">
        <template slot-scope="{ row, index }" slot="name">
          <Input type="text" v-model="editname" v-if="editIndex === index" />
          <span v-else>{{ row.name }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="type">
          <Input type="text" v-model="edittype" v-if="editIndex === index" />
          <span v-else>{{ row.type }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="model">
          <Input type="text" v-model="editmodel" v-if="editIndex === index" />
          <span v-else>{{row.model}}</span>
        </template>
        <template slot-scope="{ row, index }" slot="orign">
          <Input type="text" v-model="editorign" v-if="editIndex === index" />
          <span v-else>{{row.orign}}</span>
        </template>
        <template slot-scope="{ row, index }" slot="status">
          <Input type="text" v-model="editstatus" v-if="editIndex === index" />
          <span v-else>{{row.status}}</span>
        </template>

        <template slot-scope="{ row, index }" slot="code">
          <Input type="text" v-model="editcode" v-if="editIndex === index" />
          <span v-else>{{ row.code }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="storeip">
          <Input type="text" v-model="editstoreip" v-if="editIndex === index" />
          <span v-else>{{ row.storeip }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="storeport">
          <Input type="text" v-model="editstoreport" v-if="editIndex === index" />
          <span v-else>{{ row.storeport }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="iscPlatformidentity">
          <Input type="text" v-model="editiscPlatformidentity" v-if="editIndex === index" />
          <span v-else>{{ row.iscPlatformidentity }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="useproject">
          <Input type="text" v-model="edituseproject" v-if="editIndex === index" />
          <span v-else>{{ row.useproject}}</span>
        </template>
        <template slot-scope="{ row, index }" slot="operation">
          <div v-if="editIndex === index">
            <Button @click="handleSave(index)">保存</Button>
            <Button @click="editIndex = -1">取消</Button>
          </div>
          <div v-else style="display: flex" class="tablebutton">
            <Button @click="addrow()">新增</Button>
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
  data () {
    return {
      columns: [
        // {
        //   type: 'selection',
        //   width: 60,
        //   align: 'center'
        // },
        {
          title: '名称',
          slot: 'name'
        },
        {
          title: '相机类型',
          slot: 'type'
        },
        {
          title: '相机型号',
          slot: 'model'
        },
        {
          title: '相机区域',
          slot: 'orign'
        },
        {
          title: '相机状态',
          slot: 'status'
        },
        {
          title: '代码',
          slot: 'code'
        },
        {
          title: '店端IP',
          slot: 'storeip'
        },
        {
          title: '店端端口',
          slot: 'storeport'
        },
        {
          title: 'ISC平台标识',
          slot: 'iscPlatformidentity'
        },
        {
          title: '使用项目',
          slot: 'useproject'
        },
        {
          title: '操作',
          slot: 'operation'

        }
      ],
      data: [
        {
          name: '相机1',
          type: '相机类型1',
          model: '相机型号1',
          orign: '区域1',
          status: '状态1',
          code: '代码1',
          storeip: '店端IP1',
          storeport: '店端端口1',
          iscPlatformidentity: 'Isc平台标识1',
          useproject: '使用项目1'
        },
        {
          name: '相机2',
          type: '相机类型2',
          model: '相机型号2',
          orign: '区域1',
          status: '状态1',
          code: '代码2',
          storeip: '店端IP2',
          storeport: '店端端口2',
          iscPlatformidentity: 'Isc平台标识2',
          useproject: '使用项目2'
        },
        {
          name: '相机3',
          type: '相机类型3',
          model: '相机型号3',
          orign: '区域1',
          status: '状态1',
          code: '代码3',
          storeip: '店端IP3',
          storeport: '店端端口3',
          iscPlatformidentity: 'Isc平台标识3',
          useproject: '使用项目3'
        },
      ],
      editIndex: -1,  // 当前聚焦的输入框的行数
      editname: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
      edittype: '',  // 第二列输入框
      editmodel: '',  // 第三列输入框
      editorign: '',
      editstatus: '',
      editcode: '',  // 第四列输入框
      editstoreip: '',
      editstoreport: '',
      editiscPlatformidentity: '',
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
    handleEdit (row, index) {
      this.editname = row.name;
      this.edittype = row.type;
      this.editmodel = row.model;
      this.editorign = row.orign;
      this.editstatus = row.status;
      this.editcode = row.code;
      this.editstoreip = row.storeip;
      this.editstoreport = row.storeport;
      this.editiscPlatformidentity = row.iscPlatformidentity;
      this.edituseproject = row.useproject;
      this.editIndex = index;
    },
    handleSave (index) {
      this.data[index].name = this.editname;
      this.data[index].type = this.edittype;
      this.data[index].model = this.editmodel;
      this.data[index].orign = this.editorign;
      this.data[index].status = this.editstatus;
      this.data[index].code = this.editcode;
      this.data[index].storeip = this.editstoreip;
      this.data[index].storeport = this.editstoreport;
      this.data[index].iscPlatformidentity = this.editiscPlatformidentity;
      this.data[index].useproject = this.edituseproject;
      this.editIndex = -1;
    },
    remove (index) {
      this.data.splice(index, 1);
    }
  }
}
</script>
<style>
 .tablebutton .ivu-btn {
  width: 48px;
  padding: 5px 1px 6px !important;
}
</style>