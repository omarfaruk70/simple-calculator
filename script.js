function deleteMe(){
    document.getElementById('myresult').value = '';
}
function calculate(newValue){
    document.getElementById("myresult").value += newValue;
}
function myResult(){
    let a = document.getElementById('myresult').value;
    let b = eval(a);
    document.getElementById('myresult').value = b;
}