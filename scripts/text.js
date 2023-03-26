
   var lineChart2 = echarts.init(document.getElementById('lineChart2'));
   lineChart2.setOption({
     title: {
        text: '疾病发病趋势',
        textStyle:{
           fontSize:16,
           color:'#32cd32'
       },
       x:"center"
    },
     color:["#32cd32"],
     grid:{
         left: '15%',
         right: '5%',
         bottom: '25%',
   
     },
     tooltip : {
          trigger: 'item',
          formatter: "{a}<br/>{b}<br/>{c}人"
      },
   
     calculable : true,
         yAxis: [
             {
                 type: 'value',
                 axisLine:{
                     lineStyle:{
                         color: '#32cd32'
                     },
                 },
                 splitLine: {
                     "show": false
                 },
                 axisLabel: {
                     textStyle: {
                         color: '#fff'
                     },
                     formatter: function (value) {
                         return value + ""
                     },
                 },
             }
         ],
         xAxis: [
             {
                 type: 'category',
                 data : symptomName,
                 boundaryGap : false,
                 axisLine:{
                     lineStyle:{
                         color: '#32cd32'
                     },
                 },
                 splitLine: {
                     "show": false
                 },
                 axisLabel: {
                   // interval:0,
                   // rotate:40,
                     textStyle: {
                         color: '#fff'
                     },
                     formatter: function (value) {
                         return value + ""
                     },
                 },
             }
         ],
     series : [
         {
             name:'疾病发病人数',
             type:'line',
             smooth:true,
             itemStyle: {normal: {areaStyle: {type: 'default'}}},
             data:[520, 232,701, 434, 190, 230, 210,120, 132, 101, 134, 890]
         },
     ]
   
   })
   var mCharts=echarts.init(document.querySelector('mapChart'))
   $get('map/henan.json',function(ret){
   	  echarts.registerMap('henan',ret)
   	  var option={
   		  geo:{
   			  type:'map',
   			  map:'henan',
   			  zoom:1.2,
   			  label:{
   				  show:true
   			  }
   		  }
   	  }
   	  mCharts.setOption(option)
   })
   