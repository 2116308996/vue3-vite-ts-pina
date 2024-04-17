<!-- <script src="/cesium/Build/Cesium/Cesium.js"/> -->
<!-- <link rel="stylesheet" href="/node_modules/cesium/Build/Cesium/Widgets/widgets.css"></link> -->
<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
import * as Cesium from "cesium";
const data = ref({

})
var secuimfun=async()=>{
  //定位中国
  var position=Cesium.Cartesian3.fromDegrees(110,40,2000000)
  var position2=Cesium.Cartesian3.fromDegrees(110,40)
  
  //Cesium.Camera.DEFAULT_VIEW_RECTANGLE=Cesium.Rectangle.fromDegrees(80,22,130,55)
   var viewer=new Cesium.Viewer('cesiumView',{
       timeline:false,//时间轴
       animation:false,//动画控件
       geocoder:false,//搜索按钮
       homeButton:true,//主页按钮
       sceneModePicker:true,//投影方式
       baseLayerPicker:true,//图层选择
       navigationHelpButton:false,//帮助按钮
       fullscreenButton:false,//全屏按钮
       terrainProvider:await Cesium.createWorldTerrainAsync({
        requestWaterMask:true,//水面特效
        requestVertexNormals: true
       })
    })
    viewer.camera.setView({
      destination:position,
      orientation:{
        //默认(0,-90,0)
        heading:Cesium.Math.toRadians(0),
        pitch:Cesium.Math.toRadians(-90),
        roll:Cesium.Math.toRadians(0),
      }
    })
    // viewer.camera.flyTo({
    //   destination:position,
    //   duration:3
    // })
    //lookAt  固定相机位置，
    // viewer.camera.lookAt(
    //   position2
    // ,new Cesium.HeadingPitchRange(
    //   Cesium.Math.toRadians(0),
    //   Cesium.Math.toRadians(-90),
    //   200000
    // ))
    //经纬度转笛卡尔
    var cartesian=Cesium.Cartesian3.fromDegrees(110,20,20)//经度 纬度 高度
    //笛卡尔转弧度
    var a=Cesium.Cartographic.fromCartesian(cartesian)
    //弧度转角度(经纬度)
    let lon1=Cesium.Math.toDegrees(a.longitude)
    let lat1=Cesium.Math.toDegrees(a.latitude)
    var lon=180/Math.PI*a.longitude
    var lat=180/Math.PI*a.latitude
    console.log(cartesian,a,lon,lat)

    // const point=new Cesium.Entity({
    //   position:position,
    //   point:{
    //     pixelSize:20,//像素大小
    //     color:Cesium.Color.RED
    //   }
    // })
    var point=viewer.entities.add({
      position:Cesium.Cartesian3.fromDegrees(110,40,20000),
      point:{
        pixelSize:20,//像素大小
        color:Cesium.Color.RED
      }
    })

    const billboard=viewer.entities.add({
      position:Cesium.Cartesian3.fromDegrees(110,40,10),
      billboard:{
        image:"/public/image/ikun.jpg",
        scale:0.05,
        color:Cesium.Color.YELLOW
      }
    })

    const label=viewer.entities.add({
      position:Cesium.Cartesian3.fromDegrees(110,45,10),
      label:{
          text:"ikun",
          fillColor:Cesium.Color.YELLOW,
          showBackground:true,
          backgroundColor:new Cesium.Color(255,255,0)
      }
    })

    const polyline=viewer.entities.add({
      polyline:{
          positions:Cesium.Cartesian3.fromDegreesArray([110,40,110,43,115,45]),
          width:5,
          material:Cesium.Color.YELLOW
      }
    })
    const polyline2=viewer.entities.add({
      polyline:{
          positions:new Cesium.CallbackProperty(()=>{
            //
             return Cesium.Cartesian3.fromDegreesArray([110,40,110,43,115,45])
          },false),
          width:5,
          material:Cesium.Color.YELLOW
      }
    })
    const polygon=viewer.entities.add({
      polygon:{
        hierarchy:Cesium.Cartesian3.fromDegreesArray([100,40,110,43,100,45]),
        material:Cesium.Color.RED,
        height:100000,
        extrudedHeight:200000,
        outline:true,//是否显示外线
        fill:false,
        outlineColor:Cesium.Color.RED
      }
    })
    const box=viewer.entities.add({
      position:Cesium.Cartesian3.fromDegrees(120,45,100000),
      box:{
        dimensions:new Cesium.Cartesian3(200000,100000,200000),
        material:Cesium.Color.BLUEVIOLET,
      }
    })
   
   // viewer.zoomTo(point)
}
onMounted(() => {
    secuimfun();
})

</script>
<template>
  <div>
    <div id="cesiumView"></div>
  </div>
</template>
<style lang='less'>
  .cesium-viewer-bottom {
    display: none
  }
</style>
<style scoped lang='less'>
  #cesiumView{
    height: 600px;
    width: 100%;
    overflow: hidden;
    position: relative;
  }
</style>