import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productoSchema = new Schema(
    {
        codigoBarras: {type: String, required: [true, 'Código de barras requerido']},
        precio: {type: Number, required: [true, 'Precio requerido']},
        imagen: String,
        descripcion: {type: String, default: 'Lorem'}
    }
);

// Convertir a modelo
const Producto = mongoose.model('Producto', productoSchema);

export default Producto;