<!--
  Select1 -- 选择按钮组件 --
  v1.0.0
  author xuxiaoqiang,2462170438@qq.com
  copyright Hangzhou QianNeng 2021.1.5
-->
<template>
  <div class="select">
<!--    <Select v-model="model2" size="small" style="width:100px">-->
<!--    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
<!--    </Select>-->
    <div>
      大区：
      <Select v-model="model1" class="selectlayout" placeholder="选择大区">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>
    <div>
      二级区域：
      <Select v-model="model2" class="selectlayout" placeholder="选择二级区域">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>
    <div>
      省份：
      <Select v-model="model3" class="selectlayout" placeholder="选择省份">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>
    <div>
      <slot name="ServiceStation" :data="cityList"></slot>
    </div>
    <div>
      <slot name="shebeitype" :data="cityList"></slot>
    </div>
    <div>
      <slot name="inputtotal"></slot>
    </div>
    <div><slot name="shebeiword"></slot></div>
    <div><Button>查询</Button></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
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
  }
}
</script>
<style scoped>
  /*.selecttotal {*/
  /*  width: 100%;*/
  /*  display: flex;*/
  /*  justify-content: space-around;*/
  /*}*/
  /*.select {*/
  /*  width: 100%;*/
  /*}*/
  .select {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-left: 0px;
  }
   .selectlayout {
      width:100px
    }
</style>