let listaNomGastos=[];
let listaValGastos=[];

function clickBoton(){
    let gasto= document.getElementById("nombreGasto").value;
    let valor= document.getElementById("valorGasto").value;

console.log(gasto,valor);


    listaNomGastos.push(gasto);
    listaValGastos.push(valor);

    console.log(listaNomGastos,listaValGastos);

    actualizarGastos()


}

function actualizarGastos(){
    const listaElement=document.getElementById("listaDeGastos");
    const totalElemt=document.getElementById("totalGastos");

    let total='';
    let totalGastos=0;
    listaNomGastos.forEach((elementos,posicion) =>{
     const valorGasto = Number(listaValGastos[posicion])
        total+=`<li>${elementos} - USD ${valorGasto}
         <button onclick="eliminar(${posicion})">Eliminar</button></li>`;
        totalGastos+=Number(valorGasto);
    }); 
    listaElement.innerHTML=total; 
    totalElemt.innerHTML=totalGastos.toFixed(2);
    
     resetear();
    
}

function resetear(){
    document.getElementById("nombreGasto").value="";
    document.getElementById("valorGasto").value="";

}

function eliminar(posicion){
    listaNomGastos.splice(posicion,1);
    listaValGastos.splice(posicion,1);

    actualizarGastos()
    

}


///Desafios 
//mensaje cuando los gastos sean mayores a 150
//boton editar
//detalle en los inputs

// Validacion de campos si estan vacios */
//Almacenamiento en una base de datos sql local
