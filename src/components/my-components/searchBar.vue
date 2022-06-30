
<script>
import SearchButton from './searchButton.vue';
export default {
    components: { SearchButton }
}
</script>
<template >
    <div>
        <div class="searchBar">
        <input type="text" placeholder="Busca un personaje" name="search" />
        <SearchButton></SearchButton>
      </div>
    </div>
</template>
<style lang="css">
 .searchBar { 
  position:relative;
  top:-65vh;
  right: -75vw;
  margin-left:-27.5vw;
 }
 input{
  width: 35vw;
  border-radius: 15px;
 }
  
</style>