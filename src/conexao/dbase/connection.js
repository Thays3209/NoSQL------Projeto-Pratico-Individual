const mongoose = require('mongoose')

function connection() {
    mongoose.connect("mongodb://localhost/fseletro",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
})

    .then(() => {
        console.log('MongoDB Conectado!')
    })
    .catch((error) => {
        console.log(`Erro: ${error}`)
    })
}

module.exports = connection()