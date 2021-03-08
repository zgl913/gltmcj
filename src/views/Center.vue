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
          <router-link to="/home"><MenuItem name="1"><Icon type="md-home"/>首页</MenuItem></router-link>
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
              <router-link to="/shop"><MenuItem name="3-2-1">门店</MenuItem></router-link>
              <router-link to="/offline"><MenuItem name="3-2-2">离线</MenuItem></router-link>
            </Submenu>
          </Submenu>
          <Submenu name="4">
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
          <Submenu name="5">
            <template slot="title">
              <Icon type="md-desktop" />
              主机厂管理
            </template>
            <Submenu  StaticEnableDefaultPopOutImage = "false" v-for="(item,i) in hostgroup" :key="item.group_id" :name="i">
              <template slot="title">
                <!--                  <keep-alive>-->
                <router-link :to="{path:'/jingxiaoshang',query:{key_code:item.group_code,key_id:item.group_id,proname:item.group_name}}">
                  <div>{{item.group_name}}</div>
                  <!--                    {{item.group_name}}-->
                </router-link>
                <!--                  </keep-alive>-->
              </template>
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

        </Menu>
      </Sider>
      <Layout :style="{padding: '0 24px 24px'}">

        <Content :style="{padding: '24px', minHeight: '280px', background: '#f5f7f9',}">
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
  // getGroupItem,
  getDealerList,
    getProjectList
} from "@/api/api"
export default {
  name: "center",
  data() {
    return {
      list: [],
      hostgroup: [],
      // sidebarItem: '',
      // changeSidebar: '',
      hostid: '',
      hostcode: [],
      jiejue: [],
      jiejue1: [],
      programlist: [],
      // hostcontent:[["长安店","11","22"],["1"]],

      // showjing:'true'
    }
  },
  methods: {
      // changeSidebar(name) {
      //   this.sidebarItem = name;
      //   this.$router.push({
      //     name: name,
      //   });
      // },
    async fn1(data){
      // console.log(data)
        for (let i = 0, len = data.length; i < len; i++) {
          await this.fn(data[i],i)
        }
    },
//     async geizhi(i,j,data1) {
//       await this.jiejue[i][j] = data1[j];
// },
//     async fuzhi(i,data1) {
//       for(let j=0;j<data1.length;j++) {
//         // this.jiejue[i] = [];
//         await this.geizhi(i,j,data1);
//       }
//     },
//     async fn(key_code,i) {
//       await getDealerList(key_code).then(res => {
//         // var jingxiaoshanglist=[];
//         // var jingxiaoshangid=[]
//         console.log(res)
//         // for(let j=0;j<res.data.result_content.length;j++) {
//           // console.log(res.data.result_content[j])
//           // this.jiejue1.push(res.data.result_content[j])
//           this.fuzhi(i,res.data.result_content)
//            //  this.jiejue[i] = []; //每行有10列
//            // this.jiejue[i][j] = res.data.result_content[j];
//         // }
//         // res.data.result_content.forEach((item)=> {
//         //   console.log(item)
//         //
//         //       this.jiejue[i].push(item)
//         //
//         //   // this.jiejue[i].push(item)
//         //   // jingxiaoshangid.push(item.dealer_id)
//         // })
//         console.log(this.jiejue)
//         //     // this.jingxiaoshanglist.push(res.data.result_content)
//         // console.log(this.jingxiaoshanglist)
//         //   },).catch(error => {
//         //     console.log(error)
//         //   })
//         // })
//       })




    async fn(key_code,i) {
      await getDealerList(key_code).then(res => {
        var jingxiaoshanglist=[];
        // var jingxiaoshangid=[]
        //     console.log(res)
        res.data.result_content.forEach((item)=> {
          jingxiaoshanglist.push(item)
          // jingxiaoshangid.push(item.dealer_id)
        })
        //     // this.jingxiaoshanglist.push(res.data.result_content)
        // console.log(this.jingxiaoshanglist)
        //   },).catch(error => {
        //     console.log(error)
        //   })
        // })
        // console.log(jingxiaoshanglist)
        return jingxiaoshanglist
      }).then(msg => {
      // console.log(msg)
        for(let j=0;j<msg.length;j++) {
          this.jiejue[i]=[];
          this.jiejue[i]=msg;
        }
          // msg.forEach((item) => {
          //   console.log(item)
          //   this.jiejue[i].push(item)
          // })
          // this.jiejue.push(msg)


        // console.log(this.jiejue)
        // console.log(JSON.stringify(this.jiejue))
      })




      // async fn(key_code,i) {
      //   await getDealerList(key_code).then(res => {
      //     var jingxiaoshanglist=[];
      //     // var jingxiaoshangid=[]
      //     console.log(res)
      //     res.data.result_content.forEach((item)=> {
      //       jingxiaoshanglist.push(item)
      //       // jingxiaoshangid.push(item.dealer_id)
      //     })
      //     //     // this.jingxiaoshanglist.push(res.data.result_content)
      //     // console.log(this.jingxiaoshanglist)
      //     //   },).catch(error => {
      //     //     console.log(error)
      //     //   })
      //     // })
      //     console.log(jingxiaoshanglist)
      //     return jingxiaoshanglist
      //   }).then(msg => {
      //     console.log(msg)
      //     msg.forEach((item) => {
      //       console.log(item)
      //       this.jiejue[i].push(item)
      //     })
      //     // this.jiejue.push(msg)
      //
      //
      //     console.log(this.jiejue)
      //     // console.log(JSON.stringify(this.jiejue))
      //   })



          .catch(error => {
            console.log(error)
          })
    }
    // showjxs(group_code) {
    //   return new Promise(() =>{
    //     getDealerList(group_code).then(res => {
    //       var jingxiaoshanglist=[];
    //       //     console.log(res)
    //       res.data.result_content.forEach((item)=> {
    //         jingxiaoshanglist.push(item.dealer_name)
    //       })
    //       //     // this.jingxiaoshanglist.push(res.data.result_content)
    //       // console.log(this.jingxiaoshanglist)
    //       //   },).catch(error => {
    //       //     console.log(error)
    //       //   })
    //       // })
    //       console.log(jingxiaoshanglist)
    //       return jingxiaoshanglist
    //     }).then(msg => {
    //
    //       this.jiejue.push(msg)
    //       console.log(JSON.stringify(this.jiejue))
    //     })
    //         .catch(error => {
    //           console.log(error)
    //         })
    //   })
    //   // if(this.showjing) {
    // },
    // async add(group) {
    //   for (let i = 0, len = group.length; i < len; i++) {
    //     await this.showjxs(group[i])
    //   }
    // }
  },
  computed: {
    // showjxs:function (items) {
    //   getDealerList(items).then(res=> {
    //     // console.log(res)
    //     // this.hostcontent = JSON.parse(JSON.stringify(res.data.result_content))
    //     // console.log(this.hostcontent+'11')
    //     res.data.result_content.forEach(item => {
    //       this.jingxiaoshanglist.push(item.dealer_name)
    //     })
    //     // this.jingxiaoshanglist=JSON.parse(JSON.stringify(this.jingxiaoshanglist))
    //     // this.jingxiaoshanglist.push(res.data.result_content)
    //
    //   },).catch(error => {
    //     console.log(error)
    //   })
    //   return this.jingxiaoshanglist
    // }
  },
  watch: {
    $route(to) {   // 监听路由变化
      this.list = []
      this.list = this.$route.matched
      if(to.query.proname) {
        this.list[1].name = to.query.proname
      }
      // if(to.query.proname2) {
      //   this.list[2].name = to.query.proname2
      // }
      // this.list[1].name = to.query.proname
      // console.log(this.list)
    }
    // '$route': function () {
    //   this.hostcode=[]
    //   getGroupList().then(res => {
    //     // console.log(res)
    //     this.hostgroup = res.data.result_content
    //     console.log(this.hostgroup)
    //     this.hostgroup.forEach(item => {
    //       this.hostcode.push(item.group_code)
    //     })
    //     // this.hostid = res.data.result_content.group_id
    //     // console.log(res.data.result_content.group_code)
    //     // this.hostcode.push((res.data).result_content.group_code)
    //     // console.log(this.hostcode)
    //     return this.hostcode
    //   }).then(data => {
    //     // this.add(data)
    //     for (let i = 0, len = data.length; i < len; i++) {
    //       this.fn(data[i])
    //     }
    //   })
    // }

  },
  created() {

  },
  mounted() {
    // this.sidebarItem = this.$route.name;
    getProjectList().then(res => {
      // console.log(res)
      res.data.result_content.forEach(item => {
        this.programlist.push(item)
      })
    })
    // var arr1 = ['n1', 'n2', 'n3'];
    // var arr2 = ['n4', 'n5', 'n6'];
    // var arr = [];
    // arr.push(arr1);
    // arr.push(arr2);
// document.getElementById("test").innerHTML = arr;
//     document.getElementById("test").innerHTML = JSON.stringify(arr);
//     console.log(JSON.stringify(arr) + '111');
    this.list = this.$route.matched;
    getGroupList().then(res => {
      // console.log(res)
      this.hostgroup = res.data.result_content
      // console.log(this.hostgroup)
      this.hostgroup.forEach(item => {
        this.hostcode.push(item.group_code)
      })
      // this.hostid = res.data.result_content.group_id
      // console.log(res.data.result_content.group_code)
      // this.hostcode.push((res.data).result_content.group_code)
      // console.log(this.hostcode)
      return this.hostcode
    }).then(data => {
          // this.add(data)
          this.fn1(data)
    })
            // getDealerList(data[i]).then(res => {
            //   var jingxiaoshanglist=[];
            //   // var jingxiaoshangid=[]
            //   //     console.log(res)
            //   res.data.result_content.forEach((item)=> {
            //     jingxiaoshanglist.push(item)
            //     // jingxiaoshangid.push(item.dealer_id)
            //   })
            //   //     // this.jingxiaoshanglist.push(res.data.result_content)
            //   // console.log(this.jingxiaoshanglist)
            //   //   },).catch(error => {
            //   //     console.log(error)
            //   //   })
            //   // })
            //   console.log(jingxiaoshanglist)
            //   return jingxiaoshanglist
            // }).then(msg => {
            //
            //   this.jiejue.push(msg)
            //   console.log(JSON.stringify(this.jiejue))
            // })
            //     .catch(error => {
            //       console.log(error)
            //     })


    // this.jingxiaoshanglist=JSON.parse(this.jingxiaoshanglist)
    // getDealerList(data[i]).then(res=> {
    //   // console.log(JSON.stringify(res)+'w')
    //   // this.hostcontent = JSON.parse(JSON.stringify(res.data.result_content))
    //   // console.log(this.hostcontent+'11')
    //   res.data.result_content.forEach(item => {
    //     // this.jingxiaoshanglist = JSON.parse(this.jingxiaoshanglist)
    //     // console.log(item.dealer_name)
    //     // this.jingxiaoshanglist=this.jingxiaoshanglist.concat()
    //
    //     this.jingxiaoshanglist.push(item.dealer_name)
    //
    //     // this.hostcontent=JSON.stringify(this.jingxiaoshanglist.push(item.dealer_name))
    //
    //
    //   })
    //   console.log(this.jingxiaoshanglist)
    //   // this.jingxiaoshanglist=JSON.parse(JSON.stringify(this.jingxiaoshanglist))
    //   // this.jingxiaoshanglist.push(res.data.result_content)
    //
    //
    //
    //   return this.jingxiaoshanglist
    // })


    // console.log(this.jingxiaoshanglist)
    // this.jingxiaoshanglist=JSON.stringify(this.jingxiaoshanglist)
    // console.log(JSON.stringify(this.jingxiaoshanglist))
    // })

    //     .catch(error => {
    //   console.log(error)
    // });
    // getGroupItem(this.hostid).then(res=> {
    //   console.log(res)
    // }).catch(error=> {
    //   console.log(error)
    // })
    // getDealerList(this.hostcode).then(res=> {
    //   console.log(res)
    //   this.jingxiaoshanglist.push(res.data.result_content)
    //   console.log(this.jingxiaoshanglist)
    // },).catch(error => {
    //   console.log(error)
    // })
    // }
    // data() {
    //   return {
    //     sidebarItem: "",
    //   };
    // },
    // mounted() {
    //   this.sidebarItem = this.$route.name;
    // },
    // methods: {
    //   changeSidebar(name) {
    //     this.sidebarItem = name;
    //     this.$router.push({
    //       name: name,
    //     });
    //   },
    // },
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
    /*flex-direction: column;*/
    flex: auto;
    background: #f5f7f9;
  }
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
    /*overflow-y: scroll;*/
  }
  .ivu-menu-vertical {
    overflow-y: scroll;
    height: 90%;
  }
  .ivu-menu-vertical::-webkit-scrollbar {
    width: 0;
  }
  /*.ivu-layout[data-v-628cac8f] {*/
  /*  height: auto;*/
  /*  display: flex;*/
  /*  !* flex-direction: column; *!*/
  /*  flex: auto;*/
  /*  background: #f5f7f9;*/
  /*}*/
</style>