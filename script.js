let  sum = 0;

function backToNoraml(sum) {
    if(sum) {
        result.value = ''
    }
}

function display(num) {
    backToNoraml(sum)
    document.getElementById('result').value += num;
    sum = 0;
}

function clearAll() {
    backToNoraml(sum)
    result.value = ''
    sum = 0;
}

function back() {
    backToNoraml(sum)
    result.value = result.value.slice(0,-1)
    sum = 0;
}

function equal() {
    try {
        result.value = eval(result.value)
    }

    catch {
        result.value = 'SYNTAX ERROR'
        result.style.color = 'red'
        setTimeout(() => {
            result.value = '';
        },1000)
    }
    sum = 1;
    return sum;
}