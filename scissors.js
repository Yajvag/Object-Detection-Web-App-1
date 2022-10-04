img = "";

function preload() {
    img = loadImage("scissors.webp");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);

    fill("#FF0000");
    text("Grip", 260, 75);
    noFill();
    stroke("#FF0000");
    rect(250, 30, 350, 300);

    fill("#FF0000");
    text("Blade", 70, 290);
    noFill();
    stroke("#FF0000");
    rect(50, 250, 300, 100);
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