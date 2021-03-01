<template>
  <div>
    <div id="main" class="dualaxesechartstotal"></div>
  </div>
</template>

<script>
var echarts = require('echarts');
export default {
  name: "DualAxesEcharts",
  methods: {
    showDualaxesEcharts(){
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        // toolbox: {
        //   feature: {
        //     dataView: {show: true, readOnly: false},
        //     magicType: {show: true, type: ['line', 'bar']},
        //     restore: {show: true},
        //     saveAsImage: {show: true}
        //   }
        // },
        legend: {
          data: ['上线门店数', '环比增长率']
        },
        xAxis: [
          {
            type: 'category',
            data: ['冀蒙区', '东北区', '西南区', '苏沪区', '华南区', '晋陕区', '华东区'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            // show: false,
            splitLine:{show: false},
            type: 'value',
            name: '',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            // show: false,
            splitLine:{show: false},
            type: 'value',
            name: '',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: [
          {
            name: '上线门店数',
            type: 'bar',
            data: [50, 30, 70, 30, 88, 76, 135],
            itemStyle: {
              normal: {
                label: {
                  show:true,
                  position: 'top',
                  textStyle: {
                    color: 'red',
                    fontSize: 10
                  }
                }
              }
            },
          },

          {
            name: '环比增长率',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3],
            itemStyle: {
              normal: {
                label: {
                  show:true,
                  position: 'top',
                  textStyle: {
                    color: 'red',
                    fontSize: 10
                  }
                }
              }
            },
          }
        ]
      };

      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    this.showDualaxesEcharts()
  }
}
</script>

<style scoped>
  .dualaxesechartstotal {
    width: 600px;
    height:400px;
  }
</style>