<template>
 <div class="storestotal">
     <div class="storesdel" v-show="del">
         <div>是否删除该设备？</div>
         <div style="margin-top: 5%">
             <Button type="primary" @click="remove(remove11)">确定</Button>
             <Button style="margin-left: 5%" @click="canceldel">取消</Button>
         </div>
     </div>
   <div class="storesliebiao" v-show="showadd">
     <button class="storesliebiaobutton" @click="showadd = !showadd">×</button>
     <Form ref="formLeft" :model="formLeft" label-position="left" :label-width="100">
<!--       <FormItem label="主机厂编号" prop="input1">-->
<!--         <Input v-model="formLeft.input1"/>-->
<!--       </FormItem>-->
<!--       <FormItem label="经销商编号" prop="input2">-->
<!--         <Input v-model="formLeft.input2"/>-->
<!--       </FormItem>-->
      <FormItem label="*设备类型" prop="input3">
          <Select v-model="formLeft.input3" @on-change="getdevice($event)" >
              <Option v-for="item in devicetype" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
<!--        <Input v-model="formLeft.input3" placeholder="必填"/>-->
      </FormItem>
       <FormItem label="*相机类型" prop="input4">
           <Select v-model="formLeft.input4">
               <Option v-for="item in devicetypeex" :value="item.value" :key="item.value">{{ item.label }}</Option>
           </Select>
<!--         <Input v-model="formLeft.input4" placeholder="必填"/>-->
       </FormItem>
       <FormItem label="*设备编号" prop="input5">
         <Input v-model="formLeft.input5" placeholder="必填"/>
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
       <FormItem label="*设备端口" prop="input10">
         <Input v-model="formLeft.input10" placeholder="必填"/>
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
           <Select v-model="formLeft.input14" style="width:200px">
               <Option v-for="item in xiangmucode" :value="item" :key="item">{{ item}}</Option>
           </Select>
<!--         <Input v-model="formLeft.input14"/>-->
       </FormItem>
       <Button @click="adddevice">提交</Button>
       <Button @click="handleReset('formLeft')" style="margin-left: 8px">重置</Button>
     </Form>
   </div>

   <div style="width:30%;position: absolute;top:0px;left:25%;border:1px solid black;float: left;z-index: 300;background-color: white" v-show="showxiugai">
     <button style="float:right;margin: 5px;width:20px;cursor: pointer" @click="showxiugai = !showxiugai">×</button>
     <Form ref="formLeft1" :model="formLeft1" label-position="left" :label-width="100">
       <!--       <FormItem label="主机厂编号" prop="input1">-->
       <!--         <Input v-model="formLeft.input1"/>-->
       <!--       </FormItem>-->
       <!--       <FormItem label="经销商编号" prop="input2">-->
       <!--         <Input v-model="formLeft.input2"/>-->
       <!--       </FormItem>-->
       <FormItem label="设备类型" prop="input3">
           <Select v-model="formLeft1.input3" @on-change="getdevice($event)" >
<!--               <Option v-for="item in devicetype" :value="item.label" :key="item.value">{{ item.label }}</Option>-->
               <Option v-for="item in devicetype" :value="item.label?item.label:''" :key="item.value">{{ item.label }}</Option>
           </Select>
<!--         <Input v-model="formLeft1.input3"/>-->
       </FormItem>
       <FormItem label="相机类型" prop="input4">
           <Select v-model="formLeft1.input4">
               <Option v-for="item in devicetypeex" :value="item.label?item.label:''" :key="item.value">{{ item.label }}</Option>
           </Select>
<!--         <Input v-model="formLeft1.input4"/>-->
       </FormItem>
       <FormItem label="设备编号" prop="input5">
         <Input v-model="formLeft1.input5"/>
       </FormItem>
       <FormItem label="设备名称" prop="input6">
         <Input v-model="formLeft1.input6"/>
       </FormItem>
       <FormItem label="店端设备编号" prop="input7">
         <Input v-model="formLeft1.input7"/>
       </FormItem>
       <FormItem label="设备型号" prop="input8">
         <Input v-model="formLeft1.input8"/>
       </FormItem>
       <FormItem label="设备ip" prop="input9">
         <Input v-model="formLeft1.input9"/>
       </FormItem>
       <FormItem label="设备端口" prop="input10">
         <Input v-model="formLeft1.input10"/>
       </FormItem>
       <FormItem label="设备用户名" prop="input11">
         <Input v-model="formLeft1.input11"/>
       </FormItem>
       <FormItem label="设备密码" prop="input12">
         <Input v-model="formLeft1.input12"/>
       </FormItem>
       <FormItem label="IS平台标识" prop="input13">
         <Input v-model="formLeft1.input13"/>
       </FormItem>
       <FormItem label="项目编号" prop="input14">
           <Select v-model="formLeft1.input14">
               <Option v-for="item in xiangmucode" :value="item" :key="item">{{item}}</Option>
           </Select>
