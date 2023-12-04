/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
let result;
const z = 0;

if(n<0 || n>10000){
    result = 0;
}
if (n === 0) {
    result = 0
} else {

    inputs.sort((a, b) => {
        return Math.abs(z - a) - (Math.abs(z - b))
    });
    if ('-' + inputs[1] == inputs[0]) {
        result = inputs[1]
    } else {
        result = inputs[0]
    }
}

console.log(result);
