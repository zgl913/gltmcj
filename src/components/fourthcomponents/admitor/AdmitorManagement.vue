<template>
 <div class="admitorlayout">
   <div class="showaddlayout2" v-show="showadd">
     <button class="showaddbutton2" @click="showadd = !showadd">×</button>
     <Form ref="formLeft" :model="formLeft" label-position="right" :label-width="100" >
       <!--        <FormItem label="主机厂编号" prop="input1">-->
       <!--          <Input v-model="formLeft.input1"/>-->
       <!--        </FormItem>-->
       <FormItem label="姓名" prop="input1">
         <Input v-model="formLeft.input1"/>
       </FormItem>
       <FormItem label="手机" prop="input2">
         <Input v-model="formLeft.input2"/>
       </FormItem>
       <FormItem label="用户名" prop="input3">
         <Input v-model="formLeft.input3"/>
       </FormItem>
       <FormItem label="所属区域" prop="input4">
         <Input v-model="formLeft.input4"/>
       </FormItem>
       <FormItem label="经销商" prop="input5">
         <Input v-model="formLeft.input5"/>
       </FormItem>
       <FormItem label="添加时间" prop="input6">
         <DatePicker type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="请选择日期" style="width: 100%" v-model="formLeft.input6"></DatePicker>
       </FormItem>
       <FormItem label="角色" prop="input7">
         <Select v-model="formLeft.input7" style="width:100%">
           <Option v-for="item in jueseList" :value="item.value" :key="item.value">{{ item.label }}</Option>
         </Select>
         <!--         <Input v-model="formLeft.input7"/>-->
       </FormItem>
       <Button @click="addadmitortijiao">提交</Button>
       <Button @click="handleReset('formLeft')" class="chongzhi2">重置</Button>
     </Form>
   </div>
   <div style="width:30%;position: absolute;top:0px;left:25%;border:1px solid black;float: left;z-index: 300;background-color: white" v-show="showxiugai">
     <button style="float:right;margin: 5px;width:20px;cursor: pointer" @click="showxiugai = !showxiugai">×</button>
     <Form ref="formLeft1" :model="formLeft1" label-position="right" :label-width="100">
       <!--       <FormItem label="主机厂编号" prop="input1">-->
       <!--         <Input v-model="formLeft.input1"/>-->
       <!--       </FormItem>-->
       <!--       <FormItem label="经销商编号" prop="input2">-->
       <!--         <Input v-model="formLeft.input2"/>-->
       <!--       </FormItem>-->
       <FormItem label="姓名" prop="input1">
         <Input v-model="formLeft1.input1"/>
       </FormItem>
       <FormItem label="手机" prop="input2">
         <Input v-model="formLeft1.input2"/>
       </FormItem>
       <FormItem label="用户名" prop="input3">
         <Input v-model="formLeft1.input3"/>
       </FormItem>
       <FormItem label="所属区域" prop="input4">
         <Input v-model="formLeft1.input4"/>
       </FormItem>
       <FormItem label="经销商" prop="input5">
         <Input v-model="formLeft1.input5"/>
       </FormItem>
       <FormItem label="添加时间" prop="input6">
         <DatePicker type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="请选择日期" style="width: 100%" v-model="formLeft1.input6"></DatePicker>
       </FormItem>
       <FormItem label="角色" prop="input7">
         <Select v-model="formLeft1.input7" style="width:100%">
           <Option v-for="item in jueseList" :value="item.value" :key="item.value">{{ item.label }}</Option>
         </Select>
       </FormItem>
       <Button @click="xiugaiuser('formLeft1')">确定</Button>
       <Button @click="handleReset('formLeft1')" style="margin-left: 8px">重置</Button>
     </Form>
   </div>
   <div class="selecttotal">
     <div class="select">
       <!--    <Select v-model="model2" size="small" style="width:100px">-->
       <!--    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
       <!--    </Select>-->
<!--       <div>-->
<!--         选择经销商：-->
<!--         <Select v-model="model1" class="admitorselet" placeholder="选择经销商">-->
<!--           <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
<!--         </Select>-->
<!--       </div>-->
       <div>
         <Input v-model="sousuozi" placeholder="请输入用户姓名/手机/经销商" class="admitorinput" slot="inputtotal"/>
       </div>
       <div><Button>查询</Button></div>
     </div>
     <div class="select1">
       <div><Button @click="addadmitor">添加用户</Button></div>
<!--       <div><Button>删除</Button></div>-->
     </div>
   </div>
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

       <template slot-scope="{ row, index }" slot="username">
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
       <template slot-scope="{ row, index }" slot="juese">
         <Input type="text" v-model="editjuese" v-if="editIndex === index" />
         <span v-else>{{ row.juese }}</span>
       </template>
       <template slot-scope="{ row, index }" slot="chongzhimima">
         <Button @click="chongzhimima(row,index)">重置密码</Button>
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
   </div>
<!--   <UserManagementTable></UserManagementTable>-->
   <div class="admitordiv">
     <Page :total="dataCount" :page-size="pageSize" @on-change="changepage" @on-page-size-change="_nowPageSize" show-total show-sizer show-elevator/>
   </div>


   <div class="showaddlayout3" v-show="showchongzhimima">
     <button class="showaddbutton3" @click="showchongzhimima = !showchongzhimima">×</button>
     <div class="cznr">
       是否确定重置密码为123456:？
       <div class="cznrbutton">
         <Button @click="quedingchongzhi()">确定</Button>
         <Button @click="showchongzhimima=!showchongzhimima" class="chongzhi3">取消</Button>
       </div>

     </div>
   </div>
 </div>
</template>

