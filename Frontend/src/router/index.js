import { createRouter, createMemoryHistory } from "vue-router"
import Home from "@/components/business/Home.vue"
import Login from "@/components/business/Login.vue"
import { useUserStore } from "@/stores/user"
import { default as routesLink } from "@/routes"

const routes = [
  {
    path: routesLink.login(),
    name: "Login",
    component: Login,
  },
  {
    path: routesLink.home(),
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
]
const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !userStore.user
  ) {
    next({ name: "Login" })
  } else {
    next()
  }
})

export default router
