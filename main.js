// COIN FLIP SIMULATOR
let btn = document.getElementById("btn");
let out = document.getElementById("output");
let dice = document.getElementById("dice-btn");
let outDice = document.getElementById("diceout");
let heads = document.getElementById("heads");
let tails = document.getElementById("tails");
let diceT = document.getElementById("diceTotal");
let d2 = document.getElementById("2");
let d3 = document.getElementById("3");
let d4 = document.getElementById("4");
let d5 = document.getElementById("5");
let d6 = document.getElementById("6");
let d7 = document.getElementById("7");
let d8 = document.getElementById("8");
let d9 = document.getElementById("9");
let d10 = document.getElementById("10");
let d11 = document.getElementById("11");
let d12 = document.getElementById("12");

let numHeads = 0;
let numTails = 0;
let d2v = 0;
let d3v = 0;
let d4v = 0;
let d5v = 0;
let d6v = 0;
let d7v = 0;
let d8v = 0;
let d9v = 0;
let d10v = 0;
let d11v = 0;
let d12v = 0;

btn.addEventListener("click", runcoin);
dice.addEventListener("click", rundice);

function runcoin() {
  let rand = Math.round(Math.random());
  if (rand == 0) {
    out.innerHTML = "<img src='img/heads.png'><br /> Heads";
    numHeads++;
  } else {
    out.innerHTML = "<img src='img/tails.png'><br /> Tails";
    numTails++;
  }
  heads.innerHTML = numHeads;
  tails.innerHTML = numTails;
}
function rundice() {
  let randdice1 = Math.floor(Math.random() * 6 + 1);
  let randdice2 = Math.floor(Math.random() * 6 + 1);
  if (randdice1 == 6) {
    Diceimg1 = "<img src='img/6.png'>";
    diceval1 = 6;
  } else if (randdice1 == 5) {
    Diceimg1 = "<img src='img/5.png'>";
    diceval1 = 5;
  } else if (randdice1 == 4) {
    Diceimg1 = "<img src='img/4.png'>";
    diceval1 = 4;
  } else if (randdice1 == 3) {
    Diceimg1 = "<img src='img/3.png'>";
    diceval1 = 3;
  } else if (randdice1 == 2) {
    Diceimg1 = "<img src='img/2.png'>";
    diceval1 = 2;
  } else {
    Diceimg1 = "<img src='img/1.png'>";
    diceval1 = 1;
  }

  if (randdice2 == 6) {
    Diceimg2 = "<img src='img/6.png'>";
    diceval2 = 6;
  } else if (randdice2 == 5) {
    Diceimg2 = "<img src='img/5.png'>";
    diceval2 = 5;
  } else if (randdice2 == 4) {
    Diceimg2 = "<img src='img/4.png'>";
    diceval2 = 4;
  } else if (randdice2 == 3) {
    Diceimg2 = "<img src='img/3.png'>";
    diceval2 = 3;
  } else if (randdice2 == 2) {
    Diceimg2 = "<img src='img/2.png'>";
    diceval2 = 2;
  } else {
    Diceimg2 = "<img src='img/1.png'>";
    diceval2 = 1;
  }
  let dicenum = diceval1 + diceval2;
  outDice.innerHTML = Diceimg1 + Diceimg2;
  diceT.innerHTML = dicenum;
  if (dicenum == 2) {
    d2v++;
    d2.innerHTML = d2v;
  } else if (dicenum == 3) {
    d3v++;
    d3.innerHTML = d3v;
  } else if (dicenum == 4) {
    d4v++;
    d4.innerHTML = d4v;
  } else if (dicenum == 5) {
    d5v++;
    d5.innerHTML = d5v;
  } else if (dicenum == 6) {
    d6v++;
    d6.innerHTML = d6v;
  } else if (dicenum == 7) {
    d7v++;
    d7.innerHTML = d7v;
    console.log(dicenum);
  } else if (dicenum == 8) {
    d8v++;
    d8.innerHTML = d8v;
  } else if (dicenum == 9) {
    d9v++;
    d9.innerHTML = d9v;
  } else if (dicenum == 10) {
    d10v++;
    d10.innerHTML = d10v;
  } else if (dicenum == 11) {
    d11v++;
    d11.innerHTML = d11v;
  } else {
    d12v++;
    d12.innerHTML = d12v;
  }
}
