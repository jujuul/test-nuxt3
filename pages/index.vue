<template>
  <div>index</div>
</template>
<script lang="ts" setup>
// const res = await $fetch("http://localhost:4000/api/getData");
const res = await useAsyncData(Math.random() * 5 + "", () => {
  return $fetch("http://localhost:4000/api/getData");
});
console.log(res.data.value);
</script>
<style lang="scss" scoped></style>
