<template>
    <div id="container5" :style="{width: tuxingwidth+'px',height:tuxingheight+'px'}"></div>
</template>

<script>
    import { Column } from '@antv/g2plot';
    export default {
        props:['devicedata1'],
        name: "Column",
        data() {
            return {
                tuxingheight:'',
                tuxingwidth:'',
                devicedataend:'',
            }
        },
        methods: {
            showcolumn() {
                const data = this.devicedataend
                const columnPlot = new Column('container5', {
                    data,
                    xField: 'type',
                    yField: 'sales',
                    padding:[40,0,20,30],
                    label: {
                        // 可手动配置 label 数据标签位置
                        position: 'top', // 'top', 'bottom', 'middle',
                        // 配置样式
                        style: {
                            fill: 'black',
                            opacity: 0.6,
                        },
                    },
                    xAxis: {
                        label: {
                            autoHide: true,
                            autoRotate: false,
                        },

                    },
                    // yAxis: {
                    //     grid:{
                    //         line:null
                    //     }
                    // },
                    meta: {
                        type: {
                            alias: '类别',
                        },
                        sales: {
                            alias: '销售额',
                        },
                    },

                });

                columnPlot.render();
                columnPlot.on('click', (params)  => {
                    // const records = columnPlot.getSnapRecords({x: ev.x, y: ev.y});
                    // console.log(records);
                    console.log('dianji');
                    console.log(params);
                    this.$emit('showtable',params.gEvent.target.attrs.text)
                })
            },
        },
        mounted() {
            this.tuxingheight = `${document.documentElement.clientHeight * 0.6}`
            this.tuxingwidth = `${document.documentElement.clientWidth * 0.3}`
        },
        watch: {
            devicedata1: {
                handler(newValue) {
                    this.devicedataend= newValue;  //把新值赋值给我们的属性数据
                    this.showcolumn();  //刷新echarts图表
                },
                deep: true
            }
        }
    }
</script>

<style scoped>

</style>