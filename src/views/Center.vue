<template>
  <div class="hometotal">
    <Layout>
      <Sider hide-trigger :style="{background: '#fff'}">
<!--        <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">-->
<!--        <Menu @on-select="changeSidebar"-->
<!--              :active-name="sidebarItem"-->
        <Menu
              theme="light"
              width="auto"
              :open-names="['center']">

          <router-link :to="{path:'/home',query:{jxsmsg:jiejue1}}"><MenuItem name="1"><Icon type="md-home"/>首页</MenuItem></router-link>
          <router-link to="/videocheck"><MenuItem name="2"><Icon type="ios-videocam-outline" />视频巡店</MenuItem></router-link>
          <!--          <Submenu name="1">-->
          <!--              <template slot="title" >-->
          <!--                <Icon type="md-home" />-->
          <!--                <router-link to="/home">首页</router-link>-->
          <!--              </template>-->

          <!--              <MenuItem name="1-1">Option 1</MenuItem>-->
          <!--              <MenuItem name="1-2">Option 2</MenuItem>-->
          <!--              <MenuItem name="1-3">Option 3</MenuItem>-->
          <!--          </Submenu>-->
          <!--          <Submenu name="2">-->
          <!--            <template slot="title">-->
          <!--              <Icon type="ios-videocam-outline" />-->
          <!--              <router-link to="/videocheck">视频巡店</router-link>-->
          <!--            </template>-->
          <!--            &lt;!&ndash;              <MenuItem name="2-1">Option 1</MenuItem>&ndash;&gt;-->
          <!--            &lt;!&ndash;              <MenuItem name="2-2">Option 2</MenuItem>&ndash;&gt;-->
          <!--          </Submenu>-->
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics" />
              巡检数据
            </template>
            <router-link to="/viewdata"><MenuItem name="3-1">可视数据</MenuItem></router-link>
            <!--            <MenuItem name="3-2">明细数据</MenuItem>-->
            <Submenu name="3-2" StaticEnableDefaultPopOutImage = "false">
              <template slot="title">
                明细数据
              </template>
              <router-link to="/JxsDevice"><MenuItem name="3-2-3">经销商设备信息</MenuItem></router-link>
              <router-link to="/JxsMessage"><MenuItem name="3-2-4">经销商信息</MenuItem></router-link>
              <router-link to="/JxsPromgram"><MenuItem name="3-2-5">经销商程序信息</MenuItem></router-link>
<!--              <router-link to="/shop"><MenuItem name="3-2-1">门店</MenuItem></router-link>-->
<!--              <router-link to="/offline"><MenuItem name="3-2-2">离线</MenuItem></router-link>-->
            </Submenu>
          </Submenu>
          <Submenu name="4" v-if="usertoken">
            <template slot="title">
              <Icon type="ios-construct" />
              系统管理
            </template>
            <router-link to="/admitor"><MenuItem name="4-1">用户管理</MenuItem></router-link>
<!--            <router-link to="/shebei"><MenuItem name="4-2">设备管理</MenuItem></router-link>-->

<!--                <div  v-for="(items) in programlist" :key="items">-->
<!--                  <router-link :to="{path:'/Projectmanagement',query:{key_id:items.project_id,proname:items.project_name}}">项目管理</router-link>-->
                  <router-link :to="{path:'/Projectmanagement'}"><MenuItem name="4-2">项目管理</MenuItem></router-link>
<!--              <div v-for="(items) in programlist" :key="items">-->
<!--                <router-link :to="{path:'/Programlist',query:{key_id:items.project_id,proname:items.project_name}}"><MenuItem :name="items">{{items.project_name}}</MenuItem></router-link>-->
<!--              </div>-->
            <!--            <router-link to="/jingxiaoshang"><MenuItem name="4-3">经销商管理</MenuItem></router-link>-->
          </Submenu>
