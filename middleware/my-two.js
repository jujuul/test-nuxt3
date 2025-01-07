export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to.path);
  if (to.path === "/about") {
    return true;
  }
});
