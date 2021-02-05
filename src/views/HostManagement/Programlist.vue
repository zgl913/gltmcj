<template>
  <div>
    <div class="messagetotal">
      <div class="storemessage">项目名称&nbsp;:&nbsp;{{projectname}}</div>
      <div class="storemessage">项目编号 :&nbsp;{{projectcode}}</div>
      <div class="storemessage">项目状态&nbsp;:&nbsp;{{projectstate}}</div>
      <div class="storemessage">创建时间&nbsp;:&nbsp;{{projectcreatetime}}</div>
      <div class="storemessage">编辑时间&nbsp;:&nbsp;{{projectedittime}}</div>
    </div>
  </div>
</template>

<script>
import {getProjectItem} from "@/api/api";

export default {
name: "Programlist",
  data() {
  return {
    projectname: '',
    projectcode: '',
    projectstate: '',
    projectcreatetime: '',
    projectedittime: '',
    }
  },
  mounted() {
    getProjectItem(this.$route.query.key_id).then(res=> {
      // console.log(res)
      this.projectname = res.data.result_content.project_name
      this.projectcode = res.data.result_content.project_code
      this.projectstate = res.data.result_content.state
      this.projectcreatetime = res.data.result_content.create_time
      this.projectedittime = res.data.result_content.edit_time

    })
  },
  watch: {
    '$route': function (to) {
      getProjectItem(to.query.key_id).then(res=> {
        // console.log(res)
        this.projectname = res.data.result_content.project_name
        this.projectcode = res.data.result_content.project_code
        this.projectstate = res.data.result_content.state
        this.projectcreatetime = res.data.result_content.create_time
        this.projectedittime = res.data.result_content.edit_time

      })
    }
  }
}
</script>

<style scoped>
  .messagetotal {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
  .storemessage {
    display: inline;
  }
</style>