<template>
  <div class="jingxiaoshangtotal">
      <div class="jingxiaoshangdele" v-show="del">
          <div>是否删除该经销商？</div>
          <div class="jingxiaoshangbutton">
              <Button type="primary" @click="remove(remove11)">确定</Button>
              <Button class="buttoncancal" @click="canceldel">取消</Button>
          </div>
      </div>
      <div class="jingxiaoshangliebiao" v-show="showxiugaihost">
          <button class="liebiaobutton" @click="showxiugaihost = !showxiugaihost">×</button>
          <Form ref="formLeft3" :model="formLeft3" label-position="left" :label-width="100" >
              <!--        <FormItem label="主机厂编号" prop="input1">-->
              <!--          <Input v-model="formLeft.input1"/>-->
              <!--        </FormItem>-->
              <FormItem label="主机厂代码" prop="input1">
                  <Input v-model="formLeft3.input1"/>
              </FormItem>
              <FormItem label="主机厂全称" prop="input2">
                  <Input v-model="formLeft3.input2"/>
              </FormItem>
              <FormItem label="主机厂简称" prop="input3">
                  <Input v-model="formLeft3.input3"/>
              </FormItem>
              <FormItem label="创建时间" prop="input4">
                  <Row>
                      <TimePicker type="time" placeholder="选择创建时间" style="width: 168px" v-model="formLeft3.input4"></TimePicker>
                  </Row>
                  <!--          <Input v-model="formLeft.input9"/>-->
              </FormItem>
              <FormItem label="编辑时间" prop="input5">
                  <Row>
                      <TimePicker type="time" placeholder="选择编辑时间" style="width: 168px" v-model="formLeft3.input5"></TimePicker>
                  </Row>
                  <!--          <Input v-model="formLeft.input10"/>-->
              </FormItem>
              <Button @click="edithost(formLeft3.input1,formLeft3.input2,formLeft3.input3,formLeft3.input4,formLeft3.input5)">提交</Button>
              <Button @click="handleReset('formLeft3')" class="chongzhi">重置</Button>
          </Form>
      </div>
    <div class="showaddlayout" v-show="showadd">
      <button class="showaddbutton" @click="showadd = !showadd">×</button>
      <Form ref="formLeft" :model="formLeft" label-position="left" :label-width="100" >
<!--        <FormItem label="主机厂编号" prop="input1">-->
<!--          <Input v-model="formLeft.input1"/>-->
<!--        </FormItem>-->
        <FormItem label="经销商代码" prop="input2">
          <Input v-model="formLeft.input2"/>
        </FormItem>
        <FormItem label="经销商简称" prop="input3">
          <Input v-model="formLeft.input3"/>
        </FormItem>
        <FormItem label="经销商全称" prop="input4">
          <Input v-model="formLeft.input4"/>
        </FormItem>
        <FormItem label="地址" prop="input5">
          <Input v-model="formLeft.input5"/>
        </FormItem>
        <FormItem label="站区" prop="input13">
          <Select size="small" style="width: 30%"
                  v-model="selectProv"
                  placeholder="请选择省份"
                  @on-change="getProv($event)">
              <Option
                      v-for="item in provs"
                      :label="item.label"
                      :value="item.value"
                      :key="item.value">
              </Option>
          </Select>
        </FormItem>
        <FormItem label="" prop="input14">
          <Select size="small" style="width: 30%"
                  v-model="selectCity"
                  placeholder="请选择城市"
                  @on-change="getCity($event)">
              <Option
                      v-for="item in citys"
                      :label="item.label"
                      :value="item.value"
                      :key="item.value">
              </Option>
          </Select>
        </FormItem>
        <FormItem label="店端服务器IP" prop="input6">
          <Input v-model="formLeft.input6"/>
        </FormItem>
        <FormItem label="远程tv号" prop="input7">
          <Input v-model="formLeft.input7"/>
        </FormItem>
        <FormItem label="远程tv密码" prop="input8">
          <Input v-model="formLeft.input8"/>
        </FormItem>
        <FormItem label="工作开始时间" prop="input9">
            <Row>
                <TimePicker type="time" placeholder="选择开始时间" style="width: 168px" v-model="formLeft.input9"></TimePicker>
            </Row>
<!--          <Input v-model="formLeft.input9"/>-->
        </FormItem>
        <FormItem label="工作结束时间" prop="input10">
            <Row>
                <TimePicker type="time" placeholder="选择结束时间" style="width: 168px" v-model="formLeft.input10"></TimePicker>
            </Row>
<!--          <Input v-model="formLeft.input10"/>-->
        </FormItem>
        <FormItem label="经销商层级" prop="input11">
          <Input v-model="formLeft.input11"/>
        </FormItem>
        <FormItem label="项目代码" prop="input12">
            <Select v-model="formLeft.input12">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
<!--          <Input v-model="formLeft.input12"/>-->
        </FormItem>
        <Button @click="addjxs">提交</Button>
        <Button @click="handleReset('formLeft')" class="chongzhi">重置</Button>
      </Form>
    </div>

    <div style="width:30%;position: absolute;top:0px;left:25%;border:1px solid black;float: left;z-index: 300;background-color: white" v-show="showxiugai">
      <button style="float:right;margin: 5px;width:20px;cursor: pointer" @click="showxiugai = !showxiugai">×</button>
      <Form ref="formLeft1" :model="formLeft1" label-position="left" :label-width="100" >
        <FormItem label="经销商简称" prop="input1">
          <Input v-model="formLeft1.input1"/>
        </FormItem>
        <FormItem label="经销商全称" prop="input2">
          <Input v-model="formLeft1.input2"/>
        </FormItem>
        <FormItem label="地址" prop="input3">
          <Input v-model="formLeft1.input3"/>
        </FormItem>
        <FormItem label="店端服务器IP" prop="input4">
          <Input v-model="formLeft1.input4"/>
        </FormItem>
        <FormItem label="远程tv号" prop="input5">
          <Input v-model="formLeft1.input5"/>
        </FormItem>
        <FormItem label="远程tv密码" prop="input6">
          <Input v-model="formLeft1.input6"/>
        </FormItem>
        <FormItem label="工作开始时间" prop="input7">
            <Row>
                <TimePicker type="time" placeholder="选择开始时间" style="width: 168px" v-model="formLeft1.input7"></TimePicker>
            </Row>
<!--          <Input v-model="formLeft1.input7"/>-->
        </FormItem>
        <FormItem label="工作结束时间" prop="input8">
            <Row>
                <TimePicker type="time" placeholder="选择结束时间" style="width: 168px" v-model="formLeft1.input8"></TimePicker>
            </Row>
<!--          <Input v-model="formLeft1.input8"/>-->
        </FormItem>
        <FormItem label="经销商层级" prop="input9">
          <Input v-model="formLeft1.input9"/>
        </FormItem>
        <FormItem label="项目代码" prop="input10">
            <Select v-model="formLeft1.input10" style="width:200px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
