for(let i = 1; i < 10; i++){
    document.write('<div style="float: left; width: 100px; margin-bottom: 10px">');
    for(let j = 1; j < 10; j++){
        document.write(i + '*' + j + '=' + (i * j) + '<br>');
    }
    document.write('</div>');
}