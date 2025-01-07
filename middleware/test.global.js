export default defineNuxtRouteMiddleware((to, from) => {
  let passURL = ["/login", "/about", "/index"];
  if (!passURL.includes(to.path)) {
    // store pinia
    let token = "";
    if (import.meta.client) {
      token = localStorage.getItem("token");
    }
    if (!token) {
      return navigateTo({
        path: "/login",
        query: {
          code: 401,
          message: "请先登录",
        },
      });
    }
  }
});
