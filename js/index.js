class Moneda {
    constructor(simbolo, nombre, valorCompra, valorVenta) {
        this.simbolo = simbolo
        this.nombre = nombre
        this.valorCompra = valorCompra
        this.valorVenta = valorVenta
    }
};
const MonedasArray = [
    Dolar = new Moneda("USD$", "Dolar", 825.50, 895.00),
    Euro = new Moneda("€", "Euro", 890.00, 960.00),
    Real = new Moneda("R$", "Real", 153.06, 202.94),
    Libra = new Moneda("£", "Libra", 924.40, 1023.00),
    Uruguayo = new Moneda("UYU$", "Uruguayo", 19.50, 20.00),
    Chileno = new Moneda("CLP$", "Chileno", 85.65, 85.76),
];

const MonedaCotizacion = document.getElementById('moneda');
const monedaSelect = document.getElementById('monedaSelect');
function AgregarMoneda(monedas){
    MonedasArray.forEach(monedas =>{
        const monedaCot = document.createElement('div');
        monedaCot.classList.add("tipoMoneda");
        monedaCot.innerHTML =
            `
            <p class="monedaSimbolo">${monedas.simbolo}</p>
            <h3 class="monedaNombre">${monedas.nombre}</h3>
            <p class="monedaCompra">$${monedas.valorCompra}</p>
            <p class="monedaVenta">$${monedas.valorVenta}</p>
            `
        MonedaCotizacion.appendChild(monedaCot);
    })
    MonedasArray.forEach(monedas =>{ 
        let monedaSel = document.createElement('option');
        monedaSel.setAttribute("value", monedas.nombre);
        monedaSel.innerHTML =
        `
        ${monedas.nombre} (${monedas.simbolo})
        `
        monedaSelect.appendChild(monedaSel);
    })
};
AgregarMoneda(MonedasArray);

const cYv = document.getElementById('compra-venta');
const monto = document.getElementById('monto');
const resultado = document.getElementById('resultado');
const click = document.getElementById('click');

let tipoDeMoneda;
monedaSelect.addEventListener("change", function(){
    tipoDeMoneda = monedaSelect.options[monedaSelect.selectedIndex].value;
    if (tipoDeMoneda == "Dolar"){
        tipoDeMoneda = Dolar;
    }else if(tipoDeMoneda == "Euro"){
        tipoDeMoneda = Euro;
    }else if(tipoDeMoneda == "Real"){
        tipoDeMoneda = Real;
    }else if(tipoDeMoneda == "Libra"){
        tipoDeMoneda = Libra;
    }else if(tipoDeMoneda == "Chileno"){
        tipoDeMoneda = Chileno;
    }else if(tipoDeMoneda == "Uruguayo"){
        tipoDeMoneda = Uruguayo;
    }
})
let tipoDeCambio; 
cYv.addEventListener("change", function(){
    tipoDeCambio = cYv.options[cYv.selectedIndex].value;
})
let tipoDeMonto; 
monto.addEventListener("input", function(){
    tipoDeMonto = Number(monto.value);
})

let montoMoneda;
let valorFinal;
const resultadoTipo = document.getElementById('resultadoTipo')
click.addEventListener('click', function(){
    if(tipoDeCambio == "comprar" && tipoDeMonto >= 100){   
        let montoMoneda = tipoDeMonto * tipoDeMoneda.valorVenta;
        let valorFinal = Math.round(montoMoneda);
        document.getElementById('resultadoOK').style.display = "block";
        resultadoTipo.innerText = `Compró $${tipoDeMonto} ${tipoDeMoneda.nombre.toUpperCase()} a un cambio de $${tipoDeMoneda.valorVenta}, por un valor de ARS$${valorFinal}`
        localStorage.setItem('localH', resultadoTipo.outerText)
    }else if(tipoDeCambio == "vender" && tipoDeMonto >= 100){ 
        let montoMoneda = tipoDeMonto * tipoDeMoneda.valorCompra;
        let valorFinal = Math.round(montoMoneda);
        document.getElementById('resultadoOK').style.display = "block";
        resultadoTipo.innerText = `Vendió $${tipoDeMonto} ${tipoDeMoneda.nombre.toUpperCase()} a un cambio de $${tipoDeMoneda.valorCompra}, por un valor de ARS$${valorFinal}`;
        localStorage.setItem('localH', resultadoTipo.outerText)
    }else if(tipoDeMonto < 100){
        alert("El monto minimo por operación es de $100")
    }
})


const historial = document.getElementById('historial');
let historialText
let fecha = new Date()
let fecha2 = fecha.toLocaleString()


historial.innerHTML = localStorage.getItem('localH2')
click.addEventListener('click', function(){
    let historialText = document.createElement('p');
    historialText.innerHTML = 
    `
    ${fecha2} ${localStorage.getItem('localH')}
    `
    historial.appendChild(historialText);
    localStorage.setItem('localH2', historial.innerHTML);
})
document.getElementById('borrarH').addEventListener('click', function(){
    historial.innerHTML=
    `
    `
    localStorage.removeItem('localH2')
})