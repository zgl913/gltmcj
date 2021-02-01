<template>
 <div style="position:relative;">
   <div style="width:30%;position: absolute;top:0px;left:25%;border:1px solid black;float: left;z-index: 300;background-color: white" v-show="showadd">
     <Form ref="formLeft" :model="formLeft" label-position="left" :label-width="100">
       <FormItem label="主机厂编号" prop="input1">
         <Input v-model="formLeft.input1"/>
       </FormItem>
       <FormItem label="经销商编号" prop="input2">
         <Input v-model="formLeft.input2"/>
       </FormItem>
       <FormItem label="设备类型" prop="input3">
         <Input v-model="formLeft.input3"/>
       </FormItem>
       <FormItem label="相机类型" prop="input4">
         <Input v-model="formLeft.input4"/>
       </FormItem>
       <FormItem label="设备编号" prop="input5">
         <Input v-model="formLeft.input5"/>
       </FormItem>
       <FormItem label="设备名称" prop="input6">
         <Input v-model="formLeft.input6"/>
       </FormItem>
       <FormItem label="店端设备编号" prop="input7">
         <Input v-model="formLeft.input7"/>
       </FormItem>
       <FormItem label="设备型号" prop="input8">
         <Input v-model="formLeft.input8"/>
       </FormItem>
       <FormItem label="设备ip" prop="input9">
         <Input v-model="formLeft.input9"/>
       </FormItem>
       <FormItem label="设备端口" prop="input10">
         <Input v-model="formLeft.input10"/>
       </FormItem>
       <FormItem label="设备用户名" prop="input11">
         <Input v-model="formLeft.input11"/>
       </FormItem>
       <FormItem label="设备密码" prop="input12">
         <Input v-model="formLeft.input12"/>
       </FormItem>
       <FormItem label="IS平台标识" prop="input13">
         <Input v-model="formLeft.input13"/>
       </FormItem>
       <FormItem label="项目编号" prop="input14">
         <Input v-model="formLeft.input14"/>
       </FormItem>
       <Button @click="adddevice">提交</Button>
       <Button @click="handleReset('formLeft')" style="margin-left: 8px">Reset</Button>
     </Form>
   </div>
   <div class="messagetotal">
     <div class="storemessage">经销商代码&nbsp;:&nbsp;{{DistributorCode}}</div>
     <div class="storemessage">经销商简称&nbsp;:&nbsp;{{DistributorAbbreviation}}</div>
     <div class="storemessage">经销商全称&nbsp;:&nbsp;{{DistributorFullname}}</div>
     <div class="storemessage">经销商地址&nbsp;:&nbsp;{{DistributorAddress}}</div>
     <div class="storemessage">店端服务器IP&nbsp;:&nbsp;{{ShopID}}</div>
   </div>
   <div class="shopidtime">
     <div class="textlayout"><div>经销商店端TV号&nbsp;:&nbsp;</div><Input style="width: 60%;"/></div>
     <div class="storemessage">工作开始时间&nbsp;:&nbsp;{{WorkStartTime}}</div>
     <div class="storemessage">工作结束时间&nbsp;:&nbsp;{{WorkEndtTime}}</div>
   </div>
   <div class="shopidtime">
     <div class="textlayout">
       <div>经销商项目</div>
       <Select style="width:100px"  v-model="topic">
         <Option v-for="item in DistributorProject" :value="item.project_id" :key="item.project_id">{{ item.project_name }}</Option>
       </Select>
     </div>
     <div class="textlayout">
       <div>状态</div>
       <Select style="width:100px" placeholder="请选择状态">
         <Option v-for="item in ProjectState" :value="item.value" :key="item.value">{{ item.label }}</Option>
       </Select>
     </div>
     <div class="textlayout">
       <div>级别</div>
       <Select style="width:100px" placeholder="请选择级别">
         <Option v-for="item in ProjectLevel" :value="item.value" :key="item.value">{{ item.label }}</Option>
       </Select>
     </div>
   </div>
   <div style="margin-top: 20px">
     <div style="float: right"><Button @click="showadd=!showadd">添加设备</Button></div>
     <div style="clear:both">
       <Table :columns="columns" :data="data">
         <template slot-scope="{ row, index }" slot="group_code">
           <Input type="text" v-model="editgroup_code" v-if="editIndex === index" />
           <span v-else>{{ row.group_code }}</span>
         </template>

