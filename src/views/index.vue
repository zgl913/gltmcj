<style scoped>
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
}
.layout-logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav{
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.ivu-layout-header {
  background: blue;
  padding: 0 50px;
  height: 64px;
  line-height: 64px;
}
.ivu-menu-dark {
  background: blue;
}
.ivu-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: auto;
  background: #f5f7f9;
}
.ivu-breadcrumb {
  color: #999;
  font-size: 14px;
  display: flex;
}
.ivu-layout-content {
  height: 100%;
}
.ivu-menu-dark {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.homebottom {
  width:100%;
  display: flex;
  justify-content: space-around;
}
.bigsquare {
  width: 300px;
  height: 300px;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
<!--          <div class="layout-logo"></div>-->
          <Button @click="showlogin" v-if="buttonloginshow2">登录</Button>
          <Avatar icon="ios-person" size="large"/>
          <router-link to="/personcenter"><div style="margin-left:10px;color:red">{{username1}}</div></router-link>

<!--          <div class="layout-nav">-->
<!--            <MenuItem name="1">-->
<!--              <Icon type="ios-navigate"></Icon>-->
<!--              Item 1-->
<!--            </MenuItem>-->
<!--            <MenuItem name="2">-->
<!--              <Icon type="ios-keypad"></Icon>-->
<!--              Item 2-->
<!--            </MenuItem>-->
<!--            <MenuItem name="3">-->
<!--              <Icon type="ios-analytics"></Icon>-->
<!--              Item 3-->
<!--            </MenuItem>-->
<!--            <MenuItem name="4">-->
<!--              <Icon type="ios-paper"></Icon>-->
<!--              Item 4-->
<!--            </MenuItem>-->
<!--          </div>-->
        </Menu>
      </Header>
      <div v-if="loginwindow" style="border:1px solid black;background-color: white;width: 50%;height: 50%;position: absolute;left:25%;top:25%;z-index: 333">
        <Login @ifshowlogin="showlogin1" @ifshowlogin1="showlogin2"></Login></div>
<!--      <Layout>-->
<!--        <Sider hide-trigger :style="{background: '#fff'}">-->
<!--          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">-->
<!--            <Submenu name="1">-->
<!--              <template slot="title">-->
<!--                <Icon type="ios-navigate"></Icon>-->
<!--                首页-->
<!--              </template>-->
<!--&lt;!&ndash;              <MenuItem name="1-1">Option 1</MenuItem>&ndash;&gt;-->
<!--&lt;!&ndash;              <MenuItem name="1-2">Option 2</MenuItem>&ndash;&gt;-->
<!--&lt;!&ndash;              <MenuItem name="1-3">Option 3</MenuItem>&ndash;&gt;-->
<!--            </Submenu>-->
<!--            <Submenu name="2">-->
<!--              <template slot="title">-->
<!--                <Icon type="ios-keypad"></Icon>-->
<!--                视频巡店-->
<!--              </template>-->
<!--&lt;!&ndash;              <MenuItem name="2-1">Option 1</MenuItem>&ndash;&gt;-->
<!--&lt;!&ndash;              <MenuItem name="2-2">Option 2</MenuItem>&ndash;&gt;-->
<!--            </Submenu>-->
<!--            <Submenu name="3">-->
<!--              <template slot="title">-->
<!--                <Icon type="ios-analytics"></Icon>-->
<!--                巡检数据-->
<!--              </template>-->
<!--              <MenuItem name="3-1">可视数据</MenuItem>-->
<!--              <MenuItem name="3-2">明细数据</MenuItem>-->
<!--            </Submenu>-->
<!--            <Submenu name="4">-->
<!--              <template slot="title">-->
<!--                <Icon type="ios-analytics"></Icon>-->
<!--                系统管理-->
<!--              </template>-->
<!--              <MenuItem name="4-1">用户管理</MenuItem>-->
<!--              <MenuItem name="4-2">设备管理</MenuItem>-->
<!--            </Submenu>-->
<!--            <Submenu name="5">-->
<!--              <template slot="title">-->
<!--                <Icon type="ios-analytics"></Icon>-->
<!--                个人中心-->
<!--              </template>-->
<!--            </Submenu>-->
<!--            <Submenu name="6">-->
<!--              <template slot="title">-->
<!--                <Icon type="ios-analytics"></Icon>-->
<!--                a-->
<!--              </template>-->
<!--              <MenuItem name="a"><router-link to="/a">a</router-link></MenuItem>-->
<!--              <MenuItem name="b"><router-link to="/b">b</router-link></MenuItem>-->
<!--            </Submenu>-->
<!--          </Menu>-->
<!--        </Sider>-->
<!--        <Layout :style="{padding: '0 24px 24px'}">-->
<!--          <Breadcrumb :style="{margin: '24px 0'}">-->
<!--            <BreadcrumbItem>Home</BreadcrumbItem>-->
<!--            <BreadcrumbItem>Components</BreadcrumbItem>-->
<!--            <BreadcrumbItem>Layout</BreadcrumbItem>-->
<!--          </Breadcrumb>-->
<!--          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">-->
<!--&lt;!&ndash;            <div class="bigsquare">&ndash;&gt;-->
<!--&lt;!&ndash;              <diamond></diamond>&ndash;&gt;-->
<!--&lt;!&ndash;              <div>&ndash;&gt;-->
<!--&lt;!&ndash;                <Bar></Bar>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--&lt;!&ndash;              <div class="homebottom">&ndash;&gt;-->
<!--&lt;!&ndash;                <Pie></Pie>&ndash;&gt;-->

<!--&lt;!&ndash;                <PieTotal></PieTotal>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--&lt;!&ndash;              <carousel></carousel>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            <viewdata></viewdata>&ndash;&gt;-->
<!--          </Content>-->
<!--        </Layout>-->
<!--      </Layout>-->
      <Center>

      </Center>
    </Layout>
  </div>
</template>
<script>
// import Bar from "@/components/Bar";
// import Pie from "@/components/Pie";
// import Carousel from "@/components/Carousel";
// import diamond from "@/components/diamond";
// import PieTotal from "@/components/PieTotal";
// import viewdata from "@/views/viewdata";
// import personcenter from "@/views/personcenter";
import Center from "@/views/Center";
import Login from "@/views/firstmenu/Login"
export default {
  data() {
    return {
      loginwindow: false,
      buttonloginshow2: true,
      username1:'',
      zhujichangifshow: true,
    }
  },
  // components: {
  //   Bar,
  //   Pie,
  //   Carousel,
  //   diamond,
  //   PieTotal
  // }
  // components:{
  //   viewdata
  // }
  // components: {
  //   personcenter
  // }
  components: {
    Center,
    Login,
  },
  methods: {
    // shownonelogin(booleannumber) {
    //   this.loginwindow= booleannumber;
    // },
    showlogin() {
      this.loginwindow = !this.loginwindow;
    },
    showlogin1(msg) {
      this.loginwindow=msg;
      // this.buttonloginshow2=msg;
    },
    showlogin2(msg) {
      this.loginwindow = msg;
      this.buttonloginshow2 = msg;
    }
  },
  mounted() {
    this.username1 = this.$route.query.username
    this.zhujichangifshow = this.$route.query.zhujichangshow
  }
}
</script>
