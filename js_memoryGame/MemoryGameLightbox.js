
caunrerw=0;
showGameOver=()=>{
  document.body.innerHTML += `
  <div id="light_box" class="light_box">
  <div class="inside_box">
  <h1>good play</h1>
  <button id="light_box button">close</button>
  </div>
  </div>`
  declareEvents();
}
declareEvents = () => {
 
  let close_light_btn = document.querySelector("#light_box button");
  close_light_btn.addEventListener("click", () =>{
      document.querySelector("#light_box").style.display = "none"
    })
    let reset = document.querySelector("#id_reset_btn");
    reset.addEventListener("click", resetGame)  
}

