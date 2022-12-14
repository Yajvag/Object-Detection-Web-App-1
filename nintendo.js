img = "";

function preload() {
    img = loadImage("nintendo_switch.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);

    fill("#FF0000");
    text("Screen", 150, 100);
    noFill();
    stroke("#FF0000");
    rect(150, 90, 320, 150);

    fill("#FF0000");
    text("Controller1", 50, 65);
    noFill();
    stroke("#FF0000");
    rect(50, 40, 100, 200);

    fill("#FF0000");
    text("Controller2", 480, 160);
    noFill();
    stroke("#FF0000");
    rect(480, 150, 100, 200);
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