<!--          <Input v-model="formLeft1.input10"/>-->
        </FormItem>
        <Button @click="xiugaijxs('formLeft1')">确定</Button>
        <Button @click="handleReset('formLeft1')" class="chongzhi">重置</Button>
      </Form>
    </div>

    <div class="messagetotal">
      <div class="storemessage">主机厂代码&nbsp;:&nbsp;{{host_code}}</div>
      <div class="storemessage">主机厂全称&nbsp;:&nbsp;{{host_fullname}}</div>
      <div class="storemessage">主机厂简称&nbsp;:&nbsp;{{host_name}}</div>
<!--      <div class="storemessage">主机厂ID&nbsp;:&nbsp;{{host_id}}</div>-->
<!--      <div class="storemessage">主机厂状态&nbsp;:&nbsp;{{host_state}}</div>-->
      <div class="storemessage">创建时间&nbsp;:&nbsp;{{host_createtime}}</div>
      <div class="storemessage">编辑时间&nbsp;:&nbsp;{{host_edittime}}</div>
      <Button @click="showxiugaihost = !showxiugaihost">编辑主机厂</Button>
    </div>
    <div style="float: right"><Button @click="showadd=!showadd">添加经销商</Button></div>
    <div class="tablejxs">
    <Table :columns="columns" :data="nowData">
<!--      <template slot-scope="{ row, index }" slot="group_code">-->
<!--        <Input type="text" v-model="editgroup_code" v-if="editIndex === index" />-->
<!--        <span v-else>{{ row.group_code }}</span>-->
<!--      </template>-->

