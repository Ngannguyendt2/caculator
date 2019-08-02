function save(number) {
    document.getElementById('Result').value += number;
}

function caculator() {
    let output = document.getElementById('Result').value;
    result = eval(output);
    document.getElementById('Result').value = result;
}
function remove() {
    let clear='';
    document.getElementById('Result').value= clear;

}