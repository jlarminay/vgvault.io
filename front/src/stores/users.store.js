import { defineStore } from 'pinia'
import { usersAPI } from '@/gateways'

// status: ready, loading, error

export const useUsersStore = defineStore({
  id: 'users',
  persist: true,

  state: () => ({
    status: 'ready',
    allUsers: null,
  }),

  getters: {},

  actions: {
    resetStatus() {
      this.status = 'ready'
    },
    async getAll() {
      this.status = 'loading'

      // serach current state
      if (this.allUsers) {
        this.status = 'ready'
        return
      }

      // search api
      const response = await usersAPI.getAll()
      if (!response) {
        this.status = 'error'
        return
      }
      this.allUsers = response

      this.status = 'ready'
      return
    },
  },
})
