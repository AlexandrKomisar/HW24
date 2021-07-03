let count = 0;
let arr = new Array();
for (let i = 0; i <= 10; i++){
    arr.push(prompt('Enter a number', 0));
    if (arr[i] >= 0){
        count++;
    }
    if (isNaN(arr[i])){
        alert('Error');
        break;
    }
}
alert(`You have entered ${count} numbers that is positive`);