<template>
    <div class="message-container">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <img src="@/assets/express.png" alt="" />
                    <div class="title">我的考勤</div>
                </div>
            </template>
            <div class="card-content">
                <div class="top">
                    <div class="title">1-10月考勤情况</div>
                    <div class="title">2023年法定年假15天</div>
                    <div class="showinfo item1">
                        <div class="title1">累计净加班</div>
                        <div class="title2">累计调休</div>
                        <div class="overtime">{{ 150 }}</div>
                        <div class="offtime">{{ 35 }}</div>
                    </div>
                    <div class="showinfo item2">
                        <div class="title1"><span>已休:</span> {{ 15 }} </div>
                        <div class="title2"><span>剩余:</span> {{ 5 }} </div>
                    </div>
                </div>
                <!-- <div class="chart">
                    <div class="chartDom" ref="chartDom" style="height: 200px;"></div>
                </div> -->
            </div>
        </el-card>
    </div>
</template>
   

<script setup lang="ts">
import { ref,onMounted } from "vue"
import * as echarts from 'echarts';


const chartDom = ref(null);
let option: any;

option = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    title: {
        // text: 'Gradient Stacked Area Chart'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
    },
    toolbox: {
        feature: {
            // saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(128, 255, 165)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(1, 191, 236)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: [140, 232, 101, 264, 90, 340, 250]
        },
        {
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(0, 221, 255)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(77, 119, 255)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: [120, 282, 111, 234, 220, 340, 310]
        },
        {
            // name: 'Line 3',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(55, 162, 255)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(116, 21, 219)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: [320, 132, 201, 334, 190, 130, 220]
        },
        {
            // name: 'Line 4',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(255, 0, 135)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(135, 0, 157)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: [220, 402, 231, 134, 190, 230, 120]
        },
        {
            // name: 'Line 5',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(255, 191, 0)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(224, 62, 76)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: [220, 302, 181, 234, 210, 290, 150]
        }
    ]
};

onMounted(() => {
    // var chartDom = document.getElementById('main');
    // console.log(chartDom.value)
    var myChart = echarts.init(chartDom.value);
    option && myChart.setOption(option);

})




</script>

<style lang="scss" scoped>
.message-container {
    width: 100%;
    height: 100%;

   :deep .box-card {
        width: 100%;
        height: 100%;

        .el-card__header {
            .card-header {
                display: flex;
                justify-content: flex-start;
                align-items: center;

                img {
                    margin-right: 10px;
                }

                .title {
                    font-size: 20px;
                    font-family: Microsoft YaHei;
                    font-weight: 600;
                    color: #4A5A7F;
                }
            }
        }

        .el-card__body {
            width: 100%;
            height: 100%;
            padding: 0;
            .card-content {
                width: 100%;
                height: 80%;
                display: grid;
                grid-template-rows: 40% 60%;
                .top {
                    display: grid;
                    grid-template-rows: repeat(2, 1fr);
                    grid-template-columns: repeat(2, 1fr);
                    justify-items: center;
                    align-items: center;

                    .title {
                        font-size: 18px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #333333;
                        line-height: 55px;
                    }

                    .showinfo {
                        width: 80%;
                        height: 100%;
                        font-size: 14px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #666666;
                        background: #EEEEEE;
                        border-radius: 23px;
                    }
                    .item1 {
                        display: grid;
                        grid-template-rows: repeat(2, 1fr);
                        grid-template-columns: repeat(2, 1fr);
                        justify-items: center;
                        align-items: center;
                    }
                    .item2 {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        justify-items: center;
                        align-items: center;
                    }
                }
                .chart {
                    .chartDom{
                        height: 80% !important;
                    }
                }
            }
        }

    }

}
</style>