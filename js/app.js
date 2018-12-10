let palette1;
let width;
let height;
let pixelD;
let paletteSize;

function preload() {
    img = loadImage("img/monet.jpg");
}

function setup() {
    setCanvasSize();
    background(0);
    pixelD = pixelDensity();
    paletteSize = 8;
    noStroke();
    noLoop();
}

function draw() {
    image(img, 0, 0);
    loadPixels();
    let popularity = new PopularityQuantization(pixels, width, height, pixelD, paletteSize);
    palette1 = popularity.getPalette();
    drawPalettes();
}

function setCanvasSize() {
    width = img.width;
    height = img.height;
    createCanvas(width, height + 40);
}

function drawPalettes() {
    for (let i = 0; i < paletteSize; i++) {
        fill(palette1[i][0], palette1[i][1], palette1[i][2]);
        rect(i * 20, height, 20, 20);
    }
}