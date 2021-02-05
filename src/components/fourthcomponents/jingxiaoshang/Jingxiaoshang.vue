<template>
  <div style="position: relative">
    <div style="width:30%;position: absolute;top:0px;left:25%;border:1px solid black;float: left;z-index: 300;background-color: white" v-show="showadd">
      <button style="float:right;margin: 5px;width:20px;cursor: pointer" @click="showadd = !showadd">×</button>
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
          <Input v-model="formLeft.input9"/>
        </FormItem>
        <FormItem label="工作结束时间" prop="input10">
          <Input v-model="formLeft.input10"/>
        </FormItem>
        <FormItem label="经销商层级" prop="input11">
          <Input v-model="formLeft.input11"/>
        </FormItem>
        <FormItem label="项目代码" prop="input12">
          <Input v-model="formLeft.input12"/>
        </FormItem>
        <Button @click="addjxs">提交</Button>
        <Button @click="handleReset('formLeft')" style="margin-left: 8px">重置</Button>
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
          <Input v-model="formLeft1.input7"/>
        </FormItem>
        <FormItem label="工作结束时间" prop="input8">
          <Input v-model="formLeft1.input8"/>
        </FormItem>
        <FormItem label="经销商层级" prop="input9">
          <Input v-model="formLeft1.input9"/>
        </FormItem>
        <FormItem label="项目代码" prop="input10">
          <Input v-model="formLeft1.input10"/>
        </FormItem>
        <Button @click="xiugaijxs('formLeft1')">确定</Button>
        <Button @click="handleReset('formLeft1')" style="margin-left: 8px">重置</Button>
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
    </div>
    <div style="float: right"><Button @click="showadd=!showadd">添加经销商</Button></div>
    <div style="clear:both">
    <Table :columns="columns" :data="data">
      <template slot-scope="{ row, index }" slot="group_code">
        <Input type="text" v-model="editgroup_code" v-if="editIndex === index" />
        <span v-else>{{ row.group_code }}</span>
      </template>

<!--      <template slot-scope="{ row, index }" slot="dealer_id">-->
<!--        <Input type="text" v-model="editdealer_id" v-if="editIndex === index" />-->
<!--        <span v-else>{{ row.dealer_id }}</span>-->
<!--      </template>-->

      <template slot-scope="{ row, index }" slot="dealer_code">
        <Input type="text" v-model="editdealer_code" v-if="editIndex === index" />
        <span v-else>{{row.dealer_code}}</span>
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
          <Button @click="remove(index)">删除</Button>
        </div>
      </template>
    </Table>
    </div>

  </div>
</template>

<script>
import {addDealerItem,getDealerList,getGroupItem,getDealerItem,editDealerItem,deleteDealerItem} from "@/api/api";

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
          title: '项目代码',
          slot: 'project_code'
        },
        {
          title: '操作',
          slot: 'operation'
        }
      ],
      data: [],
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
      showadd:false,
      showxiugai:false,
      dealeridnumber: '',
      indexx: 1,
    }
  },
  methods: {
    handleReset (name) {
      this.$refs[name].resetFields();
    },
    addjxs() {
      addDealerItem(this.jingxiaoshangcode,this.formLeft.input2,this.formLeft.input3,this.formLeft.input4,this.formLeft.input5,this.formLeft.input6,this.formLeft.input7,
          this.formLeft.input8,this.formLeft.input9,this.formLeft.input10,this.formLeft.input11,this.formLeft.input12).then(res =>{
        // console.log(JSON.stringify(res))
        // console.log(this.data)

        console.log(this.data)
        if(res.data.result_code == -1){
          alert(res.data.result_content)
          // this.showadd = !this.showadd
        }else {
          this.showadd = !this.showadd
          this.data.push({
            group_code: this.jingxiaoshangcode,
            dealer_code: this.formLeft.input2,
            dealer_name: this.formLeft.input3,
            dealer_fullname: this.formLeft.input4,
            address: this.formLeft.input5,
            server_ip: this.formLeft.input6,
            tv_number: this.formLeft.input7,
            tv_pwd: this.formLeft.input8,
            work_start: this.formLeft.input9,
            work_end: this.formLeft.input10,
            dealer_level: this.formLeft.input11,
            project_code: this.formLeft.input12,
          })
          alert(res.data.result_msg)
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
      deleteDealerItem(this.data[index].dealer_id).then(res=>{
        console.log(res)
        // if(res.data.result_code>=0) {
        //   this.data.splice(index, 1);
        //   this.$Message.success('Success!');
        // }else {
        //   this.$Message.success('Fail!');
        // }
              this.data.splice(index, 1);
      })

    }
  },

  mounted() {
    this.jingxiaoshangcode = this.$route.query.key_code;
    this.jingxiaoshangid = this.$route.query.key_id;
    getDealerList(this.jingxiaoshangcode).then(res => {
        console.log(res)
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
              console.log(res)
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
            this.data=this.tabledata
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
    margin-top: 20px;
    margin-bottom: 20px;
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
</style>