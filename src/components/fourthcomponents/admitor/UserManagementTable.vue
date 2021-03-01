<template>
    <div>
      <Table :columns="columns" :data="data">
        <template slot-scope="{ row, index }" slot="name">
          <Input type="text" v-model="editname" v-if="editIndex === index" />
          <span v-else>{{ row.name }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="phone">
          <Input type="text" v-model="editphone" v-if="editIndex === index" />
          <span v-else>{{ row.phone }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="usernamee">
          <Input type="text" v-model="editusername" v-if="editIndex === index" />
          <span v-else>{{row.username}}</span>
        </template>

        <template slot-scope="{ row, index }" slot="orign">
          <Input type="text" v-model="editorign" v-if="editIndex === index" />
          <span v-else>{{ row.orign }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="boss">
          <Input type="text" v-model="editboss" v-if="editIndex === index" />
          <span v-else>{{ row.boss }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="addtime">
          <Input type="text" v-model="editaddtime" v-if="editIndex === index" />
          <span v-else>{{ row.addtime }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="operation">
          <div v-if="editIndex === index">
            <Button @click="handleSave(index)">保存</Button>
            <Button @click="editIndex = -1">取消</Button>
          </div>
          <div v-else>
            <!--            <Button @click="addrow()">新增</Button>-->
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
      name: "UserManagementTable",
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
              title: '姓名',
              slot: 'name'
            },
            {
              title: '手机',
              slot: 'phone'
            },
            {
              title: '用户名',
              slot: 'username'
            },
            {
              title: '所属区域',
              slot: 'orign'
            },
            {
              title: '经销商',
              slot: 'boss'
            },
            {
              title: '添加时间',
              slot: 'addtime'
            },
            {
              title: '角色',
              slot: 'addtime'
            },
            {
              title: '重置密码',
              slot: 'addtime'
            },
            {
              title: '操作',
              slot: 'operation'
            }
          ],
          data: [
            {
              name: '相机1',
              phone: '相机类型1',
              username: '相机型号1',
              orign: '代码1',
              boss: '店端IP1',
              addtime: '店端端口1',
            },
            {
              name: '相机1',
              phone: '相机类型1',
              username: '相机型号1',
              orign: '代码1',
              boss: '店端IP1',
              addtime: '店端端口1',
            },
            {
              name: '相机1',
              phone: '相机类型1',
              username: '相机型号1',
              orign: '代码1',
              boss: '店端IP1',
              addtime: '店端端口1',
            },
          ],
          editIndex: -1,
          editname: '',  // 当前聚焦的输入框的行数
          editphone: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
          editusername: '',  // 第二列输入框
          editorign: '',  // 第三列输入框
          editboss: '',  // 第四列输入框
          editaddtime: '',
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
            this.editphone = row.phone;
            this.editusername = row.username;
            this.editorign = row.orign;
            this.editboss = row.boss;
            this.editaddtime=row.addtime;
            this.editIndex = index;
          },
          handleSave (index) {
            this.data[index].name = this.editname;
            this.data[index].phone = this.editphone;
            this.data[index].username = this.editusername;
            this.data[index].orign = this.editorign;
            this.data[index].boss = this.editboss;
            this.data[index].addtime = this.editaddtime;
            this.editIndex = -1;
          },
          remove (index) {
            this.data.splice(index, 1);
          }
      }
    }
  </script>