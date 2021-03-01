<!--
  Map -- 地图组件 --
  v1.0.0
  author xuxiaoqiang,2462170438@qq.com
  copyright Hangzhou QianNeng 2021.1.5
-->
<template>
    <div id="map" class="maplayout">
    </div>
</template>

<script>
import { Scene } from '@antv/l7';
import { CountryLayer } from '@antv/l7-district';
import { Mapbox } from '@antv/l7-maps';
// import { WorldLayer } from '@antv/l7-district';
export default {
  name: "Map",
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
          zoom: 3,
          minZoom:1,
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
        scene.panTo([ 10.2825, 39.9 ]);
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
  /*.maplayout {*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*  position: relative;*/
  /*  z-index: 300;*/
  /*}*/
  /*!*.17-ctrl-logo {*!*/
  /*!*     display: none;*!*/
  /*!*   }*!*/
  /*.maplayout a{*/
  /*  display: none;*/
  /*}*/
  /*.barlayout {*/
  /*  position: relative;*/
  /*  width: 50%;*/
  /*  height: 100%;*/
  /*  !*margin-top: 50px;*!*/
  /*  margin-left: 20px;*/
  /*  background-color: white;*/
  /*  !*overflow: hidden;*!*/
  /*}*/
  /*.barstyle{*/
  /*  width: 100%;*/
  /*  height: 500px;*/
  /*  position: relative;*/
  /*  top:0px;*/

  /*}*/
  /*.maplayout canvas {*/
  /*  margin-top: 0px;*/
  /*  height: 550px !important;*/
  /*  width: 1600px;*/
  /*}*/
  /*.mapboxgl-canvas {*/
  /*  margin-top: 100px;*/
  /*}*/
  /*.resize-sensor {*/
  /*  height: 0px !important;*/
  /*}*/
  /*  #map canvas {*/
  /*    width: 100% !important;*/
  /*    height: 100% !important;*/
  /*  }*/
    .maplayout {
        width: 100%;
        height: 100%;
        position:relative;
    }
  /*.mapboxgl-canvas {*/
  /*    height: 100% !important;*/
  /*}*/
    #l7-scene-0 canvas{
        display: inline-block;
        position: relative;
        height: 100% !important;
        width: 150% !important;
        right: 30%;

    }
</style>