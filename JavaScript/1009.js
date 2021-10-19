var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift()
var salarioFixo = parseFloat(lines.shift())
var totalDeVendas = parseFloat(lines.shift())

var salarioTotal = salarioFixo + (totalDeVendas * 0.15)

console.log(`TOTAL = R$ ${salarioTotal.toFixed(2)}`)