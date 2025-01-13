<template>
  <div>login</div>
  <button @click="handleLogin">登录</button>
</template>
<script lang="ts" setup>
const handleLogin = () => {
  localStorage.setItem("token", "123");
};
onMounted(() => {
  const route = useRoute();
  if (route.query.code) {
    ElMessage.error(route.query.code + "" + route.query.message);
  }
});
</script>
<style lang="scss" scoped></style>
