
<script>
export default {

}
</script>

<template>

<header class="indexHeader">
      <div>
        <img class="logo" src="src/images/logo.png"/>
      </div>
      <div>
        <h1>wall-API</h1>
      </div>
 
      <div class="menu">
        <nav>
              <RouterLink to="/">Inicio</RouterLink>
          <br>
              <RouterLink to="/FavoritosView">Favoritos</RouterLink>
        </nav>
      </div>
      
    </header>
  <router-view></router-view>
</template>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap');

*{
  color: white;
  text-decoration: none;
  font-size: 3vh;

}
.logo{
   height: 25vh;
  padding: 3vh;
}
h1 {
  font-family: 'Zen Dots', cursive;
  color: white;
  font-size: 12vh;
}
header {
  width:100%;
  overflow: hidden;
  background: #363D42;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu {
  display: flex;
  align-items: center;
  line-height: 3vh;
  padding-right: 3vw;
}

.inicio{
  color: #F9A81B;
  text-decoration: none;
}

.fav {
  color: #39C1CD;
}

nav {
  text-decoration: none;
}

</style>