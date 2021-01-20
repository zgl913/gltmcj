<template>
  <div>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline style="display: flex;flex-direction: column;margin-top: 70px">
      <div>
        <div style="display: inline-block;width:70px;">用户名：</div>
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="Username"/>
          <!--          <Icon type="ios-person-outline" slot="prepend"></Icon>-->
          <!--        </Input>-->
        </FormItem>
      </div>
      <div>
        <div style="display: inline-block;width:70px;">密码：</div>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="Password"/>
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
          <!--        </Input>-->
        </FormItem>
      </div>
      <div>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">确认</Button>
          <Button type="primary" @click="resetForm('formInline')">取消</Button>
        </FormItem>
      </div>
    </Form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
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