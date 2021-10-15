import express from 'express';
const router = express.Router();

// Importar modelo
import Producto from '../models/producto';

// Ruta para consultar todos los productos
router.get('/Escafandra/productos', async(req, res) => {
    try {
        const productoDB = await Producto.find();
        res.json(productoDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Se presentó un error al consultar los productos',
            error
        })
    }
});

// Exportar configuración
module.exports = router;