<!--      <template slot-scope="{ row, index }" slot="dealer_id">-->
<!--        <Input type="text" v-model="editdealer_id" v-if="editIndex === index" />-->
<!--        <span v-else>{{ row.dealer_id }}</span>-->
<!--      </template>-->

      <template slot-scope="{ row, index }" slot="dealer_code">
        <Input type="text" v-model="editdealer_code" v-if="editIndex === index" />
        <span v-else s>{{row.dealer_code}}</span>
      </template>

      <template slot-scope="{ row, index }" slot="dealer_name">
        <Input type="text" v-model="editdealer_name" v-if="editIndex === index" />
        <span v-else>{{ row.dealer_name }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="dealer_fullname">
        <Input type="text" v-model="editdealer_fullname" v-if="editIndex === index" />
        <span v-else>{{ row.dealer_fullname }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="address">
        <Input type="text" v-model="editaddress" v-if="editIndex === index" />
        <span v-else>{{ row.address }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="server_ip">
        <Input type="text" v-model="editserver_ip" v-if="editIndex === index" />
        <span v-else>{{ row.server_ip }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="tv_number">
        <Input type="text" v-model="edittv_number" v-if="editIndex === index" />
        <span v-else>{{ row.tv_number }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="tv_pwd">
        <Input type="text" v-model="edittv_pwd" v-if="editIndex === index" />
        <span v-else>{{ row.tv_pwd }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="work_start">
        <Input type="text" v-model="editwork_start" v-if="editIndex === index" />
        <span v-else>{{ row.work_start }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="work_end">
        <Input type="text" v-model="editwork_end" v-if="editIndex === index" />
        <span v-else>{{ row.work_end }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="dealer_level">
        <Input type="text" v-model="editdealer_level" v-if="editIndex === index" />
        <span v-else>{{ row.dealer_level }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="project_code">
        <Input type="text" v-model="editproject_code" v-if="editIndex === index" />
        <span v-else>{{ row.project_code }}</span>
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
      <div class="jingxiaoshangpage" >
          <Page :total="dataCount" :page-size="pageSize" @on-change="changepage" @on-page-size-change="_nowPageSize" show-total show-sizer show-elevator/>
      </div>
  </div>
</template>

<script>
import {addDealerItem,getDealerList,getGroupItem,getDealerItem,editDealerItem,deleteDealerItem} from "@/api/api";
// import Pagetotal from "../../common/Pagetotal";
export default {
  name: "Jingxiaoshang",
  data() {
    return {
      tabledata:[],
      jxsname: [],
      dealerid: [],
      host_code:'',
      host_fullname:'',
      host_name:'',
      host_id:'',
      host_state:'',
      host_createtime:'',
      host_edittime:'',
      jingxiaoshangcode:'',
      jingxiaoshangid: '',
        pageSize: 10,//每页显示多少条
        dataCount: 0,//总条数
        pageCurrent: 1,//当前页
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
        //   title: '经销商id',
        //   slot: 'dealer_id'
        // },
        {
          title: '经销商代码',
          slot: 'dealer_code'
        },
        {
          title: '经销商简称',
          slot: 'dealer_name'
        },
        {
          title: '经销商全称',
          slot: 'dealer_fullname'
        },
        {
          title: '地址',
          slot: 'address'
        },
        {
          title: '店端服务器IP',
          slot: 'server_ip'
        },
        {
          title: '远程tv号',
          slot: 'tv_number'
        },
        {
          title: '远程tv密码',
          slot: 'tv_pwd'
        },
        {
          title: '工作开始时间',
          slot: 'work_start'
        },
        {
          title: '工作结束时间',
          slot: 'work_end'
        },
        {
          title: '经销商层级',
          slot: 'dealer_level'
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
      data: [],
        nowData: [],
      editIndex: -1,
      editgroup_code: '',  // 当前聚焦的输入框的行数
      editdealer_id: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
      editdealer_code: '',  // 第二列输入框
      editdealer_name: '',  // 第三列输入框
      editdealer_fullname: '',  // 第四列输入框
      editaddress: '',  // 第四列输入框
      editserver_ip: '',  // 第四列输入框
      edittv_number: '',  // 第四列输入框
      edittv_pwd: '',  // 第四列输入框
      editwork_start: '',  // 第四列输入框
      editwork_end: '',  // 第四列输入框
      editdealer_level: '',  // 第四列输入框
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
      },
        formLeft2: {
          input1: '',
          input2: '',
          input3: '',
          input4: '',
          input5: '',
        },
        formLeft3: {
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
        },
      showadd:false,
      showxiugai:false,
      dealeridnumber: '',
      indexx: 1,
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
        showxiugaihost:false,
        provs:[{label:"北京市",value:"北京市"},
            {label:"天津市",value:"天津市"},
            {label:"河北省",value:"河北省"},
            {label:"山西省",value:"山西省"},
            {label:"内蒙古自治区",value:"内蒙古自治区"},
            {label:"辽宁省",value:"辽宁省"},
            {label:"吉林省",value:"吉林省"},
            {label:"黑龙江省",value:"黑龙江省"},
            {label:"上海市",value:"上海市"},
            {label:"江苏省",value:"江苏省"},
            {label:"浙江省",value:"浙江省"},
            {label:"安徽省",value:"安徽省"},
            {label:"福建省",value:"福建省"},
            {label:"江西省",value:"江西省"},
            {label:"山东省",value:"山东省"},
            {label:"河南省",value:"河南省"},
            {label:"湖北省",value:"湖北省"},
            {label:"湖南省",value:"湖南省"},
            {label:"广东省",value:"广东省"},
            {label:"广西壮族自治区",value:"广西壮族自治区"},
            {label:"海南省",value:"海南省"},
            {label:"重庆市",value:"重庆市"},
            {label:"四川省",value:"四川省"},
            {label:"贵州省",value:"贵州省"},
            {label:"云南省",value:"云南省"},
            {label:"西藏自治区",value:"西藏自治区"},
            {label:"陕西省",value:"陕西省"},
            {label:"甘肃省",value:"甘肃省"},
            {label:"青海省",value:"青海省"},
            {label:"宁夏回族自治区",value:"宁夏回族自治区"},
            {label:"新疆维吾尔自治区",value:"新疆维吾尔自治区"},
            {label:"台湾省",value:"台湾省"},
            {label:"香港特别行政区",value:"香港特别行政区"},
            {label:"澳门特别行政区",value:"澳门特别行政区"}] ,
        citys: [],
        selectProv: '',
        selectCity: '',
        tempCity:[],
        allCity:[],
    }
  },
  methods: {
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

      canceldel() {
          this.del=!this.del
      },
      remove1(index) {
          this.remove11 = index
          this.del =!this.del
      },
    handleReset (name) {
      this.$refs[name].resetFields();
    },
      async fn1(data){
          for (let i = 0; i < data.length; i++) {
              await this.fn(data[i])

          }
      },
      fn(dealerid) {
          getDealerItem(dealerid).then(res => {
              // var jingxiaoshanglist = [];
              console.log(res)
              this.tabledata.push({
                  group_code: res.data.result_content.group_code,
                  dealer_id: res.data.result_content.dealer_id,
                  dealer_code: res.data.result_content.dealer_code,
                  dealer_name: res.data.result_content.dealer_name,
                  dealer_fullname: res.data.result_content.dealer_fullname,
                  address: res.data.result_content.address,
                  server_ip: res.data.result_content.server_ip,
                  tv_number: res.data.result_content.tv_number,
                  tv_pwd: res.data.result_content.tv_pwd,
                  work_start: res.data.result_content.work_start,
                  work_end: res.data.result_content.work_end,
                  dealer_level: res.data.result_content.dealer_level,
                  project_code: res.data.result_content.project_code,
              })
              // jingxiaoshanglist.push(res.data.result_content.dealer_name)
              // return jingxiaoshanglist
          }).catch(error=> {
              console.log(error)
          })
      },
    addjxs() {
      addDealerItem(this.jingxiaoshangcode,this.formLeft.input2,this.formLeft.input3,this.formLeft.input4,this.formLeft.input5,this.formLeft.input6,this.formLeft.input7,
          this.formLeft.input8,this.formLeft.input9,this.formLeft.input10,this.formLeft.input11,this.formLeft.input12).then(res =>{
        // console.log(JSON.stringify(res))
        // console.log(this.data)

        // console.log(this.data)

        // else {
        //   this.showadd = !this.showadd
        //   this.data.push({
        //     group_code: this.jingxiaoshangcode,
        //     dealer_code: this.formLeft.input2,
        //     dealer_name: this.formLeft.input3,
        //     dealer_fullname: this.formLeft.input4,
        //     address: this.formLeft.input5,
        //     server_ip: this.formLeft.input6,
        //     tv_number: this.formLeft.input7,
        //     tv_pwd: this.formLeft.input8,
        //     work_start: this.formLeft.input9,
        //     work_end: this.formLeft.input10,
        //     dealer_level: this.formLeft.input11,
        //     project_code: this.formLeft.input12,
        //   })
        //     this.$Message.success(res.data.result_msg);
        //   // alert(res.data.result_msg)
        //
        // }
          console.log(res)
          return res
      }).then(res => {
          if(res.data.result_code == -1){
              // console.log(res)
              this.$Message.error(res.data.result_msg);
              // this.showadd = !this.showadd
          }else {
              this.showadd = !this.showadd
              this.$Message.success(res.data.result_msg)
              console.log(res)
              getDealerList(this.jingxiaoshangcode).then(res => {
                  this.dealerid = []
                  if(res.data.result_content) {
                      res.data.result_content.forEach(item => {
                          this.dealerid.push(item.dealer_id)
                      })
                  }
                  console.log(this.dealerid)
                  return this.dealerid
              }).then(data => {
                  this.tabledata= []
                  this.fn1(data)
                  console.log(this.tabledata)
                  return this.tabledata
              }).then(res => {
                  this.nowData = res
                  console.log(this.nowData)
              })
          }

      }).catch(error => {
        console.log(error)
      })

    },
    xiugaijxs (name){
      editDealerItem(this.formLeft1.input11,this.dealeridnumber,this.formLeft1.input12,this.formLeft1.input1,this.formLeft1.input2,this.formLeft1.input3,
              this.formLeft1.input4,this.formLeft1.input5,this.formLeft1.input6,this.formLeft1.input7,this.formLeft1.input8,this.formLeft1.input9,this.formLeft1.input10).then(res => {
        console.log(res)
      }).catch(error=> {
        console.log(error)
      })
      this.data[this.indexx].group_code = this.formLeft1.input11;
      // this.data[index].dealer_id = this.editdealer_id;
      this.data[this.indexx].dealer_code = this.formLeft1.input12;
      this.data[this.indexx].dealer_name = this.formLeft1.input1;
      this.data[this.indexx].dealer_fullname= this.formLeft1.input2;
      this.data[this.indexx].address= this.formLeft1.input3;
      this.data[this.indexx].server_ip= this.formLeft1.input4;
      this.data[this.indexx].tv_number= this.formLeft1.input5;
      this.data[this.indexx].tv_pwd= this.formLeft1.input6;
      this.data[this.indexx].work_start= this.formLeft1.input7;
      this.data[this.indexx].work_end= this.formLeft1.input8;
      this.data[this.indexx].dealer_level= this.formLeft1.input9;
      this.data[this.indexx].project_code= this.formLeft1.input10;
      // this.editIndex = -1;
      this.showxiugai = !this.showxiugai
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
      edithost(input1,input2,input3,input4,input5) {
          this.host_code = input1;
          this.host_fullname = input2;
          this.host_name = input3;
          this.host_createtime = input4;
          this.host_edittime = input5;
          this.showxiugaihost = !this.showxiugaihost
    },
    handleEdit (row,index) {
      // this.editgroup_code = row.group_code;
      // // this.editdealer_id = row.dealer_id;
      // this.editdealer_code = row.dealer_code;
      // this.editdealer_name = row.dealer_name;
      // this.editdealer_fullname = row.dealer_fullname;
      // this.editaddress = row.address;
      // this.editserver_ip = row.server_ip;
      // this.edittv_number = row.tv_number;
      // this.edittv_pwd = row.tv_pwd;
      // this.editwork_start = row.work_start;
      // this.editwork_end = row.work_end;
      // this.editdealer_level = row.dealer_level;
      // this.editproject_code = row.project_code;
      // this.editIndex = index;
      this.showxiugai = !this.showxiugai
      this.dealeridnumber = row.dealer_id
      this.formLeft1.input1 = row.dealer_name
      this.formLeft1.input2 = row.dealer_fullname
      this.formLeft1.input3 = row.address
      this.formLeft1.input4 = row.server_ip
      this.formLeft1.input5 = row.tv_number
      this.formLeft1.input6 = row.tv_pwd
      this.formLeft1.input7 = row.work_start
      this.formLeft1.input8 = row.work_end
      this.formLeft1.input9 = row.dealer_level
      this.formLeft1.input10 = row.project_code
      this.formLeft1.input11 =row.group_code
      this.formLeft1.input12 = row.dealer_code
      this.indexx = index
    },
    // handleSave (row,index) {
    //
    // },
    remove (index) {
          // console.log(this.data)
          this.del =!this.del
      deleteDealerItem(this.nowData[index].dealer_id).then(res=>{
        // console.log(res)
        // if(res.data.result_code>=0) {
        //   this.data.splice(index, 1);
          this.$Message.success(res.data.result_msg);
        // }else {
        //   this.$Message.success('Fail!');
        // }
              this.nowData.splice(index, 1);
              this.data.splice(this.pageSize*(this.pageCurrent-1)+index,1)
      })

    },
      /*二级联动选择地区*/
      getProv: function (prov) {
          this.tempCity=[];
          this.citys=[];
          this.selectCity='';
          this.allCity=[{
              prov: "北京市",
              label: "北京市"
          }, {
              prov: "天津市",
              label: "天津市"
          }, {
              prov: "河北省",
              label: "石家庄市"
          }, {
              prov: "河北省",
              label: "唐山市"
          }, {
              prov: "河北省",
              label: "秦皇岛市"
          }, {
              prov: "河北省",
              label: "邯郸市"
          }, {
              prov: "河北省",
              label: "邢台市"
          }, {
              prov: "河北省",
              label: "保定市"
          }, {
              prov: "河北省",
              label: "张家口市"
          }, {
              prov: "河北省",
              label: "承德市"
          }, {
              prov: "河北省",
              label: "沧州市"
          }, {
              prov: "河北省",
              label: "廊坊市"
          }, {
              prov: "河北省",
              label: "衡水市"
          }, {
              prov: "山西省",
              label: "太原市"
          }, {
              prov: "山西省",
              label: "大同市"
          }, {
              prov: "山西省",
              label: "阳泉市"
          }, {
              prov: "山西省",
              label: "长治市"
          }, {
              prov: "山西省",
              label: "晋城市"
          }, {
              prov: "山西省",
              label: "朔州市"
          }, {
              prov: "山西省",
              label: "晋中市"
          }, {
              prov: "山西省",
              label: "运城市"
          }, {
              prov: "山西省",
              label: "忻州市"
          }, {
              prov: "山西省",
              label: "临汾市"
          }, {
              prov: "山西省",
              label: "吕梁市"
          }, {
              prov: "内蒙古自治区",
              label: "呼和浩特市"
          }, {
              prov: "内蒙古自治区",
              label: "包头市"
          }, {
              prov: "内蒙古自治区",
              label: "乌海市"
          }, {
              prov: "内蒙古自治区",
              label: "赤峰市"
          }, {
              prov: "内蒙古自治区",
              label: "通辽市"
          }, {
              prov: "内蒙古自治区",
              label: "鄂尔多斯市"
          }, {
              prov: "内蒙古自治区",
              label: "呼伦贝尔市"
          }, {
              prov: "内蒙古自治区",
              label: "巴彦淖尔市"
          }, {
              prov: "内蒙古自治区",
              label: "乌兰察布市"
          }, {
              prov: "内蒙古自治区",
              label: "兴安盟"
          }, {
              prov: "内蒙古自治区",
              label: "锡林郭勒盟"
          }, {
              prov: "内蒙古自治区",
              label: "阿拉善盟"
          }, {
              prov: "辽宁省",
              label: "沈阳市"
          }, {
              prov: "辽宁省",
              label: "大连市"
          }, {
              prov: "辽宁省",
              label: "鞍山市"
          }, {
              prov: "辽宁省",
              label: "抚顺市"
          }, {
              prov: "辽宁省",
              label: "本溪市"
          }, {
              prov: "辽宁省",
              label: "丹东市"
          }, {
              prov: "辽宁省",
              label: "锦州市"
          }, {
              prov: "辽宁省",
              label: "营口市"
          }, {
              prov: "辽宁省",
              label: "阜新市"
          }, {
              prov: "辽宁省",
              label: "辽阳市"
          }, {
              prov: "辽宁省",
              label: "盘锦市"
          }, {
              prov: "辽宁省",
              label: "铁岭市"
          }, {
              prov: "辽宁省",
              label: "朝阳市"
          }, {
              prov: "辽宁省",
              label: "葫芦岛市"
          }, {
              prov: "吉林省",
              label: "长春市"
          }, {
              prov: "吉林省",
              label: "吉林市"
          }, {
              prov: "吉林省",
              label: "四平市"
          }, {
              prov: "吉林省",
              label: "辽源市"
          }, {
              prov: "吉林省",
              label: "通化市"
          }, {
              prov: "吉林省",
              label: "白山市"
          }, {
              prov: "吉林省",
              label: "松原市"
          }, {
              prov: "吉林省",
              label: "白城市"
          }, {
              prov: "吉林省",
              label: "延边朝鲜族自治州"
          }, {
              prov: "黑龙江省",
              label: "哈尔滨市"
          }, {
              prov: "黑龙江省",
              label: "齐齐哈尔市"
          }, {
              prov: "黑龙江省",
              label: "鸡西市"
          }, {
              prov: "黑龙江省",
              label: "鹤岗市"
          }, {
              prov: "黑龙江省",
              label: "双鸭山市"
          }, {
              prov: "黑龙江省",
              label: "大庆市"
          }, {
              prov: "黑龙江省",
              label: "伊春市"
          }, {
              prov: "黑龙江省",
              label: "佳木斯市"
          }, {
              prov: "黑龙江省",
              label: "七台河市"
          }, {
              prov: "黑龙江省",
              label: "牡丹江市"
          }, {
              prov: "黑龙江省",
              label: "黑河市"
          }, {
              prov: "黑龙江省",
              label: "绥化市"
          }, {
              prov: "黑龙江省",
              label: "大兴安岭地区"
          }, {
              prov: "上海市",
              label: "上海市"
          }, {
              prov: "江苏省",
              label: "南京市"
          }, {
              prov: "江苏省",
              label: "无锡市"
          }, {
              prov: "江苏省",
              label: "徐州市"
          }, {
              prov: "江苏省",
              label: "常州市"
          }, {
              prov: "江苏省",
              label: "苏州市"
          }, {
              prov: "江苏省",
              label: "南通市"
          }, {
              prov: "江苏省",
              label: "连云港市"
          }, {
              prov: "江苏省",
              label: "淮安市"
          }, {
              prov: "江苏省",
              label: "盐城市"
          }, {
              prov: "江苏省",
              label: "扬州市"
          }, {
              prov: "江苏省",
              label: "镇江市"
          }, {
              prov: "江苏省",
              label: "泰州市"
          }, {
              prov: "江苏省",
              label: "宿迁市"
          }, {
              prov: "浙江省",
              label: "杭州市"
          }, {
              prov: "浙江省",
              label: "宁波市"
          }, {
              prov: "浙江省",
              label: "温州市"
          }, {
              prov: "浙江省",
              label: "嘉兴市"
          }, {
              prov: "浙江省",
              label: "湖州市"
          }, {
              prov: "浙江省",
              label: "绍兴市"
          }, {
              prov: "浙江省",
              label: "金华市"
          }, {
              prov: "浙江省",
              label: "衢州市"
          }, {
              prov: "浙江省",
              label: "舟山市"
          }, {
              prov: "浙江省",
              label: "台州市"
          }, {
              prov: "浙江省",
              label: "丽水市"
          }, {
              prov: "安徽省",
              label: "合肥市"
          }, {
              prov: "安徽省",
              label: "芜湖市"
          }, {
              prov: "安徽省",
              label: "蚌埠市"
          }, {
              prov: "安徽省",
              label: "淮南市"
          }, {
              prov: "安徽省",
              label: "马鞍山市"
          }, {
              prov: "安徽省",
              label: "淮北市"
          }, {
              prov: "安徽省",
              label: "铜陵市"
          }, {
              prov: "安徽省",
              label: "安庆市"
          }, {
              prov: "安徽省",
              label: "黄山市"
          }, {
              prov: "安徽省",
              label: "滁州市"
          }, {
              prov: "安徽省",
              label: "阜阳市"
          }, {
              prov: "安徽省",
              label: "宿州市"
          }, {
              prov: "安徽省",
              label: "六安市"
          }, {
              prov: "安徽省",
              label: "亳州市"
          }, {
              prov: "安徽省",
              label: "池州市"
          }, {
              prov: "安徽省",
              label: "宣城市"
          }, {
              prov: "福建省",
              label: "福州市"
          }, {
              prov: "福建省",
              label: "厦门市"
          }, {
              prov: "福建省",
              label: "莆田市"
          }, {
              prov: "福建省",
              label: "三明市"
          }, {
              prov: "福建省",
              label: "泉州市"
          }, {
              prov: "福建省",
              label: "漳州市"
          }, {
              prov: "福建省",
              label: "南平市"
          }, {
              prov: "福建省",
              label: "龙岩市"
          }, {
              prov: "福建省",
              label: "宁德市"
          }, {
              prov: "江西省",
              label: "南昌市"
          }, {
              prov: "江西省",
              label: "景德镇市"
          }, {
              prov: "江西省",
              label: "萍乡市"
          }, {
              prov: "江西省",
              label: "九江市"
          }, {
              prov: "江西省",
              label: "新余市"
          }, {
              prov: "江西省",
              label: "鹰潭市"
          }, {
              prov: "江西省",
              label: "赣州市"
          }, {
              prov: "江西省",
              label: "吉安市"
          }, {
              prov: "江西省",
              label: "宜春市"
          }, {
              prov: "江西省",
              label: "抚州市"
          }, {
              prov: "江西省",
              label: "上饶市"
          }, {
              prov: "山东省",
              label: "济南市"
          }, {
              prov: "山东省",
              label: "青岛市"
          }, {
              prov: "山东省",
              label: "淄博市"
          }, {
              prov: "山东省",
              label: "枣庄市"
          }, {
              prov: "山东省",
              label: "东营市"
          }, {
              prov: "山东省",
              label: "烟台市"
          }, {
              prov: "山东省",
              label: "潍坊市"
          }, {
              prov: "山东省",
              label: "济宁市"
          }, {
              prov: "山东省",
              label: "泰安市"
          }, {
              prov: "山东省",
              label: "威海市"
          }, {
              prov: "山东省",
              label: "日照市"
          }, {
              prov: "山东省",
              label: "莱芜市"
          }, {
              prov: "山东省",
              label: "临沂市"
          }, {
              prov: "山东省",
              label: "德州市"
          }, {
              prov: "山东省",
              label: "聊城市"
          }, {
              prov: "山东省",
              label: "滨州市"
          }, {
              prov: "山东省",
              label: "菏泽市"
          }, {
              prov: "河南省",
              label: "郑州市"
          }, {
              prov: "河南省",
              label: "开封市"
          }, {
              prov: "河南省",
              label: "洛阳市"
          }, {
              prov: "河南省",
              label: "平顶山市"
          }, {
              prov: "河南省",
              label: "安阳市"
          }, {
              prov: "河南省",
              label: "鹤壁市"
          }, {
              prov: "河南省",
              label: "新乡市"
          }, {
              prov: "河南省",
              label: "焦作市"
          }, {
              prov: "河南省",
              label: "濮阳市"
          }, {
              prov: "河南省",
              label: "许昌市"
          }, {
              prov: "河南省",
              label: "漯河市"
          }, {
              prov: "河南省",
              label: "三门峡市"
          }, {
              prov: "河南省",
              label: "南阳市"
          }, {
              prov: "河南省",
              label: "商丘市"
          }, {
              prov: "河南省",
              label: "信阳市"
          }, {
              prov: "河南省",
              label: "周口市"
          }, {
              prov: "河南省",
              label: "驻马店市"
          }, {
              prov: "河南省",
              label: "省直辖县级行政区划"
          }, {
              prov: "湖北省",
              label: "武汉市"
          }, {
              prov: "湖北省",
              label: "黄石市"
          }, {
              prov: "湖北省",
              label: "十堰市"
          }, {
              prov: "湖北省",
              label: "宜昌市"
          }, {
              prov: "湖北省",
              label: "襄阳市"
          }, {
              prov: "湖北省",
              label: "鄂州市"
          }, {
              prov: "湖北省",
              label: "荆门市"
          }, {
              prov: "湖北省",
              label: "孝感市"
          }, {
              prov: "湖北省",
              label: "荆州市"
          }, {
              prov: "湖北省",
              label: "黄冈市"
          }, {
              prov: "湖北省",
              label: "咸宁市"
          }, {
              prov: "湖北省",
              label: "随州市"
          }, {
              prov: "湖北省",
              label: "恩施土家族苗族自治州"
          }, {
              prov: "湖北省",
              label: "省直辖县级行政区划"
          }, {
              prov: "湖北省",
              label: "仙桃市"
          }, {
              prov: "湖北省",
              label: "潜江市"
          }, {
              prov: "湖北省",
              label: "天门市"
          }, {
              prov: "湖北省",
              label: "神农架林区"
          }, {
              prov: "湖南省",
              label: "长沙市"
          }, {
              prov: "湖南省",
              label: "株洲市"
          }, {
              prov: "湖南省",
              label: "湘潭市"
          }, {
              prov: "湖南省",
              label: "衡阳市"
          }, {
              prov: "湖南省",
              label: "邵阳市"
          }, {
              prov: "湖南省",
              label: "岳阳市"
          }, {
              prov: "湖南省",
              label: "常德市"
          }, {
              prov: "湖南省",
              label: "张家界市"
          }, {
              prov: "湖南省",
              label: "益阳市"
          }, {
              prov: "湖南省",
              label: "郴州市"
          }, {
              prov: "湖南省",
              label: "永州市"
          }, {
              prov: "湖南省",
              label: "怀化市"
          }, {
              prov: "湖南省",
              label: "娄底市"
          }, {
              prov: "湖南省",
              label: "湘西土家族苗族自治州"
          }, {
              prov: "广东省",
              label: "广州市"
          }, {
              prov: "广东省",
              label: "韶关市"
          }, {
              prov: "广东省",
              label: "深圳市"
          }, {
              prov: "广东省",
              label: "珠海市"
          }, {
              prov: "广东省",
              label: "汕头市"
          }, {
              prov: "广东省",
              label: "佛山市"
          }, {
              prov: "广东省",
              label: "江门市"
          }, {
              prov: "广东省",
              label: "湛江市"
          }, {
              prov: "广东省",
              label: "茂名市"
          }, {
              prov: "广东省",
              label: "肇庆市"
          }, {
              prov: "广东省",
              label: "惠州市"
          }, {
              prov: "广东省",
              label: "梅州市"
          }, {
              prov: "广东省",
              label: "汕尾市"
          }, {
              prov: "广东省",
              label: "河源市"
          }, {
              prov: "广东省",
              label: "阳江市"
          }, {
              prov: "广东省",
              label: "清远市"
          }, {
              prov: "广东省",
              label: "东莞市"
          }, {
              prov: "广东省",
              label: "中山市"
          }, {
              prov: "广东省",
              label: "潮州市"
          }, {
              prov: "广东省",
              label: "揭阳市"
          }, {
              prov: "广东省",
              label: "云浮市"
          }, {
              prov: "广西壮族自治区",
              label: "南宁市"
          }, {
              prov: "广西壮族自治区",
              label: "柳州市"
          }, {
              prov: "广西壮族自治区",
              label: "桂林市"
          }, {
              prov: "广西壮族自治区",
              label: "梧州市"
          }, {
              prov: "广西壮族自治区",
              label: "北海市"
          }, {
              prov: "广西壮族自治区",
              label: "防城港市"
          }, {
              prov: "广西壮族自治区",
              label: "钦州市"
          }, {
              prov: "广西壮族自治区",
              label: "贵港市"
          }, {
              prov: "广西壮族自治区",
              label: "玉林市"
          }, {
              prov: "广西壮族自治区",
              label: "百色市"
          }, {
              prov: "广西壮族自治区",
              label: "贺州市"
          }, {
              prov: "广西壮族自治区",
              label: "河池市"
          }, {
              prov: "广西壮族自治区",
              label: "来宾市"
          }, {
              prov: "广西壮族自治区",
              label: "崇左市"
          }, {
              prov: "海南省",
              label: "海口市"
          }, {
              prov: "海南省",
              label: "三亚市"
          }, {
              prov: "海南省",
              label: "三沙市"
          }, {
              prov: "海南省",
              label: "省直辖县级行政区划"
          }, {
              prov: "海南省",
              label: "五指山市"
          }, {
              prov: "海南省",
              label: "琼海市"
          }, {
              prov: "海南省",
              label: "儋州市"
          }, {
              prov: "海南省",
              label: "文昌市"
          }, {
              prov: "海南省",
              label: "万宁市"
          }, {
              prov: "海南省",
              label: "东方市"
          }, {
              prov: "海南省",
              label: "定安县"
          }, {
              prov: "海南省",
              label: "屯昌县"
          }, {
              prov: "海南省",
              label: "澄迈县"
          }, {
              prov: "海南省",
              label: "临高县"
          }, {
              prov: "海南省",
              label: "白沙黎族自治县"
          }, {
              prov: "海南省",
              label: "昌江黎族自治县"
          }, {
              prov: "海南省",
              label: "乐东黎族自治县"
          }, {
              prov: "海南省",
              label: "陵水黎族自治县"
          }, {
              prov: "海南省",
              label: "保亭黎族苗族自治县"
          }, {
              prov: "海南省",
              label: "琼中黎族苗族自治县"
          }, {
              prov: "重庆市",
              label: "重庆市"
          }, {
              prov: "四川省",
              label: "成都市"
          }, {
              prov: "四川省",
              label: "自贡市"
          }, {
              prov: "四川省",
              label: "攀枝花市"
          }, {
              prov: "四川省",
              label: "泸州市"
          }, {
              prov: "四川省",
              label: "德阳市"
          }, {
              prov: "四川省",
              label: "绵阳市"
          }, {
              prov: "四川省",
              label: "广元市"
          }, {
              prov: "四川省",
              label: "遂宁市"
          }, {
              prov: "四川省",
              label: "内江市"
          }, {
              prov: "四川省",
              label: "乐山市"
          }, {
              prov: "四川省",
              label: "南充市"
          }, {
              prov: "四川省",
              label: "眉山市"
          }, {
              prov: "四川省",
              label: "宜宾市"
          }, {
              prov: "四川省",
              label: "广安市"
          }, {
              prov: "四川省",
              label: "达州市"
          }, {
              prov: "四川省",
              label: "雅安市"
          }, {
              prov: "四川省",
              label: "巴中市"
          }, {
              prov: "四川省",
              label: "资阳市"
          }, {
              prov: "四川省",
              label: "阿坝藏族羌族自治州"
          }, {
              prov: "四川省",
              label: "甘孜藏族自治州"
          }, {
              prov: "四川省",
              label: "凉山彝族自治州"
          }, {
              prov: "贵州省",
              label: "贵阳市"
          }, {
              prov: "贵州省",
              label: "六盘水市"
          }, {
              prov: "贵州省",
              label: "遵义市"
          }, {
              prov: "贵州省",
              label: "安顺市"
          }, {
              prov: "贵州省",
              label: "毕节市"
          }, {
              prov: "贵州省",
              label: "铜仁市"
          }, {
              prov: "贵州省",
              label: "黔西南布依族苗族自治州"
          }, {
              prov: "贵州省",
              label: "黔东南苗族侗族自治州"
          }, {
              prov: "贵州省",
              label: "黔南布依族苗族自治州"
          }, {
              prov: "云南省",
              label: "昆明市"
          }, {
              prov: "云南省",
              label: "曲靖市"
          }, {
              prov: "云南省",
              label: "玉溪市"
          }, {
              prov: "云南省",
              label: "保山市"
          }, {
              prov: "云南省",
              label: "昭通市"
          }, {
              prov: "云南省",
              label: "丽江市"
          }, {
              prov: "云南省",
              label: "普洱市"
          }, {
              prov: "云南省",
              label: "临沧市"
          }, {
              prov: "云南省",
              label: "楚雄彝族自治州"
          }, {
              prov: "云南省",
              label: "红河哈尼族彝族自治州"
          }, {
              prov: "云南省",
              label: "文山壮族苗族自治州"
          }, {
              prov: "云南省",
              label: "西双版纳傣族自治州"
          }, {
              prov: "云南省",
              label: "大理白族自治州"
          }, {
              prov: "云南省",
              label: "德宏傣族景颇族自治州"
          }, {
              prov: "云南省",
              label: "怒江傈僳族自治州"
          }, {
              prov: "云南省",
              label: "迪庆藏族自治州"
          }, {
              prov: "西藏自治区",
              label: "拉萨市"
          }, {
              prov: "西藏自治区",
              label: "昌都地区"
          }, {
              prov: "西藏自治区",
              label: "山南地区"
          }, {
              prov: "西藏自治区",
              label: "日喀则地区"
          }, {
              prov: "西藏自治区",
              label: "那曲地区"
          }, {
              prov: "西藏自治区",
              label: "阿里地区"
          }, {
              prov: "西藏自治区",
              label: "林芝地区"
          }, {
              prov: "陕西省",
              label: "西安市"
          }, {
              prov: "陕西省",
              label: "铜川市"
          }, {
              prov: "陕西省",
              label: "宝鸡市"
          }, {
              prov: "陕西省",
              label: "咸阳市"
          }, {
              prov: "陕西省",
              label: "渭南市"
          }, {
              prov: "陕西省",
              label: "延安市"
          }, {
              prov: "陕西省",
              label: "汉中市"
          }, {
              prov: "陕西省",
              label: "榆林市"
          }, {
              prov: "陕西省",
              label: "安康市"
          }, {
              prov: "陕西省",
              label: "商洛市"
          }, {
              prov: "甘肃省",
              label: "兰州市"
          }, {
              prov: "甘肃省",
              label: "嘉峪关市"
          }, {
              prov: "甘肃省",
              label: "金昌市"
          }, {
              prov: "甘肃省",
              label: "白银市"
          }, {
              prov: "甘肃省",
              label: "天水市"
          }, {
              prov: "甘肃省",
              label: "武威市"
          }, {
              prov: "甘肃省",
              label: "张掖市"
          }, {
              prov: "甘肃省",
              label: "平凉市"
          }, {
              prov: "甘肃省",
              label: "酒泉市"
          }, {
              prov: "甘肃省",
              label: "庆阳市"
          }, {
              prov: "甘肃省",
              label: "定西市"
          }, {
              prov: "甘肃省",
              label: "陇南市"
          }, {
              prov: "甘肃省",
              label: "临夏回族自治州"
          }, {
              prov: "甘肃省",
              label: "甘南藏族自治州"
          }, {
              prov: "青海省",
              label: "西宁市"
          }, {
              prov: "青海省",
              label: "海东市"
          }, {
              prov: "青海省",
              label: "海北藏族自治州"
          }, {
              prov: "青海省",
              label: "黄南藏族自治州"
          }, {
              prov: "青海省",
              label: "海南藏族自治州"
          }, {
              prov: "青海省",
              label: "果洛藏族自治州"
          }, {
              prov: "青海省",
              label: "玉树藏族自治州"
          }, {
              prov: "青海省",
              label: "海西蒙古族藏族自治州"
          }, {
              prov: "宁夏回族自治区",
              label: "银川市"
          }, {
              prov: "宁夏回族自治区",
              label: "石嘴山市"
          }, {
              prov: "宁夏回族自治区",
              label: "吴忠市"
          }, {
              prov: "宁夏回族自治区",
              label: "固原市"
          }, {
              prov: "宁夏回族自治区",
              label: "中卫市"
          }, {
              prov: "新疆维吾尔自治区",
              label: "乌鲁木齐市"
          }, {
              prov: "新疆维吾尔自治区",
              label: "克拉玛依市"
          }, {
              prov: "新疆维吾尔自治区",
              label: "吐鲁番地区"
          }, {
              prov: "新疆维吾尔自治区",
              label: "哈密地区"
          }, {
              prov: "新疆维吾尔自治区",
              label: "昌吉回族自治州"
          }, {
              prov: "新疆维吾尔自治区",
              label: "博尔塔拉蒙古自治州"
          }, {
              prov: "新疆维吾尔自治区",
              label: "巴音郭楞蒙古自治州"
          }, {
              prov: "新疆维吾尔自治区",
              label: "阿克苏地区"
          }, {
              prov: "新疆维吾尔自治区",
              label: "克孜勒苏柯尔克孜自治州"
          }, {
              prov: "新疆维吾尔自治区",
              label: "喀什地区"
          }, {
              prov: "新疆维吾尔自治区",
              label: "和田地区"
          }, {
              prov: "新疆维吾尔自治区",
              label: "伊犁哈萨克自治州"
          }, {
              prov: "新疆维吾尔自治区",
              label: "塔城地区"
          }, {
              prov: "新疆维吾尔自治区",
              label: "阿勒泰地区"
          }, {
              prov: "新疆维吾尔自治区",
              label: "自治区直辖县级行政区划"
          }, {
              prov: "新疆维吾尔自治区",
              label: "石河子市"
          }, {
              prov: "新疆维吾尔自治区",
              label: "阿拉尔市"
          }, {
              prov: "新疆维吾尔自治区",
              label: "图木舒克市"
          }, {
              prov: "新疆维吾尔自治区",
              label: "五家渠市"
          }, {
              prov: "台湾省",
              label: "台北市"
          }, {
              prov: "台湾省",
              label: "高雄市"
          }, {
              prov: "台湾省",
              label: "基隆市"
          }, {
              prov: "台湾省",
              label: "台中市"
          }, {
              prov: "台湾省",
              label: "台南市"
          }, {
              prov: "台湾省",
              label: "新竹市"
          }, {
              prov: "台湾省",
              label: "嘉义市"
          }, {
              prov: "台湾省",
              label: "省直辖"
          }, {
              prov: "香港特别行政区",
              label: "香港岛"
          }, {
              prov: "香港特别行政区",
              label: "九龙"
          }, {
              prov: "香港特别行政区",
              label: "新界"
          }, {
              prov: "澳门特别行政区",
              label: "澳门半岛"
          }, {
              prov: "澳门特别行政区",
              label: "澳门离岛"
          }, {
              prov: "澳门特别行政区",
              label: "无堂区划分区域"
          }];
          for (let val of this.allCity){
              if (prov == val.prov){
                  console.log(val);
                  this.tempCity.push({label: val.label, value: val.label})
              }
          }
          this.citys = this.tempCity;
          console.log(this.citys)
      },
      getCity: function (city) {
          console.log(city);
          console.log(this.selectCity)
      },
  },
    components: {
        // Pagetotal,
    },
  mounted() {
    this.jingxiaoshangcode = this.$route.query.key_code;
    this.jingxiaoshangid = this.$route.query.key_id;
    getDealerList(this.jingxiaoshangcode).then(res => {
        // console.log(res)
        if(res.data.result_content) {
            res.data.result_content.forEach(item => {
                this.dealerid.push(item.dealer_id)
            })
        }else {
            this.dealerid=[]
        }

      return this.dealerid
    }).then(data => {
      for (let i=0;i<data.length;i++) {
        getDealerItem(data[i]).then(res => {
          var jingxiaoshanglist=[];
          this.tabledata.push({
            group_code: res.data.result_content.group_code,
            dealer_id: res.data.result_content.dealer_id,
            dealer_code: res.data.result_content.dealer_code,
            dealer_name: res.data.result_content.dealer_name,
            dealer_fullname: res.data.result_content.dealer_fullname,
            address: res.data.result_content.address,
            server_ip: res.data.result_content.server_ip,
            tv_number: res.data.result_content.tv_number,
            tv_pwd: res.data.result_content.tv_pwd,
            work_start: res.data.result_content.work_start,
            work_end: res.data.result_content.work_end,
            dealer_level: res.data.result_content.dealer_level,
            project_code: res.data.result_content.project_code,
          })
            jingxiaoshanglist.push(res.data.result_content.dealer_name)
          return jingxiaoshanglist
        }).then(res => {
          this.data = this.tabledata
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

          res.forEach(item => {
            this.jxsname.push(item)
          })
        })
      }
    }).catch(error=> {
      console.log(error)
    })
    getGroupItem(this.jingxiaoshangid).then(res => {
      this.host_code = res.data.result_content.group_code
      this.host_fullname = res.data.result_content.group_fullname
      this.host_name = res.data.result_content.group_name
      this.host_id = res.data.result_content.group_id
      this.host_state = res.data.result_content.state
      this.host_createtime = res.data.result_content.create_time
      this.host_edittime = res.data.result_content.edit_time
    }).catch(error=> {
      console.log(error)
    })
  },
  watch: {
    '$route': function (to) {
      this.jingxiaoshangcode = to.query.key_code;
      this.jingxiaoshangid = to.query.key_id;
      getDealerList(this.jingxiaoshangcode).then(res => {
        this.dealerid=[]
        res.data.result_content.forEach(item => {
          this.dealerid.push(item.dealer_id)
        })
        return this.dealerid
      }).then(data => {
        this.tabledata=[]
        // var jingxiaoshanglist1=[];
        for (let i=0;i<data.length;i++) {
          getDealerItem(data[i]).then(res => {
              // console.log(res)
             var jingxiaoshanglist1=[];
            this.tabledata.push({
              group_code: res.data.result_content.group_code,
              dealer_id: res.data.result_content.dealer_id,
              dealer_code: res.data.result_content.dealer_code,
              dealer_name: res.data.result_content.dealer_name,
              dealer_fullname: res.data.result_content.dealer_fullname,
              address: res.data.result_content.address,
              server_ip: res.data.result_content.server_ip,
              tv_number: res.data.result_content.tv_number,
              tv_pwd: res.data.result_content.tv_pwd,
              work_start: res.data.result_content.work_start,
              work_end: res.data.result_content.work_end,
              dealer_level: res.data.result_content.dealer_level,
              project_code: res.data.result_content.project_code,
            })
            jingxiaoshanglist1.push(res.data.result_content.dealer_name)
            return jingxiaoshanglist1
          }).then(res => {
            this.jxsname=[]
            this.data=this.tabledata;
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
            res.forEach(item => {
              this.jxsname.push(item)
            })
          })
        }
      }).catch(error=> {
            console.log(error)
          })
      getGroupItem(this.jingxiaoshangid).then(res => {
        this.host_code = res.data.result_content.group_code
        this.host_fullname = res.data.result_content.group_fullname
        this.host_name = res.data.result_content.group_name
        this.host_id = res.data.result_content.group_id
        this.host_state = res.data.result_content.state
        this.host_createtime = res.data.result_content.create_time
        this.host_edittime = res.data.result_content.edit_time
      }).catch(error=> {
        console.log(error)
      })
    }
  }
}
</script>
<style>
  .storemessage {
    display: inline;
  }
  .messagetotal {
    width: 70%;
    margin-top: 1%;
    /*margin-bottom: 20px;*/
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  .ivu-form-item {
    margin-bottom: 10px !important;
    margin: 3%;
    vertical-align: top;
    zoom: 1;
  }
  /*.ivu-form-item label:first-child*/
  .ivu-form-label-left {
      clear: both;
  }
  .ivu-select {
      display: inline-block;
      width: 100% !important;
      box-sizing: border-box;
      vertical-align: middle;
      color: #515a6e;
      font-size: 14px;
      line-height: normal;
  }
  .ivu-date-picker {
      display: inline-block;
      line-height: normal;
      width: 100% !important;
  }
  .ivu-table-cell {
      padding-left: 0px;
      padding-right: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      word-break: break-all;
      box-sizing: border-box;
  }

    .jingxiaoshangtotal {
        position: relative;
        height: 100%;
    }
    .jingxiaoshangdele {
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
    .jingxiaoshangbutton {
        margin-top: 5%
    }
    .buttoncancal {
        margin-left: 5%
    }
    .jingxiaoshangliebiao {
        width:30%;
        position: absolute;
        top:10%;
        left:25%;
        border:1px solid black;
        float: left;
        z-index: 300;
        background-color: white
    }
    .liebiaobutton {
        float:right;
        margin: 5px;
        width:20px;
        cursor: pointer
    }
    .chongzhi {
        margin-left: 8px
    }
    .showaddlayout {
        width:30%;
        position: absolute;
        top:0px;
        left:25%;
        border:1px solid black;
        float: left;
        z-index: 300;
        background-color: white
    }
  .showaddbutton {
      float:right;
      margin: 5px;
      width:20px;
      cursor: pointer
  }
  .jingxiaoshangpage {
      position: fixed;
      bottom: 3%;
      right: 3%;
  }
  .ivu-layout.ivu-layout-has-sider>.ivu-layout, .ivu-layout.ivu-layout-has-sider>.ivu-layout-content {
      overflow-y: hidden;
  }
  /*.ivu-layout.ivu-layout-has-sider>.ivu-layout, .ivu-layout.ivu-layout-has-sider>.ivu-layout-content ::-webkit-scrollbar {*/
  /*    display: none;*/
  /*}*/
    .tablejxs {
       clear:both;
        /*height: 90%;*/
        height: 79%;
        overflow-y: auto;
    }
</style>