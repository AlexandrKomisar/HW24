const n = 0;
const m =100;
let start = n;
let end = m;

while (true){
    let num = Math.floor((start + end) / 2);
    let answr = prompt(num + ' Is it your number ? - y (yes), - b (biger), -  l (lower)');
    if (answr == 'y'){
        alert('I guess, cool!!!');
        break;
    }
    if (answr == 'l'){
        end = num - 1;
    }
    if (answr == 'b'){
        start = num + 1;
    }
}