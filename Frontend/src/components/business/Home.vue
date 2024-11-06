<script>
import Layout from "@/components/business/Layout.vue"
import { useUserStore } from "@/stores/user"
import routes from "@/routes"

export default {
  name: "Home",
  components: {
    Layout,
  },
  setup() {
    const userStore = useUserStore()

    return { userStore }
  },
  methods: {
    async logout() {
      await this.userStore.signOut()
      this.$router.push(routes.login())
    },
  },
}
</script>

<template>
  <Layout>
    <div class="h-screen w-screen bg-gray-100">
      <div class="flex flex-row justify-between items-center h-16 p-4 border-b">
        <h1 class="text-xl font-bold">{{ userStore.user.email }}</h1>
        <button
          @click="logout"
          class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Log out
        </button>
      </div>
    </div>
  </Layout>
</template>
