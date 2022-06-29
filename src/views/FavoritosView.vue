

<script>
import CreateCharacter from '../components/my-components/createCharacter.vue'
import PanelFav from '../components/my-components/panelFav.vue'
import searchBar from '../components/my-components/searchBar.vue'
import SearchButton from '../components/my-components/searchButton.vue'
export default {
  components: { searchBar, PanelFav, CreateCharacter, SearchButton },

}
</script>

<template>
    <section>
        <div>
            <img src="/src/images/eva-favoritos.jpg" alt="imagen eva" id="evaFavoritos">
        </div>
        <div>
            <div id="search">
                <search-bar></search-bar>
                <SearchButton></SearchButton>
            </div>
            <panel-fav></panel-fav>
        </div>        
  </section>
    <div>
        <create-character></create-character>
    </div>
</template>

<style lang="css" scoped>
    * {
        background-color: #A8BBC9;
    }
    section {
        padding: 5%;
        display: flex;
        justify-content: space-between;
        
    }
    #evaFavoritos {
        width: 35vw;
        height: 90vh;

    }
    #search {
        
        display: flex;
        justify-content: space-between;
    } 
        
    

</style>