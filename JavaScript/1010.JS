var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var infoItem1 = lines.shift().split(" ")
var infoItem2 = lines.shift().split(" ")

var codigoPeca1 = parseInt(infoItem1.shift())
var numeroPeca1 = parseInt(infoItem1.shift())
var valorUnitarioPeca1 = parseFloat(infoItem1.shift())

var codigoPeca2 = parseInt(infoItem2.shift())
var numeroPeca2 = parseInt(infoItem2.shift())
var valorUnitarioPeca2 = parseFloat(infoItem2.shift())

var total = (numeroPeca1 * valorUnitarioPeca1) + (numeroPeca2 * valorUnitarioPeca2)

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)