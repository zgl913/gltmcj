<template>
    <div id="container3" :style="{width: tuxingwidth+'px',height:tuxingheight+'px'}"></div>
</template>

<script>
    import { Pie } from '@antv/g2plot';
    export default {
        name: "piexitong",
        data() {
            return {
                tuxingheight:'',
                tuxingwidth:'',
            }
        },
        methods: {
            showpiexitong() {
                const data = [
                    { type: '分类一', value: 27 },
                    { type: '分类二', value: 25 },
                    { type: '分类三', value: 18 },
                    { type: '分类四', value: 15 },
                    { type: '分类五', value: 10 },
                    { type: '其他', value: 5 },
                ];

                const piePlot = new Pie('container3', {
                    appendPadding: 10,
                    data,
                    legend:false,
                    angleField: 'value',
                    colorField: 'type',
                    radius: 0.8,
                    label: {
                        type: 'outer',
                        content: '{name} {percentage}',
                    },
                    interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
                });

                piePlot.render();
                piePlot.on('label:click', (params) => {
                    console.log('dianji');
                    // console.log(...args);
                    this.$emit('showtable',true,params.data.data)
                })
            }
        },
        mounted() {
            this.tuxingheight = `${document.documentElement.clientHeight * 0.6}`
            this.tuxingwidth = `${document.documentElement.clientWidth * 0.3}`
            this.showpiexitong()
        }
    }
</script>

<style scoped>

</style>