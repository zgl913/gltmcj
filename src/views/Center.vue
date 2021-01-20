<template>
  <div class="hometotal">
    <Layout>
      <Sider hide-trigger :style="{background: '#fff'}">
<!--        <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">-->
        <Menu @on-select="changeSidebar"
              :active-name="sidebarItem"
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
            <router-link to="/shebei"><MenuItem name="4-2">设备管理</MenuItem></router-link>
          </Submenu>
          <Submenu name="5">
            <template slot="title">
              <Icon type="md-desktop" />
              主机厂管理
            </template>
            <Submenu name="5-1" StaticEnableDefaultPopOutImage = "false">
              <template slot="title">
                广三
              </template>
              <router-link to="/stores"><MenuItem name="5-1-1">店1</MenuItem></router-link>
              <router-link to="/stores"><MenuItem name="5-1-2">店2</MenuItem></router-link>
            </Submenu>
            <Submenu name="5-2" StaticEnableDefaultPopOutImage = "false">
              <template slot="title">
                长安
              </template>
              <router-link to="/stores"><MenuItem name="5-2-1">长安店1</MenuItem></router-link>
              <router-link to="/stores"><MenuItem name="5-2-2">长安店2</MenuItem></router-link>
            </Submenu>
          </Submenu>
          <router-link to="/personcenter"><MenuItem name="6"><Icon type="ios-person-outline" />个人中心</MenuItem></router-link>
        </Menu>
      </Sider>
      <Layout :style="{padding: '0 24px 24px'}">
        <Breadcrumb :style="{margin: '24px 0'}">
<!--          <BreadcrumbItem>Home</BreadcrumbItem>-->
<!--          <BreadcrumbItem>Components</BreadcrumbItem>-->
<!--          <BreadcrumbItem>Layout</BreadcrumbItem>-->
          <BreadcrumbItem v-for="(item,index) in list" :key="index">{{item.name}}</BreadcrumbItem>
        </Breadcrumb>
        <Divider class="divider"></Divider>
        <Content :style="{padding: '24px', minHeight: '280px', background: '#f5f7f9',}">

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
export default {
  name: "center",
  data () {
    return {
      list: []
    }
  },
  watch:{
    $route(){   // 监听路由变化
      this.list = []
      this.list = this.$route.matched
    }
  },
  mounted() {
    this.list = this.$route.matched
  }
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
};
</script>

<style scoped>
  .hometotal {
    height:100%;
  }
  .ivu-layout {
    height: 100%;
    display: flex;
    flex-direction: column;
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
</style>