require('colors')


const {monstrarMsg , Pausar} = require('./helpers/mensajes')

const main = async () => {
    console.clear()

    let opcion = ''

    do{
       opcion = await monstrarMsg()
       console.log({opcion})

       await Pausar()
    } while (opcion !== '0')




    // Pausar()
};

main();