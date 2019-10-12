const fs = require('fs');


let listadoPorHacer = [];


const guardarDB = () => {


    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data,
        (err) => {
            if (err) throw new Error('no se pudo grabar')
        }
    )

}


const crear = (descripcion) => {

    try {
        cargarDB()

    } catch (error) {
        listadoPorHacer = []
    }

    let porHacer = {


        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB()
    return porHacer;
}




const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = []

    }
}


const getListado = () => {

    cargarDB()
    return listadoPorHacer

}




const actualizar = (de, completado = true)=>{
    cargarDB();
    let index = listadoPorHacer.findIndex(
        tarea =>
         tarea.descripcion === de
    );
    console.log(index)

    if(index >= 0){
        listadoPorHacer[index].completado = completado
        guardarDB()
        return true
    }else{
        return false
    }
}

const borrar = (de)=>{
    cargarDB();
    let index = listadoPorHacer.findIndex(
        tarea =>
         tarea.descripcion === de
    );
    console.log(index)

    if(index >= 0){
        listadoPorHacer.splice(index, 1)
        guardarDB()
        return true
    }else{
        return false
    }
}


module.exports = {
    crear, guardarDB, getListado,actualizar, borrar
}