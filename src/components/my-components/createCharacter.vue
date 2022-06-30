
<script>
export default {
    
}
</script>
<template>
    <div id="boot">
        <div class="createCharacter">
        <img src="/src/images/bota-walle.png" alt="bota de wall-e para crear personaje" id="createBoot">
        <div class="textBox">
            <p>CREA TU PERSONAJE</p>
        </div>
      </div>
    </div>
</template>

<style lang="css" scoped>

    #boot {
        width: 100%;
        height: auto;
        padding-bottom:5vh ;
        margin-left: 3vw;
        display: flex;
        justify-content: space-evenly;
        margin-top: -10vh;

    }

    #createBoot {
        
        height: 20vh;
        margin-left: 6vw;
    }
    .textBox {
    
        
        background-color: white;
        width: 20vw;
        height: 4vh;
        text-align: center;
        
        vertical-align: middle;
        margin-top: -6vh;
        border-radius: 10px;
        
    }
    .textBox p{
        color: #363D42;
    }

    
</style>