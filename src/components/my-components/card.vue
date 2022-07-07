<script>
    export default{

    }

    function changeFirstStar() {

    document.getElementById("star-grey").src == "/src/images/star-grey.png";
    document.getElementById("star-grey").src = "/src/images/star-yellow.png";;
}
function changeSecondStar() {

    document.getElementById("star-grey2").src == "/src/images/star-grey.png";
    document.getElementById("star-grey2").src = "/src/images/star-yellow.png";
}
function changeThirdStar() {

    document.getElementById("star-grey3").src == "/src/images/star-grey.png";
    document.getElementById("star-grey3").src = "/src/images/star-yellow.png";
}

</script>
<template>
    <div class="cardBox">
        <div id="photo">
            <img src="https://static.wikia.nocookie.net/disney/images/f/fa/Normal_EoA_S3_E4_0217.jpg" id="characterImg"/>
            <div class="stars">
                <img alt="" src="/src/images/star-grey.png" 
        style="height: 3vh; width: 1.5vw" id="star-grey" onclick="changeFirstStar()"/>
        <img alt="" src="/src/images/star-grey.png"   
        style="height: 3vh; width: 1.5vw" id="star-grey2" onclick="changeSecondStar()"/>
        <img alt="" src="/src/images/star-grey.png" 
        style="height: 3vh; width: 1.5vw" id="star-grey3" onclick="changeThirdStar()"/>
            </div>
        </div>
        <div class="cardtext">
            <h5 id="name">Name: </h5> 
            <p id="nameData"></p>
            <h5 id="film">Film or Show: </h5>
            <p id="filmData"></p>
            <h5 id="allies">Allies: </h5>
            <p id="alliesData"></p>
            <h5 id="enemies">Enemies: </h5>
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

.stars img{
    width:1vw;
    margin-top: 1vh;
    
}
#characterImg{
    height: 15vh;
}

</style>