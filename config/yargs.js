

// const opt = {
//     descripcion: {
//         demand: true,
//         alias: 'd'
//     },
//     completado: {
//         alias: 'c',
//         default: true
//     }
// }



const descripcion = {
    demand: true,
            alias: 'd',
}

const completado = {
    alias: 'c',
            default: true
}

const argv = require('yargs')
    .command('crear', 'Crea un articulo', {
        descripcion
    })
    .command('Actualizar', 'Actualiza el estado', {
        descripcion, completado
    })
    .command('Borrar', 'Borrar el estado', {
        descripcion
    })
    .help()
    .argv;



module.exports = {
    argv
}