<!--          <Submenu name="5" v-if="ifzjc">-->
          <Submenu name="5">
            <template slot="title">
              <Icon type="md-desktop" />
              主机厂管理
            </template>
            <Submenu StaticEnableDefaultPopOutImage = "false" v-for="(item,i) in hostgroup" :key="item.group_id" :name="i">
              <template slot="title">
                                  <keep-alive>
                <router-link :to="{path:'/jingxiaoshang',query:{key_code:item.group_code,key_id:item.group_id,proname:item.group_name}}">
                  <div>{{item.group_name}}</div>
                  <!--                    {{item.group_name}}-->
                </router-link>
                                  </keep-alive>
              </template>

                <MenuItem name="5-1-1" class="menubj">
                  <Input  search v-model="sousuozhi" placeholder="搜索经销商" @on-search="sousuo(sousuozhi,i)"/>
                    <div v-for="(ite,ind) in jiejue2" :key="ind" >
                      <router-link :to="{path:'/stores',query:{key_id:ite.dealer_id,group_code:item.group_code,key_code:ite.dealer_code,proname:ite.dealer_name}}">
                        <div class="lb4">{{ite.dealer_name}}</div>
                      </router-link>
                    </div>
                </MenuItem>
<!--              <MenuItem name="5-1-1"><Input search enter-button placeholder="Enter something..." on-search="sousuo()" v-model="sousuozhi"/></MenuItem>-->
              <div v-for="(items,index) in jiejue[i]" :key="index">
                <router-link :to="{path:'/stores',query:{key_id:items.dealer_id,group_code:item.group_code,key_code:items.dealer_code,proname:items.dealer_name}}">
                  <MenuItem :name="items.dealer_id">
                    {{items.dealer_name}}
                  </MenuItem>
                </router-link>
              </div>

              <!--              <router-link to="/stores"><MenuItem name="1">店2</MenuItem></router-link>-->
            </Submenu>
<!--            <Submenu name="a" StaticEnableDefaultPopOutImage = "false">-->
<!--              <template slot="title">-->
<!--                项目列表-->
<!--              </template>-->
<!--              <div v-for="(items) in programlist" :key="items">-->
<!--                <router-link :to="{path:'/Programlist',query:{key_id:items.project_id,proname:items.project_name}}"><MenuItem :name="items">{{items.project_name}}</MenuItem></router-link>-->
<!--              </div>-->

<!--            </Submenu>-->
            <!--            <Submenu name="5-2" StaticEnableDefaultPopOutImage = "false">-->
            <!--              <template slot="title">-->
            <!--                长安-->
            <!--              </template>-->
            <!--              <router-link to="/stores"><MenuItem name="5-2-1">长安店1</MenuItem></router-link>-->
            <!--              <router-link to="/stores"><MenuItem name="5-2-2">长安店2</MenuItem></router-link>-->
            <!--            </Submenu>-->
          </Submenu>
          <router-link to="/personcenter"><MenuItem name="6"><Icon type="ios-person-outline" />个人中心</MenuItem></router-link>
<!--          <router-link to="/Map"><MenuItem name="4-1">用户管理</MenuItem></router-link>-->
        </Menu>
      </Sider>
      <Layout :style="{padding: '0 24px 24px'}">

        <Content :style="{minHeight: '280px', background: '#f5f7f9'}">
          <div style="height: 5%">
            <Breadcrumb :style="{margin: '24px 0'}">
              <!--          <BreadcrumbItem>Home</BreadcrumbItem>-->
              <!--          <BreadcrumbItem>Components</BreadcrumbItem>-->
              <!--          <BreadcrumbItem>Layout</BreadcrumbItem>-->
              <BreadcrumbItem v-for="(item,index) in list" :key="index">{{item.name}}</BreadcrumbItem>
            </Breadcrumb>
            <Divider class="divider"></Divider>
          </div>

          <!--            <div class="bigsquare">-->
          <!--              <diamond></diamond>-->
          <!--              <div>-->
          <!--                <Bar></Bar>-->
          <!--              </div>-->
          <!--              <div class="homebottom">-->
          <!--                <Pie></Pie>-->
          <!--                <carousel></carousel>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <viewdata></viewdata>-->
            <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>


import {getGroupList,
        getDealerList,
        getProjectList
        } from "@/api/api"
