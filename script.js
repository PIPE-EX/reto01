function PagoCuenta(){
    //variables
    let cost, prop, pago;
    const cuenta = parseInt(document.getElementById('cuenta').value);
    const propina = parseInt(document.getElementById('propina').value);
    const pay = document.getElementById('pay');
    const propi = document.getElementById('propi');
    const costo = document.getElementById('costo');
    const error = document.getElementById('error');

    pay.value = 0;
    propi.value = 0;
    costo.value = 0;

    //operaciones
    //se crea una condicion para que se opere con un porcentaje normal
    if(propina < 0 || propina > 100){
        error.textContent = (`El porcentaje de propina de ${propina} % no es el adecuado`);
    }else{
        cost = cuenta;
        prop = (cost * propina)/100;
        pago = cost + prop;

        //resultados
        // Pruebas de conexion a consola
        // // console.log('Total de la cuenta: ' + cuenta)
        // // console.log('Total de propina: ' + propina)
        // // console.log('Total a pagar: ' + pago)
    
        //Valores finales
        pay.value =`$ ${cost}`;
        propi.value =`$ ${prop}`;
        costo.value =`$ ${pago}`;
    }
}