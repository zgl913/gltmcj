<template>
  <div>
    <div style="width:20%;float: left;display: flex;flex-direction: column;align-items: flex-start;">
      <div style="width:100%;height:30px;background-color: pink;">选择服务站</div>
      <div style="width:100%;margin-top: 20px;"> <Input search placeholder="服务站名"  style="width: 100%"/></div>
      <div style="font-size: 20px;font-weight: bold;">当前：杭州领克旗舰店</div>
      <div style="font-size: 20px;font-weight: bold;">最近访问</div>
      <div style="display: flex;justify-content: space-between;width: 100%;">
        <div class="store">杭州店一</div>
        <div class="store">上海店一</div>
        <div class="store">成都店一</div>
      </div>
    </div>
    <div style="clear: both">
      <TreeOrigion></TreeOrigion>
    </div>
    <div style="float: left">
      <div style="width:100%;height:30px;background-color: pink;">选择监控点</div>
      <div style="display: flex;margin-top: 20px">
        <div style="display: flex;flex-direction: column">
          <Button class="viewplace">门口接待处</Button>
          <Button class="viewplace">展厅全貌1</Button>
          <Button class="viewplace">服务接待</Button>
          <Button class="viewplace">维修车间</Button>
        </div>
        <div style="display: flex;flex-direction: column;margin-left: 10px;">
          <Button class="viewplace">热点车型</Button>
          <Button class="viewplace">展厅全貌2</Button>
          <Button class="viewplace">客户休息区</Button>
          <Button class="viewplace">展厅环视</Button>
        </div>
      </div>
    </div>
    <div style="position: absolute;top:200px;left:50%;">
<!--      <Button>展厅环视</Button>-->
      <Button>高清</Button>
      <Button>标清</Button>
    </div>
  </div>
</template>

<script>
import TreeOrigion from "@/components/secondcomponents/TreeOrigion";
export default {
  name: "videocheck",
  components: {
  TreeOrigion,
  }
}
</script>

<style scoped>
  .store {
    width: 100px;
    height: 40px;
    background-color: pink;
  }
  .viewplace {
    margin-top: 10px;
  }
</style>