<template>
  <h1>欢迎登录</h1>
  <!-- <router-link to="/">
    <el-button type="primary">回首页</el-button>
  </router-link> -->
  <el-button type="primary" @click="goHome">回首页</el-button>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goHome = () => {
  router.push("/");
};
</script>

<style scoped></style>
