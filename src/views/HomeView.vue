<script >
import SearchBar from '../components/my-components/searchBar.vue';
import PanelIndex from '../components/my-components/panelIndex.vue';
import WalleImagen from '../components/my-components/walleImagen.vue';
import SearchButton from '../components/my-components/searchButton.vue';
export default {
  components: { SearchBar, PanelIndex, WalleImagen, SearchButton },
}
</script>

<template>
  <section>
    <div>
      <WalleImagen></WalleImagen>
    </div>
    <div id="search2">
      <SearchBar></SearchBar>
      <SearchButton></SearchButton>
    </div>
    <PanelIndex></PanelIndex>
  
    
  </section>
</template>

<style lang="css" scoped>
    section{
       padding: 5%;
        display: flex;
        justify-content: space-between;
      background-color: #A8BBC9;

    }
    #search2 {
        
        display: flex;
        justify-content: space-between;
    } 
    
</style>