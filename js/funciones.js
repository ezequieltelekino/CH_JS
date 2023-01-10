
function preguntaNombre(){
    let nombre = prompt("ingrese su nombre:");
    while (nombre == ""){
        console.log(typeof(nombre)) + "nombre";   
        nombre = prompt("El nombre " + nombre + " no es válido, ponele onda");
    }
    return nombre;
}

function formateaNombresDeCivilizaciones(){
    let  devolver = ""
    for (civ in civilizaciones) {
        if (civ == civilizaciones.length-1)
            devolver = devolver + " y " + civilizaciones[civ] ;
        else
            devolver = devolver + civilizaciones[civ] + ", ";
    }
    return devolver;
}

//let civilizaciones = ["Britanos", "Francos", "Celtas", "Godos"];

function mostrarDatosDeCivilizacion(civ){
    
    if (civ.toLowerCase() == "britanos"){
        alert("(1 de 6) Los " + civ + " son una civilización de arqueros. Su principal característica es tener mayor alcance que cualquier otra civ.");
        alert("(2 de 6) Por cada paso de edad aumentan el rango en un punto. Y haciendo todas las mejoras de herrería y castillo (también la primera corona!) podés llegar a tener hasta 12 puntos de distancia.");
        alert("(3 de 6) Una buena cantidad de arqueros es prácticamente imparable, porque cualquier unidad por más escudo que tenga, muere antes de llegar a tocarlos.");
        alert("(4 de 6) Económicamente no son gran cosa, pero obtienen comida de animales de granja (ovejas, patos, chanchitos) más rápido que las otras civilizaciones.");
        alert("(5 de 6) Eso te permite pasar de edad antes, o mandar un aldeano menos a comida, que llegás re bien.");
        alert("(6 de 6) Bonificación de equipo: sus arquerías producen un 20% más rápido. Ideal para que tu coequiper saque guerrilleros y vos arqueros. No descuiden la economía con tanta producción militar.");
    }

    if (civ.toLowerCase() == "francos"){
        alert("(1 de 6) Los " + civ + " son una civilización de caballería. Tiene unos caballos 20% más resistentes, y al igual que sus milicias, tienen mejoras automáticas de ataque ni bien pasan de edad.");
        alert("(2 de 6) Ideal para salir pronto a atacar con tres o cuatro scouts, o para pelear contra el scout enemigo y ganarle sin que sepa por qué.");
        alert("(3 de 6) Tienen castillos un 25% más baratos, con lo cual... si antes de llegar a la edad de los castillos mandás algunos aldeanos a sacar piedra, podés sorprender a tu enemigo con un castillo en su oro.")
        alert("(4 de 6) Mejora económica: obtienen comida más rápido de las bayas, y las mejoras de granja suelen ser automáticas.")
        alert("(5 de 6) Eso te permite juntar más comida que tu oponente, y así sacar algunos scouts ni bien llegás a Feudal. Recordá cuidar al scout original.")
        alert("(6 de 6) Bonificación de equipo: los jinetes ven más de lejos. Ideal para que con tus coequipers salgan a drushear aldeanos.")
    }

    if (civ.toLowerCase() == "celtas"){
        alert("(1 de 6) Los " + civ + " son una civilización de infantería y asedio. Sus unidades de infantería se mueven más rápido, lo cual te permite hacer un drush de hombres de armas que es muy difícil de frenar.");
        alert("(2 de 6) Sus armas de asedio disparan un 20% más rápido. Si tenés dos o tres escorpiones complementados con unos piqueros, podés bajarle cualquier cosa.");
        alert("(3 de 6) Mejoras económicas: sus aldeanos obtienen madera un 15% más rápido. De modo que puedas sacar gran cantidad de asedio.")
        alert("(4 de 6) Una ventaja no menor: las ovejas (u animales de granja) que estén en rango de una unidad celta, no pueden ser capturadas por otras civilizaciones.")
        alert("(5 de 6) Esto es ideal para ir a robarle al enemigo. Robar está mal, pero así... no tan mal. La ventaja económica obtenida por robar un par de ovejas es enorme.")
        alert("(6 de 6) Bonificación de equipo: los talleres de maquinaria funcionan un 20% más rápido. No es tan útil, porque el asedio Celta ya es mejor que cualquier otro. Mejor que saquen arqueros o caballos.")
    }

    if (civ.toLowerCase() == "godos"){
        alert("(1 de 6) Los " + civ + " son una civilización de infantería. Muy poderosa, especialmente contra arqueros. Sus unidades de infantería son un 20% más baratas, y en cada edad se hacen más baratas aún.");
        alert("(2 de 6) Además, las unidades de infantería obtienen un punto de ataque más por cada paso de edad. Esas características te permite sacar mayor cantidad de unidades que cualquier otra civ en el juego. Y encima con un ataque muy poderoso.");
        alert("(3 de 6) Tienen una unidad única llamada Huscarle, que es prácticamente inmune a flechas. Pueden destruir a un ejército de arqueros, o a cualquier edificio. Ni hablar si estudiás incendiarismo.")
        alert("(4 de 6) El Huscarle sale del castillo, pero estudiando la corona podés también sacarlos de los cuarteles.")
        alert("(5 de 6) Mejoras económicas: los aldeanos tienen mayor ataque contra jabalíes u animales salvajes; y transportan +15 de comida. Podés matarlos más fácilmente e incluso hacerlo lejos.")
        alert("(6 de 6) Bonificación de equipo: los cuarteles funcionan un 20% más rápido. Ideal para caer junto a un celta y romper todo.")
    }

}


