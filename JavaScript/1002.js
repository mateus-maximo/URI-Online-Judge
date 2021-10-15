var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var PI = 3.14159
var raio = parseFloat(input)
var area = PI * raio * raio

console.log(`A=${area.toFixed(4)}`)