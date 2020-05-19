<template>
    <div id="relation" class="relation"></div>
</template>
<script>
export default {
    data () {
        return {
            Relation: null,
            options: null
        }
    },
    mounted () {
        this.init()
    },
    methods: {
        init () {
            let that = this
            this.Relation = this.$echarts.init(document.getElementById('relation'))
            this.options = {
                title: {
                    text: 'Graph 简单示例'
                },
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                series: [
                    {
                        type: 'graph',
                        layout: 'none',
                        symbolSize: 50,
                        roam: true,
                        label: {
                            show: true
                        },
                        edgeSymbol: ['circle'],
                        edgeSymbolSize: [0],
                        edgeLabel: {
                            fontSize: 14
                        },
                        tooltip: {
                            formatter: function (param) {
                                that.log(param)
                                if (param.dataType === 'edge') {
                                    return 'test'
                                }
                                if (param.dataType === 'node') {

                                }
                                
                            }
                        },
                        // markPoint: {
                        //     symbol: 'rect',
                        //     label: {
                        //         show: true,
                        //         formatter: 'aaaa'
                        //     }
                        // },
                        data: [{
                            name: '中心点',
                            x: 550,
                            y: 300,
                            // tooltip: {
                            //     position: [40, 10],
                            //     formatter: 'test',
                            //     backgroundColor: '#999',
                            //     textStyle: {
                            //         color: '#fff'
                            //     }
                            // }
                        }, {
                            name: '节点1',
                            x: 300,
                            y: 300
                        }, {
                            name: '节点2',
                            x: 800,
                            y: 300
                        }, {
                            name: '节点3',
                            x: 550,
                            y: 100
                        }, {
                            name: '节点4',
                            x: 550,
                            y: 500
                        }],
                        links: [{
                            source: '中心点',
                            target: '节点1',
                            // symbolSize: [5, 20],
                            label: {
                                show: true
                            }
                        }, {
                            source: '中心点',
                            target: '节点2',
                            label: {
                                show: true
                            },
                            // emphasis: {
                            //     formatter: 'aaa'
                            // }
                        }, {
                            source: '中心点',
                            target: '节点3',
                            label: {
                                show: true
                            }
                        }, {
                            source: '中心点',
                            target: '节点4',
                            label: {
                                show: true
                            }
                        }],
                        lineStyle: {
                            opacity: 0.9,
                            width: 2,
                            curveness: 0
                        }
                    }
                ]
            }
            this.Relation.setOption(this.options)
            // this.Relation.on('click', function (params) {
            //     that.log(params);
            // })
        }
        
    }
}
</script>
<style lang="scss" scoped>
.relation{
    width: 100%;
    height: 100%;
}
</style>