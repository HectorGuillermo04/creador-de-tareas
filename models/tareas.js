const Tarea = require('./tarea')
require('colors')


class Tareas {


     _listado = {};

     get listadoArray () {

        const listaTareas = []
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]
            listaTareas.push(tarea)
        })
        return listaTareas;
        
     }

     constructor(){
         this._listado = {}
     }


     cargarTareas (tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea
        })

     }
     
     listadoCompleto() {
         //i es el indice que te da por default foreach
        console.log('')
        this.listadoArray.forEach((tarea , i) => {
            const {completadoEn, description , fechaCreada} = tarea
            const ix = `${i+1}.`.green
    
            const estado = (completadoEn) 
                                ? `Completada`.green
                                : `Pendiente`.red
            console.log(`${ix} ${description} :: ${estado} | Creada: ${fechaCreada}` )

            

        })
     }
     listarTareasCompletadas(completadas = true) {
        let indice = 0
        console.log('')
        this.listadoArray.forEach(tarea => {
            const {completadoEn, description} = tarea

    
            const estado = (completadoEn) 
                                ? `Completada`.green
                                : `Pendiente`.red

            if(completadas) {
                if(completadoEn) {
                    indice += 1
                    console.log(`${indice.toString().green} ${description} :: ${estado}` )
                }

            } else {
                if(completadoEn == null) {


                    indice += 1
                    console.log(`${indice.toString().green} ${description} :: ${estado}` )
                }
            }
            

            

        })
        
     }


     crearTarea(desc = '') {
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
     }
}

module.exports = Tareas 