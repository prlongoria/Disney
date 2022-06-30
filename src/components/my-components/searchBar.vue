
<script>
import SearchButton from './searchButton.vue';
export default {
    components: { SearchButton }
}
</script>
<template >
    
        <div class="searchBar">
        <input type="text" placeholder="Busca un personaje" name="search" />
        
      </div>
    
</template>
<style lang="css" scoped>

  input {
    width: 42vw;
    height: 4vh;
    background-color: white;
    margin-bottom: 2vh;
    border: none;
    border-radius: 15px;

  }
  
</style>