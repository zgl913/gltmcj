<template>
    <div>
        <div class="leftright">
            <div>
                <columncpan @showtable="showtb(arguments)" :contentnum="contentnum1"></columncpan>
            </div>
            <div v-show="showif" class="tubiao">
                <div style="width: 10%">
                    <Button type="primary" size="large" @click="exportData()"><Icon type="ios-download-outline"></Icon>导出</Button>
                </div>
                <Table :columns="columns" :data="nowData" :height="bgheight" ref="table" :width="bgwidth">
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
<!--                    <template slot-scope="{ row}" slot="jxs_index">-->
<!--                        <span>{{ row.jxs_index }}</span>-->
<!--                    </template>-->
<!--                    <template slot-scope="{ row}" slot="devicename">-->
<!--                        <span>{{ row.devicename }}</span>-->
<!--                    </template>-->
                    <template slot-scope="{ row}" slot="cpancontent">
                        <span :class="{'classa':Number(row.cpancontent.split('G')[0])<5?true:false}">{{ row.cpancontent}}</span>
                    </template>
                </Table>
            </div>
        </div>
    </div>


</template>

<script>
    import {getDealerHeartList} from '@/api/api'
    import columncpan from "@/components/firstcomponents/columncpan";
    export default {
        name: "cpanxinxi",
        data() {
            return {
                dangerous:[],
                common:[],
                full:[],
                group_code:'uni',
                dealer_Name:'',
                bgheight:'450',
                bgwidth:'',
                showif:false,
                editdevicename:'',
                editcpancontent:'',
                columns: [
                    {
                        width: 100,
                        title: '序号',
                        align:'center',
                        key:'jxs_index',
                        // solt:'jxs_index'
                    },
                    // {
                    //     // type: 'selection',
                    //     type: 'index',
                    //     width: 100,
                    //     align: 'center'
                    // },
                    {
                        // width: 100,
                        title: '经销商名称',
                        key:'devicename',
                        // slot: 'devicename'
                    },
                    {
                        // width: 100,
                        title: 'c盘容量',
                        key:'cpancontent',
                        slot: 'cpancontent'
                    },
                ],
                nowData: [
                ],
                contentnum1: [
                    {
                        type: '0~5G',
                        sales: 0,
                    },
                    {
                        type: '5~15G',
                        sales: 0,
                    },
                    {
                        type: '>=15G',
                        sales: 0,
                    },
                ],
                prov:'',
                city:'',
            }
        },
        methods: {
            exportData() {
                this.$refs.table.exportCsv({
                    filename: 'c盘容量',
                    // columns: this.columns.filter((col, index) => index < 5),
                    // data: this.nowData.filter((data, index) => index < 4)
                    columns:this.columns,
                    data:this.nowData
                });
            },
            showtb(params) {
                this.showif= true
                if(params) {

                    if(params[0]=='0~5G') {
                        this.nowData = this.dangerous
                    }else if(params[0]=='5~15G') {
                        this.nowData = this.common
                    }else {
                        this.nowData = this.full
                    }
                }
                console.log(this.nowData)
            },
            dealerheartlist() {
                getDealerHeartList(this.group_code,this.dealer_Name).then(res => {
                    console.log(res)
                    res.data.result_content.forEach(item => {
                        if(Number(item.cdisk_reamin.split('G')[0])<5) {
                            this.contentnum1[0].sales += 1
                            this.dangerous.push({jxs_index:this.contentnum1[0].sales,devicename:item.dealer_name,cpancontent:item.cdisk_reamin})
                        }else if(Number(item.cdisk_reamin.split('G')[0])<15) {
                            this.contentnum1[1].sales += 1
                            this.common.push({jxs_index:this.contentnum1[1].sales,devicename:item.dealer_name,cpancontent:item.cdisk_reamin})
                        }else {
                            this.contentnum1[2].sales += 1
                            this.full.push({jxs_index:this.contentnum1[2].sales,devicename:item.dealer_name,cpancontent:item.cdisk_reamin})
                        }
                    })
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        mounted() {
            this.bgheight = `${document.documentElement.clientHeight * 0.6}`
            this.bgwidth = `${document.documentElement.clientWidth * 0.53}`
            this.dealerheartlist()
        },
        components: {
            columncpan
        },
        watch: {
            $route: function (to, from) {
                this.prov = to.query.prov
                this.city = to.query.prov
                console.log(this.prov,this.city)
                console.log(to, from)
            }
        }
    }
</script>

<style scoped>
    .leftright {
        height: 70%;
        /*width: 50%;*/
        display: flex;
        /*justify-content: center;*/
        flex-direction: row;
        /*margin-top: 3%;*/
    }
    .tubiao {
        margin-left: 1%;
    }
    .classa {
        color: red;
    }
    .daochubj {
        display: flex;
        margin-top:-2%;
        margin-left:40%
    }
</style>