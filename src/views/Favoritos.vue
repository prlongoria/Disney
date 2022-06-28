
<script>
import PanelFav from '../components/my-components/panelFav.vue';
import CreateCharacter from '../components/my-components/createCharacter.vue';
import SearchBar from '../components/my-components/searchBar.vue';
export default {
    components: { PanelFav, CreateCharacter, SearchBar }
}
</script>
<template>
    <div>
        <SearchBar></SearchBar>
        <PanelFav></PanelFav>
        <CreateCharacter></CreateCharacter>
    </div>
</template>
<style lang="">
    
</style>