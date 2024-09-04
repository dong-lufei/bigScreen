function e1() {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementById("e1"));
  // 指定图表的配置项和数据
  const option = {
    backgroundColor: "#080b3000",
    title: {
      text: "",
      textStyle: {
        align: "center",
        color: "#fff",
        fontSize: 20,
      },
      top: "5%",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: "2%",
      right: "4%",
      bottom: "14%",
      top: "16%",
      containLabel: true,
    },
    legend: {
      data: ["1", "2", "3"],
      right: 10,
      top: 12,
      textStyle: {
        color: "#fff",
      },
      itemWidth: 12,
      itemHeight: 10,
      // itemGap: 35
    },
    xAxis: {
      type: "category",
      data: [
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
      ],
      axisLine: {
        lineStyle: {
          color: "white",
        },
      },
      axisLabel: {
        interval: 0,
        rotate: 40,
        textStyle: {
          fontFamily: "Microsoft YaHei",
        },
      },
    },
    yAxis: {
      type: "value",
      max: "1200",
      axisLine: {
        show: false,
        lineStyle: {
          color: "white",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.3)",
        },
      },
      axisLabel: {},
    },
    dataZoom: [
      {
        show: true,
        height: 12,
        xAxisIndex: [0],
        bottom: "8%",
        start: 10,
        end: 90,
        handleIcon:
          "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
        handleSize: "110%",
        handleStyle: {
          color: "#d3dee5",
        },
        textStyle: {
          color: "#fff",
        },
        borderColor: "#90979c",
      },
      {
        type: "inside",
        show: true,
        height: 15,
        start: 1,
        end: 35,
      },
    ],
    series: [
      {
        name: "1",
        type: "bar",
        barWidth: "15%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#fccb05",
              },
              {
                offset: 1,
                color: "#f5804d",
              },
            ]),
            barBorderRadius: 12,
          },
        },
        data: [400, 400, 300, 300, 300, 400, 400, 400, 300, 600, 500, 400],
      },
      {
        name: "2",
        type: "bar",
        barWidth: "15%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#8bd46e",
              },
              {
                offset: 1,
                color: "#09bcb7",
              },
            ]),
            barBorderRadius: 11,
          },
        },
        data: [400, 500, 500, 500, 500, 400, 400, 500, 500, 600, 400, 300],
      },
      {
        name: "3",
        type: "bar",
        barWidth: "15%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#248ff7",
              },
              {
                offset: 1,
                color: "#6851f1",
              },
            ]),
            barBorderRadius: 11,
          },
        },
        data: [400, 600, 700, 700, 1000, 400, 400, 600, 700, 600, 300, 200],
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表
  myChart.setOption(option);
}

