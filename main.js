// COIN FLIP SIMULATOR
let btn = document.getElementById("btn");
let out = document.getElementById("output");
let dice = document.getElementById("dice-btn");
let outDice = document.getElementById("diceout");
let heads = document.getElementById("heads");
let tails = document.getElementById("tails");
let diceT = document.getElementById("diceTotal");

let numHeads = 0;
let numTails = 0;

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
  outDice.innerHTML = Diceimg1 + Diceimg2;
  diceT.innerHTML = diceval1 + diceval2;
}
