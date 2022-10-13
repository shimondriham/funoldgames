let box_ar = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]
box_ar.sort((a, b) => 0.5 - Math.random());

window.onload = () => {
    createAllCards();
    declareEventsReset();
}

const createAllCards = () => {
    box_ar.forEach((item, i) => {
        let box = new MemoryGameClass("#id_row", item, i);
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
    counter = 0;
    counter2 = 0;
    carda = 0;
    cardai = 0;
    cardb = 0;
    cardbi = 0;
    win = 0;
    // box_ar = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]
    box_ar.sort((a, b) => 0.4 - Math.random());
    createAllCards();
}