import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/firstmenu/Home.vue";
import videocheck from "@/views/secondmenu/videocheck";
import personcenter from "@/views/fifthmenu/personcenter";
// import checkdata from "@/views/thirdmenu/checkdata";
import viewdata from "@/views/thirdmenu/third_one/viewdata";
// import detaildata from "@/views/thirdmenu/third_two/detaildata";
import OffLine from "@/views/thirdmenu/third_two/OffLine";
import Shop from "@/views/thirdmenu/third_two/Shop";
import AdmitorManagement from "@/components/fourthcomponents/admitor/AdmitorManagement";
import DeviceManagement from "@/components/fourthcomponents/shebei/DeviceManagement";
import Stores from "@/views/HostManagement/Stores";
import DeviceNumber from "@/components/thirdcomponents/third_1/DeviceNumber";
import OfflineDevice from "@/components/thirdcomponents/third_1/OfflineDevice";
import OnlineDevice from "@/components/thirdcomponents/third_1/OnlineDevice";
// import Center from "@/views/Center";
// import personcenter from "@/views/personcenter";
// import viewdata from "@/views/viewdata";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: '/Center',
  //   name: 'Center',
  //   component: Center,
  //   // redirect: {
  //   //   name: "a"
  //   // },
  //   children:
  //       [
    {
      path: '/Home',
      component: Home,
      name: '首页',
      // meta: {
      //   title: 'home'
      // }
    },
    {
        path: '/',
        redirect: '/Home'
    },
    {
        path: '/videocheck',
        component: videocheck,
        name: '视频巡店'
    },
    {
        path: '/personcenter',
        component: personcenter,
        name: '个人中心'
    },
    {
        path: "/viewdata",
        name: "可视数据",
        component: viewdata,
        // meta: {
        //     title: "可视数据"
        // },
        children: [
            {
                path: "DeviceNumber",
                component: DeviceNumber
            },
            {
                path: "OfflineDevice",
                component: OfflineDevice
            },
            {
                path: "OnlineDevice",
                component: OnlineDevice
            },
            {
                path:"",
                component: DeviceNumber
            }
        ]
    },
    // {
    //     path: "/detaildata",
    //     name: "detaildata",
    //     component: detaildata,
    //     meta: {
    //         title: "detaildata"
    //     }
    // },
    {
        path: "/OffLine",
        component: OffLine,
        name: '离线'
    },
    {
        path: "/Shop",
        component: Shop,
        name: '门店'
    },
    {
        path: "/admitor",
        component: AdmitorManagement,
        name: '系统管理'
    },
    {
        path: "/shebei",
        name: '设备管理',
        component: DeviceManagement
    },
    {
        path: "/stores",
        name: '具体店信息',
        component: Stores
    },

    //       ]
  // }
];

const router = new VueRouter({
  routes
});

export default router;