<!--         <template slot-scope="{ row, index }" slot="device_id">-->
<!--           <Input type="text" v-model="editdevice_id" v-if="editIndex === index" />-->
<!--           <span v-else>{{ row.device_id }}</span>-->
<!--         </template>-->

         <template slot-scope="{ row, index }" slot="dealer_code">
           <Input type="text" v-model="editdealer_code" v-if="editIndex === index" />
           <span v-else>{{row.dealer_code}}</span>
         </template>

         <template slot-scope="{ row, index }" slot="device_type">
           <Input type="text" v-model="editdevice_type" v-if="editIndex === index" />
           <span v-else>{{ row.device_type }}</span>
         </template>

         <template slot-scope="{ row, index }" slot="device_type_ex">
           <Input type="text" v-model="editdevice_type_ex" v-if="editIndex === index" />
           <span v-else>{{ row.device_type_ex }}</span>
         </template>
         <template slot-scope="{ row, index }" slot="device_code">
           <Input type="text" v-model="editdevice_code" v-if="editIndex === index" />
           <span v-else>{{ row.device_code }}</span>
         </template>
         <template slot-scope="{ row, index }" slot="device_name">
           <Input type="text" v-model="editdevice_name" v-if="editIndex === index" />
           <span v-else>{{ row.device_name }}</span>
         </template>
         <template slot-scope="{ row, index }" slot="hall_device_code">
           <Input type="text" v-model="edithall_device_code" v-if="editIndex === index" />
           <span v-else>{{ row.hall_device_code }}</span>
         </template>
         <template slot-scope="{ row, index }" slot="device_model">
           <Input type="text" v-model="editdevice_model" v-if="editIndex === index" />
           <span v-else>{{ row.device_model}}</span>
         </template>
         <template slot-scope="{ row, index }" slot="device_ip">
           <Input type="text" v-model="editdevice_ip" v-if="editIndex === index" />
           <span v-else>{{ row.device_ip}}</span>
         </template>
         <template slot-scope="{ row, index }" slot="device_port">
           <Input type="text" v-model="editdevice_port" v-if="editIndex === index" />
           <span v-else>{{ row.device_port }}</span>
         </template>
         <template slot-scope="{ row, index }" slot="device_user">
           <Input type="text" v-model="editdevice_user" v-if="editIndex === index" />
           <span v-else>{{ row.device_user}}</span>
         </template>
         <template slot-scope="{ row, index }" slot="device_pwd">
           <Input type="text" v-model="editdevice_pwd" v-if="editIndex === index" />
           <span v-else>{{ row.device_pwd}}</span>
         </template>
         <template slot-scope="{ row, index }" slot="isc_code">
           <Input type="text" v-model="editisc_code" v-if="editIndex === index" />
           <span v-else>{{ row.isc_code}}</span>
         </template>
         <template slot-scope="{ row, index }" slot="project_code">
           <Input type="text" v-model="editproject_code" v-if="editIndex === index" />
           <span v-else>{{ row.project_code}}</span>
         </template>

         <template slot-scope="{ row, index }" slot="operation">
           <div v-if="editIndex === index">
             <Button @click="handleSave(row,index)">保存</Button>
             <Button @click="editIndex = -1">取消</Button>
           </div>
           <div v-else>
             <Button @click="handleEdit(row, index)">修改</Button>
             <Button @click="remove(index)">删除</Button>
           </div>
         </template>
       </Table>
     </div>
     <div style="float:right;margin-top: 20px;">
       <Pagetotal></Pagetotal>
     </div>
   </div>


<!--   级别-->
<!--   <Select v-model="model4" style="width:100px" placeholder="选择服务站">-->
<!--     <Option v-for="item in city.data" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
<!--   </Select>-->
 </div>
</template>

<script>
// import HostDeviceMessageTable from "@/components/Hostcomponents/HostDeviceMessageTable";
import Pagetotal from "@/components/common/Pagetotal";

