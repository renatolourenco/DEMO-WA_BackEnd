const express = require('express');
const router = express.Router();

global.db = require('../../db')

router.post('/orders/query', (req, res, next) => {
    const document = req.body.document.replace(/[^0-9]/g, '')
    const query = `SELECT PS.ps_detalhe
                    FROM vClientes
                    INNER JOIN vFavorecido on cln_codfvr = fvr_codigo
                    INNER JOIN vPedido on pdd_codcln = cln_codfvr 
                    INNER JOIN vPedidoDestinatario PD on pd_codpdd = pdd_codigo
                    INNER JOIN vPedidoStatus PS on ps_codpdd = pdd_codigo WHERE PD.pd_documento = '${document}';`;

    global.db.findOrderByQuery(query)
        .then(result => {
            const dbResponse = result.recordset;
            if (dbResponse.length > 0) {
                res.json(dbResponse[0]);
            } else {
                res.json(dbResponse);
            }
        })
        .catch(err => res.json(err))
})

module.exports = router;