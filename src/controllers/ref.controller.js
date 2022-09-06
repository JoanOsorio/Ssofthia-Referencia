const pool = require('../database')

const getReferencias = async(req, res) => {
    try {
        //Cambiar la consulta para mostrar una vista de solo los datos de la tabla
        const referencias = await pool.query('SELECT * FROM "Referencias"');
        res.json(referencias.rows);
    } catch (error) {
        res.json({ error: error.message });
    }
}

const getReferencia = async (req, res) => {
    try {
        const {id} = req.params;
        const referencia = await pool.query('SELECT * FROM "Referencias" WHERE id = $1',[id]);

        if(referencia.rows.length === 0) 
            return res.status(404).json({
            message: "Referencia no encontrada"
        });

        res.json(referencia.rows[0]);
    } catch (error) {
        res.json({ error: error.message });
    }
}

const createReferencia = async (req, res) => {
    
    const { 
        fecha_solicitud, tipdoc_p, documento_p, nombre1_p, nombre2_p, apellido1_p, apellido2_p, fecha_n, edad, sexo, lugar_nacimiento, 
        regimen, eps, diagnostico, especialidad, tipo_atencion, aislamiento, num_autorizacion, tipdoc_a, documento_a, nombre1_a, nombre2_a, 
        apellido1_a, apellido2_a, direccion, telefono, parentesco, observaciones, nom_medico, regpro_medico, anexo1, anexo2, anexo3, anexo4, 
        anexo5, usuario_referente, estado, tipo_rechazo, fecha_estado, usuario_resp_solicitud
    } = req.body;
    
    try {
        const referencia = await pool.query('INSERT INTO "Referencias" (fecha_solicitud, tipdoc_p, documento_p, nombre1_p, nombre2_p, apellido1_p, apellido2_p, fecha_n, edad, sexo, lugar_nacimiento, regimen, eps, diagnostico, especialidad, tipo_atencion, aislamiento, num_autorizacion, tipdoc_a, documento_a, nombre1_a, nombre2_a, apellido1_a, apellido2_a, direccion, telefono, parentesco, observaciones, nom_medico, regpro_medico, anexo1, anexo2, anexo3, anexo4, anexo5, usuario_referente, estado, tipo_rechazo, fecha_estado, usuario_resp_solicitud) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40) RETURNING *', [
            fecha_solicitud,
            tipdoc_p,
            documento_p, 
            nombre1_p, 
            nombre2_p,
            apellido1_p, 
            apellido2_p, 
            fecha_n, 
            edad,
            sexo, 
            lugar_nacimiento, 
            regimen, 
            eps, 
            diagnostico, 
            especialidad, 
            tipo_atencion, 
            aislamiento, 
            num_autorizacion, 
            tipdoc_a,
            documento_a, 
            nombre1_a, 
            nombre2_a, 
            apellido1_a, 
            apellido2_a, 
            direccion, 
            telefono, 
            parentesco, 
            observaciones, 
            nom_medico,
            regpro_medico, 
            anexo1, 
            anexo2, 
            anexo3, 
            anexo4, 
            anexo5, 
            usuario_referente, 
            estado, 
            tipo_rechazo, 
            fecha_estado, 
            usuario_resp_solicitud
        ]);

        res.json(referencia.rows[0]);
    } catch (error) {
        res.json({ error: error.message });
    }
}

const updateReferencia = async (req, res) => {
    const {id} = req.params;
    const { estado, tipo_rechazo, fecha_estado, usuario_resp_solicitud } = req.body;

    const referencia = await pool.query('UPDATE "Referencias" SET estado = $1, tipo_rechazo = $2, fecha_estado = $3, usuario_resp_solicitud = $4 WHERE id = $5 RETURNING *', [
        estado, 
        tipo_rechazo, 
        fecha_estado, 
        usuario_resp_solicitud,
        id
    ]);

    if(referencia.rows.length === 0) 
        return res.status(404).json({
        message: "Referencia no encontrada"
    });

    res.json(referencia.rows[0]);
}

const deleteReferencia = async (req, res) => {
   
    const {id} = req.params;
    const referencia = await pool.query('DELETE FROM "Referencias" WHERE id = $1',[id]);

    if(referencia.rowCount === 0) 
        return res.status(404).json({
        message: "Referencia no encontrada"
    });

    res.sendStatus(204);
    
}

module.exports = {
    getReferencias,
    getReferencia,
    createReferencia,
    updateReferencia,
    deleteReferencia
}