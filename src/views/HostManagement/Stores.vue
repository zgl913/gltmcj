<template>
 <div>
   <div class="messagetotal">
     <div class="storemessage">经销商代码&nbsp;:&nbsp;{{DistributorCode}}</div>
     <div class="storemessage">经销商简称&nbsp;:&nbsp;{{DistributorAbbreviation}}</div>
     <div class="storemessage">经销商全称&nbsp;:&nbsp;{{DistributorFullname}}</div>
     <div class="storemessage">经销商地址&nbsp;:&nbsp;{{DistributorAddress}}</div>
     <div class="storemessage">店端服务器IP&nbsp;:&nbsp;{{ShopID}}</div>
   </div>
   <div class="shopidtime">
     <div class="textlayout"><div>经销商店端TV号&nbsp;:&nbsp;</div><Input style="width: 60%;"/></div>
     <div class="storemessage">工作开始时间&nbsp;:&nbsp;{{WorkStartTime}}</div>
     <div class="storemessage">工作结束时间&nbsp;:&nbsp;{{WorkEndtTime}}</div>
   </div>
   <div class="shopidtime">
     <div class="textlayout">
       <div>经销商项目</div>
       <Select style="width:100px" placeholder="请选择经销商项目">
         <Option v-for="item in DistributorProject" :value="item.value" :key="item.value">{{ item.label }}</Option>
       </Select>
     </div>
     <div class="textlayout">
       <div>状态</div>
       <Select style="width:100px" placeholder="请选择状态">
         <Option v-for="item in ProjectState" :value="item.value" :key="item.value">{{ item.label }}</Option>
       </Select>
     </div>
     <div class="textlayout">
       <div>级别</div>
       <Select style="width:100px" placeholder="请选择级别">
         <Option v-for="item in ProjectLevel" :value="item.value" :key="item.value">{{ item.label }}</Option>
       </Select>
     </div>
   </div>
   <div style="margin-top: 20px">
     <HostDeviceMessageTable></HostDeviceMessageTable>
     <div style="float:right;margin-top: 20px;">
       <Pagetotal></Pagetotal>
     </div>
   </div>


<!--   级别-->
<!--   <Select v-model="model4" style="width:100px" placeholder="选择服务站">-->
<!--     <Option v-for="item in city.data" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
<!--   </Select>-->
 </div>
</template>

<script>
import HostDeviceMessageTable from "@/components/Hostcomponents/HostDeviceMessageTable";
import Pagetotal from "@/components/common/Pagetotal";
export default {
  name: "Shop",
  data() {
    return {
      DistributorCode: '经销商代码',
      DistributorAbbreviation: '经销商简称',
      DistributorFullname: '经销商全称',
      DistributorAddress: '经销商地址',
      ShopID: '店端服务器IP',
      WorkStartTime: '工作开始时间',
      WorkEndtTime: '工作结束时间',
      DistributorProject: [
        {
          value: 'project1',
          label: '透明车间',
        },
        {
          value: 'project2',
          label: '不透明车间',
        },
      ],
      ProjectState: [
        {
          value: 'State1',
          label: '正常',
        },
        {
          value: 'State2',
          label: '不正常',
        },
      ],
      ProjectLevel: [
        {
          value: 'Level1',
          label: 'A级别',
        },
        {
          value: 'Level2',
          label: 'B级别',
        },
        {
          value: 'Level3',
          label: 'C级别',
        },
      ],
    }
  },
  components: {
    HostDeviceMessageTable,
    Pagetotal,
  }
}
</script>

<style scoped>
  .messagetotal {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
  .storemessage {
    display: inline;
  }
  .shopidtime {
    width: 50%;
    margin-top:20px;
    display: flex;
    justify-content: space-between;
  }
  .textlayout {
    display: flex;
    align-items: stretch;
  }
</style>