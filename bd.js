const bd = require('mongoose')

bd.Promise = global.Promise

async function conectar(uri) {
    await bd.connect(uri, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        dbName:'tiendita_jmartinez'
    })
    .then((data) => {
        console.log('[db] - Conexión exitosa.')
    })
    .catch((error) => {
        console.log('[error log] - ' + error)
    })
}

module.exports = conectar