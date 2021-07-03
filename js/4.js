const num = prompt('Enter a number',0);
if(isNaN(num)){
    alert('Error');
} else {
    const num1 =  num.length;
    alert(`num has a ${num1} digits`);
}