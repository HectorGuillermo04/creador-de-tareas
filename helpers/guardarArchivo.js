
const fs = require('fs')
const url = './db/tarea.json'

const guardarArchivo = (data) => {

    fs.writeFileSync(url, JSON.stringify(data))
};

const leerArchivos = () => {

    if(! fs.existsSync(url)){
        return null
    }

    const info = fs.readFileSync(url,{encoding: 'utf-8'});
    const data = JSON.parse(info)
    console.log(data)

    return data;
}

module.exports = {
    guardarArchivo,
    leerArchivos
}