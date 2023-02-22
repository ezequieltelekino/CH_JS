class Civilizacion{
    constructor(nombre, descripcion){  
        this.nombre = nombre;
        this.descripcion = descripcion;
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

function bienvenidaAnonimo(){
    console.log("en bienvenidaAnonimo")
    let advertenciaAnterior = document.getElementById("advertencia");
    if (advertenciaAnterior){
        advertenciaAnterior.remove();
    }

    if (nombre == undefined ){
        console.log ("el nombre está en blanco")
        let advertencia = document.createElement("p");
        advertencia.id = "advertencia";
        advertencia.innerHTML = "Hola, anónimo... ingresá tu nombre, por favor";
        advertencia.style.marginLeft = "30%";

        document.body.append(advertencia);
        return;
    }
}

function pideCiv(){

    //verifico si ya había un mensaje, y lo elimino
    let mensajeAnterior = document.getElementById("selecciona");
    if (mensajeAnterior)
        mensajeAnterior.remove()

    if (nombre == undefined)
        return;

    let mensaje = document.createElement("p");
    mensaje.id = "selecciona"
    mensaje.style.textAlign = "center";
    mensaje.style.width = "30%";
    mensaje.style.backgroundColor = "#c0c0e0";
    mensaje.innerHTML = "Seleccioná tu civilización";
    mensaje.style.marginLeft = "33%" ; 
    document.body.append(mensaje);
}
function muestraMenu(civilizaciones){

    // borro cosas previas de la pantalla
    let datosAnteriores = document.getElementById("datos");
    if (datosAnteriores)
        datosAnteriores.remove();

    let seccionAnterior = document.getElementById("menu");
    if (seccionAnterior)
        seccionAnterior.remove();

        // creo un mensaje indicativo
    if (nombre == undefined)
        return;
    //verifico si ya había un menú, y lo elimino

    pideCiv();

    // creo un section
    let seccionMenu = document.createElement("section");
    seccionMenu.id = "menu"; 
    seccionMenu.style.display = "flex";

    document.body.append(seccionMenu);
    
    // ajusto el tamaño de la civ para que se muestre, en este caso (que son 4) al 25% c/u
    console.log (civilizaciones)
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

function saluda(saludo){
    console.log("saludando")
    bienvenidaAnonimo()


    let botonLogOut = document.createElement ("button");
    botonLogOut.innerHTML = "Cambiar Usuario";
    let divContieneSaludo = document.createElement("div");
    divContieneSaludo.appendChild(saludo);
    divContieneSaludo.append (botonLogOut);
    divContieneSaludo.style.display = "flex"
    divContieneSaludo.style.justifyContent = "space-between"
    divContieneSaludo.style.marginLeft = "20%"
    divContieneSaludo.style.marginRight = "10%"
    botonLogOut.style.borderRadius = "8px";
    botonLogOut.style.borderRadius = "8px";

    botonLogOut.onclick = () => {
        console.log("cerrando sesión");
        nombreAlmacenado = "";
        sessionStorage.removeItem("nombreAlmacenado");
        divContieneSaludo.remove();
        nombre = undefined;
        pideCiv();
        preguntaNombre();
        muestraMenu(civilizaciones);
    }
    document.body.append(divContieneSaludo);
}

function preguntaNombre(){
    console.log("preguntando nombre" + nombre)
    bienvenidaAnonimo();

    let saludo = document.createElement("p");

    nombreAlmacenado = sessionStorage.getItem("nombreAlmacenado");
    if (nombreAlmacenado){
        nombre = JSON.parse(nombreAlmacenado).nombre;
        console.log ("El usuario " + nombre  + " ya está almacenado");
        saludo.innerHTML = "Hola, " + nombre + ".  Gracias por volver!";
        saludo.style.textAlign  = "center";

        let mensajeQueQuieroBorrar = document.getElementById("advertencia");
        if (mensajeQueQuieroBorrar)
            mensajeQueQuieroBorrar.remove();

        saluda(saludo);
        muestraMenu(civilizaciones)        
        return nombre;
    }
    console.log("no hay nombre almacenado, creo el formulario")
    bienvenidaAnonimo();
    // Si el usuario no está en storage, lo pregunto
    let formularioNombre = document.createElement("input");
    let botonNombre = document.createElement("input");
    let mensajeSobreElNombre = document.createElement("p");
    
    formularioNombre.type = "text" ;
    formularioNombre.id = "nombre";
    botonNombre.type = "submit";
    botonNombre.id = "botonNombre";
    botonNombre.value ="Ingresa tu nombre";
    mensajeSobreElNombre.innerHTML = "El nombre está en blanco!";

    let divQueContieneElFormulario = document.createElement("div");
    divQueContieneElFormulario.append(formularioNombre);
    divQueContieneElFormulario.append(botonNombre);
    divQueContieneElFormulario.style.display = "flex";
    divQueContieneElFormulario.style.justifyContent = "space-between"
    divQueContieneElFormulario.style.marginLeft = "30%";
    divQueContieneElFormulario.style.marginRight = "30%";

    document.body.append(divQueContieneElFormulario);
    let boton = document.getElementById("botonNombre");
    boton.onclick = () => {
        let nombreObtenido = document.getElementById("nombre");        
    
        if (nombreObtenido == null || nombreObtenido.value == "" ){
            mensajeSobreElNombre.style.marginLeft = "30%";
            document.body.append(mensajeSobreElNombre);
            console.log ("nombre en blanco");
        }
        else{
            bienvenidaAnonimo();
            mensajeSobreElNombre.remove();
            saludo.remove();

            formularioNombre.remove();
            botonNombre.remove();

            saludo.innerHTML = "Hola, " + nombreObtenido.value + ". Ojalá disfrutes del sitio, pese a su estética noventosa! (como el Age, claro)";
            saluda(saludo);


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

function creaHead(texto){
    document.body.style.backgroundColor = "#f0e8f0";
    let head1 = document.createElement("h1");
    head1.innerHTML = texto;
    head1.style.textAlign = "center";
    document.body.append(head1);
}

// Programa principal
creaHead("Machete de Age of Empires 2, entrega final");

// muestro el menú ANTES que preguntar el nombre, así sé si debo mostrarlo... y mando advertencia.
// En caso de no mostrar nada, preguntaNombre lo lanza de nuevo ^_^ 

let nombre = undefined;    
nombre = preguntaNombre() 

muestraMenu(civilizaciones);





