<template>
  <div style="height: 100%;width: 100%">
    <div class="videocheckmendian">
      <Row>
          <DatePicker type="date" placeholder="Select date" style="width: 200px" v-model="time"></DatePicker>
<!--        <DatePicker :value="value2" format="yyyy-MM-dd" type="daterange" placement="bottom-end" placeholder="选择录播时间" v-model="time"></DatePicker>-->
      </Row>
      <div class="selectservice videoselect">选择服务站</div>
      <div style="width:100%;margin-top: 10px;"> <Input search placeholder="输入关键字过滤"  style="width: 100%"/></div>
<!--      <div class="videonow">当前：杭州领克旗舰店</div>-->
<!--      <div class="videonow">最近访问</div>-->
<!--      <div class="videomengdiantotal">-->
<!--        <div class="store selectservice1">杭州店一</div>-->
<!--        <div class="store selectservice1">上海店一</div>-->
<!--        <div class="store selectservice1">成都店一</div>-->
<!--      </div>-->
    </div>
    <div style="clear: both;width: 20%;height: 30%;overflow-y: scroll;">
      <TreeOrigion></TreeOrigion>
    </div>
    <div style="float: left">
      <div class="selectservice viedoselectjiankongdian">选择监控点</div>
      <div style="display: flex;margin-top: 20px">
        <div style="display: flex;flex-direction: column">
          <Button class="viewplace">门口接待处</Button>
          <Button class="viewplace">展厅全貌1</Button>
          <Button class="viewplace">服务接待</Button>
          <Button class="viewplace">维修车间</Button>
        </div>
        <div class="viedobuttontotal">
          <Button class="viewplace">热点车型</Button>
          <Button class="viewplace">展厅全貌2</Button>
          <Button class="viewplace">客户休息区</Button>
          <Button class="viewplace">展厅环视</Button>
        </div>
      </div>
    </div>
<!--    <div style="position: absolute;top:20%;left:50%;">-->
<!--&lt;!&ndash;      <Button>展厅环视</Button>&ndash;&gt;-->
<!--      <Button>高清</Button>-->
<!--      <Button>标清</Button>-->
<!--    </div>-->
    <div class="videototal">
      <div class="videolayout">
        <videocomponent :playbacktime="time"></videocomponent>
      </div>
    </div>

  </div>
</template>

<script>
import TreeOrigion from "@/components/secondcomponents/TreeOrigion";
import videocomponent from "../../components/secondcomponents/videocomponent";
export default {
  name: "videocheck",
  data() {
    return {
      time:'',
      value2: ['2016-01-01', '2016-02-15']
    }
  },
  methods: {
    changetime() {
      console.log(this.time)
    }

  },
  components: {
    TreeOrigion,
    videocomponent
  }
}
</script>

<style scoped>
  .store {
    width: 100px;
    height: 40px;
    background-color: #D3D3D3;
  }
  .viewplace {
    margin-top: 10px;
  }
  .selectservice {
  line-height: 30px;
  }
  .selectservice1 {
    line-height: 40px;
  }
  .videocheckmendian {
    width:20%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position:relative;
  }
  .videoselect {
    width:100%;
    height:30px;
    background-color: #D3D3D3;
    margin-top: 10px;
  }
  .videonow {
    font-size: 20px;
    font-weight: bold;
  }
  .videomengdiantotal {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .viedoselectjiankongdian {
    width:100%;
    height:30px;
    background-color: #D3D3D3;
  }
  .viedobuttontotal {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  .videolayout {
    display: flex;
  }
  .videototal {
    margin-top: 0px;
    position: absolute;
    top:17%;
    left:33%;
  }
</style>