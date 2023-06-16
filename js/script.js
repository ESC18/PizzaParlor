



















function showBuilder() {
    console.log(true)
    let builderBackground = document.getElementById("builder");
    builderBackground.style.top = "10vh"; 
}


window.onload = function () {
    let showBuilderButton = document.getElementById("showBuilder");
    showBuilderButton.addEventListener("click", showBuilder)

}