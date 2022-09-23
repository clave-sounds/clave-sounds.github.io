
const click1 = new Audio("./click1.wav");
const click2 = new Audio("./click2.wav");
const clank = new Audio("./clank.wav");
const trump2 = new Audio("./clasic_trumpet2.wav");
const trump1 = new Audio("./classic trumpet.wav");
const snare = new Audio("./EA8726_Sd_House.wav")
const gitStab = new Audio("./guitar stab.wav");
const hit = new Audio("./hit.wav");
const jungBlip = new Audio("./jungblip.wav");
const midSnare = new Audio("./midsnare.wav");
const moStab1 = new Audio("./motown stab1.wav");
const moStab2 = new Audio("./motown stab2.wav")
const saxRoll = new Audio("./sax roll.wav");
const shortOrch = new Audio("./short orchestra stab.wav");
const spike = new Audio("./spike.wav");
const stabba = new Audio("./stabba.wav");
const vocalish = new Audio("./vocalish stab.wav");
const worxclap1 = new Audio("./worxclap1.wav");
const worxclap3 = new Audio("./worxclap3.wav");



let sumtext = "";


// event listeners for the modifiers

clear.addEventListener('click', () => {
    clank.play();
    sumtext = ""
    update();
})
times.addEventListener('click', () => {
    trump2.play();
    sumtext += "*";
    update();
})
divide.addEventListener('click', () => {
    trump1.play();
    sumtext += "/";
    update();
})
plus.addEventListener('click', () => {
    snare.play();
    sumtext += "+";
    update();
})
minus.addEventListener('click', () => {
    gitStab.play();
    sumtext += "-";
    update();
})

//event listeners for the numbers

one.addEventListener('click', () => {
    hit.play();
    sumtext += "1";
    update();
})
two.addEventListener('click', () => {
    jungBlip.play();
    sumtext += "2";
    update();
})
three.addEventListener('click', () => {
    midSnare.play();
    sumtext += "3";
    update();
})
four.addEventListener('click', () => {
    moStab1.play();
    sumtext += "4";
    update();
})
five.addEventListener('click', () => {
    moStab2.play();
    sumtext += "5";
    update();
})
six.addEventListener('click', () => {
    saxRoll.play();
    sumtext += "6";
    update();
})
seven.addEventListener('click', () => {
    shortOrch.play();
    sumtext += "7";
    update();
})
eight.addEventListener('click', () => {
    spike.play();
    sumtext += "8";
    update();
})
nine.addEventListener('click', () => {
    stabba.play();
    sumtext += "9";
    update();
})

nought.addEventListener('click', () => {
    worxclap1.play();
    sumtext += "0";
    update();
})

// Complete the sum

equals.addEventListener('click', () => {
    vocalish.play();
    sumtext = eval(sumtext);
    update();
    
})

click2.play();

function update() {
    display.textContent = sumtext;
}

