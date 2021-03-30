import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/firstmenu/Home.vue")
const videocheck = () => import("@/views/secondmenu/videocheck")
const personcenter = () => import("@/views/fifthmenu/personcenter")
const viewdata = () => import("@/views/thirdmenu/third_one/viewdata")
const OffLine = () => import("@/views/thirdmenu/third_two/OffLine")
const Shop = () => import("@/views/thirdmenu/third_two/Shop")
const AdmitorManagement = () => import("@/components/fourthcomponents/admitor/AdmitorManagement")
const DeviceManagement = () => import("@/components/fourthcomponents/shebei/DeviceManagement")
const Stores = () => import("@/views/HostManagement/Stores")
const DeviceNumber = () => import("@/components/thirdcomponents/third_1/DeviceNumber")
const OfflineDevice = () => import("@/components/thirdcomponents/third_1/OfflineDevice")
const OnlineDevice = () => import("@/components/thirdcomponents/third_1/OnlineDevice")
const ShangXianMengDian = () => import("@/components/thirdcomponents/third_1/ShangXianMengDian")
const SheBeiTongji = () => import("@/components/thirdcomponents/third_1/SheBeiTongji")
const Login = () => import("@/views/firstmenu/Login")
const index = () => import("@/views/index")
const Jingxiaoshang = () => import("@/components/fourthcomponents/jingxiaoshang/Jingxiaoshang")
const Programlist = () => import("@/views/HostManagement/Programlist")
const Projectmanagement = () => import("@/views/fourthmenu/Projectmanagement")
const JxsDevice = () => import("@/components/thirdcomponents/third_2/JxsDevice")
const JxsMessage = () => import("@/components/thirdcomponents/third_2/JxsMessage")
const JxsPromgram = () => import("@/components/thirdcomponents/third_2/JxsPromgram")


// // import Home from "../views/firstmenu/Home.vue";
// import videocheck from "@/views/secondmenu/videocheck";
// import personcenter from "@/views/fifthmenu/personcenter";
// // import checkdata from "@/views/thirdmenu/checkdata";
// import viewdata from "@/views/thirdmenu/third_one/viewdata";
// // import detaildata from "@/views/thirdmenu/third_two/detaildata";
// import OffLine from "@/views/thirdmenu/third_two/OffLine";
// import Shop from "@/views/thirdmenu/third_two/Shop";
// import AdmitorManagement from "@/components/fourthcomponents/admitor/AdmitorManagement";
// import DeviceManagement from "@/components/fourthcomponents/shebei/DeviceManagement";
// import Stores from "@/views/HostManagement/Stores";
// import DeviceNumber from "@/components/thirdcomponents/third_1/DeviceNumber";
// import OfflineDevice from "@/components/thirdcomponents/third_1/OfflineDevice";
// import OnlineDevice from "@/components/thirdcomponents/third_1/OnlineDevice";
// import ShangXianMengDian from "@/components/thirdcomponents/third_1/ShangXianMengDian";
// import SheBeiTongji from "@/components/thirdcomponents/third_1/SheBeiTongji";
// import Login from "@/views/firstmenu/Login";
// import index from "@/views/index";
// import Jingxiaoshang from "@/components/fourthcomponents/jingxiaoshang/Jingxiaoshang";
// import Programlist from "@/views/HostManagement/Programlist";


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
        path: '/Login',
        component: Login,
        name: '登录',
    },
    // {
    //     path: '/',
    //     redirect: '/Login',
    // },
    {
        path: '/',
        redirect: '/Login',
    },
    {
        path: '/index',
        component: index,
        name: '主页',
        children: [
            {
                path: '/Home',
                component: Home,
                name: '首页',
                // meta: {
                //   title: 'home'
                // }
            },
            {
                path: '',
                component: Home,
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
                        path: "ShangXianMengDian",
                        component: ShangXianMengDian,
                        name: '上线门店'
                    },
                    {
                        path: "SheBeiTongji",
                        component: SheBeiTongji,
                        name: '设备统计',
                        children: [
                            {
                                path: "DeviceNumber",
                                component: DeviceNumber,
                                name: '设备总数'
                            },
                            {
                                path: "OfflineDevice",
                                component: OfflineDevice,
                                name: '在线设备'
                            },
                            {
                                path: "OnlineDevice",
                                component: OnlineDevice,
                                name: '离线设备'
                            },
                            {
                                path:"",
                                component: DeviceNumber
                            }
                        ]
                    },
                    {
                        path:"",
                        component: ShangXianMengDian
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
                path: "/JxsDevice",
                component: JxsDevice,
                name: '经销商设备信息'
            },
            {
                path: "/JxsMessage",
                component: JxsMessage,
                name: '经销商信息'
            },
            {
                path: "/JxsPromgram",
                component: JxsPromgram,
                name: '经销商程序信息'
            },
            {
                path: "/admitor",
                component: AdmitorManagement,
                name: '用户管理'
            },
            {
                path: "/Projectmanagement",
                name: '项目管理',
                component: Projectmanagement
            },
            {
                path: "/shebei",
                name: '设备管理',
                component: DeviceManagement
            },
            {
                path: "/jingxiaoshang",
                name: '主机厂',
                component: Jingxiaoshang
            },
            {
                path: "/stores",
                name: '具体店信息',
                component: Stores
            },
            {
                path: "/Programlist",
                name: '项目信息',
                component: Programlist
            }
        ]
    },


    //       ]
  // }
];

const router = new VueRouter({
  routes
});
router.beforeEach((to,from,next) => {
    if(to.path ==="/Login") {return next()}
    const tokenstr = window.sessionStorage.getItem("token")
    if(!tokenstr) {return next("/Login")}
    next()
})
export default router;
