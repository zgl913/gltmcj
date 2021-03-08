<!--
  Map -- 地图组件 --
  v1.0.0
  author xuxiaoqiang,2462170438@qq.com
  copyright Hangzhou QianNeng 2021.1.5
-->
<template>
    <div id="map" v-show="showmapp">
    </div>
</template>

<script>
import { Scene } from '@antv/l7';
import { CountryLayer } from '@antv/l7-district';
import { Mapbox } from '@antv/l7-maps';
// import { WorldLayer } from '@antv/l7-district';
export default {
  name: "Map",
    data () {
      return {
          showmapp:true,
      }
    },
  methods: {
    showmap() {
      const colors = [ '#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70' ];
      const scene = new Scene({
        id: 'map',
        map: new Mapbox({
          // center: [ 180.2825, 39.9 ],
          center: [ 116.2825, 39.9 ],
          pitch: 0,
          style: 'blank',
          // zoom: 3,
          zoom: 5,
          minZoom:1.7,
          // minZoom:0,
          maxZoom: 10,
          // autoFit: true,
        })
      });
      const attachMapContainer = document.createElement('div');
      attachMapContainer.id = 'attach';
      attachMapContainer.style.cssText = `position: absolute;
height: 125px;
width: 98px;
right: 50px;
bottom: 20px;
border: 1px solid #333;`;
      document.getElementById('map').parentElement.append(attachMapContainer);

      scene.on('loaded', () => {
        new CountryLayer(scene, {
          data: [],
          joinBy: [ 'NAME_CHN', 'name' ],
          depth: 1,
          provinceStroke: '#fff',
          cityStroke: '#EBCCB4',
          cityStrokeWidth: 1,
          showBorder: false,
          label: {
            // enable: false
            size:10,
            color: '#ff4500',
            // stroke: false
          },
          fill: {
            color: {
              field: 'NAME_CHN',
              values: colors
            }
          },
          popup: {
            enable: true,
            Html: props => {
              return `<span>${props.NAME_CHN}</span>`;
            }
          }
        });
      });
        // scene.panTo([ 10.2825, 39.9 ]);
// 添加附图，附图需要和主图保持一致

      const scene2 = new Scene({
        id: 'attach',
        logoVisible: false,
        map: new Mapbox({
          center: [ 113.60540108435657, 12.833692637803168 ],
          pitch: 0,
          style: 'blank',
          zoom: 1.93,
          minZoom: 0,
          maxZoom: 3,
          interactive: false
        })
      });
      scene2.on('loaded', () => {
        new CountryLayer(scene2, {
          data: [],
          label: {
            enable: false
          },
          popup: {
            enable: false
          },
          autoFit: false,
          depth: 1,
          fill: {
            color: {
              field: 'NAME_CHN',
              values: [
                '#feedde',
                '#fdd0a2',
                '#fdae6b',
                '#fd8d3c',
                '#e6550d',
                '#a63603'
              ]
            }
          }
        });
      });
    }
    },
  mounted() {
    this.showmap()
  }
}
</script>

<style>
    #map {
        position: relative;
        height: 100%;
        width: 100%;
    }
  /*#map .l7-scene {*/
  /*    height: 120% !important;*/
  /*    width:120% !important;*/
  /*    !*position: relative;*!*/
  /*    !*top:0%;*!*/
  /*    !*left:-65%;*!*/
  /*}*/
    #map .l7-scene canvas{
        height:120% !important;
        width: 200% !important;
        position: absolute;
        top: 0;
        left:-50%;
    }
</style>

<!--import '../../../node_modules/echarts/map/js/china.js' // 引入中国地图数据-->

