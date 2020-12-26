
const $form = document.querySelector("#formulario-compra");

function calcular(event){
    //event.preventDefault();
    let conseguirPrecio = document.querySelector("#preciolitro").innerText;
    let conseguirInfo = document.querySelector("#cantidad").value;
    let multiplicar = conseguirInfo * conseguirPrecio
    let transactionTable = document.querySelector("#tablaArticulo");
    let newTransactionRow = transactionTable.insertRow(-1);
    let newTypeCell = newTransactionRow.insertCell(0);
    newTypeCell.classList.add("td");
    newTypeCell.textContent = "$" + multiplicar;
} 


function sumarAlCarrito(event){
    let $tittle = document.querySelector(".titulo");
    let $valueTittle = $tittle.innerText
    let $cantidad = document.querySelector("#cantidad")
    let $cantidadValue = $cantidad.value;
    let $td = document.querySelector(".td");
    let $valuetd = $td.innerText;
    $form.reset();
    
    
    
    console.log($valueTittle);
    console.log($cantidadValue);
    console.log($valuetd);
    
    
}


document.addEventListener("click", (event)=>{
    
    if(event.target.matches("#calcular")){
        calcular(event);
        event.preventDefault();
    }
    
    if(event.target.matches("#sumar")){
        sumarAlCarrito(event);
        let $td = document.querySelector(".td");
        $td.remove()
    }
})
