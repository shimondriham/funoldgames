lightBox=0;
showGameOver=()=>{
  document.body.innerHTML += `
  <div id="light_box${lightBox}" class="light_box">
  <div class="inside_box">
  <h1>good play</h1>
  <button id="light_box_button${lightBox}">close</button>
  </div>
  </div>`
  declareEvents();
}
declareEvents = () => {
  let close_light_btn = document.querySelector(`#light_box_button${lightBox}`);
  close_light_btn.addEventListener("click", () =>{
      document.querySelector(`#light_box${lightBox}`).style.display = "none";
      lightBox+=1;
    })
    let reset = document.querySelector(`#light_box_button${lightBox}`);
    reset.addEventListener("click", resetGame)  
}