function e2() {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementById("e2"));
  // 指定图表的配置项和数据
  const dataStyle = {
    normal: {
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      shadowBlur: 0,
      shadowColor: "#203665",
    },
  };
  const option = {
    backgroundColor: "",
    series: [
      {
        name: "第一个圆环",
        type: "pie",
        clockWise: false,
        radius: [50, 80],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ["15%", "50%"],
        data: [
          {
            value: 160,
            label: {
              normal: {
                rich: {
                  a: {
                    color: "#5FB878",
                    align: "center",
                    fontSize: 18,
                    fontWeight: "bold",
                  },
                  b: {
                    color: "#fff",
                    align: "center",
                    fontSize: 13,
                  },
                },
                formatter: function (params) {
                  return (
                    "{b|运行}\n\n" +
                    "{a|" +
                    params.value +
                    "台}" +
                    "\n\n{b|80%}"
                  );
                },
                position: "center",
                show: true,
                textStyle: {
                  fontSize: "18",
                  fontWeight: "normal",
                  color: "#fff",
                },
              },
            },
            itemStyle: {
              normal: {
                color: "#5FB878",
                shadowColor: "#5FB878",
                shadowBlur: 0,
              },
            },
          },
          {
            value: 40,
            name: "invisible",
            itemStyle: {
              normal: {
                color: "#E1E8EE",
              },
              emphasis: {
                color: "#E1E8EE",
              },
            },
          },
        ],
      },
      {
        name: "第二个圆环",
        type: "pie",
        clockWise: false,
        radius: [50, 80],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ["50%", "50%"],
        data: [
          {
            value: 34,
            label: {
              normal: {
                rich: {
                  a: {
                    color: "#01AAED",
                    align: "center",
                    fontSize: 18,
                    fontWeight: "bold",
                  },
                  b: {
                    color: "#fff",
                    align: "center",
                    fontSize: 13,
                  },
                },
                formatter: function (params) {
                  return (
                    "{b|计划}\n\n" + "{a|" + params.value + "台}" + "\n\n{b|4%}"
                  );
                },
                position: "center",
                show: true,
                textStyle: {
                  fontSize: "14",
                  fontWeight: "normal",
                  color: "#fff",
                },
              },
            },
            itemStyle: {
              normal: {
                color: "#01AAED",
                shadowColor: "#01AAED",
                shadowBlur: 0,
              },
            },
          },
          {
            value: 50,
            name: "invisible",
            itemStyle: {
              normal: {
                color: "#E1E8EE",
              },
              emphasis: {
                color: "#E1E8EE",
              },
            },
          },
        ],
      },
      {
        name: "第三个圆环",
        type: "pie",
        clockWise: false,
        radius: [50, 80],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ["85%", "50%"],
        data: [
          {
            value: 21,
            label: {
              normal: {
                rich: {
                  a: {
                    color: "#FF5722",
                    align: "center",
                    fontSize: 18,
                    fontWeight: "bold",
                  },
                  b: {
                    color: "#fff",
                    align: "center",
                    fontSize: 13,
                  },
                },
                formatter: function (params) {
                  return (
                    "{b|停机}\n\n" + "{a|" + params.value + "台}" + "\n\n{b|6%}"
                  );
                },
                position: "center",
                show: true,
                textStyle: {
                  fontSize: "14",
                  fontWeight: "normal",
                  color: "#fff",
                },
              },
            },
            itemStyle: {
              normal: {
                color: "#FF5722",
                shadowColor: "#FF5722",
                shadowBlur: 0,
              },
            },
          },
          {
            value: 25,
            name: "invisible",
            itemStyle: {
              normal: {
                color: "#E1E8EE",
              },
              emphasis: {
                color: "#E1E8EE",
              },
            },
          },
        ],
      },
    ],
  };
  // 使用刚指定的配置项和数据显示图表
  myChart.setOption(option);
}

function e3() {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementById("e3"));
  // 指定图表的配置项和数据
  const option = {
    backgroundColor: "#00211f00",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: "2%",
      right: "4%",
      bottom: "10%",
      top: "20%",
      containLabel: true,
    },
    legend: {
      data: ["未发布", "已发布"],
      top: "8%",
      textStyle: {
        color: "#fff",
        fontSize: 14,
      },
      itemWidth: 12,
      itemHeight: 10,
      itemGap: 35,
    },
    xAxis: {
      type: "category",
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      axisLine: {
        lineStyle: {
          color: "#8c9493",
        },
      },
      axisLabel: {
        // interval: 0,
        // rotate: 40,
        textStyle: {
          fontFamily: "Microsoft YaHei",
          fontWeight: 600,
          fontSize: 16,
        },
      },
    },

    yAxis: {
      name: "单位：元",
      nameTextStyle: {
        color: "#fff",
      },
      type: "value",
      max: "150",
      axisLine: {
        show: false,
        lineStyle: {
          color: "#8c9493",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#8c9493",
        },
      },
      axisLabel: {
        textStyle: {
          fontWeight: 600,
        },
      },
    },
    series: [
      {
        name: "未发布",
        type: "bar",
        barWidth: "25%",
        itemStyle: {
          normal: {
            color: "#00bff2",
          },
        },
        data: [10, 30, 40, 120, 50, 90, 60, 40, 15, 60, 30, 15],
      },
      {
        name: "已发布",
        type: "bar",
        barWidth: "25%",
        itemStyle: {
          normal: {
            color: "#fecb12",
          },
        },
        data: [5, 40, 60, 110, 40, 100, 70, 50, 20, 110, 40, 10],
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表
  myChart.setOption(option);
}

function e4() {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementById("e4"));
  // 指定图表的配置项和数
  // 统计百分比
  const option = {
    backgroundColor: "#03060F00",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#15ecf4",
        },
      },
      formatter: function (params) {
        let result = params[0].name + "<br>";
        params.forEach(function (item) {
          result +=
            '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
            item.color +
            '"></span>';
          // 判断设置增长还是降低
          if (parseFloat(item.data) >= 50) {
            result += item.seriesName + ": " + item.data + "%<br>";
          } else if (parseFloat(item.data) < 50) {
            result += item.seriesName + ": " + item.data + "%<br>";
          }
        });
        return result;
      },
    },
    legend: {
      data: ["今年", "去年", "前年"],
      textStyle: {
        fontSize: 12,
        color: "#858ba1",
      },
      top: "2%",
      left: "5%",
    },
    grid: {
      bottom: 50,
      left: 70,
      right: 50,
    },
    dataZoom: [
      {
        type: "slider",
        show: true,
        xAxisIndex: [0],
        left: "10%",
        bottom: 0,
        height: 8,
        borderColor: "#37558a",
        start: 1,
        end: 45, //初始化滚动条
        textStyle: {
          color: "#fff",
        },
      },
    ],
    xAxis: {
      axisLine: {
        show: false,
        lineStyle: {
          color: "#15faff",
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        textStyle: {
          //改变刻度字体样式
          color: "#fff",
        },
      },
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
    },
    yAxis: {
      max: 100,
      splitNumber: 4,
      interval: 25,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#4b4d64",
        },
      },
      axisLabel: {
        formatter: "{value} %",
        textStyle: {
          //改变刻度字体样式
          color: "#fff",
        },
      },
    },
    series: [
      {
        name: "今年",
        type: "line",
        // smooth: true, // 设置拆线平滑
        symbol: "circle",
        symbolSize: 10,
        itemStyle: {
          normal: {
            color: "#ffcb00",
          },
        },
        data: [14, 75, 85, 24, 75, 23, 24, 43, 87, 72, 12, 53],
      },
      {
        name: "去年",
        type: "line",
        // smooth: true,
        symbol: "circle",
        symbolSize: 10,
        itemStyle: {
          normal: {
            color: "#15faff",
          },
        },
        data: [85, 15, 24, 74, 75, 43, 42, 54, 43, 32, 52, 13],
      },
      {
        name: "前年",
        type: "line",
        // smooth: true,
        symbol: "circle",
        symbolSize: 10,
        itemStyle: {
          normal: {
            color: "#00aa7f",
          },
        },
        data: [25, 65, 24, 4, 15, 73, 42, 54, 63, 42, 22, 93],
      },
    ],
  };
  // 使用刚指定的配置项和数据显示图表
  myChart.setOption(option);
}

