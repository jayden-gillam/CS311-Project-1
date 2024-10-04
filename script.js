function shirtCreate() {
    if (document.getElementById("relative")) {
        document.getElementById("relative").remove();
    }
    var mainDiv = document.getElementById("design")
    var relativeDiv = document.createElement("div");
    var absoluteDiv = document.createElement("div");
    var textDiv = document.createElement("div")
    relativeDiv.setAttribute("id", "relative");
    absoluteDiv.setAttribute("id", "absolute");
    textDiv.setAttribute("id", "text");
    mainDiv.appendChild(relativeDiv);

    const dropdown = document.getElementById("color");
    let color = dropdown.value;
    let shirtColorImg = document.createElement("img");
    shirtColorImg.src = color + "shirt.png"
    relativeDiv.appendChild(shirtColorImg);
    relativeDiv.appendChild(absoluteDiv)

    // used ChatGPT to figure out displaying images from local files
    const fileInput = document.getElementById("graphic");
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            let graphicImg = document.createElement("img");
            graphicImg.src = e.target.result;
            // used https://stackoverflow.com/questions/1297449/change-image-size-with-javascript
            graphicImg.height = 100
            graphicImg.width = 100
            absoluteDiv.appendChild(graphicImg);
            absoluteDiv.appendChild(textDiv)
        };
        reader.readAsDataURL(file);
    }

    const textfield = document.getElementById("text");
    const dropdown2 = document.getElementById("textColor");
    let text = textfield.value;
    let textColor = dropdown2.value
    textDiv.innerHTML = text;
    textDiv.style.color = textColor
    absoluteDiv.appendChild(textDiv);
}
