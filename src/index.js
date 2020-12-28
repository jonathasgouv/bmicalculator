const electron = require('electron')

const altura, peso, nome, imc

myLink = document.getElementById('btn')

function imc() {
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value
    let nome = document.getElementById('nome').value
    let imc = peso/((altura/100)*(altura/100))

    console.log('APERTOU');
});