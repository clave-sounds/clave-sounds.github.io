
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

let presum1 = "";
let presum2 = "";

let sumtext = "";

let whichPart = 1;

let currentNumber = 

clear.addEventListener('click', () => {
    clank.play();
    whichPart = 1
    sumtext = ""
    presum1 = ""
    presum2 = ""
    update();
})
times.addEventListener('click', () => {
    trump2.play();
    modifier = "*";
    whichPart = 2;
    sumtext += "*";
    update();
})
divide.addEventListener('click', () => {
    trump1.play();
    modifier = "/";
    whichPart = 2;
    sumtext += "/";
    update();
})
plus.addEventListener('click', () => {
    snare.play();
    modifier = "+";
    whichPart = 2;
    sumtext += "+";
    update();
})
minus.addEventListener('click', () => {
    gitStab.play();
    modifier = "-";
    whichPart = 2;
    sumtext += "-";
    update();
})
one.addEventListener('click', () => {
    currentNumber = "1"
    hit.play();
    sumtext += currentNumber;
    update();
    if (whichPart === 1) {
        presum1 += currentNumber;
        
    }
    else if (whichPart === 2) {
        presum2 += currentNumber
        update();
    }
})
two.addEventListener('click', () => {
    currentNumber = "2"
    jungBlip.play();
    sumtext += currentNumber;
    update();
    if (whichPart === 1) {
        presum1 += currentNumber;
        
    }
    else if (whichPart === 2) {
        presum2 += currentNumber
        update();
    }
})
three.addEventListener('click', () => {
    currentNumber = "3"
    midSnare.play();
    sumtext += currentNumber;
    update();
    if (whichPart === 1) {
        presum1 += currentNumber;
        
    }
    else if (whichPart === 2) {
        presum2 += currentNumber
        update();
    }
})
four.addEventListener('click', () => {
    currentNumber = "4"
    moStab1.play();
    sumtext += currentNumber;
    update();
    if (whichPart === 1) {
        presum1 += currentNumber;
        
    }
    else if (whichPart === 2) {
        presum2 += currentNumber
        update();
    }
})
five.addEventListener('click', () => {
    currentNumber = "5"
    moStab2.play();
    sumtext += currentNumber;
    update();
    if (whichPart === 1) {
        presum1 += currentNumber;
        
    }
    else if (whichPart === 2) {
        presum2 += currentNumber
        update();
    }
})
six.addEventListener('click', () => {
    currentNumber = "6"
    saxRoll.play();
    sumtext += currentNumber;
    update();
    if (whichPart === 1) {
        presum1 += currentNumber;
        
    }
    else if (whichPart === 2) {
        presum2 += currentNumber
        update();
    }
})
seven.addEventListener('click', () => {
    currentNumber = "7"
    shortOrch.play();
    sumtext += currentNumber;
    update();
    if (whichPart === 1) {
        presum1 += currentNumber;
        
    }
    else if (whichPart === 2) {
        presum2 += currentNumber
        update();
    }
})
eight.addEventListener('click', () => {
    currentNumber = "8"
    spike.play();
    sumtext += currentNumber;
    update();
    if (whichPart === 1) {
        presum1 += currentNumber;
        
    }
    else if (whichPart === 2) {
        presum2 += currentNumber
        update();
    }
})
nine.addEventListener('click', () => {
    currentNumber = "9"
    stabba.play();
    sumtext += currentNumber;
    update();
    if (whichPart === 1) {
        presum1 += currentNumber;
        
    }
    else if (whichPart === 2) {
        presum2 += currentNumber
        update();
    }
})

nought.addEventListener('click', () => {
    currentNumber = "0"
    worxclap1.play();
    sumtext += currentNumber;
    update();
    if (whichPart === 1) {
        presum1 += currentNumber;
        
    }
    else if (whichPart === 2) {
        presum2 += currentNumber
        update();
    }
})

equals.addEventListener('click', () => {
    vocalish.play();
    display.textContent = modifierChange();
    sumtext = modifierChange();
    presum1 = modifierChange();
    presum2 = "";
    
})

function modifierChange() {
    if (modifier==="*") {
        return Number(presum1) * Number(presum2);
    }
    else if (modifier==="/") {
        return Number(presum1) / Number(presum2);
    }
    else if (modifier==="+") {
        return Number(presum1) + Number(presum2);
    }
    else if (modifier==="-") {
        return Number(presum1) - Number(presum2);
    }
}
// display.textContent = 'STOP'

//push into array (push is a function, thus it needs brackets)
// shoppingList.push(["apples", 7]);
// console.log("whole array now has apples " + shoppingList); // will output entire array w new elements
// unshift is the same but adds to the beginning.


click2.play();



function update() {
    display.textContent = sumtext;
}

