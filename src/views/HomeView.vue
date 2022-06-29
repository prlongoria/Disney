<script setup>
import SearchBar from '../components/my-components/searchBar.vue';
import PanelIndex from '../components/my-components/panelIndex.vue';
import { dataAPI } from '../stores/dataAPI.js';  
import { computed } from 'vue';
console.log(dataAPI);
</script>

<template>
  <main>
    <SearchBar></SearchBar>
    <PanelIndex></PanelIndex>
    <div><p>{{ dataAPI }}</p></div>
  </main>
</template>

<style lang="css" scoped>
    main{
      height: 70vh;
      background-color: ;
    }
    
</style>