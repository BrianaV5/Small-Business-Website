//step 5
let input = document.getElementById("ctaInput");
let button = document.getElementById("ctaButton");
let cta = document.getElementById("cta");

button.addEventListener("click", function(){
    cta.textContent = input.value;
});
