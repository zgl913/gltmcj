<template>
  <div>

    <div class="information1">
      <div class="informationtotal">用户信息</div><Button @click="showModal=!showModal" class="makelayout">编辑</Button>
      <span class="informationtotal">账号：<span>{{$store.state.username}}</span></span>
      <span class="informationtotal">昵称：<span>{{$store.state.nicheng}}</span></span>
      <span class="informationtotal">性别：<span>{{$store.state.xingbie}}</span></span>
    </div>

    <div v-if="showModal" class="basicinformationshowmodal">
      <div style="float: right">
<!--        <Button @click="showModal=!showModal" class="buttonsave buttontop">保存</Button>-->
        <Button @click="savemessage(username1,usergender1)" class="buttonsave buttontop">保存</Button>
        <Button @click="showModal=!showModal" class="buttoncancle buttontop">取消</Button>
<!--        <Button @click="exitmessage()" class="buttoncancle buttontop">取消</Button>-->
      </div>
      <div style="clear: both">
        <div v-html="'账号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;123456'" class="informationtotal"></div>
        <div>
          昵称
          <input v-model="username1"/>
        </div>
        <div class="xingbiehang">
          性别
          <input v-model="usergender1"/>
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
      username1:this.username,
      usergender1: this.usergender,
    }
  },
  methods: {
    savemessage(username1,usergender1) {
      this.username = username1;
      this.usergender = usergender1;
      this.showModal=!this.showModal
    },
  },
    mounted() {
        var usermsg = window.localStorage.getItem("token");
        console.log(usermsg)
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
    align-items: flex-start;
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
  .basicinformationshowmodal {
    margin-left: 20px;
    height: 250px;
    width: 20%;
    border: 2px solid black
  }
  .xingbiehang {
    margin-top:20px;
  }
</style>