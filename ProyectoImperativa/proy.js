
//Proyecto de Programacion Imperativa


// Aqui estan todos los parametros que definimos para la funcion a la cual le llamamos "evaluarStatusFinal".
function evaluarStatusFinal(nombre, apellido, departamento, puntajeFundamentos, puntajeImperativa, puntajePOO, evidenciaFundamentos=true, evidenciaImperativa=true, evidenciaPOO=true, puntajeIngles, completadoCT = true) {
    
    
    // Calculamos el puntaje técnico final sumando los parametros mencionados a continuacion.
    let puntajeTecnico = (puntajeFundamentos * 0.3) + (puntajeImperativa * 0.5) + (puntajePOO * 0.2);


    // Determinamos si se entregaron todas las evidencias, por cada una entregada se le aumentara el valor a la variable "EvidenciasEntregadas".
    let evidenciasEntregadas = 0;
    if (evidenciaFundamentos) {
        evidenciasEntregadas++;
    }
    if (evidenciaImperativa) {
        evidenciasEntregadas++;
    }
    if (evidenciaPOO) {
        evidenciasEntregadas++;
    }

    let promedionota = Math.round((puntajeTecnico + puntajeIngles) / 2); //Se realiza el promedio de la nota final, con estos 2 parametros anteriormente definidos. No se agrega el valor de CT por ser un booleano. Sobre el "Math.round" lo usamos para redondear.


    // En base a la consigna y los valores que debe tomar cada parametro, se va a definir si la persona aprueba o no Fase 1.
    let status = "" ;
    if (puntajeIngles >= 50 && completadoCT && puntajeTecnico >= 60 && evidenciasEntregadas === 3) { //El parametro "completadoCT" tiene un valor asignado true.
        status =promedionota + " Aprobado" ;
    } else if (puntajeIngles < 50) {
        status = promedionota + " reprobado por el idioma";
    } else if (!completadoCT) { //Aca le agregamos la negacion, para indicar que su valor cambiara a false.
        status = promedionota + " reprobado por no haber completado las lecciones de CT";
    } else if (puntajeTecnico < 50) {
        if (evidenciasEntregadas === 3) {
            status = promedionota + " reprobado por el puntaje técnico" ;
        } else {
            status = promedionota + " reprobado por el puntaje técnico y por no haber entregado todas las evidencias";
        }
    } else if (puntajeTecnico >= 50 && puntajeTecnico < 60 && evidenciasEntregadas === 3) {
        status = promedionota + " en espera de examen final" ;
    } else {
        status = promedionota + " reprobado totalmente";
    }


    // Aqui Mostramos el Resultado con todos los parametros dados.
    console.log(`Hola ${nombre} ${apellido}!!, el detalle de tu status final es:\n\nEn Inglés - ${puntajeIngles} puntos - ${puntajeIngles >= 50 ? "Ok" : "No Aprueba Fase 1"}\n\nEn CT - ${completadoCT ? "100 puntos - Ok" : "0 puntos - No Aprueba Fase 1"}\n\nEn Técnica - ${puntajeTecnico} puntos - ${puntajeTecnico >= 60 ? "Ok" : "Debe rendir un examen final con supervisión"}\n\nEvidencias entregadas - ${evidenciasEntregadas} - ${evidenciasEntregadas === 3 ? "Ok" : "Debe rendir un examen final con supervisión"}\n\nEn conclusión, tu status final es ${status}  `);
}


// Aqui invocamos la funcion, con 3 resultados distintos. Te invitamos a probar el codigo :).
evaluarStatusFinal("Claire", "Guadalupe", "Rio Negro", 30, 23, 12, false, true, false, 30, false);//Reprobado por Idioma
evaluarStatusFinal("Carlos", "Guantanamera", "Canelones", 90, 87, 92, true, true, true, 80, true);//Aprobado
evaluarStatusFinal("Martin", "Pettinati", "Colonia", 55, 55, 55, true, true, true, 55, true);//Reprobado en espera de examen final
evaluarStatusFinal("Lehemyun", "Soraka", "Montevideo", 65, 49, 85, true, true, true, 72, false); //Reprobado por CT
evaluarStatusFinal("Kegan", "Rhode", "Freljord", 15, 65, 45, false, false, false, 55, true);//Reprobado por no entregar evidencias y el puntaje tecnico