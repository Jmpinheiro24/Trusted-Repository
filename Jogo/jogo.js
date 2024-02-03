let dino = document.getElementById("dino");


window.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        jump();
    }
});
function jump() {
    dino.classList.add("jump");
    setTimeout ( () => {
        dino.classList.remove("jump");
    }, 2000)  
    
    }
