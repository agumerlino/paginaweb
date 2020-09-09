var rCorrecta = "lakers";
var contador = 0;

function validacion()
{
    var respuesta = document.getElementById("Respuesta").value;
    var mensajeGanaste = "Felicitaciones, tu respuesta es correcta";
    var mensajePerdiste = "Lo siento, perdiste";
    var pista1 = "Es un equipo de Los Angeles";
    var pista2 = "Empieza con L";
    
    var lebron = document.getElementById("lebron");

    

    if(respuesta.toLowerCase() == rCorrecta){
       
        document.getElementById("parrafo").innerHTML=mensajeGanaste;
        document.getElementById("pista").innerHTML="";
        lebron.src = "lebronlakers.jpg"
        document.getElementById("boton").setAttribute("disabled","true");

    }else{
        contador++;
        if(contador == 1){
            document.getElementById("parrafo").innerHTML="Te quedan 3 intentos";
            document.getElementById("pista").innerHTML="";
        }
        if(contador == 2){
            document.getElementById("parrafo").innerHTML="Te queda 2 intentos";
            document.getElementById("pista").innerHTML="Pista: "+pista1;
        }
        if(contador == 3){
            document.getElementById("parrafo").innerHTML="Ultimo intento";
            document.getElementById("pista").innerHTML="Pista: "+pista2;
        }
        if(contador == 4){
            document.getElementById("parrafo").innerHTML=mensajePerdiste;
            document.getElementById("pista").innerHTML="";
            document.getElementById("boton").setAttribute("disabled","true");
        }
    }
}