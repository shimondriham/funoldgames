let counter = 0;
let counter2 = 0;
let carda = 0;
let cardai = 0;
let cardb = 0;
let cardbi = 0;
let win = 0;
let waitOn = true;

class MemoryGameClass {
    constructor(_parent, _id, i) {
        this.parent = _parent;
        this.id = _id;
        this.i = i;
        // this.memoryGameArray = memoryGameArray;
    }

    render() {
        let div = document.createElement("div");
        div.className = "box";
        document.querySelector(this.parent).append(div);
        div.innerHTML = `
        <div id="id_flip${this.i}" class="a flip"><img src="MemoryGame_images/aaa.jpg" alt=""></div>
        <img id="id${this.i}" src="MemoryGame_images/pic${this.id}.jpg" alt="">
       `
        let div_flip = div.querySelector("div");
        div_flip.addEventListener("click", () => {
            if (div_flip.className == "a flip" && waitOn) {
                div_flip.style.display= "none";
                div_flip.className = "b flip";
                counter += 1;
                counter2 += 1;
                if (counter == 1) {
                    carda = this.id;
                    cardai = this.i;
                }
                if (counter == 2) {
                    waitOn= false;
                    cardb = this.id;
                    cardbi = this.i;
                    counter = 0;
                    if (carda == cardb) {
                        waitOn=true;
                        win += 1;
                    } else {
                        setTimeout(() => {  
                            document.querySelector(`#id_flip${cardai}`).style.display= "block";
                            document.querySelector(`#id_flip${cardai}`).className = "a flip";
                            document.querySelector(`#id_flip${cardbi}`).style.display= "block";
                            document.querySelector(`#id_flip${cardbi}`).className = "a flip";
                            counter2 -= 2;
                            waitOn=true;
                         }, 500);
                    }
                    carda = 0;
                    cardb = 0;
                }
                if (counter2 == 16) {
                    showGameOver();
                }
            }
        })

    }
}