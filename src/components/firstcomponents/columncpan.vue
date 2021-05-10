<template>
        <div id="container" :style="{width: tuxingwidth+'px',height:tuxingheight+'px'}"></div>
</template>

<script>
    import { Column } from '@antv/g2plot';
    export default {
        props: ['contentnum'],
        name: "columncpan",
        data() {
            return {
                tuxingheight:'',
                tuxingwidth:'',
                cpannum: []
            }
        },
        // created() {
        //     this.$nextTick(() => {
        //         console.log(this.contentnum)
        //         this.showcolumn(this.contentnum)
        //     })
        // },
        methods: {
            showcolumn() {
                const data = this.cpannum
                console.log(data)
                const columnPlot = new Column('container', {
                    data,
                    xField: 'type',
                    yField: 'sales',
                    padding:[50,0,20,30],
                    color: ({type}) => {
                        if (type === '0~5G') {
                            return '#F4664A';
                        }
                        return '#5B8FF9';
                    },
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
                    meta: {
                        type: {
                            alias: '容量',
                        },
                        sales: {
                            alias: '数量',
                        },
                    },

                });
                columnPlot.render();
                columnPlot.on('click', (params) => {
                    // const records = columnPlot.getSnapRecords({x: ev.x, y: ev.y});
                    // console.log(records);
                    console.log('dianji');
                    console.log(params);
                    this.$emit('showtable', params.gEvent.target.attrs.text)
                })
                // columnPlot.on('click', (params)  => {
                //     // const records = columnPlot.getSnapRecords({x: ev.x, y: ev.y});
                //     // console.log(records);
                //     console.log('dianji');
                //     console.log(params);
                //     this.$emit('showtable',true,params.gEvent.target.attrs.text)
                // })
            },
        },
        mounted() {
                this.tuxingheight = `${document.documentElement.clientHeight * 0.6}`
                this.tuxingwidth = `${document.documentElement.clientWidth * 0.3}`
            // this.showcolumn()
        },
        watch: {
            contentnum: {
                handler(newValue) {
                    this.cpannum = newValue;  //把新值赋值给我们的属性数据
                    this.showcolumn();  //刷新echarts图表
                },
                deep: true
            }
        }
    }

</script>

<style scoped>

</style>