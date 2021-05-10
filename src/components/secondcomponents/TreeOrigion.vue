<template>
  <div>
<!--    <Tree :data="data5" :render="renderContent" class="demo-tree-render"></Tree>-->
    <Tree :data="data1" class="demo-tree-render" @on-select-change="selecttree"></Tree>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        data1: [
          {
            title: '全国',
            expand: true,
            children: [
              {
                title: 'parent 1-1',
                expand: true,
                children: [
                  {
                    title: 'leaf 1-1-1'
                  },
                  {
                    title: 'leaf 1-1-2'
                  }
                ]
              },
              {
                title: 'parent 1-2',
                expand: true,
                children: [
                  {
                    title: 'leaf 1-2-1'
                  },
                  {
                    title: 'leaf 1-2-1'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
      methods: {
        selecttree(a,b) {
            console.log('ddd',a,b)
        }
      }
  }
</script>
<style>
.demo-tree-render .ivu-tree-title{
  width: 100%;
}
  .demo-tree-render {
    width: 200px
  }
</style>
