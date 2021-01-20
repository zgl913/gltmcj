<template>
  <div class="wrapper">
    <h1>
      市场公益考评综合排名
      <span>Physical Yield Analysis</span>
    </h1>
    <div class="paihangbang3_box">
      <div id="paihangbang3" :style="{width: '100%', height: '150px'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // var weatherIcons = {
      //   first: "../../../static/img/first.png",
      //   second: "../../../static/img/second.png",
      //   third: ".../../../static/img/third.png"
      // };
      var paihangOption = {
        title: {},
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: []
        },
        grid: {
          x: 95, //左留白
          y: 10, //上留白
          x2: 35, //右留白
          y2: 30 //下留白
        },
        calculable: true,
        dataset: {
          dimensions: ["goods_name", "trade_num"],
          source: [
            { goods_name: "香菇", trade_num: 8 },
            { goods_name: "鳜鱼", trade_num: 8 },
            { goods_name: "冬瓜", trade_num: 7 },
            { goods_name: "鲜鹌鹑蛋", trade_num: 6 },
            { goods_name: "萝卜", trade_num: 6 },
            { goods_name: "枣", trade_num: 6 }
          ]
        },
        xAxis: [
          {
            splitLine: {
              show: false
            },
            type: "value",
            axisLine: {
              show: false,
              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)",
                width: 1
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              margin: 100,
              textStyle: {
                align: "left",
                color: "#00FFFF", //更改坐标轴文字颜色
                fontSize: 10 //更改坐标轴文字大小
              }
            }
          }
        ],
        yAxis: [
          {
            type: "category",
            // data: ["泽兰", "人参", "枸杞", "3.紫苏", "2.香叶", "1.车前草"],
            //boundaryGap: ["1%", "1%"],  类目起始和结束两端空白策略
            inverse: true,
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.2)",
                width: 1
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: function(value, index) {
                  return index <= 2 ? "#FDAD00" : "#fff";
                },
                //更改坐标轴文字颜色
                fontSize: 12 //更改坐标轴文字大小
              },
              formatter: function(value, index) {
                if (index == 0) {
                  return "{first|}" + "  1 " + value;
                } else if (index == 1) {
                  return "{second|}" + "  2 " + value;
                } else if (index == 2) {
                  return "{third|}" + "  3 " + value;
                } else {
                  return "      " + (index + 1) + " " + value;
                }
              },
              rich: {
                value: {
                  color: "#fff",
                  fontSize: 12
                },
                first: {
                  color: "FDAD00",
                  // backgroundColor: {
                  //   image: weatherIcons.first
                  // }
                },
                second: {
                  color: "FDAD00",
                  // backgroundColor: {
                  //   image: weatherIcons.second
                  // }
                },
                third: {
                  color: "FDAD00",
                  // backgroundColor: {
                  //   image: weatherIcons.third
                  // }
                }
              }
            }
          }
        ],
        series: [
          {
            // name:'2011年',
            type: "bar",
            // data: [200, 210, 220, 230, 240, 250],
            itemStyle: {
              normal: {
                //每根柱子颜色设置
                color: function(params) {
                  // var _this = this;
                  let colorList = [
                    ["#E56E6E", "#EFA4A4"],
                    ["#FEB763", "#F9CF9E"],
                    ["#00C0DD", "#00C0DD"],
                    ["#23C83E", "#9BF194"],
                    ["#1AA291", "#1AA291"],
                    ["#4186EC", "#3AB3FB"]
                  ];
                  var index = params.dataIndex;
                  return {
                    colorStops: [
                      {
                        offset: 0.8, //颜色的开始位置
                        color: colorList[index][0] // 0% 处的颜色
                      },
                      {
                        offset: 0, //颜色的结束位置
                        color: colorList[index][1] // 100% 处的颜色
                      }
                    ]
                  };
                }
              }
            }, //柱状图上显示数据
            label: {
              show: "true",
              position: [220, "20%"],
              color: "#FFF",
              fontSize: "12"
            }
          }
        ]
      };
      let myChart = this.$echarts.init(document.getElementById("paihangbang3"));
      myChart.setOption(paihangOption);
      //   this.$axios({
      //     method: "get",
      //     url: "/api/detection/detection_info/detectRank?mcode="+this.market_id+'&order_type=1',
      //     // data: param
      //     })
      //     .then(res => {
      //         if (res.data.status == 1) {
      //         var data = res.data.data
      //         if (data.length>0) {
      //         data.forEach((item,index) => {
      //         this.paihangOption.yAxis[0].data.push(item.name)
      //         var obj = {}
      //         obj.value = item.percent
      //         obj.itemStyle = {
      //         normal:{
      //         color:this.paihangOption.color[index]
      //         }
      //         }
      //         this.paihangOption.series[0].data.push(obj)
      //         })
      //         this.showTotal()
      //         }
      //         }
      //     }).catch(error => {

      //     })
    }
  }
};
</script>
<style scoped>
.wrapper {
  height: 195px;
  border: 1px solid red;
}
.wrapper .paihangbang3_box {
  /*background: url("../../../static/img/transdata_bg.png") no-repeat center/100%*/
  /*100%;*/
  padding-top: 20px;
  transform: translateY(-12px);
}
</style>