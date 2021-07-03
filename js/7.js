const num = prompt('Enter a number', 0);
const sliceNum = prompt('Enter a shift number',0);

if(isNaN(num) || isNaN(sliceNum)){
    alert('Error');
} else {
    alert(`Result number is ${num.slice(sliceNum) + num.slice(0, sliceNum)}`);
}
