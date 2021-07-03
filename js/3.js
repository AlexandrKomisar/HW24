const num = +prompt('Enter a number',0);
let arr = new Array();

if (isNaN(num) || num < 0){
  alert('Error');
} else {
  for(let i = 0; i <= num; i++){
    if (num % i == 0){
      arr.push(i);
    }
  }
  alert(`All divisors for ${num} is ${arr}`);
}