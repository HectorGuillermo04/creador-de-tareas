const { resolve } = require('path');


require('colors');

const monstrarMsg = () => {

    return new Promise(resolve => {

        console.clear();
        console.log('==============================='.green)
        console.log('   SELECCIONA UNA OPCION'.yellow)
        console.log('        Version 1.0'.white)
        console.log('===============================\n'.green)
        console.log(`${'1.'.green} Crear tareas`)
        console.log(`${'2.'.green} Listar tareas`)
        console.log(`${'3.'.green} Lista de tareas completadas`)
        console.log(`${'4.'.green} Lista de tareas pendientes`)
        console.log(`${'5.'.green} Completar tarea(s)`)
        console.log(`${'6.'.green} Borrar Tarea`)
        console.log(`${'0.'.green} Salir\n`)
    
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question('Selecciona una opcion: ' , (opcion) => {

            readline.close()
            resolve(opcion)
        })

    })





};


const Pausar = () => {
    return new Promise(resolve => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question(`\nPrecione ${'ENTER'.green} para continuar\n` , (opt) => {
            readline.close()
            resolve()
        })    
    })

   
}

module.exports = {
    monstrarMsg,
    Pausar
}