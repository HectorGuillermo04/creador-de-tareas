require('colors')

const {guardarArchivo , leerArchivos } = require('./helpers/guardarArchivo')
const {inquirerMenu , Pausa, leerDatos} = require('./helpers/inquirer');

const Tareas = require('./models/tareas')

const main = async () => {
    console.clear()

    let opcion = ''
    const tareas = new Tareas()

    const tareasDB = leerArchivos();

    if(tareasDB) {
        tareas.cargarTareas(tareasDB)

    }




    do{
        //Imprimir el menu
        opcion = await inquirerMenu()
        switch (opcion) {
            case '1':

                const respuesta = await leerDatos('Escribe nombre de la tarea: ')
                tareas.crearTarea(respuesta)

                break;
            case '2':
                tareas.listadoCompleto()
                break;             
            case '3':
                tareas.listarTareasCompletadas(true)
                break;
            case '4':
                tareas.listarTareasCompletadas(false)
                break;     
        
        };
        guardarArchivo(tareas.listadoArray)



       await Pausa()

    } while (opcion !== '0')




    // Pausar()
};

main();