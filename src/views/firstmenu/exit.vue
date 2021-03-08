<template>
  <div>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline
          style="display: flex;flex-direction: column;padding:15%;align-items: center">
<!--          <div class="namelayout">-->
<!--              <div style="display: inline-block;width:70px;">用户名：</div>-->
<!--              <FormItem prop="user">-->
<!--                  <Input type="text" v-model="formInline.user" placeholder="用户名"/>-->
<!--                  &lt;!&ndash;          <Icon type="ios-person-outline" slot="prepend"></Icon>&ndash;&gt;-->
<!--                  &lt;!&ndash;        </Input>&ndash;&gt;-->
<!--              </FormItem>-->
<!--          </div>-->
<!--      <div>-->
<!--        <div style="display: inline-block;width:70px;">密码：</div>-->
<!--        <FormItem prop="password">-->
<!--          <Input type="password" v-model="formInline.password" placeholder="密码"/>-->
<!--          <Icon type="ios-lock-outline" slot="prepend"></Icon>-->
<!--          &lt;!&ndash;        </Input>&ndash;&gt;-->
<!--        </FormItem>-->
<!--      </div>-->
      <div>是否确定退出？</div>
      <div class="loginbutton">
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">确认</Button>
          <Button type="primary" @click="resetForm('formInline')" style="margin-left: 20px">取消</Button>
        </FormItem>
      </div>
    </Form>

  </div>
</template>
<script>
// import {getdata1} from "@/api/api";

export default {
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          // { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // this.$refs.input
    handleSubmit(name) {
        console.log(name)
        window.sessionStorage.clear();
        this.$router.replace('/Login');
    },
    resetForm(formName) {
      this.$nextTick(function() {
        this.$refs[formName].resetFields();
        this.$emit('ifshowlogin',false)
      })
    },
    // nonelogin(){
    //   this.$emit('showlogin1', 'false')
    // }

  }
}
</script>
<style>
    .loginbutton {
        margin-top: 10px;
        width:100%;
    }
    /*.bglayout {*/
    /*    !*float: top;*!*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*    background-image: url("../../pic/sky1.jpg");*/
    /*    background-repeat: no-repeat;*/
    /*    background-size: 100% 100%;*/
    /*}*/
    /*.logintotallayout {*/
    /*    width: 20%;*/
    /*    !*height: 50%;*!*/
    /*    background-color: white;*/
    /*}*/
    /*.namelayout {*/
    /*    margin-top: 15%;*/
    /*}*/
</style>