<!--<template>-->
<!--    <div class="box"></div>-->
<!--</template>-->
<!--<script>-->
<!--    import echarts from "echarts";-->
<!--    //   import '../../node_modules/echarts/map/js/world.js'-->
<!--    // import '../../../node_modules/echarts/map/js/china.js' // 引入中国地图数据-->
<!--    // import * as echarts from 'echarts';-->
<!--    export default {-->
<!--        name: "echarts",-->
<!--        props: ["userJson"],-->
<!--        data() {-->
<!--            return {-->

<!--            }-->
<!--        },-->
<!--        mounted() {-->
<!--            this.showmap();-->
<!--        },-->
<!--        methods: {-->
<!--            showmap() {-->
<!--                var object = echarts.init(document.querySelector(".box"))-->
<!--                // var uploadedDataURL = "/asset/get/s/data-1612933506802-jiXTaHwkp.xlsx";-->

<!--                // var uploadedDataURL = "/asset/get/s/data-1612933506802-jiXTaHwkp.xlsx";-->

<!--                window.dataList = [{-->
<!--                    name: '安徽',-->
<!--                    value: 2-->
<!--                }, {-->
<!--                    name: '澳门',-->
<!--                    value: 0-->
<!--                }, {-->
<!--                    name: '北京',-->
<!--                    value: 73-->
<!--                }, {-->
<!--                    name: '福建',-->
<!--                    value: 3-->
<!--                }, {-->
<!--                    name: '甘肃',-->
<!--                    value: 1-->
<!--                }, {-->
<!--                    name: '广东',-->
<!--                    value: 154-->
<!--                }, {-->
<!--                    name: '广西',-->
<!--                    value: 2-->
<!--                }, {-->
<!--                    name: '贵州',-->
<!--                    value: 0-->
<!--                }, {-->
<!--                    name: '海南',-->
<!--                    value: 6-->
<!--                }, {-->
<!--                    name: '河北',-->
<!--                    value: 118-->
<!--                }, {-->
<!--                    name: '河南',-->
<!--                    value: 5-->
<!--                }, {-->
<!--                    name: '黑龙江',-->
<!--                    value: 59-->
<!--                }, {-->
<!--                    name: '湖北',-->
<!--                    value: 4-->
<!--                }, {-->
<!--                    name: '湖南',-->
<!--                    value: 7-->
<!--                }, {-->
<!--                    name: '吉林',-->
<!--                    value: 24-->
<!--                }, {-->
<!--                    name: '江苏',-->
<!--                    value: 6-->
<!--                }, {-->
<!--                    name: '江西',-->
<!--                    value: 5-->
<!--                }, {-->
<!--                    name: '辽宁',-->
<!--                    value: 15-->
<!--                }, {-->
<!--                    name: '内蒙古',-->
<!--                    value: 13-->
<!--                }, {-->
<!--                    name: '宁夏',-->
<!--                    value: 1-->
<!--                }, {-->
<!--                    name: '青海',-->
<!--                    value: 1-->
<!--                }, {-->
<!--                    name: '山东',-->
<!--                    value: 6-->
<!--                }, {-->
<!--                    name: '山西',-->
<!--                    value: 7-->
<!--                }, {-->
<!--                    name: '陕西',-->
<!--                    value: 6-->
<!--                }, {-->
<!--                    name: '上海',-->
<!--                    value: 46-->
<!--                }, {-->
<!--                    name: '四川',-->
<!--                    value: 11-->
<!--                }, {-->
<!--                    name: '台湾',-->
<!--                    value: 0-->
<!--                }, {-->
<!--                    name: '天津',-->
<!--                    value: 13-->
<!--                }, {-->
<!--                    name: '西藏',-->
<!--                    value: 0-->
<!--                }, {-->
<!--                    name: '香港',-->
<!--                    value: 0-->
<!--                }, {-->
<!--                    name: '新疆',-->
<!--                    value: 1-->
<!--                }, {-->
<!--                    name: '云南',-->
<!--                    value: 1-->
<!--                }, {-->
<!--                    name: '浙江',-->
<!--                    value: 4-->
<!--                }, {-->
<!--                    name: '重庆',-->
<!--                    value: 2-->
<!--                }];-->
<!--                 var option ={-->
<!--                    tooltip: {-->
<!--                        triggerOn: "click",-->
<!--                        formatter: function(e) {-->
<!--                            return .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value-->
<!--                        }-->
<!--                    },-->
<!--                    visualMap: {-->
<!--                        min: 0,-->
<!--                        max: 2000,-->
<!--                        left: 26,-->
<!--                        bottom: 50,-->
<!--                        showLabel: !0,-->
<!--                        text: ["高", "低"],-->
<!--                        pieces: [{-->
<!--                            gt: 100,-->
<!--                            label: "> 100",-->
<!--                            color: "#000080"-->
<!--                        }, {-->
<!--                            gte: 80,-->
<!--                            lte: 100,-->
<!--                            label: "80 - 100",-->
<!--                            color: "#0000FF"-->
<!--                        }, {-->
<!--                            gte: 50,-->
<!--                            lte: 80,-->
<!--                            label: "50 - 80",-->
<!--                            color: "#4169E1"-->
<!--                        }, {-->
<!--                            gte: 20,-->
<!--                            lt: 50,-->
<!--                            label: "20 - 50",-->
<!--                            color: "#6495ED"-->
<!--                        }, {-->
<!--                            gte: 1,-->
<!--                            lt: 20,-->
<!--                            label: "1 - 20",-->
<!--                            color: "#B0C4DE"-->
<!--                        }, {-->
<!--                            value: 0,-->
<!--                            color: "#C0C0C0"-->
<!--                        }],-->
<!--                        show: !0-->
<!--                    },-->
<!--                    geo: {-->
<!--                        map: "china",-->
<!--                        roam: !1,-->
<!--                        scaleLimit: {-->
<!--                            min: 1,-->
<!--                            max: 2-->
<!--                        },-->
<!--                        zoom: 1.23,-->
<!--                        top: 51,-->
<!--                        label: {-->
<!--                            normal: {-->
<!--                                show: !0,-->
<!--                                fontSize: "12",-->
<!--                                color: "rgba(0,0,0,0.7)"-->
<!--                            }-->
<!--                        },-->
<!--                        itemStyle: {-->
<!--                            normal: {-->
<!--                                //shadowBlur: 50,-->
<!--                                //shadowColor: 'rgba(0, 0, 0, 0.2)',-->
<!--                                borderColor: "rgba(0, 0, 0, 0.2)"-->
<!--                            },-->
<!--                            emphasis: {-->
<!--                                areaColor: "#f2d5ad",-->
<!--                                shadowOffsetX: 0,-->
<!--                                shadowOffsetY: 0,-->
<!--                                borderWidth: 0-->
<!--                            }-->
<!--                        }-->
<!--                    },-->
<!--                    series: [{-->
<!--                        name: "数据数量",-->
<!--                        type: "map",-->
<!--                        geoIndex: 0,-->
<!--                        data: window.dataList-->
<!--                    }]-->
<!--                };-->
<!--                 object.setOption(option);-->
<!--            },-->

<!--        }-->
<!--    }-->
<!--</script>-->
<!--<style scoped>-->
<!--    #main {-->
<!--        width: 100%;-->
<!--        height: 1000px;-->
<!--    }-->
<!--</style>-->
