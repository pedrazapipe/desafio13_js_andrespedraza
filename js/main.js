/* Inicio carrusel */

const carrucel = document.querySelector('.imagenes__carrusel');
const punto = document.querySelectorAll('.carrucel__punto');

punto.forEach( ( cadaPunto , i )=> {

    punto[i].addEventListener('click',()=>{

        let posicion  = i;
        let operacion = posicion * -33.33;

        carrucel.style.transform = `translateX(${ operacion }%)`

        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove('activo');
        })
        punto[i].classList.add('activo');

    })
});

/* final carrusel */




/* Inicio descuentos */

const gato = document.querySelector (".gato__descuento");

const jirafa = document.querySelector (".jirafa__descuento");

const elefante = document.querySelector (".elefante__descuento");


gato.addEventListener ("click", cat);

function cat (){
    alert (`Nuestras plantas con macetas de gato están en descuento, recuerda revisar nuestro catálogo para saber todas nuestras ofertas.

    Planta con maceta de gato: 25.000 pesos - Antes 32.000 pesos.
    
    `);

};

jirafa.addEventListener ("click", jir);

function jir (){
    alert (`Nuestras plantas con macetas de gato están en descuento, recuerda revisar nuestro catálogo para saber todas nuestras ofertas.

    Planta con maceta de gato: 20.000 pesos - Antes 28.000 pesos.
    
    `);

};

elefante.addEventListener ("click", ele);

function ele (){
    alert (`Nuestras plantas con macetas de gato están en descuento, recuerda revisar nuestro catálogo para saber todas nuestras ofertas.

    Planta con maceta de gato: 28.000 pesos - Antes 36.000 pesos.
    
    `);

};

/* Final descuentos */




/* Inicio TOP productos */

const suculenta = document.querySelector (".suculenta__top");

const carnivora = document.querySelector (".carnivora__top");

const cactus = document.querySelector (".captus__top");

suculenta.addEventListener ("click", sucu);

function sucu (){
    alert (`La Suculenta Pachyveria es una suculenta muy fácil de cuidar ya que requiere de poco cuidado por eso es una de nuestras plantas más pedidas.

    Recuerda hacer el pedido de tu planta ya que quedan muy pocas unidades. 
    
    `);

};

carnivora.addEventListener ("click", carnivo);

function carnivo (){
    alert (`La planta carnivora atrapa moscas es una de las plantas más populares para tener en interiores.

    Recuerda ir a la pestaña de cátalogo para poder hacer tu pedido  
    
    `);

};

cactus.addEventListener ("click", cac);

function cac (){
    alert (`Los cactus es una suculenta muy fácil de cuidar ya que requiere de poco cuidado por eso es una de nuestras plantas más pedidas.

    Recuerda ir a la pestaña de cátalogo para poder hacer tu pedido  

    `);

};

/* Final TOP productos */
