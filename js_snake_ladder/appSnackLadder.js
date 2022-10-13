let box_ar = [];
for (var i = 1; i <= 100; i++) {
    box_ar.push(null);
}

let positionA = 90;
let rowPositionA = 9;
let positionB = 90;
let rowPositionB = 9;
let WhoIsPlaying = 1;
window.onload = () => {
    createAllBox1();
    declareEventsRoll();
    declareEventsReset();
}

const createAllBox1 = () => {
    box_ar.forEach((item, i) => {
        let box = new Snake("#id_row", i, item);
        box.render();
    })
    document.querySelector(`#id_box90`).innerHTML += `<div><img class="player" src="./images_snake_ladder/player1.gif"></img></div>`;
    document.querySelector(`#id_box90`).innerHTML += `<div><img class="player" src="./images_snake_ladder/player2.gif"></img></div>`;
}

const createAllBox = () => {
    box_ar.forEach((item, i) => {
        let box = new Snake("#id_row", i, item);
        box.render();
    })
    document.querySelector(`#id_box${positionA}`).innerHTML += `<div><img class="player" src="./images_snake_ladder/player1.gif"></img></div>`;
    document.querySelector(`#id_box${positionB}`).innerHTML += `<div><img class="player" src="./images_snake_ladder/player2.gif"></img></div>`;
}

const declareEventsRoll = () => {
    let roll_btn = document.querySelector("#roll_btn");
    roll_btn.addEventListener("click", () => {
        let rnd1 = Math.random() * 6;
        let rnd = Math.ceil(rnd1);

        if (WhoIsPlaying == 1) {
            document.querySelector("#id_roll1").innerHTML = rnd;
            movPositionA(rnd);
            WhoIsPlaying = 2;
        } else {
            document.querySelector("#id_roll2").innerHTML = rnd;
            movPositionB(rnd);
            WhoIsPlaying = 1;
        }
        document.querySelector("#id_img").src = `images_dice/dice${rnd}.jpg`;
    })
}

const declareEventsReset = () => {
    let reset_btn = document.querySelector("#id_reset_btn");
    reset_btn.addEventListener("click", () => {
        positionA = 90;
        rowPositionA = 9;
        positionB = 90;
        rowPositionB = 9;
        document.querySelector("#id_roll1").innerHTML = 0;
        document.querySelector("#id_roll2").innerHTML = 0;
        document.querySelector(`#id_row`).innerHTML = "";
        createAllBox1();

    })
}