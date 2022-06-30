<script setup>
import SearchBar from '../components/my-components/searchBar.vue';
import PanelIndex from '../components/my-components/panelIndex.vue';
import WalleImagen from '../components/my-components/walleImagen.vue';
</script>

<template>
  <main>
    <WalleImagen></WalleImagen>
    <SearchBar></SearchBar>
    <PanelIndex></PanelIndex>

  </main>
</template>

<style lang="css" scoped>
    main{
      height: 75vh;
      background-color: #A8BBC9;

    }
    
</style>