function e5() {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementById("e5"));
  // 指定图表的配置项和数据
  let dataX = ["娱乐", "科技", "学习", "文学", "体育", "美妆", "游戏"];
  let dataY = [31, 50, 20, 10, 24, 19.6, 12];
  let dataY1 = [63, 85, 57, 32.8, 43, 31.2, 26.9];
  const option = {
    backgroundColor: "#0D275300",
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(1, 13, 19, 0.5)",
      borderWidth: 0,
      padding: 2,
      textStyle: {
        color: "#fff",
        fontSize: 15,
      },
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: "10%",
      bottom: "10%",
      left: "5%",
      right: "5%",
      containLabel: true,
    },
    legend: {
      data: ["浏览", "用户"],
      left: "280",
      top: "10",
      textStyle: {
        padding: [4, 0, 0, 0],
        color: "33FFFF",
      },
      itemWidth: 15,
      itemHeight: 10,
      itemGap: 10,
    },
    xAxis: {
      type: "category",
      data: dataX,
      axisLine: {
        lineStyle: {
          color: "rgba(66, 192, 255, .3)",
        },
      },

      axisLabel: {
        //x轴文字倾斜设置
        rotate: 0,
        textStyle: {
          color: "#FFFF",
        },
      },
    },

    yAxis: [
      {
        type: "value",

        splitLine: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: "#fff",
          },
        },
      },
      {
        type: "value",
        max: "50",
        min: "0",
        scale: true,
        position: "right",
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          formatter: "{value} 次", //右侧Y轴文字显示
          textStyle: {
            fontSize: 12,
            color: "#FFF",
          },
        },
      },
    ],
    series: [
      {
        name: "浏览",
        type: "bar",
        barWidth: "13px",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#29acff",
              },
              {
                offset: 1,
                color: "#4bdfff",
              },
            ]),
            barBorderRadius: 8,
          },
        },
        data: dataY1,
      },
      {
        name: "用户",
        type: "line",

        markPoint: {
          label: {
            show: true,
            position: "top",
            distance: 15,
            offset: [1, 1],
            lineHeight: 20,
            backgroundColor: "#00aaff",
            borderRadius: 6,
            borderColor: "#00aaff",
            borderWidth: "3",
            padding: [4, 3, 4],
            color: "#fff",
            fontSize: 12,
            fontWeight: "normal",
          },
          symbol: "arrow",
          symbolSize: 10.5,
          symbolOffset: [0, -2],
          data: [
            {
              // type: "average",
              name: "平均值",
              value: "平均浏览x次",
              xAxis: 3,
              yAxis: 23,
            },
          ],
        },
        markLine: {
          symbol: "none",
          data: [
            {
              type: "average",
              name: "平均值",
            },
          ],
          label: {
            show: false,
          },
        },
        yAxisIndex: 1,
        smooth: false,
        symbol: "circle",
        symbolSize: 9,
        itemStyle: {
          normal: {
            color: "#00aaff",
            borderColor: "#fff", //圆点透明 边框
            borderWidth: 2,
          },
        },
        lineStyle: {
          color: "#ffa43a",
        },
        data: dataY,
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表
  myChart.setOption(option);
}

