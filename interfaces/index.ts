/*
interfaces -> Una interface define un contrato en el código, se cumple todo o no se cumple nada, especifican que propiedades y métodos debe tener un objeto.
*/

// ¿Que es un objeto?
// Es una instancia de una clase o una estructura de datos
// que contiene datos y métodos que operan sobre la información de esos datos
// Básicamente los objetos agrupan propiedades (datos o atributos) y métodos (funciones) en
// una única identidad.

interface Persona {
    edad : number,
    sexo? : string,
    nombre : string,
    apellido : string,
    comer?() : void,
    dormir() : void,
    saltar() : void,
    correr() : void,
    trabajar() : void,
    estudiar() : void
}

let persona: Persona = {
    edad: 35,    
    nombre: '',
    apellido: '',    
    dormir(){},
    saltar(){},
    correr(){},
    trabajar(){},
    estudiar(){},
    sexo: ''
}

let persona2 : Partial<Persona>= {
    nombre: "",
    edad: 25,
}