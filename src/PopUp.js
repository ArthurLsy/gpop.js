class PopUp {

    constructor(param) {
        this.param = param;
        this.content = param["content"];
        this.title = param["title"];
        this.backgroundColor = this.isset("backGroundColor") ? param['backGroundColor'] : "darkorchid"; 
        this.buildPopUp();
    }

    isset(obj) {
        return typeof this.param[obj] !== 'undefined'
    }

    buildPopUp() {
        const popup = document.createElement('div');
        popup.style.position = "absolute";
        popup.style.backgroundColor = this.backgroundColor;
        popup.style.padding = "1em";
        popup.style.width = "auto";
        popup.style.height = "auto";
        popup.style.textAlign = "center";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.borderRadius = "1em";


        const closeBtn = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        closeBtn.setAttributeNS("http://www.w3.org/2000/svg", "xmlns", "http://www.w3.org/2000/svg"); // Utilisation de l'espace de noms correct
        closeBtn.setAttributeNS(null, "width", "16");
        closeBtn.setAttributeNS(null, "height", "16");
        closeBtn.setAttributeNS(null, "fill", "currentColor");
        closeBtn.setAttributeNS(null, "class", "bi bi-x");
        closeBtn.setAttributeNS(null, "viewBox", "0 0 16 16");
        
        const pathCloseBtn = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathCloseBtn.setAttributeNS(null, "d", "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708");
        closeBtn.appendChild(pathCloseBtn);
        
        popup.appendChild(closeBtn);
        
        

        if (this.isset('title')) {
            const title = document.createElement('div');
            title.textContent = this.title;
            title.style.fontWeight = "bold";
            title.style.fontSize = "2em";
            popup.appendChild(title)
        }

        const content = document.createElement('div');
        content.textContent = this.content;
        popup.appendChild(content);

        document.body.appendChild(popup);


    }
}

export {PopUp};