<template>
  <div>

    <div class="information1">
      <div class="informationtotal">用户信息</div><Button @click="showModal=!showModal" class="makelayout">编辑</Button>
      <span class="informationtotal">账号：<span>123456</span></span>
      <span class="informationtotal">昵称：<span>{{username}}</span></span>
      <span class="informationtotal">性别：<span>{{usergender}}</span></span>
    </div>

    <div v-if="showModal" style="height: 300px;width: 500px;border: 2px solid black">
      <div style="float: right">
        <Button @click="showModal=!showModal" class="buttonsave buttontop">保存</Button>
        <Button @click="showModal=!showModal" class="buttoncancle buttontop">取消</Button>
      </div>
      <div style="clear: both">
        <div v-html="'账号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;123456'" class="informationtotal"></div>
        <div>
          昵称
          <input v-model="username"/>
        </div>
        <div>
          性别
          <input v-model="usergender"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicinFormation",
  data() {
    return {
      showModal: false,
      username:'1234567',
      usergender: '女1',
    }
  }
}
</script>

<style scoped>
  .informationtotal {
    margin:10px;
  }
  .information1 {
    width:40%;
    clear:both;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding:10px;
  }
  .makelayout {
    position: absolute;
    top:20px;
    right:0px;
  }
  .buttontop {
    margin:10px;
  }
</style>