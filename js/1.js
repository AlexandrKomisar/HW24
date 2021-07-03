const start = +prompt('Enter start of range');
const end = +prompt('Enter end of range');
let sum = 0;
if (start % 1 != 0 || end % 1 != 0){
  alert('Error');
  console.error('Error');
} else {
  for(let i = start; i <= end; i++){
    sum += i;
  }
  alert(`The sum of all number from ${start} to ${end} is ${sum}`);
}
