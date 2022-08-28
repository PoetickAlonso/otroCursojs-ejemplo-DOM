const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const pResult = document.querySelector('#result')
const btn = document.querySelector('#btnCalcular');
const form = document.querySelector('form');


form.addEventListener('submit',  sumarInputValues);





function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}




/*console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.innerText = "patito <br> feo"; //convierte todo a texto
h1.innerHTML = "patito <br> feo";
console.log(h1.getAttribute('class'))
/* h1.setAttribute('class', 'rojo') //forma para modificar nuestros atributos de los elementos en html */
/*
h1.classList.add('rojo');


input.value = "456"

const img = document.createElement('img');
img.setAttribute('src', 'https://t1.uc.ltmcdn.com/es/posts/9/0/7/como_comprar_una_moto_por_internet_28709_600.jpg')

*/
/*
console.log(img);


pid.append(img); */
//append y append child sirven para meter contenido despues de un contenido previo// */