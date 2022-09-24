const blip = new Audio("jungblip.wav");
const snare = new Audio("midsnare.wav");
const spike = new Audio("spike.wav");
const clap = new Audio("worxclap1.wav");

link1.addEventListener('mouseover', () => {
    blip.play();
}) 

link2.addEventListener('mouseover', () => {
    snare.play();
}) 

link3.addEventListener('mouseover', () => {
    spike.play();
}) 

link4.addEventListener('mouseover', () => {
    clap.play();
}) 



