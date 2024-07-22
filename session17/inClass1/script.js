

function compare(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value

    if ( num1 > num2 ) {
        document.getElementById("large").innerText = num1
    }
    else {
        document.getElementById("large").innerText = num2
    }

}