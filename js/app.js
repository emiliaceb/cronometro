// Realizar una web con un cronómetro, que tenga las opciones de iniciar, 
// reset (volver el cronómetro a 0) y pausar.
let tiempo = 0, intervalo = 0;
let bandera = false; 
const cronometro = document.getElementById('cronometro');
let minutos= 0;
let segundos = 0;
let milisegundos=0;

const iniciarCronometro = (e) =>{
    if (bandera === false){
        intervalo = setInterval( () =>{
            milisegundos ++;
            if (milisegundos === 99) {
                segundos++;
                milisegundos = 0;
            }
            if (segundos === 60) {
                minutos++;
                segundos = 0;
            }
            let minutos2digitos = minutos < 10 ? `0${minutos}` : minutos;
            let segundos2digitos = segundos < 10 ? `0${segundos}` : segundos;
            let milisegundos2digitos = milisegundos < 10 ? `0${milisegundos}` : milisegundos;

            cronometro.innerHTML = `${minutos2digitos}:${segundos2digitos},${milisegundos2digitos}`
        },10);
        bandera = true;
        boton[1].innerHTML= 'stop'
        boton[1].className= 'bg-danger'
    }
    else{
        bandera = false;
        clearInterval(intervalo);
        boton[1].innerHTML='Iniciar'
        boton[1].className='bg-success'
        
    }
    
    
}

const reiniciarCronometro = (e) => {
 bandera = false;
 minutos=0;
 segundos=0;
 milisegundos=0;
 cronometro.innerHTML= `00:00,00`;
 clearInterval(intervalo)
}

const boton = document.querySelectorAll('button');
boton[0].addEventListener('click',reiniciarCronometro); // boton reiniciar
boton[1].addEventListener('click',iniciarCronometro); // boton iniciar
