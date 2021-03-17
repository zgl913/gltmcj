<template>
  <div>
    <div style="float: left">
      <Button type="text" @click="information">基本信息</Button>
      <Button type="text" @click="makepassword">修改密码</Button>
    </div>
    <BasicinFormation v-show="showone" class="basic"></BasicinFormation>
    <div v-show="showtwo" class="basic">
      <FormTable class="formlayout"></FormTable>
<!--      <div>-->
<!--        <div class="buju">-->
<!--          <p>*旧密码<input class="inputlayout"/></p>-->
<!--          <p>*新密码<input class="inputlayout"/></p>-->
<!--          <p>*再次确认新密码<input class="inputlayout"/></p>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import BasicinFormation from "@/views/fifthmenu/BasicinFormation";
import FormTable from "@/components/fifthcomponents/FormTable";
export default {
  data() {
    return {
      showone: 'true',
      showtwo: '',
    }
  },
  name: "personcenter",
  components: {BasicinFormation,FormTable},
  methods: {
    information() {
      this.showone=true;
      this.showtwo=false;
    },
    makepassword() {
      this.showone=false;
      this.showtwo=true;
    }
  }
}
</script>

<style scoped>
  .buju {
    clear:both;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding:10px;
  }
  .inputlayout {
    position: absolute;
    left:200px;
  }
  p {
    margin:10px;
  }
  .formlayout {
    width: 30%;
    clear: both;
    float: left;
    padding-top: 20px;
  }
</style>