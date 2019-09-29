var amigos = new Array;

function saludarAmigos(){
    for(var i = 0; i < amigos.length; i++){
        alert("Hello " + amigos[i] + " Position: " + i);
    }
}

function agregarAmigos(){
    var nombre = prompt("Write the name of your friend");

    amigos.push(nombre);
    alert("Your friend has been add succesfull");
}

function buscarArray(array, valor){
    return array.indexOf(valor);
}

function eliminarAmigos(){
    var nombre = prompt("Write the name of the friend to delete"),
        posicion = buscarArray(amigos, nombre);

    if(posicion === -1){
        alert("The friend entered is missing");
    } else {
        amigos.splice(posicion, 1);

        alert("Your friend " + nombre + " has been deleted succesfully");
    }
}

function eliminarOtroAmigo(){
    var confirmacion = confirm("To delete other friend has been write the position for this friend");

    if(confirmacion === true){
        var posicion = prompt("Write the position for delete the one friend");

        if(posicion < amigos.length - 1 - amigos.length - 1 || posicion > amigos.length - 1){
            alert("The friend position entered is missing");
        } else {
            alert("Your friend " + amigos[posicion] + " is being eliminated...");
            amigos.splice(posicion, 1);

            alert("Your friend is eliminated");
        }
    }
}