function seleccionaCivilizacion(){
    let primerMensaje = "Hola, " + nombre + ". Esto es una guía de Age Of Empires.\n\nVamos a seleccionar alguna civilización para darte toda la info posible.\
    Las opciones son:\n\n" + civilizacionesEnFormatoBonito;
    let civilizacionElegida = "";
    let civilizacionValida = false;
    let veces = 0;
    while( true ){
    
        if (veces == 0)
            civilizacionElegida = prompt(primerMensaje);
    
        for (civ in civilizaciones) {
            if (civilizaciones[civ].toLocaleLowerCase() == civilizacionElegida.toLowerCase())
                civilizacionValida = true;
        }
    
        console.log("Civilización seleccionada: " + civilizacionElegida);
        if (civilizacionValida){
             console.log("Es válida, salimos!");
             return civilizacionElegida;
        }
        else{
            console.log("Es incorrecta. Volvemos a preguntar.");
        }
    
        veces ++;
        segundoMensaje = "";
    
        if (veces < 3){
            segundoMensaje = nombre + ": La opción que ingresaste (" + civilizacionElegida + ") no es válida.\n\n \
                 Las opciones son: \n\n" + civilizacionesEnFormatoBonito;
        }
        else{
            segundoMensaje = nombre + ": La opción que ingresaste (" + civilizacionElegida + ") no es válida.\n\n \
            Las opciones son: \n\n" + civilizacionesEnFormatoBonito + "\n\nYa van " + veces + " intentos, ponele onda! Ni siquiera te pido respetar mayúsculas! :(";
        }
    
        civilizacionElegida = prompt (segundoMensaje).toLowerCase();
    }
    
}

function preguntarSiQuiereSeguir(){
    let quiereSeguir = prompt("¿Querés ver otra civ? S/N" );
    while (quiereSeguir.toUpperCase() != "S" && quiereSeguir.toUpperCase() != "N"){
        quiereSeguir = prompt("Opción inválida: " + quiereSeguir + " ¿Querés ver otra civ? (poné S o N)");
    }
    return quiereSeguir.toUpperCase();
}

// Programa principal


let nombre = preguntaNombre();
let civilizaciones = ["Britanos", "Francos", "Celtas", "Godos"];
let civilizacionesEnFormatoBonito = formateaNombresDeCivilizaciones();
let seguir = "S"

while (seguir == "S"){
    let civilizacion = seleccionaCivilizacion();

    // Lo muestro con la primera en mayúscula, para que quede más cheto.
    civilizacion = civilizacion[0].toUpperCase() + civilizacion.substring(1);

    alert("Excelente, " + nombre + ". Vamos a darte info sobre los " + civilizacion + ".");
    mostrarDatosDeCivilizacion(civilizacion);
    alert("Eso es todo lo que puedo decirte en este momento sobre " + civilizacion + ", " + nombre + ". Espero que te haya servido.");
    seguir = preguntarSiQuiereSeguir();
}


alert("Espero que te haya gustado. Pronto agrego más civs. Aguante el Age of Empires 2!");






