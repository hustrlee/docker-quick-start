<template>
  <div id="app">
    <el-form :model="formData" ref="form" :inline="true" @submit.native.prevent>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="formData.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      formData: {
        name: ""
      }
    };
  },
  methods: {
    async onSubmit() {
      let res = await axios.post("/api", this.formData);
      await this.$alert(res.data.result, "来自服务器的问候");
      this.$refs["form"].resetFields();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
