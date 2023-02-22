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
        advertencia.innerHTML = "Hola, anónimo... ingresá tu nombre, por favor (spoiler alert: valido que esté en blanco, nada más)";
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
    mensaje.style.width = "100%";
    mensaje.style.backgroundColor = "#c0c0e0";
    mensaje.innerHTML = "Seleccioná tu civilización";
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
    console.log("hay " + civilizaciones.length + " civs")
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
        c.onclick = () => { 
                console.log("Haciéndome el que busco datos en la BD");

                Toastify({
                    text: "Obteniendo datos de la base de datos. \nAuspicia esta demora: Telecentro.",
                    duration: 1000,
                    offset: {
                        x:0, 
                        y:50
                    }        
                    }).showToast();


                return new Promise ( (resolve, reject) => {
                    setTimeout( () => {
                        resolve (civ.mostrarDatosEnHTML()),
                        console.log("dato obtenido lentamente")
                    }, 1000)
                })
            
            //civ.mostrarDatosEnHTML ()
        }        
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
    divContieneSaludo.style.display = "block"
    divContieneSaludo.style.textAlign = "center"
    divContieneSaludo.style.marginLeft = "25%"
    divContieneSaludo.style.marginRight = "25%"
    botonLogOut.style.borderRadius = "8px";
    botonLogOut.style.borderRadius = "8px";

    botonLogOut.onclick = () => {
        console.log("cerrando sesión");
        nombreAlmacenado = "";
        sessionStorage.removeItem("nombreAlmacenado");
        divContieneSaludo.remove();
        nombre = undefined;
        Toastify({
            text: "Cerraste sesión correctamente",
            duration: 3000,
            offset: {
                x:0, 
                y:50
            }        
            }).showToast();
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
           // document.body.append(mensajeSobreElNombre);
            console.log ("nombre en blanco");
            Swal.fire({
                title: 'Error!',
                text: 'Ingresaste un nombre en blanco, ponele onda!',
                icon: 'error',
                confirmButtonText: 'Ok, voy a meterle más onda.'
              })
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

const getDatos = async() => {
    const resp = await fetch("js/civilizaciones.json")
    // primer then obtiene el resultado de la petición
    .then ( (res) => res.json() )

    //segundo then, me trae los datos del json pposta
    .then ((data) => {
        console.log("segundo then")
        console.log(data)
        data.forEach(civ => {

            // cada ítem leído del json es un objeto.
            // hago un new de la clase civiliación por cada uno de estos objetos
            // así lo dejo en el mismo formato que tenía cuando estaba en el código

            console.log("Creandop la civ: " + civ.nombre)
            c = new Civilizacion(civ.nombre,civ.descripcion);
            civilizaciones.push(c);  
        });
        muestraMenu(civilizaciones)
    })
}

// Programa principal
creaHead("Machete de Age of Empires 2, entrega final");
let civilizaciones = [];
let nombre = undefined;
preguntaNombre();
getDatos();