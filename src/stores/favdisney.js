import { listfavouritescreated } from 'pinia'
import { prependListener } from 'process'

export const listfavouritescreated = defineStore({
  id: 'listfav',
  state: () => ({
    favname : "pepe",
    
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
