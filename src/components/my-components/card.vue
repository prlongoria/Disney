<script>

    export default{
        props: {
            character: Object,
        }
       

    }

</script>
<template>
    <div class="cardBox">
        <div id="photo">
             <img :src=character.imageUrl id="characterImg"/>
             <div class="stars">
                <form>
            <p class="rating">
              <input id="radio1" type="radio" name="estrellas" value="5"><!--
              --><label for="radio1">★</label><!--
              --><input id="radio2" type="radio" name="estrellas" value="4"><!--
              --><label for="radio2">★</label><!--
              --><input id="radio3" type="radio" name="estrellas" value="3"><!--
              --><label for="radio3">★</label><!--
              --><input id="radio4" type="radio" name="estrellas" value="2"><!--
              --><label for="radio4">★</label><!--
              --><input id="radio5" type="radio" name="estrellas" value="1"><!--
              --><label for="radio5">★</label>
            </p>
          </form>
             </div>
        </div>
         <div class="cardtext">
            <h5 id="name">Name: {{ character.name }} </h5> 
            <h5 id="film">Film or Show: {{character.films}}</h5>
            <p id="filmData"></p>
            <h5 id="allies">Allies: {{character.allies}}</h5>
            <p id="alliesData"></p>
            <h5 id="enemies">Enemies: {{character.enemies}}</h5>
            <p id="enemiesData"></p>
        </div>
        <div class="cardButtons">
            <button id="delete">
                <img src="/src/images/delete.png" id="deleteImg"/>
            </button>
            <button id="edit">
                <img src="/src/images/edit.png" id="editImg"/>
            </button>
        </div>
    </div>
    
</template>

<style>
.cardBox{
    background-color:#39C1CD;
    display: flex;
    justify-content: center;
    padding: 1vh;
    margin: 1.5vh;
    overflow-y: scroll;
}
.cardButtons{
    display: flex;
    flex-direction:column;
    justify-content: center;
}
.cardtext{
    width:35vw;
    height: 18vh;
    line-height: 1px;
    
}
#photo{
    width: 8vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}
button {
    background-color: transparent;
    border: none;
}
#deleteImg, #editImg{
    width: 2vw;

}

#characterImg{
    height: 15vh;
}

#form {
    width: 250px;
    margin: 0 auto;
    height: 50px;
  }
  
  #form p {
    text-align: center;
  }
  
  #form label {
    font-size: 20px;
  }
  
  input[type="radio"] {
    display: none;
  }
  
  label {
    color: grey;
  }
  
  .rating {
    direction: rtl;
    unicode-bidi: bidi-override;
  }
  
  label:hover,
  label:hover ~ label {
    color: orange;
  }
  
  input[type="radio"]:checked ~ label {
    color: orange;
  }

</style>
