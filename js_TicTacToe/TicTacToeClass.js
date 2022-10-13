class TicTacToeClass {
   constructor(_parent, _imag_o, _imag_x, _id) {
      this.parent = _parent;
      this.o_image = _imag_o;
      this.x_image = _imag_x;
      this.id = _id;
      this.figure =_id;
      this.beenClicke = false;
   }
   render() {
      let div = document.createElement("div");
      div.className = "box";
      document.querySelector(this.parent).append(div);
      div.innerHTML += `<img src="" data-img class="" alt="" width="100">`
      let boxImg = div.querySelector("img");
      let beenClicke = this.beenClicke;
      let figure = this.figure;
      div.addEventListener("click", () => {
         if (beenClicke == false) {
            if (playerturn == 1) {
               boxImg.src = this.x_image;
               playerturn = 2;
               figure="x";
            } else {
               boxImg.src = this.o_image;
               playerturn = 1;               
               figure="o";   
            }
            box_ar[this.id] = figure;
            beenClicke = true;
            counter++;
            // gameover();    
               checkWin();    
         }  
      })
   }
}