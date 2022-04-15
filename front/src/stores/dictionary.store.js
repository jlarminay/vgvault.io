import { defineStore } from 'pinia'
import { dictionaryAPI } from '@/gateways'

// status: ready, loading, error

export default defineStore({
  id: 'dictionary',
  persist: true,
  state: () => ({
    status: 'ready',
    allWords: {},
  }),
  getters: {},
  actions: {
    async search(word) {
      this.status = 'loading'

      // serach current state
      if (word in this.allWords) {
        this.status = 'ready'
        return this.allWords[word]
      }

      // search api
      const response = await dictionaryAPI.searchWord(word)
      if (!response) {
        this.status = 'error'
        return
      }
      const definition = response.meanings[0].definitions[0].definition
      this.allWords[word] = definition

      this.status = 'ready'
      return definition
    },
  },
})