<!--           <Select v-model="formLeft1.input14" style="width:200px">-->
<!--               <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
<!--           </Select>-->
<!--         <Input v-model="formLeft1.input14"/>-->
       </FormItem>
       <Button @click="xiugaidevice()">确定</Button>
       <Button @click="handleReset('formLeft1')" style="margin-left: 8px">重置</Button>
     </Form>
   </div>
     <div class="storexinxi">
         <div class="messagetotal">
             <div class="storemessage">经销商编号&nbsp;:&nbsp;{{DistributorCode}}</div>
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
                 <div class="fontbuju">经销商项目</div>
                 <Select style="width:100px"  v-model="topic">
                     <Option v-for="item in DistributorProject" :value="item.project_id" :key="item.project_id">{{ item.project_name }}</Option>
                 </Select>
             </div>
             <div class="textlayout">
                 <div class="fontbuju">状态</div>
                 <Select style="width:100px" placeholder="请选择状态">
                     <Option v-for="item in ProjectState" :value="item.value" :key="item.value">{{ item.label }}</Option>
                 </Select>
             </div>
             <div class="textlayout">
                 <div class="fontbuju">级别</div>
                 <Select style="width:100px" placeholder="请选择级别">
                     <Option v-for="item in ProjectLevel" :value="item.value" :key="item.value">{{ item.label }}</Option>
                 </Select>
             </div>
         </div>
     </div>

     <div style="float: right"><Button @click="showadd=!showadd">添加设备</Button></div>
         <div class="tablejxs1">
             <Table :columns="columns" :data="nowData" :height="bgheight">
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
                         <Button @click="remove1(index)">删除</Button>
                     </div>
                 </template>
             </Table>
         </div>

     <div class="storespage">
         <Page :total="dataCount" :page-size="pageSize" :current="pageCurrent" @on-change="changepage" @on-page-size-change="_nowPageSize" show-total show-sizer show-elevator/>
     </div>


<!--   级别-->
<!--   <Select v-model="model4" style="width:100px" placeholder="选择服务站">-->
<!--     <Option v-for="item in city.data" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
<!--   </Select>-->
 </div>
</template>

<script>
// import HostDeviceMessageTable from "@/components/Hostcomponents/HostDeviceMessageTable";
// import Pagetotal from "@/components/common/Pagetotal";