function e6() {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementById("e6"));
  // 指定图表的配置项和数据
  let colorList = ["#f36c6c", "#e6cf4e", "#20d180", "#0093ff"];
  // const datas = [
  //   {
  //     value: 36,
  //     name: "系列一",
  //   },
  //   {
  //     value: 54,
  //     name: "系列二",
  //   },
  //   {
  //     value: 29,
  //     name: "系列三",
  //   },
  //   {
  //     value: 25,
  //     name: "系列四",
  //   },
  //   {
  //     value: 55,
  //     name: "系列五",
  //   },
  //   {
  //     value: 69,
  //     name: "系列6",
  //   },
  //   {
  //     value: 75,
  //     name: "系列7",
  //   },
  //   {
  //     value: 85,
  //     name: "系列8",
  //   },
  // ];
  // let maxArr = new Array(datas.length).fill(100);
  const data = [50, 60, 70, 20, 30, 10];
  const className = ["1月", "2月", "3月", "4月", "5月", "6月"];
  colorList = [
    "#39B3FF",
    "#47E0E0",
    "#7891D9",
    "#83D978",
    "#C7A530",
    "#FF8439",
  ];
  const defaultData = [100, 100, 100, 100, 100, 100];
  const option = {
    grid: {
      left: "5%",
      right: "5%",
      bottom: "5%",
      top: "10%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "none",
      },
      formatter: function (params) {
        return (
          params[0].name +
          "<br/>" +
          "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
          params[0].seriesName +
          " : " +
          params[0].value +
          "%"
        );
      },
    },
    backgroundColor: "rgba(20,28,52,0)",
    xAxis: {
      show: false,
      type: "value",
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        axisLabel: {
          show: true,
          textStyle: {
            color: "#fff",
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        data: className,
      },
      {
        type: "category",
        inverse: true,
        axisTick: "none",
        axisLine: "none",
        show: true,
        axisLabel: {
          textStyle: {
            color: "#ffffff",
            fontSize: "12",
          },
          formatter: function (value) {
            return value + " %";
          },
        },
        data: data,
      },
    ],
    series: [
      {
        name: "完成率",
        type: "bar",
        zlevel: 1,
        itemStyle: {
          normal: {
            barBorderRadius: 0,
            color: (params) => {
              return colorList[params.dataIndex];
            },
          },
        },
        barWidth: 20,
        data: data,
      },
      {
        name: "背景",
        type: "bar",
        barWidth: 20,
        barGap: "-100%",
        data: defaultData,
        itemStyle: {
          normal: {
            color: "#1B375E",
            barBorderRadius: 0,
          },
        },
      },
    ],
  };
  // 使用刚指定的配置项和数据显示图表
  myChart.setOption(option);
}

function e7() {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementById("e7"));
  // 指定图表的配置项和数据
  const option = {
    backgroundColor: "#0E204A00",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(255,255,255,0)", // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: "rgba(255,255,255,1)", // 100% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(255,255,255,0)", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
      },
    },
    grid: {
      top: "18%",
      left: "1%",
      right: "1%",
      bottom: "25%",
      // containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        axisLine: {
          //坐标轴轴线相关设置。数学上的x轴
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.4)",
          },
        },
        axisLabel: {
          //坐标轴刻度标签的相关设置
          textStyle: {
            color: "#d1e6eb",
            margin: 15,
          },
        },
        axisTick: {
          show: false,
        },
        data: ["2014", "2015", "2016", "2017", "2018", "2019"],
      },
    ],
    yAxis: [
      {
        type: "value",
        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.1)",
          },
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
          margin: 20,
          textStyle: {
            color: "#d1e6eb",
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "注册总量",
        type: "line",
        // smooth: true, //是否平滑曲线显示
        // symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        // symbol: 'image://./static/images/guang-circle.png',
        symbolSize: 8,
        lineStyle: {
          normal: {
            color: "#53fdfe", // 线条颜色
          },
          borderColor: "#f0f",
        },
        label: {
          show: true,
          position: "top",
          textStyle: {
            color: "#fff",
          },
        },
        itemStyle: {
          normal: {
            color: "rgba(255,255,255,1)",
          },
        },
        tooltip: {
          show: false,
        },
        areaStyle: {
          //区域填充样式
          normal: {
            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0,150,239,0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(0,253,252,0)",
                },
              ],
              false
            ),
            shadowColor: "rgba(53,142,215, 0.9)", //阴影颜色
            shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
          },
        },
        data: [150, 200, 259, 360, 378, 450, 450],
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表
  myChart.setOption(option);
}

