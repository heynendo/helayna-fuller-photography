const dropdownElement = document.getElementById("dropdown");
const hamburgerIcon = document.getElementById("hamburger-icon");

hamburgerIcon.addEventListener("click", function(e){
    if (dropdownElement.classList.contains("show")){
        dropdownElement.classList.remove("show");
    } else{
        dropdownElement.classList.add("show");
    }
})