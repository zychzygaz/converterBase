const base10 = document.getElementById('b10');
const binary = document.getElementById('binary')
const hex = document.getElementById('hex')




base10.addEventListener('input', function(){
    const number = parseInt(base10.value)
    // convert to binary
    let resultBi = String(number.toString(2));
    if (resultBi == "NaN"){
        resultBi = ""
    }
    binary.innerText = resultBi
    console.log(resultBi);
    
    // convert to hexadecimal
    let resultHex = String(number.toString(16))
    if (resultHex == "NaN"){
        resultHex = ""
    }
   
    hex.innerText = resultHex;
    // hex.value = resultHex
    

})





