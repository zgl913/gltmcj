<template>
    <div>
        <div class="sousuobj">
            <div>
                <div class="yhbj">
                    主机厂
                    <Select v-model="group_code">
                        <Option v-for="item in xiangmucode" :value="item" :key="item">{{item}}</Option>
                    </Select>
                </div>
            </div>
            <div>
                <div class="yhbj yyhbj">
                    经销商
                    <Input  search v-model="dealer_Name" placeholder="请输入经销商" @on-search="sousuo(dealer_Name)"/>
                </div>
            </div>
            <div class="yyhbj">
                <Button type="primary" size="large" @click="exportData()"><Icon type="ios-download-outline"></Icon>导出</Button>
            </div>
        </div>
        <div>
            <Table :columns="columns" :data="nowData" :height="bgheight" ref="table">
                <!--                <template slot-scope="{ row, index }" slot="dealer_code">-->
                <template slot-scope="{ row}" slot="dealer_name">
                    <span>{{ row.dealer_name}}</span>
                </template>
                <template slot-scope="{ row}" slot="dealer_code">
                    <span>{{ row.dealer_code }}</span>
                </template>
                <template slot-scope="{ row}" slot="cdisk_reamin">
<!--                    <span :class="{'classa':parseInt(row.cdisk_reamin)<30}">{{ row.cdisk_reamin}}</span>-->
                    <span :class="{'classa':Number(row.cdisk_reamin)<5?true:false}">{{ row.cdisk_reamin}}</span>
                </template>
                <template slot-scope="{ row}" slot="create_time">
                    <span >{{ row.create_time}}</span>
                </template>
            </Table>
        </div>
        <div class="storespage">
            <Page :total="dataCount" :page-size="pageSize" :current="pageCurrent" @on-change="changepage" @on-page-size-change="_nowPageSize" show-total show-sizer show-elevator/>
        </div>
    </div>
</template>

<script>
    import {getDealerHeartList} from '@/api/api'
    export default {
        name: "JxsMessage",
        data() {
            return {
                group_code:'uni',
                xiangmucode:["uni"],
                dealer_Name:'',
                data:[],
                nowData: [],
                devicelist:[],
                pageSize: 20,//每页显示多少条
                dataCount: 0,//总条数
                pageCurrent: 1,//当前页
                bgheight:'500',
                columns: [
                    {
                        width: 60,
                        title: '序号',
                        align:'center',
                        key:'jxs_index',
                        solt:'jxs_index'
                    },
                    {
                        title: '经销商名称',
                        key:'dealer_name',
                        slot: 'dealer_name'
                    },
                    {
                        title: '经销商编号',
                        key:'dealer_code',
                        slot: 'dealer_code'
                    },
                    {
                        title: 'C盘剩余空间(G)',
                        key:'cdisk_reamin',
                        slot: 'cdisk_reamin'
                    },
                    {
                        title: '时间',
                        key:'create_time',
                        slot: 'create_time'
                    }
                ],
            }
        },
        methods: {
            exportData() {
                this.$refs.table.exportCsv({
                    filename: '经销商信息',
                    // columns: this.columns.filter((col, index) => index < 5),
                    // data: this.nowData.filter((data, index) => index < 4)
                    columns:this.columns,
                    data:this.data
                });
            },
            sousuo(dealername) {
                this.devicelist = []
                getDealerHeartList(this.group_code,this.dealer_Name).then(res => {
                    console.log(res)
                    res.data.result_content.forEach(item => {
                        this.devicelist.push({
                            group_code: item.group_code,
                            dealer_code:item.dealer_code,
                            dealer_name:item.dealer_name,
                            cdisk_reamin:item.cdisk_reamin.split('G')[0],
                            create_time:item.create_time,
                        })
                    })
                    this.data = this.devicelist
                    console.log(this.devicelist)
                    return this.data
                }).then(res => {
                    console.log(res.length)
                    this.compare(res)
                    for (let i = 0; i < res.length; i++) {
                        if (Number(res[i].cdisk_reamin) < 5) {
                            res.unshift(res[i])
                            res.splice(i + 1, 1);
                        }
                    }
                    return res
                }).then(res => {
                    for(let i = 0;i<res.length;i++) {
                        res[i].jxs_index = i+1
                    }
                    this.dataCount = res.length;
                    this.nowData = []
                    console.log(this.data)
                    if (dealername) {
                        for(let i=0;i<this.data.length;i++) {
                            this.nowData.push(this.data[i])
                        }
                    }else {
                        if(this.pageSize<=this.data.length) {
                            for (let i = 0; i < this.pageSize; i++) {
                                this.nowData.push(this.data[i]);
                            }
                        }else {
                            for (let i = 0; i < this.data.length; i++) {
                                this.nowData.push(this.data[i]);
                            }
                        }
                    }
                    console.log(this.nowData)
                })

                .catch(error => {
                    console.log(error)
                })

            },
            compare(sz){
                sz.sort(function(a, b){
                    var x = a.dealer_code.toLowerCase();
                    var y = b.dealer_code.toLowerCase();
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
        },
        mounted() {
            this.bgheight= `${document.documentElement.clientHeight * 0.7}`;//默认值
            this.dealer_Name = ''
            getDealerHeartList(this.group_code,this.dealer_Name).then(res => {
                console.log(res)
                res.data.result_content.forEach(item => {
                    this.devicelist.push({
                        group_code: item.group_code,
                        dealer_code:item.dealer_code,
                        dealer_name:item.dealer_name,
                        cdisk_reamin:item.cdisk_reamin.split('G')[0],
                        create_time:item.create_time,
                    })
                })
                this.data = this.devicelist
                console.log(this.devicelist)
                return this.data
            }).then(res => {

                console.log(res.length)
                this.compare(res)
                console.log(res)
                for (let i = 0; i < res.length; i++) {
                    if (Number(res[i].cdisk_reamin) < 5) {
                        res.unshift(res[i])
                        res.splice(i+1, 1);
                    }
                }
                return res
            }).then(res => {
                for(let i = 0;i<res.length;i++) {
                    res[i].jxs_index = i+1
                }
                console.log(res)
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
                console.log(this.nowData)
            })

            .catch(error => {
                console.log(error)
            })
        }
    }
</script>

<style scoped>
    .storespage {
        position: fixed;
        bottom: 2%;
        right: 3%;
    }
    .sousuobj {
        display: flex;
    }
    .yyhbj {
        margin-left: 10rem;
    }
    .yhbj {
        white-space:nowrap;
        /*display: flex;*/

    }
    .classa {
        color: red;
    }
    .classb {
        color: blue;
    }
</style>