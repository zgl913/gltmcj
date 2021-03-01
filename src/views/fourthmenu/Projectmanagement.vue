<template>
    <div class="projectmanagementlayout">
        <div class="showaddlayout1" v-show="showadd">
            <button class="showaddbutton1" @click="showadd = !showadd">×</button>
            <Form ref="formLeft" :model="formLeft" label-position="left" :label-width="100" >
                <!--        <FormItem label="主机厂编号" prop="input1">-->
                <!--          <Input v-model="formLeft.input1"/>-->
                <!--        </FormItem>-->
                <FormItem label="项目名称" prop="input1">
                    <Input v-model="formLeft.input1"/>
                </FormItem>
                <FormItem label="项目编号" prop="input2">
                    <Input v-model="formLeft.input2"/>
                </FormItem>
                <FormItem label="项目状态" prop="input3">
                    <Input v-model="formLeft.input3"/>
                </FormItem>
                <FormItem label="创建时间" prop="input4">
                    <Input v-model="formLeft.input4"/>
                </FormItem>
                <FormItem label="编辑时间" prop="input5">
                    <Input v-model="formLeft.input5"/>
                </FormItem>
                <Button @click="addproject">提交</Button>
                <Button @click="handleReset('formLeft')" class="chongzhi1">重置</Button>
            </Form>
        </div>
        <div style="float: right"><Button @click="showadd=!showadd">添加项目</Button></div>
        <div class="xiangmuliebiao">
            <Table :columns="columns" :data="nowData">
                <!--      <template slot-scope="{ row, index }" slot="group_code">-->
                <!--        <Input type="text" v-model="editgroup_code" v-if="editIndex === index" />-->
                <!--        <span v-else>{{ row.group_code }}</span>-->
                <!--      </template>-->

                <!--      <template slot-scope="{ row, index }" slot="dealer_id">-->
                <!--        <Input type="text" v-model="editdealer_id" v-if="editIndex === index" />-->
                <!--        <span v-else>{{ row.dealer_id }}</span>-->
                <!--      </template>-->

                <template slot-scope="{ row, index }" slot="projectname">
                    <Input type="text" v-model="editprojectname" v-if="editIndex === index" />
                    <span v-else s>{{row.projectname}}</span>
                </template>

                <template slot-scope="{ row, index }" slot="projectcode">
                    <Input type="text" v-model="editprojectcode" v-if="editIndex === index" />
                    <span v-else>{{ row.projectcode }}</span>
                </template>

                <template slot-scope="{ row, index }" slot="projectstate">
                    <Input type="text" v-model="editprojectstate" v-if="editIndex === index" />
                    <span v-else>{{ row.projectstate }}</span>
                </template>
                <template slot-scope="{ row, index }" slot="projectcreatetime">
                    <Input type="text" v-model="editprojectcreatetime" v-if="editIndex === index" />
                    <span v-else>{{ row.projectcreatetime }}</span>
                </template>
                <template slot-scope="{ row, index }" slot="projectedittime">
                    <Input type="text" v-model="editprojectedittime" v-if="editIndex === index" />
                    <span v-else>{{ row.projectedittime }}</span>
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
        <div class="projectpage" >
            <Page :total="dataCount" :page-size="pageSize" @on-change="changepage" @on-page-size-change="_nowPageSize" show-total show-sizer show-elevator/>
        </div>
    </div>
</template>

<script>
    import {getProjectList} from "@/api/api";
    export default {
        name: "Projectmanagement",
        data() {
            return {
                showadd:false,
                projectlist:[],
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
                        title: '项目名称',
                        slot: 'projectname'
                    },
                    {
                        title: '项目编号',
                        slot: 'projectcode'
                    },
                    {
                        title: '项目状态',
                        slot: 'projectstate'
                    },
                    {
                        title: '创建时间',
                        slot: 'projectcreatetime'
                    },
                    {
                        title: '编辑时间',
                        slot: 'projectedittime'
                    },
                    {
                        title: '操作',
                        slot: 'operation'
                    }
                ],
                formLeft: {
                    input1: '',
                    input2: '',
                    input3: '',
                    input4: '',
                    input5: '',
                },
                nowData: [

                ],
                data:[],
                editIndex: -1,
                editprojectname: '',  // 当前聚焦的输入框的行数
                editprojectcode: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
                editprojectstate: '',  // 第二列输入框
                editprojectcreatetime: '',  // 第三列输入框
                editprojectedittime: '',  // 第四列输入框
                // editaddress: '',  // 第四列输入框
            }
        },
        methods: {
            handleEdit (row,index) {
                console.log(row+index)
            },
            remove1(index) {
                console.log(index)
            },
            addproject() {

            },
            handleReset (name) {
                this.$refs[name].resetFields();
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
            getProjectList().then(res => {
                // console.log(res)
                if(res.data.result_code == 0) {
                    // this.projectlist = res.data.result_content
                    for(let i = 0;i<res.data.result_content.length;i++) {
                        this.data.push({
                            projectname:res.data.result_content[i].project_name,
                            projectcode:res.data.result_content[i].project_code,
                            projectstate:res.data.result_content[i].state,
                            projectcreatetime:res.data.result_content[i].create_time,
                            projectedittime:res.data.result_content[i].edit_time,
                            projectid:res.data.result_content[i].project_id,
                        })
                    }
                }else {
                    this.$Message.error(res.data.result_msg)
                }
                return this.data
            }).then(res => {
                this.dataCount = res.length;
                this.nowData = [];
                if(this.pageSize<=res.length) {
                    for (let i = 0; i < this.pageSize; i++) {
                        this.nowData.push(res[i]);
                    }
                }else {
                    for (let i = 0; i < res.length; i++) {
                        this.nowData.push(res[i]);
                    }
                }
            })
        }
    }
</script>

<style scoped>
    .xiangmuliebiao {
        clear:both;
        /*height: 90%;*/
        height: 80%;
        overflow-y: auto;
    }
    .showaddlayout1 {
        width:30%;
        position: absolute;
        top:0px;
        left:25%;
        border:1px solid black;
        float: left;
        z-index: 300;
        background-color: white
    }
    .showaddbutton1 {
        float:right;
        margin: 5px;
        width:20px;
        cursor: pointer
    }
    .projectmanagementlayout {
        position: relative;
        height: 100%;
    }
    .chongzhi1 {
        margin-left: 8px
    }
    .ivu-form-item {
        margin-bottom: 24px;
        vertical-align: top;
        zoom: 1;
        margin-top: 6%;
    }
    .projectpage {
        position: fixed;
        bottom: 3%;
        right: 3%;
    }
</style>