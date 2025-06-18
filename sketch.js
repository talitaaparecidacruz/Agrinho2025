function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let caminhaoX = -200;

let predios = [];

function setup() {

  createCanvas(800, 400);

  // Gera prédios com altura fixa e janelas

  for (let i = width / 2; i < width; i += 80) {

    let altura = random(100, 200);

    let janelas = gerarJanelas(i, 300 - altura, 60, altura);

    predios.push({ x: i, h: altura, janelas: janelas });

  }

}

function draw() {

  background(220);

  drawCampo();

  drawCidade();

  // Define Y do caminhão para ficar no meio da estrada ou rua, conforme lado

  let yCaminhao = caminhaoX < width / 2 ? 350 : 350;

  drawCaminhao(caminhaoX, yCaminhao, caminhaoX > width / 2);

  caminhaoX += 2;

  if (caminhaoX > width + 100) {

    caminhaoX = -200;

  }

}

function drawCampo() {

  noStroke();

  fill(135, 206, 235); // Céu

  rect(0, 0, width / 2, height);

  fill(255, 204, 0); // Sol

  ellipse(100, 80, 80, 80);

  fill(34, 139, 34); // Grama

  rect(0, 300, width / 2, 100);

  fill(139, 69, 19); // Estrada de terra

  rect(0, 320, width / 2, 60);

  // Faixas brancas na estrada de terra (campo)

  stroke(255);

  strokeWeight(4);

  for (let x = 10; x < width / 2; x += 40) {

    line(x, 350, x + 20, 350);

  }

  noStroke();

  for (let i = 50; i < width / 2; i += 100) {

    drawArvore(i, 250);

  }

}

function drawCidade() {

  noStroke();

  fill(25, 25, 112); // Céu noturno

  rect(width / 2, 0, width / 2, height);

  fill(255, 255, 224); // Lua

  ellipse(width - 100, 80, 60, 60);

  fill(50); // Rua

  rect(width / 2, 320, width / 2, 60);

  // Faixas brancas no meio da rua da cidade

  stroke(255);

  strokeWeight(4);

  for (let x = width / 2 + 10; x < width; x += 40) {

    line(x, 350, x + 20, 350);

  }

  noStroke();

  for (let b of predios) {

    fill(60);

    rect(b.x, 300 - b.h, 60, b.h);

    // Janelas

    fill(255, 255, 100);

    for (let j of b.janelas) {

      rect(j.x, j.y, j.w, j.h);

    }

  }

}

function drawArvore(x, y) {

  fill(139, 69, 19);

  rect(x + 10, y, 20, 50);

  fill(34, 139, 34);

  ellipse(x + 20, y, 60, 60);

}

function drawCaminhao(x, y, comFarol) {

  fill(200, 0, 0);

  rect(x, y - 30, 100, 30);

  rect(x + 80, y - 50, 40, 50);

  fill(0);

  ellipse(x + 20, y, 20, 20);

  ellipse(x + 90, y, 20, 20);

  if (comFarol) {

    fill(255, 255, 150, 180);

    triangle(x + 120, y - 20, x + 170, y - 40, x + 170, y);

  }

}

// Gera janelas em fileiras verticais e horizontais

function gerarJanelas(x, y, w, h) {

  let janelas = [];

  let cols = 3;

  let rows = int(h / 30);

  let margemX = 10;

  let margemY = 10;

  let janelaW = 12;

  let janelaH = 16;

  for (let i = 0; i < cols; i++) {

    for (let j = 0; j < rows; j++) {

      let jx = x + margemX + i * (janelaW + 8);

      let jy = y + margemY + j * (janelaH + 10);

      if (jy + janelaH < y + h - 10) {

        janelas.push({ x: jx, y: jy, w: janelaW, h: janelaH });

      }

    }

  }

  return janelas;

}