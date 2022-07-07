import { defineStore } from 'pinia'
//import { prependListener } from 'process'

export const listfavouritescreated = defineStore({
  id: 'listfav',
  state: () => ({
    favname: [],
    
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
      addfav() {
      this.listfavouritescreated.push(favname);
    }
  }
})
