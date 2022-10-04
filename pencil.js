img = "";

function preload() {
    img = loadImage("pencil.webp");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);

    fill("#FF0000");
    text("Led", 45, 300);
    noFill();
    stroke("#FF0000");
    rect(30, 290, 100, 100);

    fill("#FF0000");
    text("Eraser", 570, 220);
    noFill();
    stroke("#FF0000");
    rect(530, 200, 100, 100);
}

function changeColor() {
    document.getElementById("back_button").style.color = "red";
}

function resetColor() {
    document.getElementById("back_button").style.color = "white";
}

function back() {
    window.location = "index.html";
}