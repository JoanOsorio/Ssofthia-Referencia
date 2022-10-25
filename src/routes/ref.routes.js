const { Router } = require('express');
const {getReferencias, getReferencia, createReferencia, updateReferencia, deleteReferencia} = require('../controllers/ref.controller')
const pool = require('../database');
const jwt = require('jsonwebtoken');
const {tokenSecret} = require('../config.js');

const router = Router();

router.get('/', async (req, res) => {
    //Prueba de Conexion a la base de Datos
    const result = await pool.query('SELECT NOW()');
    //console.log(result);
    res.json('executed');
});

router.get('/api', validateToken, (req, res) => {
    res.json({
        username: req.user,
    })
});

router.get('/Login',(req, res) => {
    res.send(`
    <html>
        <head>
            <tittle></tittle>
        </head>
        <body>
            <form method="POST" action="/auth">
                Nombre de Usuario: <input type="text" name="text"><br>
                Contraseña: <input type="password" name="password"><br>
                <input type="submit" value"Iniciar Sesion" />
            </form>
        </body>
    </html>
    `);
});


router.post('/auth',(req, res) => {
    const {username, password} = req.body
    //Validar en Bd username y passqord
    //Crear la tabla de usuarios en la Bd con token 
    const user = {username: username};
    
    const accessToken = generateAccessToken(user);

    res.header('authorization', accessToken).json({
        message: "Usuario autorizado",
        token: accessToken
    });
});

function generateAccessToken(user){
    return jwt.sign(user, tokenSecret.passSecret, {expiresIn: '5m'});
}

function validateToken(req, res, next){
    const accessToken = req.headers['authorization'] || req.query.accesstoken;
    if(!accessToken) res.send('Access Denied');

    jwt.verify(accessToken, tokenSecret.passSecret, (err, user) => {
        if(err){
            res.send('Acces Denied, Token expired or incorret');
        }else{
            req.user = user;
            next();
        }
    });
}


router.get('/Referencias', validateToken, getReferencias);
router.get('/Referencia/', getReferencia);
router.post('/Referencias', createReferencia);
router.put('/Referencias', updateReferencia);
router.delete('/Referencias', deleteReferencia);

module.exports = router;