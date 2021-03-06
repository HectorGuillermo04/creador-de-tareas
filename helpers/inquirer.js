const inquirer = require('inquirer');
require('colors');


const preguntas = [
    {
        type: 'list',
        name: 'opt',
        message: 'Que deseas hacer',
        choices: [
            {
                value: '1',
                name: `${'1'.green} Crear tareas`
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Lista de tareas completadas'
            },
            {
                value: '4',
                name: '4. Lista de tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tare(s)'
            },
            {
                value: '6',
                name: '6. Borrar tareas'
            },       
            {
                value: '0',
                name: '0. Salir'
            },   
        ]
    } 
]

const respuesta = [
    {
        type: 'input',
        name:'respuesta',
        message : `Precione ${'ENTER'.green} para continuar`

    }
]

const inquirerMenu = async () => {
    console.clear()
    console.log('==============================='.green)
    console.log('   SELECCIONA UNA OPCION'.yellow)
    console.log('        Version 1.0'.white)
    console.log('===============================\n'.green) 

    const {opt} = await inquirer.prompt(preguntas)
    return opt
}

const Pausa = async () => {

    console.log('\n')
    await inquirer.prompt(respuesta)

}

const leerDatos = async (message) => {

    const question = [
        {
            type:'input',
            name: 'desc',
            message,
            validate(value) {
                if(value.length === 0) {
                    return 'El campo no puede ir vacio'
                }
                if(value.length < 10) {
                    return 'La tarea debe contener maximo 10 caracteres'
                }   
                return true;
            }

        }
    ];
    const {desc} = await inquirer.prompt(question)
    return desc;
}

module.exports = {
    inquirerMenu,
    Pausa,
    leerDatos
}