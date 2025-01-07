<template>
  <div>
    <header>
      头部
      <ul>
        <li><nuxt-link to="/">首页</nuxt-link></li>
        <li><nuxt-link to="/about">关于</nuxt-link></li>
        <li><nuxt-link to="/login">登录</nuxt-link></li>
        <li><nuxt-link to="/user/userEdit">userEdit页面</nuxt-link></li>
      </ul>
    </header>
    <main>
      <nuxt-page></nuxt-page>
    </main>
    <footer>底部</footer>
  </div>
</template>
<style scoped lang="scss">
header,
footer,
main {
  border: 1px solid $myColor;
}
</style>
