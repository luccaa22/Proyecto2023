
//lista de los videojuegos con su nombre, año de lanzamiento y su precio.
let videojuegos = [{
    nombre_juego: "Cuphead",
    anio: 2017,
    precio: 429
},
{
    nombre_juego: "Blasphemous",
    anio: 2019,
    precio: 529
},
{
    nombre_juego: "SOMA",
    anio: 2015,
    precio: 829
},
{
    nombre_juego: "Omega Strikers",
    anio: 2022,
    precio: 10
},
{
    nombre_juego: "Undertale",
    anio: 2015,
    precio: 229
},
{
    nombre_juego: "Stardew Valley",
    anio: 2016,
    precio: 329
},
{
    nombre_juego: "League Of Legends",
    anio: 2009,
    precio: 5
},
{
    nombre_juego: "Age Of Empires II",
    anio: 1999,
    precio: 129
},
{
    nombre_juego: "Doom",
    anio: 1993,
    precio: 429
},
{
    nombre_juego: "Dark Souls",
    anio: 2011,
    precio: 1899
}
]
//fin de la lista

//En esta variable se ejecuta un prompt(el cual está a la espera de ordenes), que permite al usuario elegir una de las 2 opciones.
var opcion = prompt("¿Que desea ver? \n1.Nombre y Fecha \n2.Precio del Juego");

//Este comprueba la opcion del usuario. 
if (opcion === "1") {
    for (let aniodeljuego of videojuegos) {
        const { nombre_juego, anio } = aniodeljuego //toma los parametros de la lista, en este caso el nombre y el año.
        console.log("" + nombre_juego + " se lanzó en el año:" + anio);
    };
} else if (opcion === "2") {
    for (let precios of videojuegos) {
        const { nombre_juego, precio } = precios //toma los parametros de la lista, en este caso el nombre y el precio.
        console.log("" + nombre_juego + " su precio es $" + precio);
    };
}
//El listado quise separarlo en 2 partes para que quede mas ordenado en cuanto fecha y precio.