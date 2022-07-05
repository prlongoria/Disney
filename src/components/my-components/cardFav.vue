<script>
export default {
        data() {
        return {
            disneyFavorites: [],
        }
    },
    created() {
        fetch("../peliculasPRUEBA.json")
            .then((response) => response.json())
            .then((data) => {
                this.disneyFavorites = data.peliculas;
                console.log(disneyFavorites)
                return disneyFavorites
            })
    },
}

</script>
<template>
    <div class="cardBox">
        <div
            v-for="character in disneyFavorites"
            :key="key"
            class="cardData"
        ></div>
    </div>
        <div id="photo">
            <img
                src="https://static.wikia.nocookie.net/disney/images/f/fa/Normal_EoA_S3_E4_0217.jpg"
                id="characterImg"
            />
            <div class="stars">
                <img src="../../images/star-grey.png" id="star1" />
                <img src="../../images/star-grey.png" id="star2" />
                <img src="../../images/star-grey.png" id="star3" />
            </div>
        </div>
        <div class="cardtext">
            <h5 id="name">Name: </h5> <p>{{peliculas.nombre}}</p>
            <p id="nameData"></p>
            <h5 id="film">Film or Show:</h5>
            <p id="filmData"></p>
            <h5 id="allies">Allies:</h5>
            <p id="alliesData"></p>
            <h5 id="enemies">Enemies:</h5>
            <p id="enemiesData"></p>
        </div>
        <div class="cardButtons">
            <button id="delete">
                <img src="/src/images/delete.png" id="deleteImg" />
            </button>
            <button id="edit">
                <img src="/src/images/edit.png" id="editImg" />
            </button>
        </div>
    
</template>

<style>
.cardBox {
    background-color: #39c1cd;
    display: flex;
    justify-content: center;
    padding: 1vh;
    margin: 1.5vh;
}

.cardButtons {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.cardtext {
    width: 35vw;
    height: 18vh;
    line-height: 1px;
}
#photo {
    width: 8vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

button {
    background-color: transparent;
    border: none;
}

#deleteImg,
#editImg {
    width: 2vw;
}

.stars img {
    width: 1vw;
    margin-top: 1vh;
}
#characterImg {
    height: 15vh;
}
</style>
