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
                    <Input search v-model="dealer_Name" placeholder="请输入经销商" @on-search="allsousuo(dealer_Name,app_name)"/>
                </div>
            </div>
            <div>
                <div class="yhbj yyhbj">
                    程序名称
                    <Input search v-model="app_name" placeholder="请输入程序名称" @on-search="allsousuo(dealer_Name,app_name)"/>
                </div>
            </div>
<!--            <div class="yyhbj">-->
<!--                <Button @click="allsousuo(dealer_Name,app_name)">查询</Button>-->
<!--            </div>-->
            <div class="yyhbj">
                <Button type="primary" size="large" @click="exportData()"><Icon type="ios-download-outline"></Icon>导出</Button>
            </div>
        </div>
        <div>
            <Table :columns="columns" :data="nowData" :height="bgheight" ref="table">
<!--                <template slot-scope="{ row, index }" slot="dealer_code">-->
                <template slot-scope="{ row}" slot="jxs_index">
                    <span>{{ row.jxs_index}}</span>
                </template>
                <template slot-scope="{ row}" slot="dealer_name">
                    <span>{{ row.dealer_name}}</span>
                </template>
                <template slot-scope="{ row}" slot="dealer_code">
                    <span>{{ row.dealer_code }}</span>
                </template>
                <template slot-scope="{ row}" slot="app_name">
                    <span>{{ row.app_name}}</span>
                </template>
                <template slot-scope="{ row}" slot="app_version">
                    <span>{{ row.app_version}}</span>
                </template>
                <template slot-scope="{ row}" slot="create_time">
                    <span >{{ row.create_time}}</span>
                </template>
            </Table>
        </div>
        <div class="storespage">
            <div class="leftbj">
                店总数：{{storenumber}}
            </div>
            <div class="rightbj">
                <Page :total="dataCount" :page-size="pageSize" :current="pageCurrent" @on-change="changepage" @on-page-size-change="_nowPageSize" show-total show-sizer show-elevator/>
            </div>

        </div>
    </div>
</template>

<script>
    import {getDealerAppVersionList} from '@/api/api'
    export default {
        name: "JxsPromgram",
        data() {
            return {
                group_code:'uni',
                xiangmucode:["uni"],
                storesz:[],
                dealer_Name:'',
                app_name:'',
                data:[],
                nowData: [
                    {
                        dealer_code:'2',
                        dealer_name:'2',
                        app_name:'2',
                        app_version:'2',
                        create_time:'2',
                    }
                ],
                devicelist:[],
                pageSize: 20,//每页显示多少条
                dataCount: 0,//总条数
                pageCurrent: 1,//当前页
                bgheight:'500',
                storenumber:'',
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
                        title: '程序名称',
                        key:'app_name',
                        slot: 'app_name'
                    },
                    {
                        title: '版本',
                        key:'app_version',
                        slot: 'app_version'
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
            unique(arr1) {
                const res = new Map();
                return arr1.filter((a) => !res.has(a.dealer_name) && res.set(a, 1))
            },
            exportData() {
                this.$refs.table.exportCsv({
                    filename: '经销商程序信息',
                    // columns: this.columns.filter((col, index) => index < 5),
                    // data: this.nowData.filter((data, index) => index < 4)
                    columns:this.columns,
                    data:this.data
                });
            },
            allsousuo(jxs,cx) {
                this.devicelist = []
                getDealerAppVersionList(this.group_code,this.dealer_Name,this.app_name).then(res => {
                    console.log(res)
                    res.data.result_content.forEach(item => {
                        this.devicelist.push({
                            group_code: item.group_code,
                            dealer_code:item.dealer_code,
                            dealer_name:item.dealer_name,
                            app_code:item.app_code,
                            app_name:item.app_name,
                            create_time:item.create_time,
                            app_version:item.app_version
                        })
                    })
                    this.data = this.devicelist
                    console.log(this.devicelist)
                    return this.data
                }).then(res => {
                    console.log(res.length)
                    this.compare(res)
                    for(let i = 0;i<res.length;i++) {
                        res[i].jxs_index = i+1
                    }
                    this.dataCount = res.length;
                    this.nowData = []
                    console.log(this.data)
                    if (jxs || cx) {
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
                }).catch(error => {
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
            getDealerAppVersionList(this.group_code,this.dealer_Name,this.app_name).then(res => {
                console.log(res)
                // var jk_index = 0
                res.data.result_content.forEach(item => {
                    // jk_index = jk_index +1
                    this.devicelist.push({
                        // jxs_index:jk_index,
                        group_code: item.group_code,
                        dealer_code:item.dealer_code,
                        dealer_name:item.dealer_name,
                        app_code:item.app_code,
                        app_name:item.app_name,
                        create_time:item.create_time,
                        app_version:item.app_version
                    })
                })
                this.data = this.devicelist
                console.log(this.devicelist)
                return this.data
            }).then(res => {
                // this.storenumber = this.quchong(res).length
                // console.log(this.storenumber)
                let obj = {};
                this.storesz = res.reduce((cur,next) => {
                    obj[next.dealer_name] ? "" : obj[next.dealer_name] = true && cur.push(next);
                    return cur;
                },[]) //设置cur默认类型为数组，并且初始值为空的数组
                console.log(this.storesz)
                this.storenumber = this.storesz.length
                console.log(res)
                this.compare(res)
                console.log(this.unique(res))
                for(let i = 0;i<res.length;i++) {
                    res[i].jxs_index = i+1
                }
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
            }).catch(error => {
                console.log(error)
            })
        }
    }
</script>

<style scoped>
    .storespage {
        width: 100%;
        position: relative;
        /*width: 100%;*/
        /*display: flex;*/
        /*justify-content: space-around;*/
        /*position: fixed;*/
        /*bottom: 2%;*/
        /*right: 3%;*/
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
    .leftbj {
        position: absolute;
        left: 0px;
    }
    .rightbj {
        position: absolute;
        right: 0px;
    }
</style>