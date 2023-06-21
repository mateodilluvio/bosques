function setup() {
  createCanvas(512, 512);
  background(60);
  
  LineasVerticales();
  stroke(130, 180); // Color de LineasVerticales2, (gray, alpha).
  LineasVerticales2();
}


function LineasVerticales() {
  let x = 0; // Posición inicial de la línea en el eje x
  while (x <= width) {
    line(x, random(300), x, 512); // Dibuja una línea vertical desde el punto (x, 0) hasta (x, height)
    x += random(10); // Espacio entre líneas
  }
}
function LineasVerticales2() {
  let x = 0; 
  while (x <= width) {
    line(x, random(180), x, 512); 
    x += random(10); 
}
}
function Ramas(){
// quiero dibujar unas "Ramas" similares a las de la obra de Grace C Hertlein, la imagen está en la carpeta
}

function draw() {

}