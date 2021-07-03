const num1 = +prompt('Enter first number',0);
const num2 = +prompt('Enter second number',0);
const minNum = Math.min(num1, num2);
if(isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0){
  alert('Error');
} else {
  for(let i = minNum; i > 0; i--){
    if(num1 % i == 0 && num2 % 2 == 0){
      alert(`${i} is greatest common divisor`);
      break;
    }
  }
}