function e8() {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementById("e8"));
  // 指定图表的配置项和数据

  //做南丁格尔图的本质是roseType= area|radius 而 radius: ['0%', '70%']内半径可给可不给
  const backgroundColor = "#10173600";
  const title = {
    text: "",
    textStyle: {
      color: "#fff",
      fontSize: 12,
    },
    padding: 0,
    top: 35,
    left: "center",
  };
  const legend = {
    //data，就是取得每个series里面的name属性。
    orient: "vertical",
    icon: "circle", //图例形状
    padding: 0,
    bottom: "center",
    right: 40,
    itemWidth: 14, //小圆点宽度
    itemHeight: 14, // 小圆点高度
    itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
    textStyle: {
      fontSize: 14,
      color: "#ffffff",
    },
  };
  const tooltip = {
    show: true,
    formatter: "{b}:{d}%",
  };
  const color = [
    "#03acd1",
    "#04cab7",
    "#03c781",
    "#fce348",
    "#fc2d8a",
    "#0292fe",
  ];
  const option = {
    backgroundColor,
    color,
    title,
    tooltip,
    legend,

    series: [
      {
        name: "前端开发",
        type: "pie",
        center: ["50%", "50%"], //圆心的位置
        top: "2%", //单单指的饼图距离上面的距离，top越大饼图越小
        left: "-30%", //单单指的饼图距离左面的距离，会改变饼图的大小
        radius: ["0%", "70%"], //环形图的本质就在这里 [内半径!=0，外半径] 外半径越大，圆越大
        avoidLabelOverlap: false, //做同心圆用到
        clockwise: false, //顺时针排列
        startAngle: 160, //起始角度 影响不大
        roseType: "area", //area|radius

        label: {
          show: true, //false不显示饼图上的标签
          position: "outside", //inside（在饼图上显示）,outside(默认就会出现引导线) center
          formatter: "{b}:{c}",
        },

        //只有设置了label:show=ture;position=outside 设置labelLine才会有效
        labelLine: {
          show: true, //显示引导线
          length: 30, //连接饼图第1段线条的长度 length length2 不写自适应
          length2: 10, //链接饼图第2段线条长度
          smooth: true, //是否光滑连接线
        },
        itemStyle: {
          //每个扇形的设置
          borderColor: "rgba(0,0,0,.1)", //扇形边框颜色
          borderWidth: 0, //扇形边框大小 要先给borderColor颜色 设置borderWidth才会有效果
        },
        data: [
          {
            value: 1048,
            name: "HTML",
          },
          {
            value: 735,
            name: "CSS",
          },
          {
            value: 380,
            name: "Javscript",
          },
          {
            value: 484,
            name: "Vue",
          },
          {
            value: 300,
            name: " React",
          },
          {
            value: 600,
            name: " uniapp",
          },
        ].sort((a, b) => b.value - a.value), //数组从大到小排序

        emphasis: {
          scale: true,
          scaleSize: 10,

          //启用鼠标放上去放大效果，这个挺好的
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表
  myChart.setOption(option);
}

// 初始化函数
function initialize() {
  // 执行初始化逻辑
  console.log("初始化大屏");
  e1();
  e2();
  e3();
  e4();
  e5();
  e6();
  e7();
  e8();
}

// 创建防抖函数
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
// 使用防抖包装初始化函数
const debouncedInitialize = debounce(initialize, 200); // 防抖，延迟200ms执行

// 在页面加载时也执行一次初始化函数
window.addEventListener("load", initialize);

// // 监听窗口尺寸变化事件
// window.addEventListener("resize", () => {
//   debouncedInitialize();
//   location.reload();
// }); // 使用防抖
