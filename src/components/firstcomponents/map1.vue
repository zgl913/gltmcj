<!--
  Map -- 地图组件 --
  v1.0.0
  author xuxiaoqiang,2462170438@qq.com
  copyright Hangzhou QianNeng 2021.1.5
-->
<template>
    <div style="position:relative;width: 500px" id="map" class="bbbj">
    </div>
    <!--    pointer-events: none;-->
</template>

<script>
    import { Scene } from '@antv/l7';
    import { CountryLayer } from '@antv/l7-district';
    import { Mapbox } from '@antv/l7-maps';
    export default {
        name: "Map",
        data () {
            return {
                mapgaodu:'',
                mapkuandu:''
            }
        },
        methods: {

        },
        mounted() {
            // this.mapgaodu= `${document.documentElement.offsetHeight*0.64}px`
            // this.mapkuandu= `${document.documentElement.offsetWidth*0.45}px`
            this.mapgaodu= `${document.documentElement.offsetHeight*0.8}px`
            this.mapkuandu= `${document.documentElement.offsetWidth*0.7}px`
            // this.mapgaodu= `${document.getElementById("map").offsetHeight}px`
            // this.mapkuandu= `${document.getElementById("map").offsetWidth}px`
            let mapp = document.getElementById('map')
            console.log(this.mapgaodu)
            // console.log(this.inputName)
            mapp.style.height=this.mapgaodu
            mapp.style.width=this.mapkuandu
            const colors = [ '#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70' ];
            const ProvinceData = [
                {
                    name: '云南省',
                    code: 530000,
                    value: 17881.12
                },
                {
                    name: '黑龙江省',
                    code: 230000,
                    value: 16361.62
                },
                {
                    name: '贵州省',
                    code: 520000,
                    value: 14806.45
                },
                {
                    name: '北京市',
                    code: 110000,
                    value: 30319.98
                },
                {
                    name: '河北省',
                    code: 130000,
                    value: 36010.27
                },
                {
                    name: '山西省',
                    code: 140000,
                    value: 16818.11
                },
                {
                    name: '吉林省',
                    code: 220000,
                    value: 15074
                },
                {
                    name: '宁夏回族自治区',
                    code: 640000,
                    value: 3705.18
                },
                {
                    name: '辽宁省',
                    code: 210000,
                    value: 25315.35
                },
                {
                    name: '海南省',
                    code: 460000,
                    value: 4832.05
                },
                {
                    name: '内蒙古自治区',
                    code: 150000,
                    value: 17289.22
                },
                {
                    name: '天津市',
                    code: 120000,
                    value: 18809.64
                },
                {
                    name: '新疆维吾尔自治区',
                    code: 650000,
                    value: 12199.08
                },
                {
                    name: '上海市',
                    code: 310000,
                    value: 32679.87
                },
                {
                    name: '陕西省',
                    code: 610000,
                    value: 24438.32
                },
                {
                    name: '甘肃省',
                    code: 620000,
                    value: 8246.07
                },
                {
                    name: '安徽省',
                    code: 340000,
                    value: 30006.82
                },
                {
                    name: '香港特别行政区',
                    code: 810000,
                    value: 0
                },
                {
                    name: '广东省',
                    code: 440000,
                    value: 97277.77
                },
                {
                    name: '河南省',
                    code: 410000,
                    value: 48055.86
                },
                {
                    name: '湖南省',
                    code: 430000,
                    value: 36425.78
                },
                {
                    name: '江西省',
                    code: 360000,
                    value: 21984.78
                },
                {
                    name: '四川省',
                    code: 510000,
                    value: 40678.13
                },
                {
                    name: '广西壮族自治区',
                    code: 450000,
                    value: 20353.51
                },
                {
                    name: '江苏省',
                    code: 320000,
                    value: 92595.4
                },
                {
                    name: '澳门特别行政区',
                    code: 820000,
                    value: null
                },
                {
                    name: '浙江省',
                    code: 330000,
                    value: 56197.15
                },
                {
                    name: '山东省',
                    code: 370000,
                    value: 76469.67
                },
                {
                    name: '青海省',
                    code: 630000,
                    value: 2865.23
                },
                {
                    name: '重庆市',
                    code: 500000,
                    value: 20363.19
                },
                {
                    name: '福建省',
                    code: 350000,
                    value: 35804.04
                },
                {
                    name: '湖北省',
                    code: 420000,
                    value: 39366.55
                },
                {
                    name: '西藏自治区',
                    code: 540000,
                    value: 1477.63
                },
                {
                    name: '台湾省',
                    code: 710000,
                    value: null
                }
            ];
            const attachMapContainer = document.createElement('div');
            attachMapContainer.id = 'attach';
            attachMapContainer.style.cssText = `position: absolute;
height: 125px;
width: 98px;
right: 50px;
bottom: 20px;
border: 1px solid #333;`;
            document.getElementById('map').parentElement.append(attachMapContainer);
            const scene = new Scene({
                id: 'map',
                map: new Mapbox({
                    center: [ 116.2825, 39.9 ],
                    pitch: 0,
                    style: 'blank',
                    zoom: 3,
                    minZoom: 0,
                    maxZoom: 10
                })
            });

            scene.on('loaded', () => {
                new CountryLayer(scene, {
                    data: ProvinceData,
                    joinBy: [ 'NAME_CHN', 'name' ],
                    depth: 1,
                    provinceStroke: '#fff',
                    cityStroke: '#EBCCB4',
                    cityStrokeWidth: 0,
                    fill: {
                        color: {
                            field: 'NAME_CHN',
                            values: colors
                        }
                    },
                    label: {
                        size:17,
                        stroke:'black',
                        strokeOpacity:0.5,
                        strokeWidth:1
                    },
                    popup: {
                        enable: true,
                        Html: props => {
                            return `<span>${props.NAME_CHN}</span>`;
                        }
                    }
                });
            });

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
    }
</script>

<style>
    .bbbj{
        outline: 0!important;
    }
    #map {
        outline: none;
    }
    :focus {
        outline: none;
    }
    .l7-bottom {
        bottom: 0;
        display: none;
    }
    #attach {
        bottom:20% !important;
    }
</style>

