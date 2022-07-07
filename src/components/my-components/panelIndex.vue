
<script>

export default {
    
}
await fetch('https://api.disneyapi.dev/characters')
    .then(response => response.json())
    .then(data => storedata(data));
function storedata(argument){
    const dataApi = argument;
    console.log(dataApi);
    console.log(dataApi.data);
    printInPanel(dataApi);

}
function printInPanel(dataApi){
    for ( var index=0; index=<dataApi.data.data.length; index++ ;){
        let name= dataApi.data.data[index].name;
        //document.getElementById("panel-index").innerHTML += `<h1>${name}</h1>`
        return data;
    }
}

</script>
<template >
    <div class="indexPanel" id="panel-index">{{dataApi.data.dat[1].name}}
        <div>
        </div>
    </div>
</template>
<style lang="css" scoped>
    .indexPanel{
        height: 55vh;
        width: 45vw;
        background-color: white;
    }
</style>