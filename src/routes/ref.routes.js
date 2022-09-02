const { Router } = require('express');
const {getReferencias, getReferencia, createReferencia, updateReferencia, deleteReferencia} = require('../controllers/ref.controller')
const pool = require('../database');

const router = Router();

router.get('/', async (req, res) => {
    //Prueba de Conexion a la base de Datos
    const result = await pool.query('SELECT NOW()');
    //console.log(result);
    res.json('executed');
});

router.get('/Login',(req, res) => {
    res.send('Login');
});

router.get('/Referencias', getReferencias);
router.get('/Referencia/', getReferencia);
router.post('/Referencias', createReferencia);
router.put('/Referencias', updateReferencia);
router.delete('/Referencias', deleteReferencia);

module.exports = router;