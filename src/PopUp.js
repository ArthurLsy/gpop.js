class PopUp {

    constructor(param) {

        this.param = param;
        this.content = param["content"];
        this.title = param["title"];
        this.isset('width') ? this.setWidth(param["width"]) : this.width = "auto";
        this.setPosition(param["position"]);
        this.backgroundColor = this.isset("backgroundColor") ? param['backgroundColor'] : "#ffffff"; 
        this.buttons = [];
        this.fontSize = this.isset('fontSize') ? param["fontSize"] + "em" : "1.5em";
        this.color = this.isset('color') ? param["color"] : "#000000";
        this.isset('transition') ? this.setTransition(param["transition"]) : this.transition = 0;
        this.isset('button') ? this.setButton(param["button"]) : NaN;
        this.buildPopUp();
    }

    setTransition(transition) {
        if (transition === "fade") {
            this.transition = 300;
        }
    }

    setWidth(width) {
        if (typeof width === 'number') {
            this.width = width + "em";
        } else if (typeof width === 'string') {
            if (width === "full") {
                this.width = "100%";
            } else if (width === "half") {
                this.width = "50%";
            } else if (width === "third") {
                this.width = "33.33%";
            } else if (width === "quarter") {
                this.width = "25%";
            }
        }
    }

    setPosition(position) {
         if (position === "top-left") {
            this.top = "0";
            this.left = "0";
            this.right = "none";
            this.bottom = "none";
         } else if (position === "top-right") {
            this.top = "0";
            this.right = "0";
            this.left = "none";
            this.bottom = "none";
         } else if (position === "bottom-left") {
            this.bottom = "0";
            this.left = "0";
            this.right = "none";
            this.top = "none";
         } else if (position === "bottom-right") {
            this.bottom = "0";
            this.right = "0";
            this.left = "none";
            this.top = "none";
         } else if (position === "center") {
            this.top = "50%";
            this.left = "50%";
            this.transform = "translateX(-50%)";
            this.right = "none";
            this.bottom = "none";
        } else if (position === "top-center") {
            this.top = "0";
            this.left = "50%";
            this.transform = "translateX(-50%)";
            this.right = "none";
            this.bottom = "none";
        } else if (position === "bottom-center") {
            this.bottom = "0";
            this.left = "50%";
            this.transform = "translateX(-50%)";
            this.right = "none";
            this.top = "none";
        } else if (position === "left-center") {
            this.top = "50%";
            this.left = "0";
            this.right = "none";
            this.bottom = "none";
        } else if (position === "right-center") {
            this.top = "50%";
            this.right = "0";
            this.left = "none";
            this.bottom = "none";
        } else {
            this.top = "50%";
            this.left = "50%";
            this.right = "none";
            this.bottom = "none";
        }
    }

    isset(obj) {
        return typeof this.param[obj] !== 'undefined'
    }

    setButton(button) {
        for (let i = 0; i < button.length; i++) {
            const btn = document.createElement('div');
            btn.textContent = button[i]["text"];
            btn.style.display = "block";
            btn.style.cursor = "pointer";
            if (button[i]["aspect"] === "primary") {
                btn.style.backgroundColor = "#f2f1f6";
                btn.style.color = "black";
                btn.style.padding = "1em";
                btn.style.borderRadius = "0.5em";
                btn.style.margin = " 0 5em 0 5em";
                btn.style.fontSize = this.fontSize;
            } else if (button[i]["aspect"] === "secondary") {
                btn.style.color = "#007bff";
                btn.style.padding = "1em";
                btn.style.borderRadius = "0.5em";
                btn.style.margin = " 0 5em 0 5em";
                btn.style.fontSize = this.fontSize;
            }
            btn.addEventListener('click', button[i]["callback"]);
            this.buttons.push(btn);
        }
    }


    buildPopUp() {
        const popup = document.createElement('div');
        popup.style.position = "absolute";
        popup.style.backgroundColor = this.backgroundColor;
        popup.style.padding = "1em";
        popup.style.width = this.width;
        popup.style.height = "auto";
        popup.style.textAlign = "center";
        popup.style.top = this.top;
        popup.style.left = this.left;
        popup.style.right = this.right;
        popup.style.bottom = this.bottom;
        popup.style.color = this.color;
        if (typeof this.transform !== 'undefined') {
            popup.style.transform = this.transform;
        }
        popup.style.borderRadius = "1em";
        popup.style.margin = "1em";


        const closeBtn = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        // closeBtn.setAttributeNS("http://www.w3.org/2000/svg", "xmlns", "http://www.w3.org/2000/svg"); // Remove this line
        closeBtn.setAttributeNS(null, "width", "24");
        closeBtn.setAttributeNS(null, "height", "24");
        closeBtn.setAttributeNS(null, "fill", "currentColor");
        closeBtn.setAttributeNS(null, "class", "bi bi-x");
        closeBtn.setAttributeNS(null, "style", "position: absolute; top: 0; right: 0; padding: 1em; cursor: pointer;");
        closeBtn.setAttributeNS(null, "viewBox", "0 0 16 16");
        const pathCloseBtn = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathCloseBtn.setAttributeNS(null, "d", "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708");
        closeBtn.style.backgroundColor = 'black';
        closeBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'; // Use rgba for background color with specific opacity
        closeBtn.style.opacity = '1'; // Set opacity to 1
        closeBtn.style.borderRadius = '100%';
        closeBtn.style.padding = '0.5em';
        closeBtn.style.margin = '0.5em';
        closeBtn.appendChild(pathCloseBtn);


        closeBtn.addEventListener('click', () => {
            popup.style.transition = "opacity "+ this.transition/1000 +"s";
            popup.style.opacity = "0";
            setTimeout(() => {
                popup.remove();
            }, this.transition); // Adjust the duration of the fade effect (in milliseconds)
        });
    
        
        popup.appendChild(closeBtn);
        
        

        if (this.isset('title')) {
            const title = document.createElement('div');
            title.textContent = this.title;
            title.style.fontWeight = "bold";
            title.style.fontSize = this.fontSize;
            popup.appendChild(title)
        }

        const content = document.createElement('div');
        content.textContent = this.content;
        content.style.fontSize = this.fontSize;
        popup.appendChild(content);

        const buttons = document.createElement('div');

        if (this.buttons.length > 0) {
            for (let i = 0; i < this.buttons.length; i++) {
                buttons.appendChild(this.buttons[i]);
            }
        }
        popup.appendChild(buttons);

        document.body.appendChild(popup);

        if (this.isset('delay')) {
            setTimeout(() => {
                popup.style.transition = "opacity "+ this.transition/1000 +"s";
                popup.style.opacity = "0";
                setTimeout(() => {
                    popup.remove();
                }, this.transition); 
            }, this.param["delay"]);
        }



    }

}


export default PopUp;