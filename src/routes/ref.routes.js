const { Router } = require('express');
const pool = require('../database');

const router = Router();

router.get('/', async (req, res) => {
    //Prueba de Conexion a la base de Datos
    const result = await pool.query('SELECT NOW()');
    //console.log(result);
    res.json('executed');
});

router.get('/SS-Referencia/Login',(req, res) => {
    res.send('Login');
});

router.get('/SS-Referencia/Referencias',(req, res) => {
    res.send('Referencias');
});

router.post('/SS-Referencia/Referencias',(req, res) => {
    res.send('Referencias post');
})

router.put('/SS-Referencia/Referencias',(req, res) => {
    res.send('Referencias put');
})

router.delete('/SS-Referencia/Referencias',(req, res) => {
    res.send('Referencias delete');
})

module.exports = router;