const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const p = document.querySelector('#result')
const form = document.querySelector("#form")

form.addEventListener('submit', sumarInputValue);



function sumarInputValue(event){
    console.log({event});
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value)
    p.innerHTML = ('El resultado es: ' + sumaInputs)
}