import {getProjectList, getProjectItem, getDealerItem,addDeviceItem,getDeviceList,getDeviceItem,editDeviceItem,deleteDeviceItem} from '@/api/api'
export default {
  name: "Shop",
  data() {
    return {
        bgheight:'500',
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
      ceshi: 'b7a38c88-877d-4e3f-9616-3fdf427c5ff0',
        pageSize: 10,//每页显示多少条
        dataCount: 0,//总条数
        pageCurrent: 1,//当前页
        nowData: [],
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
      xiangmucode:[],
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
          // type: 'selection',
          type: 'index',
          width: 50,
          align: 'center'
        },
        // {
        //   title: '主机厂编号',
        //   slot: 'group_code'
        // },
        // {
        //   title: '设备id',
        //   slot: 'device_id'
        // },
        // {
        //   title: '经销商编号',
        //   slot: 'dealer_code'
        // },
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
        data1:[],
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
      indexx: 1,
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
      formLeft1: {
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
      showxiugai:false,
      adddevice1: [],
      groupcodee:'',
      dealeridd:'',
      deviceiddd:'',
      del:false,
      remove11:"",
      cityList: [
            {
                value: '123',
                label: '123'
            },
            {
                value: '456',
                label: '456'
            },
        ],
        devicetype: [
            {
                value: '1',
                label: '相机'
            },
            {
                value: '2',
                label: 'NVR'
            },
        ],
        // 1入口en,2工位ln,3出口ex,4监控jk,5人脸fs
        devicetypeex: [
            {
                value: '1',
                label: '入口en'
            },
            {
                value: '2',
                label: '工位ln'
            },
            {
                value: '3',
                label: '出口ex'
            },
            {
                value: '4',
                label: '监控jk'
            },
            {
                value: '5',
                label: '人脸fs'
            },
        ],
        shebeileixing:'',
        xiangjileixing: '',
        input33:'',
        input44:'',
    }
  },
  components: {
    // Pagetotal,
  },
  methods: {
      compare(sz){
          sz.sort(function(a, b){
              var x = a.hall_device_code.toLowerCase();
              var y = b.hall_device_code.toLowerCase();
              if (x < y) {return -1;}
              if (x > y) {return 1;}
              return 0;
          });
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

          console.log(this.nowData)
      },
      canceldel() {
          this.del=!this.del
      },
      remove1(index) {
          console.log(index)
          this.remove11 = index
          this.del =!this.del
      },
      xiugaidevice() {
          console.log(this.formLeft1.input3)
          console.log(this.formLeft1.input4)
           if(this.formLeft1.input3 =='相机') {
               this.input33 = 1
           }else {
               this.input33 = 2
           }
           // 1入口en,2工位ln,3出口ex,4监控jk,5人脸fs
           switch (this.formLeft1.input4) {
               case '0':
                   this.input44 = 0;
                   break;
               case undefined:
                   this.input44 = 0;
                   break;
               case "入口en":
                   this.input44 = 1;
                   break;
               case "工位ln":
                   this.input44 = 2;
                   break;
               case "出口ex":
                   this.input44 = 3;
                   break;
               case "监控jk":
                   this.input44 = 4;
                   break;
               case "人脸fs":
                   this.input44 = 5;
                   break;

           }
      editDeviceItem(
              this.formLeft1.input1, this.deviceiddd,this.formLeft1.input2, this.input33, this.input44,
              this.formLeft1.input5, this.formLeft1.input6, this.formLeft1.input7, this.formLeft1.input8,
              this.formLeft1.input9, this.formLeft1.input10, this.formLeft1.input11, this.formLeft1.input12, this.formLeft1.input13,
              this.formLeft1.input14
      ).then(res => {
          console.log(res)
          if(res.data.result_code=='-1') {
              this.$Message.error(res.data.result_msg);
          }else {

              this.showxiugai = !this.showxiugai
              this.$Message.success(res.data.result_msg);
          }
            return res
      }).then(res => {
          console.log(res)
          console.log(this.formLeft1.input3)
          console.log(this.formLeft1.input4)
          this.nowData[this.indexx].group_code = this.formLeft1.input1;
          this.nowData[this.indexx].device_id = this.deviceiddd;
          this.nowData[this.indexx].dealer_code = this.formLeft1.input2;
          this.nowData[this.indexx].device_type =  this.formLeft1.input3;
          this.nowData[this.indexx].device_type_ex= this.formLeft1.input4;
          this.nowData[this.indexx].device_code= this.formLeft1.input5;
          this.nowData[this.indexx].device_name= this.formLeft1.input6;
          this.nowData[this.indexx].hall_device_code= this.formLeft1.input7;
          this.nowData[this.indexx].device_model= this.formLeft1.input8;
          this.nowData[this.indexx].device_ip= this.formLeft1.input9;
          this.nowData[this.indexx].device_port= this.formLeft1.input10;
          this.nowData[this.indexx].device_user= this.formLeft1.input11;
          this.nowData[this.indexx].device_pwd= this.formLeft1.input12;
          this.nowData[this.indexx].isc_code= this.formLeft1.input13;
          this.nowData[this.indexx].project_code= this.formLeft1.input14;
      })

    },
    handleReset (name) {
          console.log(name)
      this.$refs[name].resetFields();
    },
    adddevice() {
      addDeviceItem(this.groupcodee,this.dealeridd,this.formLeft.input3,this.formLeft.input4,this.formLeft.input5,this.formLeft.input6,this.formLeft.input7,
          this.formLeft.input8,this.formLeft.input9,this.formLeft.input10,this.formLeft.input11,
          this.formLeft.input12,this.formLeft.input13,this.formLeft.input14).then(res=> {
            console.log(res)
        // console.log(this.data)
        if(res.data.result_code == -1){
          // alert(res.data.result_content)
            this.$Message.error(res.data.result_msg);
            // this.pageCurrent = 0;
            // console.log(res)
          // this.showadd = !this.showadd
        }else {
            this.$Message.success(res.data.result_msg);
        }

        return res
      }).then(res => {
          console.log(res)
          getDeviceList(this.groupcodee,this.dealeridd).then(res=> {
              console.log(res)
              this.devicelist = []
              res.data.result_content.forEach(item =>{
                  if(item.device_type ==1) {
                      item.device_type = '相机'
                  }else {
                      item.device_type = 'NVR'
                  }
                  // 1入口en,2工位ln,3出口ex,4监控jk,5人脸fs
                  switch (item.device_type_ex) {
                      case 1:
                          item.device_type_ex = '入口en';
                          break;
                      case 2:
                          item.device_type_ex = '工位ln'
                          break;
                      case 3:
                          item.device_type_ex = '出口ex'
                          break;
                      case 4:
                          item.device_type_ex = '监控jk'
                          break;
                      case 5:
                          item.device_type_ex = '人脸fs'
                  }
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
                  })
              this.data = this.devicelist;
              this.compare(this.data)
              // console.log(this.data)
              this.dataCount = this.data.length;
              // this.nowData = this.data;
              this.pageCurrent = 1;
              this.nowData = [];
              if(this.pageSize<=this.data.length) {
                  for (let i = 0; i < this.pageSize; i++) {
                      this.nowData.push(this.data[i]);
                  }
                  console.log(this.nowData)
              }else {
                  for (let i = 0; i < this.data.length; i++) {
                      this.nowData.push(this.data[i]);
                  }
              }
          })
      })
        this.showadd = !this.showadd
        this.formLeft = {
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
        }
    },
    handleEdit (row, index) {
          console.log(row.device_type) //NVR
        console.log(row.device_type_ex) //0
        // if(row.device_type=='NVR'||this.formLeft1.input3 ==2) {
        if(row.device_type=='NVR') {
            this.devicetypeex=[
                {
                    value: '0',
                    label: '0'
                },
            ]
        }
        else {
            this.devicetypeex=[
                {
                    value: '1',
                    label: '入口en'
                },
                {
                    value: '2',
                    label: '工位ln'
                },
                {
                    value: '3',
                    label: '出口ex'
                },
                {
                    value: '4',
                    label: '监控jk'
                },
                {
                    value: '5',
                    label: '人脸fs'
                },
            ]
        }

    // console.log(this.formLeft1.input4)
      this.formLeft1.input1 = row.group_code;
      this.deviceiddd = row.device_id;
      this.formLeft1.input2 = row.dealer_code;
      this.formLeft1.input3 = row.device_type;
      this.formLeft1.input4 = row.device_type_ex;
      this.formLeft1.input5 = row.device_code;
      this.formLeft1.input6= row.device_name;
      this.formLeft1.input7 = row.hall_device_code;
      this.formLeft1.input8 = row.device_model;
      this.formLeft1.input9= row.device_ip;
      this.formLeft1.input10= row.device_port;
      this.formLeft1.input11 = row.device_user;
      this.formLeft1.input12 = row.device_pwd;
      this.formLeft1.input13= row.isc_code;
      this.formLeft1.input14 = row.project_code;
        this.showxiugai = !this.showxiugai
console.log(this.formLeft1)
      this.indexx = index
    },
    remove (index) {
      deleteDeviceItem(this.nowData[index].device_id).then(res=> {
        console.log(res)
          this.nowData.splice(index, 1);
          this.data.splice(this.pageSize*(this.pageCurrent-1)+index,1)
          this.$Message.success(res.data.result_msg);
      })
        this.dataCount = this.dataCount -1
        this.del =!this.del
      // this.data.splice(index, 1);
    },
      getdevice: function (prov) {
          if(prov =='NVR' ||prov =='2') {
              this.devicetypeex=[{
                  value: '0',
                  label: '0'
              }]
          }else {
              this.devicetypeex= [
                  {
                      value: '1',
                      label: '入口en'
                  },
                  {
                      value: '2',
                      label: '工位ln'
                  },
                  {
                      value: '3',
                      label: '出口ex'
                  },
                  {
                      value: '4',
                      label: '监控jk'
                  },
                  {
                      value: '5',
                      label: '人脸fs'
                  },
              ]
          }
      },
  },
  created() {
    // this.topic = this.DistributorProject[0].project_name;
  },
  mounted() {
      this.bgheight= `${document.documentElement.clientHeight * 0.55}`;//默认值
       this.groupcodee = this.$route.query.group_code;
    this.dealeridd = this.$route.query.key_code;
    getProjectList().then(res=>{
      console.log(res)
      this.DistributorProject = res.data.result_content;
      this.topic= this.DistributorProject[0].project_name
        res.data.result_content.forEach(item => {
            this.xiangmucode.push(item.project_code)
        })
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
      // console.log(res)
      this.project_id = res.data.result_content.dealer_id,
          this.DistributorCode = res.data.result_content.dealer_code,
          this.DistributorAbbreviation = res.data.result_content.dealer_name,
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
          if(item.device_type ==1) {
              item.device_type = '相机'
          }else {
              item.device_type = 'NVR'
          }
              // 1入口en,2工位ln,3出口ex,4监控jk,5人脸fs
          switch (item.device_type_ex) {
              case 0 :
                  item.device_type_ex = '0';
                  break;
            case 1:
                item.device_type_ex = '入口en';
                break;
            case 2:
                  item.device_type_ex = '工位ln'
                break;
            case 3:
                  item.device_type_ex = '出口ex'
                break;
            case 4:
                  item.device_type_ex = '监控jk'
                break;
             case 5:
                  item.device_type_ex = '人脸fs'
          }
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
        return this.devicelist
    }).then(res => {
        this.data = res
        // this.data = this.data.sort(this.compare('device_code'))

        this.compare(this.data)
        // console.log(this.data)
        this.dataCount = this.data.length;
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
        console.log(this.nowData)
    })
        .catch(error=> {
      console.log(error)
    })
    getDeviceItem(this.ceshi).then(res=> {
      console.log(res)
    })
  },
  watch: {
    '$route': function (to) {
      this.groupcodee = to.query.group_code;
      this.dealeridd = to.query.key_code;
      getDealerItem(to.query.key_id).then(res => {
        // console.log(res)
        this.project_id = res.data.result_content.dealer_id,
        this.DistributorCode = res.data.result_content.dealer_code,
        this.DistributorAbbreviation = res.data.result_content.dealer_name,
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
          this.nowData = []
          // alert(res.data.resule_content)
        }else {
          this.devicelist=[]
          res.data.result_content.forEach(item =>{
              if(item.device_type ==1) {
                  item.device_type = '相机'
              }else {
                  item.device_type = 'NVR'
              }
              // 1入口en,2工位ln,3出口ex,4监控jk,5人脸fs
              switch (item.device_type_ex) {
                  case 1:
                      item.device_type_ex = '入口en';
                      break;
                  case 2:
                      item.device_type_ex = '工位ln'
                      break;
                  case 3:
                      item.device_type_ex = '出口ex'
                      break;
                  case 4:
                      item.device_type_ex = '监控jk'
                      break;
                  case 5:
                      item.device_type_ex = '人脸fs'
              }
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
          // console.log(this.devicelist)
          this.data = this.devicelist
            // this.nowData = this.data
            this.compare(this.data)
            this.dataCount = this.data.length;
            this.pageCurrent = 1;
            this.nowData = [];
            if(this.pageSize<=this.data.length) {
                for (let i = 0; i < this.pageSize; i++) {
                    this.nowData.push(this.data[i]);
                }
            } else {
                for (let i = 0; i < this.data.length; i++) {
                    this.nowData.push(this.data[i]);
                }
            }
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
      width:80%;
    display: flex;
    justify-content: space-between;
  }
  .storemessage {
    display: inline;
  }
  .shopidtime {
    width: 50%;
    margin-top:0.8%;
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
  .sblx {
    margin-top: 10px;
  }
  .ivu-form-label-left .ivu-form-item-label {
      text-align: left;
      white-space: nowrap;
  }
  .ivu-form .ivu-form-item-label {
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 12px;
      color: #515a6e;
      line-height: 1;
      padding: 10px 1px 10px 0 !important;
      box-sizing: border-box;
      white-space: nowrap !important;
  }
    .fontbuju {
        white-space: nowrap;
    }
    .storestotal {
        position:relative;
        height: 85%;
    }
    .storesdel {
        width:15%;
        padding:3%;
        position: fixed;
        top:40%;
        left:45%;
        border:1px solid black;
        float: left;
        z-index: 300;
        background-color: white
    }
    .storesliebiao {
        width:30%;
        position: absolute;
        top:0px;
        left:25%;
        border:1px solid black;
        float: left;
        z-index: 300;
        background-color: white
    }
    .storesliebiaobutton {
        float:right;
        margin: 5px;
        width:20px;
        cursor: pointer
    }
    .storespage {
        position: fixed;
        bottom: 2%;
        right: 3%;
    }
  .tablejxs1 {
      position: relative;
      clear:both;
      /*height: 90%;*/
      height: 80%;
      /*overflow-y: auto;*/
  }
  .ivu-layout.ivu-layout-has-sider>.ivu-layout, .ivu-layout.ivu-layout-has-sider>.ivu-layout-content {
      overflow-y: hidden !important;
  }
    .biaogegudingkuandu {
        height: 60%;
        overflow: auto;
    }
  .ivu-menu {
      display: block;
      margin: 0;
      padding: 0;
      outline: 0;
      list-style: none;
      color: #515a6e;
      font-size: 14px;
      position: relative;
      z-index: 900;
      height: 400px;
      overflow-y: scroll;
  }
</style>