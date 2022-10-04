img = "";

function preload() {
    img = loadImage("Mclaren.webp");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);

    fill("#FF0000");
    text("Car", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 550, 350);

    fill("#FF0000");
    text("Light", 270, 220);
    noFill();
    stroke("#FF0000");
    rect(260, 200, 100, 100);
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