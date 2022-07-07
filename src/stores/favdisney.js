import { defineStore } from 'pinia'
//import { prependListener } from 'process'

export const  favouriteList = defineStore({
  id: 'listfav',
  state: () => ({
    charactersInFav:[]
           
  }),
  getters: {
  },
  actions: {
    addFavorites(caracterobject) {
        this.charactersInFav.push(caracterobject)
    }
  }
})
