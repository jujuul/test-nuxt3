<template>
  <div>login</div>
</template>
<script lang="ts" setup>
onMounted(() => {
  const route = useRoute();
  if (route.query.code) {
    ElMessage.error(route.query.code + "" + route.query.message);
  }
});
</script>
<style lang="scss" scoped></style>
