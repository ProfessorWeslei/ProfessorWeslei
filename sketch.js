let mensagem = "Hello, Word!"
function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(random(0,255),random(0,255),random(0,255));
  textSize(50)
  text (mensagem,90,200);
}