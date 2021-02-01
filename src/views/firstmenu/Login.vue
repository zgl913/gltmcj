<template>
  <div>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline style="display: flex;flex-direction: column;margin-top: 70px">
      <div>
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
      <div>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">确认</Button>
          <Button type="primary" @click="resetForm('formInline')" style="margin-left: 20px">取消</Button>
        </FormItem>
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
        console.log(res)
        if(this.formInline.user ==res.data.name &&this.formInline.password ==res.data.password){
          // alert('chenggpng')
          this.$emit('ifshowlogin1',false)
          this.$router.replace({path:'/index', query:{username:res.data.name,zhujichangshow:res.data.zhujichang}})
        }else {
          // alert('shibai')
        }
      }).catch(error => {
        console.log(error);
      });
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
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