const {v4: uuid} = require('uuid')

const dia = new Date().toDateString()
class Tarea {
    

    id = '';
    description = '';
    completadoEn = null;
    fechaCreada = `${dia}`


    constructor(description){
        this.id = uuid()
        this.description = description;

    }

}
module.exports = Tarea;