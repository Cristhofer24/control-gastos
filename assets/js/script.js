let listaNomGastos = [];
let listaValGastos = [];
let editIndex = -1; 

function clickBolton() {
    let gasto = document.getElementById("nombreGasto").value;
    let valor = document.getElementById("valorGasto").value;

    if (gasto === "" || valor === "") {
        alert("Por favor, ingresa un nombre y un valor para el gasto.");
        return;
    }

    if (editIndex === -1) {
       
        listaNomGastos.push(gasto);
        listaValGastos.push(valor);
    } else {
        
        listaNomGastos[editIndex] = gasto;
        listaValGastos[editIndex] = valor;
        editIndex = -1; 
        document.getElementById("botonFormulario").innerText = "Agregar Gasto"; 
    }

    actualizarGastos();
}

function actualizarGastos() {
    const listaElement = document.getElementById("listaDeGastos");
    const totalElemt = document.getElementById("totalGastos");

    let total = '';
    let totalGastos = 0;
    listaNomGastos.forEach((elementos, posicion) => {
        const valorGasto = Number(listaValGastos[posicion]);
        total += `<li>${elementos} - USD ${valorGasto}
         <button onclick="eliminar(${posicion})">Eliminar</button>
         <button onclick="editar(${posicion})">Editar</button></li>`;
        totalGastos += valorGasto;
    });
    listaElement.innerHTML = total;
    totalElemt.innerHTML = totalGastos.toFixed(2);

    resetear();
}

function resetear() {
    document.getElementById("nombreGasto").value = "";
    document.getElementById("valorGasto").value = "";
}

function eliminar(posicion) {
    listaNomGastos.splice(posicion, 1);
    listaValGastos.splice(posicion, 1);

    actualizarGastos();
}

function editar(posicion) {
    
    document.getElementById("nombreGasto").value = listaNomGastos[posicion];
    document.getElementById("valorGasto").value = listaValGastos[posicion];

    
    document.getElementById("botonFormulario").innerText = "Editar Gasto";

  
    editIndex = posicion;
}