<script>
// import Pagetotal from "@/components/common/Pagetotal";
// import AddUser from "@/components/fourthcomponents/admitor/AddUser";
// import UserManagementTable from "@/components/fourthcomponents/admitor/UserManagementTable";
export default {
  name: "AdmitorManagement",
  data () {
    return {
      sousuozi:'',
      // adduser:false,
      showadd: false,
      showxiugai: false,
      showchongzhimima:false,
      pageSize: 10,//每页显示多少条
      dataCount: 0,//总条数
      pageCurrent: 1,//当前页
      columns: [
        {
          type: 'index',
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
          slot: 'juese'
        },
        {
          title: '重置密码',
          slot: 'chongzhimima'
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
          addtime: '2021-01-10 16:15:32',
          juese: '全国',
        },
        {
          name: '相机1',
          phone: '相机类型1',
          username: '相机型号1',
          orign: '代码1',
          boss: '店端IP1',
          addtime: '2021-01-10 16:15:32',
          juese: '全国',
        },
        {
          name: '相机1',
          phone: '相机类型1',
          username: '相机型号1',
          orign: '代码1',
          boss: '店端IP1',
          addtime: '2021-01-10 16:15:32',
          juese: '市级',
        },
      ],
      formLeft1: {
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
      },
      nowData:[],
      editIndex: -1,
      editname: '',  // 当前聚焦的输入框的行数
      editphone: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
      editusername: '',  // 第二列输入框
      editorign: '',  // 第三列输入框
      editboss: '',  // 第四列输入框
      editaddtime: '',
      editjuese: '',
      cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      formLeft: {
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
      },
      model1: '',
      model2: '',
      model3: '',
      model4: '',
      jueseList: [
        {
          value: '全国',
          label: '全国'
        },
        {
          value: '省级',
          label: '省级'
        },
        {
          value: '市级',
          label: '市级'
        },
      ],
    }
  },
  components: {
    // UserManagementTable,
    // AddUser,
    // Pagetotal
  },
  methods: {
    xiugaiuser(name) {
      this.showxiugai = !this.showxiugai
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    quedingchongzhi() {

    },
    handleReset (name) {
      this.$refs[name].resetFields();
    },
    chongzhimima(row,index) {
      console.log(row,index)
      this.showchongzhimima = ! this.showchongzhimima
    },
    addadmitor() {
      this.showadd = !this.showadd
    },
    addadmitortijiao() {
      this.showadd = !this.showadd

    },
    handleEdit (row,index) {
      this.formLeft1.input1 = row.name;
      this.formLeft1.input2 = row.phone;
      this.formLeft1.input3 = row.username;
      this.formLeft1.input4 = row.orign;
      this.formLeft1.input5 = row.boss;
      this.formLeft1.input6=row.addtime;
      this.formLeft1.input7=row.juese;
      // this.editIndex = index;
      this.showxiugai = !this.showxiugai;
      console.log(index)
    },
    handleSave (index) {
      this.data[index].name = this.editname;
      this.data[index].phone = this.editphone;
      this.data[index].username = this.editusername;
      this.data[index].orign = this.editorign;
      this.data[index].boss = this.editboss;
      this.data[index].addtime = this.editaddtime;
      this.data[index].juese = this.editjuese;
      this.editIndex = -1;
    },
    remove (index) {
      this.data.splice(index, 1);
    },
    changepage(index) {
      //需要显示开始数据的index,(因为数据是从0开始的，页码是从1开始的，需要-1)
      let _start = (index - 1) * this.pageSize;
      //需要显示结束数据的index
      let _end = index * this.pageSize;
      //截取需要显示的数据
      this.nowData = this.data.slice(_start, _end);
      //储存当前页
      this.pageCurrent = index;
      // console.log(index)
    },
//每页显示的数据条数
    _nowPageSize(index) {
      //实时获取当前需要显示的条数
      this.pageSize = index;
      // console.log(this.data)
      this.nowData = [];
      if(this.pageSize<=this.data.length) {
        for (let i = 0; i < this.pageSize; i++) {
          this.nowData.push(this.data[i]);
        }
      }else {
        for (let i = 0; i < this.data.length; i++) {
          this.nowData.push(this.data[i]);
        }
      }

      // console.log(this.nowData)
    },
  },
  mounted() {

  }
}
</script>

<style scoped>
.selecttotal {
  display: flex;
  justify-content: space-between;
}
.select {
  width: 60%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left: 0px;
}
.select1 {
  display: flex;
  flex-wrap: nowrap;
}
  .admitorselet {
    width:100px
  }
  .admitorinput {
    width: 300px
  }
  .admitordiv {
    position: fixed;
    bottom: 3%;
    right: 3%;
  }



.showaddlayout2 {
  width:30%;
  position: absolute;
  top:0px;
  left:25%;
  border:1px solid black;
  float: left;
  z-index: 300;
  background-color: white
}
.showaddbutton2 {
  float:right;
  margin: 5px;
  width:20px;
  cursor: pointer
}
  .admitorlayout {
    position: relative;
    height: 100%;
  }
.ivu-form-item {
  margin-bottom: 24px;
  vertical-align: top;
  zoom: 1;
  margin-top: 6%;
}
.showaddlayout3 {
  width:20%;
  position: absolute;
  top:20%;
  left:30%;
  border:1px solid black;
  float: left;
  z-index: 300;
  background-color: white
}
.showaddbutton3 {
  float:right;
  margin: 5px;
  width:20px;
  cursor: pointer
}
.chongzhi3 {
  margin-left: 8px
}
  .cznr {
    clear:both;
    display: flex;
    flex-direction: column;
  }
  .cznrbutton {
    margin-top: 3%;
    margin-bottom: 5%;
  }
  .ivu-row {
    width: 100%;
  }
  .sjbj {
    display: flex;
  }
</style>