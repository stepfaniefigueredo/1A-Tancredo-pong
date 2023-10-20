let xBolinha = 400
let yBolinha = 300
let diametro = 20
let raio = diametro/2;

let velocidadeXbolinha = 9.5;
let velocidadeYbolinha = 9.5;


let xRaquete = 10;
let yRaquete = 200;
let larguraRaquete = 15;
let alturaRaquete = 150;
let velocidadeRaquete = 6;
let colisao = false
let xRaqueteInimigo = 780;
let yRaqueteInimigo = 200;

function setup() {
  createCanvas(800, 600);
}
 


function draw() {
  background(0);
  criarBolinha();
  movimentaBolinha();
  encostaNaBorda();
  criaRaquete(xRaquete, yRaquete);
  criaRaquete(xRaqueteInimigo, yRaqueteInimigo);
  movimentaMinhaRaquete();
  colideRaqueteBolinha();
 
 
}

function criarBolinha () {
  circle(xBolinha, yBolinha, diametro);

}

 function movimentaBolinha (){
   
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;
   
 }

function encostaNaBorda (){
 
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXbolinha *= -1
      }
 
   if(yBolinha + raio > height || yBolinha - raio < 0){
     velocidadeYbolinha *= -1
      }
 
}

function criaRaquete (x, y){
 
  rect(x, y, larguraRaquete, alturaRaquete)
   
}

function movimentaMinhaRaquete () {
 
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= velocidadeRaquete
   
  }
 
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += velocidadeRaquete
   
}
}


function colideRaqueteBolinha() {
 
  colisao = collideRectCircle(xRaquete, yRaquete, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
   if(colisao){
     velocidadeXbolinha *= -1
   }
}