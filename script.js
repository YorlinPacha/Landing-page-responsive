
//Crear un contador
function contador(){
    try{
        // variable numero 1 es igual a un numero que se ingresa
        let numeroInicial = Number(prompt("Ingrese numero inicial"));
        let numeroFinal = Number(prompt("Ingrese numero final"));

        //Verificamos si se ha ingresado un numero y no otra cosa

        //In JavaScript NaN is short for "Not-a-Number".
        //The isNaN() method returns true if a value is NaN.  'Hello' == true
        if(isNaN(numeroInicial) || isNaN(numeroFinal)){
            throw "Haz colocado un valor invalido, ingresa solo numeros"
        }
        for(i = numeroInicial; i<= numeroFinal ; i++){
            alert("Contador empieza " + "     "+ i);
        }
    }
    catch(error){
        alert("Ocurrio un Error!!" + " "+error);
    }
    finally{
        alert("El proceso ha finalizado");
    }
}