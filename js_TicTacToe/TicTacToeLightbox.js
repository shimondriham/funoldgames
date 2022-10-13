
showWinO=()=>{
  document.body.innerHTML += `
  <div id="light_box${lightBox}" class="light_box">
  <div class="inside_box">
  <h1>player 2 win</h1>
  <button id="light_box button">close</button>
  </div>
  </div>`

  declareEvents();
}
showWinX=()=>{
  document.body.innerHTML += `
  <div id="light_box${lightBox}" class="light_box">
  <div class="inside_box">
  <h1>player 1 win</h1>
  <button id="light_box button">close</button>
  </div>
  </div>`
  declareEvents();
}
showGameOver=()=>{
  document.body.innerHTML += `
  <div id="light_box${lightBox}" class="light_box">
  <div class="inside_box">
  <h1>game over</h1>
  <button id="id_reset_btn">close</button>
  </div>
  </div>`
  declareEvents();
}
declareEvents = () => {
  let close_light_btn = document.querySelector(`#light_box${lightBox} button`);
  close_light_btn.addEventListener("click", () =>{
      document.querySelector(`#light_box${lightBox}`).style.display = "none"
    })
    let reset = document.querySelector("#id_reset_btn");
    reset.addEventListener("click", resetGame)   
}






