export default {
  echartsOption: {
    title: {
      text: '收益变化'
    },
    tooltip: {},
    xAxis: {
      data: ['2021-11-16', '2021-11-17', '2021-11-18', '2021-11-19', '2021-11-20', '2021-11-21']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [2, 4, 6, 8, 10, 12]
      }
    ]
  }

}