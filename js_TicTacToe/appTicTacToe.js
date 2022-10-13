// let box_ar = new Array(9);
let box_ar = [null,null,null,null,null,null,null,null,null];
let playerturn = 1;
let counter = 0;
let lightBox =0;
window.onload = () => {
    createAllBox();  
    declareEventsReset();
    declareEvents();
}

createAllBox = () => {
    box_ar.forEach((item, i) => {
        let box = new TicTacToeClass("#id_row", "./ticTacToe_images/o.png", "./ticTacToe_images/x.png", i,item);
        box.render();
    })
}

declareEventsReset = () => {
    let reset_btn = document.querySelector("#id_reset_btn");
    reset_btn.addEventListener("click", ()=>{
        resetGame();
    })   
}

resetGame = () => {   
    let id_row = document.querySelector("#id_row");
    id_row.innerHTML = "";
    playerturn = 1;
    counter = 0;
    box_ar = [null,null,null,null,null,null,null,null,null];
    createAllBox();
    lightBox+=1;
  }
  