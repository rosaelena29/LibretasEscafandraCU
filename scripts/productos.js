let carrito = [];
let total = 0;

function agregarAlCarrito(nombre_producto, precio_producto) {
    // alert(nombre + ' ' + precio);
    let producto = { nombre: nombre_producto, precio: precio_producto };
    carrito.push(producto);
    console.log(carrito);
    total = total + precio_producto;
    total_carrito.innerText = '$' + total;
    Swal.fire(
        'Producto agregado',
        'Se ha agregado ' + nombre_producto + ' al carrito de compras',
        'success'
    )
}

function seltama(texto) {
    // alert(nombre + ' ' + precio);
    tama_select.innerText = texto;
}
function salta(Sel){
    if (Sel.ad.selectedIndex != 0){
    document.location=Sel.ad.options[Sel.ad.selectedIndex].value
    }}