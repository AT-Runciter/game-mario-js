const mario = document.getElementById("mario");
const pipeline = document.getElementById("pipeline");

document.addEventListener("keydown", function(event) {
    jump();
})

function jump() {
    // mario.classList.add("jump")
    if (mario.classList != "jump") {
        mario.classList.add("jump")
    }
    setTimeout( function () { // візівает функцию 1 раз через определенній интервал времени
        mario.classList.remove("jump")
    }, 500)
}

let isAlive = setInterval(function () { // регулярній візов функии через определнній интервал времени
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
    let pipelineLeft = parseInt(window.getComputedStyle(pipeline).getPropertyValue("left"));

    if (pipelineLeft < 30 && pipelineLeft > 0 && marioTop >= 140) {
        alert("GAME OVER!");
    }
}, 10)



