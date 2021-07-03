while(true){
    const newLocal = prompt('Do you want to continue: "1 - yes", "anything else - no"', 0);
    if(newLocal == 1){
        let op = prompt('Enter operation + - / % *', '+');
        let num = +prompt('Enter first number',0);
        let num1 = +prompt('Enter second number',0);
        let res = 0;
        if (isNaN(num) || isNaN(num1)){
            alert('Error');
        } else{
            switch (op){
                case '+':
                    res = num + num1;
                    break;
                case '-':
                    res = num - num1;
                    break;
                case '/':
                    res = num / num1;
                    break;
                case '%':
                    res = num % num1;
                    break;
                case '*':
                    res = num * num1;
                    break;
                default:
                    alert('Error');
            }
        }
        alert(`${num}${op}${num1} = ${res}`);
    } else if(newLocal != 1) {
        break;
    }
}