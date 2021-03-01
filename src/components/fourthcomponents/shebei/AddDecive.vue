<template>
  <div class="adddecivetotal">
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
      <FormItem>
        <div class="adddecivetype">
          *设备类型
          <Select v-model="model1" class="adddeciveselect" placeholder="请选择">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </FormItem>
      <FormItem label="*设备区域" prop="passwd">
        <Input type="设备名称" v-model="formCustom.passwd"/>
      </FormItem>
      <FormItem label="*新密码" prop="passwdCheck">
        <Input type="password" v-model="formCustom.passwdCheck"/>
      </FormItem>
      <FormItem>
        <div style="float:left;margin-left: -80px">
          *所属经销商：
          <Select v-model="model1" class="adddeciveselect" placeholder="请选择">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </FormItem>
      <FormItem label="设备代码" prop="age">
        <Input type="text" v-model="formCustom.age" number/>
      </FormItem>
      <FormItem label="平台ID" prop="age">
        <Input type="text" v-model="formCustom.age" number/>
      </FormItem>
      <FormItem label="设备IP" prop="age">
        <Input type="text" v-model="formCustom.age" number/>
      </FormItem>
      <FormItem label="设备端口" prop="age">
      <Input type="text" v-model="formCustom.age" number/>
    </FormItem>
      <FormItem label="设备登录名" prop="age">
        <Input type="text" v-model="formCustom.age" number/>
      </FormItem>
      <FormItem label="设备密码" prop="age">
        <Input type="text" v-model="formCustom.age" number/>
      </FormItem>
      <FormItem label="通道号" prop="age">
        <Input type="text" v-model="formCustom.age" number/>
      </FormItem>
      <FormItem>
        <div class="adddecivetype">
          是否球机
          <Select v-model="model1" class="adddeciveselect" placeholder="请选择">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </FormItem>
      <FormItem label="监控点顺序" prop="age">
        <Input type="text" v-model="formCustom.age" number/>
      </FormItem>
      <FormItem>
        <Button @click="handleReset('formCustom')" style="margin-left: 8px">取消</Button>
        <Button type="primary" @click="handleSubmit('formCustom')">确定</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password'));
      } else {
        if (this.formCustom.passwdCheck !== '') {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField('passwdCheck');
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password again'));
      } else if (value !== this.formCustom.passwd) {
        callback(new Error('The two input passwords do not match!'));
      } else {
        callback();
      }
    };
    const validateAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Age cannot be empty'));
      }
      // 模拟异步验证效果
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Please enter a numeric value'));
        } else {
          if (value < 18) {
            callback(new Error('Must be over 18 years of age'));
          } else {
            callback();
          }
        }
      }, 1000);
    };

    return {
      formCustom: {
        passwd: '',
        passwdCheck: '',
        age: ''
      },
      ruleCustom: {
        passwd: [
          { validator: validatePass, trigger: 'blur' }
        ],
        passwdCheck: [
          { validator: validatePassCheck, trigger: 'blur' }
        ],
        age: [
          { validator: validateAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields();
    }
  }
}
</script>
<style scoped>
.ivu-input-wrapper {
  float: left;
  width: 200px;
}
  .adddecivetotal {
    border: 1px solid black;
    width: 500px
  }
  .adddecivetype {
    float:left;
    margin-left: -80px
  }
  .adddeciveselect {
    width:200px
  }
</style>