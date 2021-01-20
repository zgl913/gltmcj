<template>
  <div>
    <div class="selecttotal">
      <div class="select">
        <!--    <Select v-model="model2" size="small" style="width:100px">-->
        <!--    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
        <!--    </Select>-->
        <div>
          选择经销商：
          <Select v-model="model1" style="width:100px" placeholder="选择经销商">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div>
          <Select v-model="model1" style="width:100px" placeholder="设备类型">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div>
          <Input v-model="value" placeholder="请输入用户姓名/手机" style="width: 300px" slot="inputtotal"/>
        </div>
        <div><Button>查询</Button></div>
      </div>
      <div class="select1">
        <div><Button @click="adddevice1">添加设备</Button></div>
        <div><Button>删除</Button></div>
      </div>
    </div>
    <DeviceTable></DeviceTable>
    <div style="margin-top: 20px;float: right;"><Pagetotal></Pagetotal></div>
    <AddDecive v-if="adddevice"></AddDecive>
  </div>
</template>

<script>
import Pagetotal from "@/components/common/Pagetotal";
import AddDecive from "@/components/fourthcomponents/shebei/AddDecive";
import DeviceTable from "@/components/fourthcomponents/shebei/DeviceTable";
export default {
  data () {
    return {
      adddevice:false,
      cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      model1: '',
      model2: '',
      model3: '',
      model4: ''
    }
  },
  name: "DeviceManagement",
  components: {
    DeviceTable,
    Pagetotal,
    AddDecive
  },
  methods: {
    adddevice1() {
      this.adddevice = !this.adddevice
    }
  }
}
</script>

<style scoped>
.selecttotal {
  display: flex;
  justify-content: space-between;
}
.select {
  width: 60%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left: 0px;
}
.select1 {
  display: flex;
  flex-wrap: nowrap;
}
</style>