export default {
  name: "center",
  data() {
    return {
      usertoken:true,
      list: [],
      hostgroup: [],
      hostid: '',
      hostcode: [],
      jiejue: [],
      jiejue1: [],
      jiejue2:[],
      programlist: [],
      sousuozhi:'',
      ifzjc: true,
      jxsmsg:['1','2'],
    }
  },
  methods: {
    //数组中的数组中的对象排序
    compare(sz){
      sz.sort(function(a, b){
        var x = a.dealer_code.toLowerCase();
        var y = b.dealer_code.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
    },
    sousuo(sousuovalue,i) {
      // console.log(sousuovalue)
      // console.log(this.jiejue[i])
      this.jiejue2 = [];
      if(sousuovalue == '') {
        this.jiejue2 = [];
      }else {
        for(let k = 0; k<=i;k++) {
          if(k==i) {
            for (let j = 0; j < this.jiejue[i].length; j++) {
              if(this.jiejue[i][j].dealer_name.indexOf(sousuovalue) >= 0) {
                this.jiejue2.push(this.jiejue[i][j])
              }
            }
          }else {
            this.jiejue2 = []
          }
        }

      }
        // console.log(this.jiejue2)
    },
    async fn1(data){
      // console.log(data)
        for (let i = 0, len = data.length; i < len; i++) {
          await this.fn(data[i],i)
        }
    },
    async fn(key_code,i) {
      await getDealerList(key_code).then(res => {
        var jingxiaoshanglist=[];
        res.data.result_content.forEach((item)=> {
          jingxiaoshanglist.push(item)
        })
        return jingxiaoshanglist
      }).then(msg => {
      console.log(msg)
        this.jxsmsg = msg
        for(let j=0;j<msg.length;j++) {
          this.jiejue[i]=[];
          this.compare(msg)
          this.jiejue[i]=msg;
        }
        console.log(this.jiejue)
        this.jiejue1 = this.jiejue
      }).catch(error => {
            console.log(error)
          })
    }
  },
  computed: {
  },
  watch: {
    $route(to) {   // 监听路由变化
      this.list = []
      this.list = this.$route.matched
      if(to.query.proname) {
        this.list[1].name = to.query.proname
      }
    }
  },
  created() {
  },
  mounted() {
    // this.usertoken = false
    // this.usertoken = window.sessionStorage.getItem("token")
    // console.log(this.usertoken)
    if(this.$route.query.zhujichangshow=='true') {
      this.ifzjc = true
      // console.log(typeof (this.ifzjc))
    }else {
      this.ifzjc = false
      // console.log(typeof (this.ifzjc))
    }
    // this.ifzjc = this.$route.query.zhujichangshow
    // console.log(this.ifzjc)
    getProjectList().then(res => {
      // console.log(res)
      res.data.result_content.forEach(item => {
        this.programlist.push(item)
      })
    })
    this.list = this.$route.matched;
    getGroupList().then(res => {
      // console.log(res)
      this.hostgroup = res.data.result_content
      // console.log(this.hostgroup)
      this.hostgroup.forEach(item => {
        this.hostcode.push(item.group_code)
      })
      return this.hostcode
    }).then(data => {
          this.fn1(data)
    })
  }
}
</script>

<style scoped>
  .hometotal {
    height:93%;
  }
  .ivu-layout {
    height: 100%;
    display: flex;
    flex: auto;
    background: #f5f7f9;
  }
  /*.ivu-layout-sider {*/
  /*  width: 10% !important;*/
  /*}*/
  .ivu-breadcrumb {
    display: flex;
    flex-direction: row;
    margin:20px;
  }
  .divider {
    margin-top: 0px;
  }
  a {
    color: black;
  }
  a:hover {
    color: #007aff;
  }
  a:focus {
    color: #007aff;
  }
  .ivu-layout-sider {
    transition: all .2s ease-in-out;
    position: relative;
    background: #515a6e;
    min-width: 0;
  }
  .ivu-menu-vertical {
    overflow-y: scroll;
    height: 90%;
  }
  .ivu-menu-vertical::-webkit-scrollbar {
    width: 0;
  }
  .shubiaotou {
    display: flex;
  }
  .shubiaotouheader .ivu-menu-item {
    padding-left: 14px !important;
  }
  .ivu-menu-submenu-has-parent-submenu .ivu-menu {
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
    overflow: auto;
  }
  .ivu-layout.ivu-layout-has-sider>.ivu-layout, .ivu-layout.ivu-layout-has-sider>.ivu-layout-content {
    overflow-x: visible!important;
  }
</style>