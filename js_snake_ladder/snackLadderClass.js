
class Snake {
    constructor(_parent, _id, snakeArray) {
        this.parent = _parent;
        this.id = _id;
        //    this.figure =_id;
        this.beenClicke = false;
        // this.snakeArray = snakeArray;
    }
    render() {
        let div = document.createElement("div");
        div.className = "box";
        // let background= 99-this.id;
        document.querySelector(this.parent).append(div);
        // div.innerHTML += `<div>${this.id}</div>`;
        div.innerHTML += `<div class="id_box" id="id_box${this.id}"></div>`;
        div.style.backgroundImage = `url("./images_snake_ladder/${this.id}.jpg")`;
    }
}