import {getProjectList, getProjectItem, getDealerItem,addDeviceItem,getDeviceList,editDeviceItem,deleteDeviceItem} from '@/api/api'
export default {
  name: "Shop",
  data() {
    return {
      key_id:'',
      group_code:'',
      devicelist:[],
      project_id:"1b124e5c-531c-11eb-bf14-e8d8d1ab6579",
      DistributorCode: '经销商代码',
      DistributorAbbreviation: '经销商简称',
      DistributorFullname: '经销商全称',
      DistributorAddress: '经销商地址',
      ShopID: '店端服务器IP',
      WorkStartTime: '工作开始时间',
      WorkEndtTime: '工作结束时间',
      // DistributorProject: [
      //   {
      //     value: 'project1',
      //     label: '透明车间',
      //   },
      //   {
      //     value: 'project2',
      //     label: '不透明车间',
      //   },
      // ],
      DistributorProject: [],
      topic:'',
      ProjectState: [
        {
          value: 'State1',
          label: '正常',
        },
        {
          value: 'State2',
          label: '不正常',
        },
      ],
      ProjectLevel: [
        {
          value: 'Level1',
          label: 'A级别',
        },
        {
          value: 'Level2',
          label: 'B级别',
        },
        {
          value: 'Level3',
          label: 'C级别',
        },
      ],
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '主机厂编号',
          slot: 'group_code'
        },
        // {
        //   title: '设备id',
        //   slot: 'device_id'
        // },
        {
          title: '经销商编号',
          slot: 'dealer_code'
        },
        {
          title: '设备类型',
          slot: 'device_type'
        },
        {
          title: '相机类型',
          slot: 'device_type_ex'
        },
        {
          title: '设备编号',
          slot: 'device_code'
        },
        {
          title: '设备名称',
          slot: 'device_name'
        },
        {
          title: '店端设备编号',
          slot: 'hall_device_code'
        },
        {
          title: '设备型号',
          slot: 'device_model'
        },
        {
          title: '设备IP',
          slot: 'device_ip'
        },
        {
          title: '设备端口',
          slot: 'device_port'
        },
        {
          title: '设备用户名',
          slot: 'device_user'
        },
        {
          title: '设备密码',
          slot: 'device_pwd'
        },
        {
          title: 'IS平台标识',
          slot: 'isc_code'
        },
        {
          title: '项目编号',
          slot: 'project_code'
        },
        {
          title: '操作',
          slot: 'operation'
        }
      ],
      data:[],
      editIndex: -1,
      editgroup_code: '',  // 当前聚焦的输入框的行数
      editdevice_id: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
      editdealer_code: '',  // 第二列输入框
      editdevice_type: '',  // 第三列输入框
      editdevice_type_ex: '',  // 第四列输入框
      editdevice_code: '',  // 第四列输入框
      editdevice_name: '',  // 第四列输入框
      edithall_device_code: '',  // 第四列输入框
      editdevice_model: '',  // 第四列输入框
      editdevice_ip: '',  // 第四列输入框
      editdevice_port: '',  // 第四列输入框
      editdevice_user: '',  // 第四列输入框
      editdevice_pwd: '',  // 第四列输入框
      editisc_code: '',  // 第四列输入框
      editproject_code: '',  // 第四列输入框
      formLeft: {
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        input10: '',
        input11: '',
        input12: '',
        input13: '',
        input14: '',
      },
      showadd:false,
    }
  },
  components: {
    Pagetotal,
  },
  methods: {
    handleReset (name) {
      this.$refs[name].resetFields();
    },
    adddevice() {
      addDeviceItem(this.formLeft.input1,this.formLeft.input2,this.formLeft.input3,this.formLeft.input4,this.formLeft.input5,this.formLeft.input6,this.formLeft.input7,
          this.formLeft.input8,this.formLeft.input9,this.formLeft.input10,this.formLeft.input11,this.formLeft.input12,this.formLeft.input13,this.formLeft.input14).then(res=> {
            console.log(res)
        if(res.data.result_code == -1){
          alert(res.data.result_content)
        }
      }).catch(error=> {
        console.log(error)
      })
    },
    handleEdit (row, index) {
      this.editgroup_code = row.group_code;
      this.editdevice_id = row.device_id;
      this.editdealer_code = row.dealer_code;
      this.editdevice_type = row.device_type;
      this.editdevice_type_ex = row.device_type_ex;
      this.editdevice_code = row.device_code;
      this.editdevice_name = row.device_name;
      this.edithall_device_code = row.hall_device_code;
      this.editdevice_model = row.device_model;
      this.editdevice_ip = row.device_ip;
      this.editdevice_port = row.device_port;
      this.editdevice_user = row.device_user;
      this.editdevice_pwd = row.device_pwd;
      this.editisc_code = row.isc_code;
      this.editproject_code = row.project_code;
      this.editIndex = index;
    },
    handleSave (row,index) {
      editDeviceItem(
      this.editgroup_code, this.editdevice_id, this.editdealer_code, this.editdevice_type,
          this.editdevice_type_ex, this.editdevice_code, this.editdevice_name, this.edithall_device_code,
          this.editdevice_model, this.editdevice_ip, this.editdevice_port, this.editdevice_user, this.editdevice_pwd,
          this.editisc_code, this.editproject_code,
      )
      this.data[index].group_code = this.editgroup_code;
      this.data[index].device_id = this.editdevice_id;
      this.data[index].dealer_code = this.editdealer_code;
      this.data[index].device_type = this.editdevice_type;
      this.data[index].device_type_ex= this.editdevice_type_ex;
      this.data[index].device_code= this.editdevice_code;
      this.data[index].device_name= this.editdevice_name;
      this.data[index].hall_device_code= this.edithall_device_code;
      this.data[index].device_model= this.editdevice_model;
      this.data[index].device_ip= this.editdevice_ip;
      this.data[index].device_port= this.editdevice_port;
      this.data[index].device_user= this.editdevice_user;
      this.data[index].device_pwd= this.editdevice_pwd;
      this.data[index].isc_code= this.editisc_code;
      this.data[index].project_code= this.editproject_code;
      this.editIndex = -1;
    },
    remove (index) {
      deleteDeviceItem(this.data[index].device_id).then(res=> {
        console.log(res)
      })
      this.data.splice(index, 1);
    }
  },
  created() {
    // this.topic = this.DistributorProject[0].project_name;
  },
  mounted() {
    // getGroupList().then(res=>{
    //   console.log(res)
    // });
    getProjectList().then(res=>{
      // console.log(res)
      this.DistributorProject = res.data.result_content;
      this.topic= this.DistributorProject[0].project_name
      // console.log(this.DistributorProject)
      // console.log(this.topic)
    }).catch(error=> {
      console.log(error)
    })
    getProjectItem(this.project_id).then(res=>{
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
    getDealerItem(this.$route.query.key_id).then(res => {
      console.log(res)
      this.project_id = res.data.result_content.dealer_id,
          this.DistributorCode = res.data.result_content.dealer_code,
          this.DistributorAbbreviation = res.data.result_content.dealer_id,
          this.DistributorFullname = res.data.result_content.dealer_fullname,
          this.DistributorAddress = res.data.result_content.address,
          this.ShopID = res.data.result_content.server_ip,
          this.WorkStartTime = res.data.result_content.work_start,
          this.WorkEndtTime = res.data.result_content.work_end
    }).catch(error => {
      console.log(error)
    })
    getDeviceList(this.$route.query.group_code,this.$route.query.key_code).then(res=> {
      console.log(res)
      res.data.result_content.forEach(item =>{
            this.devicelist.push({
              group_code: item.group_code,
              device_id: item.device_id,
              dealer_code: item.dealer_code,
              device_type: item.device_type,
              device_type_ex: item.device_type_ex,
              device_code: item.device_code,
              device_name: item.device_name,
              hall_device_code: item.hall_device_code,
              device_model: item.device_model,
              device_ip: item.device_ip,
              device_port: item.device_port,
              device_user: item.device_user,
              device_pwd: item.device_pwd,
              isc_code: item.isc_code,
              project_code: item.project_code,
            })
      }

      )

      this.data = this.devicelist
    }).catch(error=> {
      console.log(error)
    })
  },
  watch: {
    '$route': function (to) {
      getDealerItem(to.query.key_id).then(res => {
        console.log(res)
        this.project_id = res.data.result_content.dealer_id,
        this.DistributorCode = res.data.result_content.dealer_code,
        this.DistributorAbbreviation = res.data.result_content.dealer_id,
        this.DistributorFullname = res.data.result_content.dealer_fullname,
        this.DistributorAddress = res.data.result_content.address,
        this.ShopID = res.data.result_content.server_ip,
        this.WorkStartTime = res.data.result_content.work_start,
        this.WorkEndtTime = res.data.result_content.work_end
      }).catch(error => {
        console.log(error)
      })
      getDeviceList(to.query.group_code,to.query.key_code).then(res=> {
        console.log(res)
        if(res.data.result_code == -1) {
          this.data = []
          // alert(res.data.resule_content)
        }else {
          this.devicelist=[]
          res.data.result_content.forEach(item =>{
                this.devicelist.push({
                  group_code: item.group_code,
                  device_id: item.device_id,
                  dealer_code: item.dealer_code,
                  device_type: item.device_type,
                  device_type_ex: item.device_type_ex,
                  device_code: item.device_code,
                  device_name: item.device_name,
                  hall_device_code: item.hall_device_code,
                  device_model: item.device_model,
                  device_ip: item.device_ip,
                  device_port: item.device_port,
                  device_user: item.device_user,
                  device_pwd: item.device_pwd,
                  isc_code: item.isc_code,
                  project_code: item.project_code,
                })
              }
          )
          console.log(this.devicelist)
          this.data = this.devicelist
        }

      }).catch(error=> {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
  .messagetotal {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
  .storemessage {
    display: inline;
  }
  .shopidtime {
    width: 50%;
    margin-top:20px;
    display: flex;
    justify-content: space-between;
  }
  .textlayout {
    display: flex;
    align-items: stretch;
  }
  .ivu-form-item {
    margin-bottom: 10px;
    vertical-align: top;
    zoom: 1;
  }
  .ivu-form-item[data-v-432f358c] {
    margin-bottom: 10px;
    margin: 3%;
    vertical-align: top;
    zoom: 1;
  }
</style>