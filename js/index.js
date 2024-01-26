class Moneda {
    constructor(nombre, valorCompra, valorVenta) {
        this.nombre = nombre
        this.valorCompra = valorCompra
        this.valorVenta = valorVenta
    }
    
};
const MONEDA_DOLAR = new Moneda("Dolar", 820.50, 823.50);
const MONEDA_EURO = new Moneda("Euro", 890.50, 895.80);
const MONEDA_REAL = new Moneda("Real", 170.45, 180.45);
const MONEDA_LIBRA = new Moneda("Libra", 1042.50, 1048.80);

function compraYventa(){
    let moneda = prompt("Que moneda desea cambiar? (Dolar, Euro, Real, Libra)").toLowerCase();
    if (moneda == "dolar"){
        let cambioMoneda = prompt("Desea comprar o vender??").toLowerCase()
        if (cambioMoneda == "comprar"){
            let montoCompraMoneda = prompt("Cuanto desea comprar??")
            let montoMoneda = montoCompraMoneda * MONEDA_DOLAR.valorVenta
            console.log(`Usted va a comprar ${montoCompraMoneda} dolares a un cambio de ${MONEDA_DOLAR.valorVenta} por un valor de $${montoMoneda}`)
            operacion = prompt("Desea realizar otra operacion? (Si o No)").toLowerCase()
            if (operacion == "si") compraYventa()
            else{
                console.log ("Gracias por operar con nosotros")
            }
        }
        else if (cambioMoneda == "vender"){
            let montoVentaMoneda = prompt("Cuanto desea Vender??")
            let montoMoneda = montoVentaMoneda * MONEDA_DOLAR.valorCompra
            console.log(`Usted va a vender ${montoVentaMoneda} dolares a un cambio de ${MONEDA_DOLAR.valorCompra} por un valor de $${montoMoneda}`)
            operacion = prompt("Desea realizar otra operacion? (Si o No)").toLowerCase()
            if (operacion == "si") compraYventa()
            else{
                console.log ("Gracias por operar con nosotros")
            }
        }
        else{
            let cambioMoneda = prompt("Desea comprar o vender??").toLowerCase()
        }
    }else if(moneda == "euro"){
        let cambioMoneda = prompt("Desea comprar o vender??").toLowerCase()
        if (cambioMoneda == "comprar"){
            let montoCompraMoneda = prompt("Cuanto desea comprar??")
            let montoMoneda = montoCompraMoneda * MONEDA_EURO.valorVenta
            console.log(`Usted va a comprar ${montoCompraMoneda} euros a un cambio de ${MONEDA_EURO.valorVenta} por un valor de $${montoMoneda}`)
            operacion = prompt("Desea realizar otra operacion? (Si o No)").toLowerCase()
            if (operacion == "si") compraYventa()
            else{
                console.log ("Gracias por operar con nosotros")
            }
        }
        else if (cambioMoneda == "vender"){
            let montoVentaMoneda = prompt("Cuanto desea Vender??")
            let montoMoneda = montoVentaMoneda * MONEDA_EURO.valorCompra
            console.log(`Usted va a vender ${montoVentaMoneda} euros a un cambio de ${MONEDA_EURO.valorCompra} por un valor de $${montoMoneda}`)
            operacion = prompt("Desea realizar otra operacion? (Si o No)").toLowerCase()
            if (operacion == "si") compraYventa()
            else{
                console.log ("Gracias por operar con nosotros")
            }
        }
        else{
            let cambioMoneda = prompt("Desea comprar o vender??").toLowerCase()
        }
    }else if(moneda == "libra"){
        let cambioMoneda = prompt("Desea comprar o vender??").toLowerCase()
        if (cambioMoneda == "comprar"){
            let montoCompraMoneda = prompt("Cuanto desea comprar??")
            let montoMoneda = montoCompraMoneda * MONEDA_LIBRA.valorVenta
            console.log(`Usted va a comprar ${montoCompraMoneda} libras a un cambio de ${MONEDA_LIBRA.valorVenta} por un valor de $${montoMoneda}`)
            operacion = prompt("Desea realizar otra operacion? (Si o No)").toLowerCase()
            if (operacion == "si") compraYventa()
            else{
                console.log ("Gracias por operar con nosotros")
            }
        }
        else if (cambioMoneda = "vender"){
            let montoVentaMoneda = prompt("Cuanto desea Vender??")
            let montoMoneda = montoVentaMoneda * MONEDA_LIBRA.valorCompra
            console.log(`Usted va avender ${montoVentaMoneda} libras a un cambio de ${MONEDA_LIBRA.valorCompra} por un valor de $${montoMoneda}`)
            operacion = prompt("Desea realizar otra operacion? (Si o No)").toLowerCase()
            if (operacion == "si") compraYventa()
            else{
                console.log ("Gracias por operar con nosotros")
            }
        }
        else{
            let cambioMoneda = prompt("Desea comprar o vender").toLowerCase()
        }
    }else if(moneda == "real"){
        let cambioMoneda = prompt("Desea comprar o vender??").toLowerCase()
        if (cambioMoneda == "comprar"){
            let montoCompraMoneda = prompt("Cuanto desea comprar??")
            let montoMoneda = montoCompraMoneda * MONEDA_REAL.valorVenta
            console.log(`Usted va a comprar ${montoCompraMoneda} reales a un cambio de ${MONEDA_REAL.valorVenta} por un valor de $${montoMoneda}`)
            operacion = prompt("Desea realizar otra operacion? (Si o No)").toLowerCase()
            if (operacion == "si") compraYventa()
            else{
                console.log ("Gracias por operar con nosotros")
            }
        }
        else if (cambioMoneda = "vender"){
            let montoVentaMoneda = prompt("Cuanto desea Vender??")
            let montoMoneda = montoVentaMoneda * MONEDA_REAL.valorCompra
            console.log(`Usted va a vender ${montoVentaMoneda} reales a un cambio de ${MONEDA_REAL.valorCompra} por un valor de $${montoMoneda}`)
            operacion = prompt("Desea realizar otra operacion? (Si o No)").toLowerCase()
            if (operacion == "si") compraYventa()
            else{
                console.log ("Gracias por operar con nosotros")
            }
        }
        else{
            let cambioMoneda = prompt("Desea comprar o vender").toLowerCase()
        }
    }else{
        alert ("Ingrese una moneda valida (Dolar, Euro, Real, Libra)")
        compraYventa()
    }
}
compraYventa()