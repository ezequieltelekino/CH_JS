class Civilizacion{
    constructor(nombre, descripcion){  
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    mostrarDatos(){
        console.log("Mostrando datos de: " + this.nombre)

        // el objeto tiene un campo "descripcion", que a su vez es un array de strings, cada posición es una pantalla de la descripción
        this.descripcion.forEach((texto, index) => {
            let textoCompleto = "(" + String(Number(index + 1)) + " de " + this.descripcion.length + ") " + texto ;
            alert(textoCompleto);
        });
    }

    mostrarDatosEnHTML(){
        console.log("Mostrando en html datos de: " + this.nombre)

        // reutilizo el formato de texto anterior (el de los alerts para que se vea en un html)
        let textoCompleto = "";
        this.descripcion.forEach((texto) => {
            textoCompleto +=  texto + "<br>" ;
        });
    
        let seccionDatos = document.getElementById("datos");
    
        if (seccionDatos.hasChildNodes()){
            seccionDatos.lastChild.remove();
        }
        let descripcionDeLaCiv = document.createElement ("p");
        descripcionDeLaCiv.innerHTML = textoCompleto;
        descripcionDeLaCiv.style.width = "80%"
        descripcionDeLaCiv.style.marginLeft = "10%"
        seccionDatos.appendChild(descripcionDeLaCiv);


    }
}


let civilizaciones = [ 
    new Civilizacion("Britanos",[
    "Los britanos son una civilización de arqueros. Su principal característica es tener mayor alcance que cualquier otra civ.",
    "Por cada paso de edad aumentan el rango en un punto. Y haciendo todas las mejoras de herrería y castillo (también la primera corona!) podés llegar a tener hasta 12 puntos de distancia.",
    "Una buena cantidad de arqueros es prácticamente imparable, porque cualquier unidad por más escudo que tenga, muere antes de llegar a tocarlos.",
    "Económicamente no son gran cosa, pero obtienen comida de animales de granja (ovejas, patos, chanchitos) más rápido que las otras civilizaciones.",
    "Eso te permite pasar de edad antes, o mandar un aldeano menos a comida, que llegás re bien.",
    "Bonificación de equipo: sus arquerías producen un 20% más rápido. Ideal para que tu coequiper saque guerrilleros y vos arqueros. No descuiden la economía con tanta producción militar."
    ]),
    new Civilizacion("Francos",[
        "Los francos son una civilización de caballería. Tiene unos caballos 20% más resistentes, y al igual que sus milicias, tienen mejoras automáticas de ataque ni bien pasan de edad.",
        "Ideal para salir pronto a atacar con tres o cuatro scouts, o para pelear contra el scout enemigo y ganarle sin que sepa por qué.",
        "Tienen castillos un 25% más baratos, con lo cual... si antes de llegar a la edad de los castillos mandás algunos aldeanos a sacar piedra, podés sorprender a tu enemigo con un castillo en su oro.",
        "Mejora económica: obtienen comida más rápido de las bayas, y las mejoras de granja suelen ser automáticas.",
        "Eso te permite juntar más comida que tu oponente, y así sacar algunos scouts ni bien llegás a Feudal. Recordá cuidar al scout original.",
        "Bonificación de equipo: los jinetes ven más de lejos. Ideal para que con tus coequipers salgan a drushear aldeanos."
    ]),
    new Civilizacion("Celtas",[
        "Los celtas son una civilización de infantería y asedio. Sus unidades de infantería se mueven más rápido, lo cual te permite hacer un drush de hombres de armas que es muy difícil de frenar.",
        "Sus armas de asedio disparan un 20% más rápido. Si tenés dos o tres escorpiones complementados con unos piqueros, podés bajarle cualquier cosa.",
        "Mejoras económicas: sus aldeanos obtienen madera un 15% más rápido. De modo que puedas sacar gran cantidad de asedio.",
        "Una ventaja no menor: las ovejas (u animales de granja) que estén en rango de una unidad celta, no pueden ser capturadas por otras civilizaciones.",
        "Esto es ideal para ir a robarle al enemigo. Robar está mal, pero así... no tan mal. La ventaja económica obtenida por robar un par de ovejas es enorme.",
        "Bonificación de equipo: los talleres de maquinaria funcionan un 20% más rápido. No es tan útil, porque el asedio Celta ya es mejor que cualquier otro. Mejor que saquen arqueros o caballos."
        ]),
    new Civilizacion("Godos",[
        "Los godos son una civilización de infantería. Muy poderosa, especialmente contra arqueros. Sus unidades de infantería son un 20% más baratas, y en cada edad se hacen más baratas aún.",
        "Además, las unidades de infantería obtienen un punto de ataque más por cada paso de edad. Esas características te permite sacar mayor cantidad de unidades que cualquier otra civ en el juego. Y encima con un ataque muy poderoso.",
        "Tienen una unidad única llamada Huscarle, que es prácticamente inmune a flechas. Pueden destruir a un ejército de arqueros, o a cualquier edificio. Ni hablar si estudiás incendiarismo.",
        "El Huscarle sale del castillo, pero estudiando la corona podés también sacarlos de los cuarteles.",
        "Mejoras económicas: los aldeanos tienen mayor ataque contra jabalíes u animales salvajes; y transportan +15 de comida. Podés matarlos más fácilmente e incluso hacerlo lejos.",
        "Bonificación de equipo: los cuarteles funcionan un 20% más rápido. Ideal para caer junto a un celta y romper todo."
        ])
];
    
function muestraMenu(civilizaciones){

        // creo un mensaje indicativo
    if (nombre == undefined){
        console.log ("el nombre está en blanco")
        let advertencia = document.createElement("p");
        advertencia.id = "advertencia";
        advertencia.innerHTML = "Hola, anónimo... ingresá tu nombre, por favor";
        document.body.append(advertencia);
        return;
    }

    let mensaje = document.createElement("p");
    mensaje.style.textAlign = "center";
    mensaje.style.width = "30%";
    mensaje.style.backgroundColor = "#c0c0e0";
    mensaje.innerHTML = "Seleccioná tu civilización";
    mensaje.style.marginLeft = "33%" ; 
    document.body.append(mensaje);

    // creo un section
    let seccionMenu = document.createElement("section");
    seccionMenu.id = "menu"; 
    seccionMenu.style.display = "flex";

    document.body.append(seccionMenu);
    
    // ajusto el tamaño de la civ para que se muestre, en este caso (que son 4) al 25% c/u
    let tamanioMaximo = String(100 / civilizaciones.length);
    civilizaciones.forEach( civ  => {
        console.log ("Mostrando " + civ.nombre);

        let c = document.createElement("p")
        c.id = "civ_" + civ.nombre;

        c.style.backgroundColor = "#e0e0e0";
        c.style.textAlign = "center";
        c.style.fontSize = "30px"
        c.style.width = tamanioMaximo + "%"

        c.innerHTML =  civ.nombre;
        seccionMenu.appendChild(c);
        c.onclick = () => { console.log("pisa " + civ.nombre ) ; civ.mostrarDatosEnHTML ()}
        c.onmouseover = () => { c.style.backgroundColor = "#e0f0e0" };
        c.onmouseout = () => { c.style.backgroundColor = "#e0e0e0" };
    })


    let seccionDatos = document.createElement("section");
    seccionDatos.id = "datos";

    document.body.append (seccionDatos);
}

function preguntaNombre(){
    let textoQueQuieroMostrar = document.createElement("p");


    nombreAlmacenado = sessionStorage.getItem("nombreAlmacenado");
    if (nombreAlmacenado){
        nombre = JSON.parse(nombreAlmacenado).nombre;
        console.log ("El usuario " + nombre  + " ya está almacenado");
        textoQueQuieroMostrar.innerHTML = "<p>Hola, " + nombre + ".  Gracias por volver!</p>";
        textoQueQuieroMostrar.style.textAlign  = "center";
        document.body.append(textoQueQuieroMostrar);
        let mensajeQueQuieroBorrar = document.getElementById("advertencia");
        if (mensajeQueQuieroBorrar)
            mensajeQueQuieroBorrar.remove();

        muestraMenu(civilizaciones)        
        return nombre;
    }

    // Si el usuario no está en storage, lo pregunto
    let formularioNombre = document.createElement("input");
    let botonNombre = document.createElement("input");
    let mensajeSobreElNombre = document.createElement("p");
    
  //  textoQueQuieroMostrar.innerHTML = "<p>Ingresá tu nombre:</p> ";
    formularioNombre.type = "text" ;
    formularioNombre.id = "nombre";
    botonNombre.type = "submit";
    botonNombre.id = "botonNombre";
    botonNombre.value ="Siguiente";
    mensajeSobreElNombre.innerHTML = "<p>El nombre está en blanco!</p>";

    
  //  document.body.append(textoQueQuieroMostrar);
    document.body.append(formularioNombre);
    document.body.append(botonNombre);
    
    let boton = document.getElementById("botonNombre");
    boton.onclick = () => {
        console.log("hizo clic");
        let nombreObtenido = document.getElementById("nombre");        
    
        if (nombreObtenido == null || nombreObtenido.value == "" ){
            document.body.append(mensajeSobreElNombre);
            console.log ("nombre en blanco");
        }
        else{
            mensajeSobreElNombre.remove();
            textoQueQuieroMostrar.remove();
            formularioNombre.remove();
            botonNombre.remove();
            textoQueQuieroMostrar.innerHTML = "<p>Hola, " + nombreObtenido.value + ". Ojalá disfrutes del sitio, pese a su estética noventosa! (como el Age, claro)</p>";
            textoQueQuieroMostrar.style.textAlign = "center";
            document.body.append(textoQueQuieroMostrar);

            console.log ("nombre que voy a devolver: " + nombreObtenido.value);
            nombre = nombreObtenido.value;
        
            sessionStorage.setItem("nombreAlmacenado", JSON.stringify( {nombre: nombre}));
            console.log("Devolviendo el nombre " + nombre)
            
            let mensajeQueQuieroBorrar = document.getElementById("advertencia");
            if (mensajeQueQuieroBorrar)
                mensajeQueQuieroBorrar.remove();

            muestraMenu(civilizaciones);
            return nombre;
        }   
    } ;
}

// Programa principal
document.body.style.backgroundColor = "#f0e8f0";
let head1 = document.createElement("h1");
head1.innerHTML = "Machete de Age of Empires 2, tercera entrega";
head1.style.textAlign = "center";
document.body.append(head1);
let nombre = undefined;    
// muestro el menú ANTES que preguntar el nombre, así sé si debo mostrarlo... y mando advertencia.
// En caso de no mostrar nada, preguntaNombre lo lanza de nuevo ^_^ 
muestraMenu(civilizaciones);

nombre = preguntaNombre() 


