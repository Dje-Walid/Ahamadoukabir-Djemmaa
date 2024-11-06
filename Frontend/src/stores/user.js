import { defineStore } from "pinia"
import axios from "axios"
import apiRoutes from "@/apiRoutes"

export const useUserStore = defineStore("user", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")) || null,
  }),

  actions: {
    async signIn(email, password) {
      const response = await axios.post(apiRoutes.sign.signIn(), {
        email,
        password,
      })
      this.user = response.data
      localStorage.setItem("user", JSON.stringify(this.user))
    },
    signOut() {
      this.user = null
      localStorage.removeItem("user")
    },
  },
})
