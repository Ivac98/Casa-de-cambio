let moneda = document.getElementById('moneda');
let change = document.getElementById('change-type');
let monto = document.getElementById('monto');
let montoOp = document.getElementById('monto-op');
let taza = document.getElementById('taza');
let realizar = document.getElementById('realizar')
let error = document.getElementById('error')



function realizarCambio() {
    fetch(`https://v6.exchangerate-api.com/v6/397d1bd4552b3a3c3315c574/latest/${moneda.value}`)
        .then(res => res.json())
        .then(data => {
            let cambio = data.conversion_rates.ARS;
            if (monto.value >= 1) {
                realizar.disabled = false
                error.style.display = "none"
                let montoCurrency = new Intl.NumberFormat("es-sp").format(monto.value)
                console.log(montoCurrency)
                if (change.value == "comprar") {
                    let montoFinal = (monto.value * (cambio * 0.95)).toFixed(2);
                    let montoCurrency2 = new Intl.NumberFormat("es-sp").format(montoFinal);
                    console.log(montoFinal)
                    taza.innerText = `1 ${moneda.value} = ${(cambio * 0.95).toFixed(5)} ARS`
                    realizar.addEventListener("click", function () {
                        montoOp.innerText = `Compra realizada: ${montoCurrency} ${moneda.value} por un valor de $${montoCurrency2} ARS`
                        localStorage.setItem('localHist', montoOp.outerText);
                        const Toast = Swal.mixin({
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 2000,
                            color: "#2d2d2d",
                            background: "#8598cd",
                            didOpen: (toast) => {
                                toast.onmouseenter = Swal.stopTimer;
                                toast.onmouseleave = Swal.resumeTimer;
                            }
                        });
                        Toast.fire({
                            icon: "success",
                            title: "Transaccion realizada"
                        });
                    })
                } else if (change.value == "vender") {
                    let montoFinal = (monto.value * (cambio * 1.05)).toFixed(2);
                    let montoCurrency2 = new Intl.NumberFormat("es-sp").format(montoFinal);
                    taza.innerText = `1 ${moneda.value} = ${(cambio * 1.05).toFixed(5)} ARS`
                    realizar.addEventListener("click", function () {
                        montoOp.innerText = `Venta realizada: ${montoCurrency} ${moneda.value} por un valor de $${montoCurrency2} ARS`
                        localStorage.setItem('localHist', montoOp.outerText);
                        const Toast = Swal.mixin({
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 2000,
                            color: "#2d2d2d",
                            background: "#8598cd",
                            didOpen: (toast) => {
                                toast.onmouseenter = Swal.stopTimer;
                                toast.onmouseleave = Swal.resumeTimer;
                            }
                        });
                        Toast.fire({
                            icon: "success",
                            title: "Transaccion realizada"
                        });
                    })
                }
            }
            else {
                realizar.disabled = true
                error.style.display = "block"
            }
        })
};
realizarCambio();
change.addEventListener('change', realizarCambio);
moneda.addEventListener('change', realizarCambio);
monto.addEventListener('input', realizarCambio);


const historial = document.getElementById('historial');
let historialText;
let fecha = new Date();
let fecha2 = fecha.toLocaleString();

historial.innerHTML = localStorage.getItem('localHist2')
realizar.addEventListener('click', function () {
    setTimeout((
        function asd() {
            let historialText = document.createElement('p');
            historialText.innerHTML =
                `
            ${fecha2} --- ${localStorage.getItem('localHist')} ---
            `
            historial.appendChild(historialText);
            localStorage.setItem('localHist2', historial.innerHTML);
        }), 100)
})
document.getElementById('borrar').addEventListener('click', function () {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Estas seguro?",
        text: "Estas por eliminar el historial!!",
        icon: "warning",
        color: "#2d2d2d",
        background: "#8598cd",
        showCancelButton: true,
        confirmButtonText: "Borrar",
        confirmButtonColor: "#2d2d2d",
        cancelButtonText: "Cancelar",
        cancelButtonColor: "#2d2d2d",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            historial.innerHTML =
                `
                `
            localStorage.removeItem('localHist2');
            swalWithBootstrapButtons.fire({
                title: "Borrado!",
                text: "Tu historial ha sido borrado",
                icon: "success",
                color: "#2d2d2d",
                background: "#8598cd"
            });
        }
    });
})

