const getReferencias = (req, res) => {
    res.send('Referencias');
}

const getReferencia = (req, res) => {
    res.send('Referencia');
}

const createReferencia = (req, res) => {
    const referencia = req.body;
    console.log(referencia);
    res.send('Referencias post');
}

const updateReferencia = (req, res) => {
    res.send('Referencias put');
}

const deleteReferencia = (req, res) => {
    res.send('Referencias delete');
}

module.exports = {
    getReferencias,
    getReferencia,
    createReferencia,
    updateReferencia,
    deleteReferencia
}