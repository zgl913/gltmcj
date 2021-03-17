<template>
  <div class="bglayout">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline
          style="display: flex;flex-direction: column;padding:15%;align-items: center">
      <div class="logintotallayout">
          <div class="namelayout">
              <div style="display: inline-block;width:70px;">用户名：</div>
              <FormItem prop="user">
                  <Input type="text" v-model="formInline.user" placeholder="用户名"/>
                  <!--          <Icon type="ios-person-outline" slot="prepend"></Icon>-->
                  <!--        </Input>-->
              </FormItem>
          </div>
      <div>
        <div style="display: inline-block;width:70px;">密码：</div>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="密码"/>
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
          <!--        </Input>-->
        </FormItem>
      </div>
      <div class="fonttotal">
        忘记密码？
      </div>
<!--      <div>是否确定退出？</div>-->
      <div  class="dengluan">
        <FormItem>
            <div>
                <Button type="primary" @click="handleSubmit('formInline')">确认</Button>
                <Button type="primary" @click="resetForm('formInline')" style="margin-left: 20px">重置</Button>
            </div>

        </FormItem>
      </div>
      </div>
    </Form>

  </div>
</template>
<script>
import {getdata1} from "@/api/api";

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
      getdata1(this.formInline.user,this.formInline.password).then((res)=>{
        console.log(name)
        if(this.formInline.user ==res.data.name &&this.formInline.password ==res.data.password){
          // alert('chenggpng')
          // this.$emit('ifshowlogin1',false)
            window.sessionStorage.setItem("token",res.data.token);
          this.$router.replace({path:'/index', query:{username:res.data.name,zhujichangshow:res.data.zhujichang}})
            this.$Message.success('Success!');

        }else {
          // alert('shibai')
            this.$Message.error('Fail!');
        }
      }).catch(error => {
        console.log(error);
      });
      // this.$refs[name].validate((valid) => {
      //   if (valid) {
      //     this.$Message.success('Success!');
      //   } else {
      //     this.$Message.error('Fail!');
      //   }
      // })
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
    /*.loginbutton {*/
    /*    margin-top: 10px;*/
    /*}*/
    .bglayout {
        /*float: top;*/
        width: 100%;
        height: 100%;
        background-image: url("../../pic/sky2.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .logintotallayout {
        width: 40%;
        /*height: 50%;*/
        background-color: white;
    }
    .namelayout {
        margin-top: 15%;
    }
    .fonttotal {
        color: #007aff;
    }
    .dengluan {
        margin-bottom: 15%;
    }
</style>