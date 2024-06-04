//¿Para que sirve el constructor en las clases?
//Es un método especial que se llama automáticamente cuando se crea
//Una instancia de esa clase, sirve para inicializars el objeto y
//prepararlo para su uso. en otras palabras el constructor, recibe 
//parámetros y puede asignar valores iniciales a la clase.

class Persona {    
    nombre: string = "";
    apellido: string = ""
    // constructor(/* argumentos o inyección de dependencias */){
    //     /*
    //     Para dar valores iniciales a la clase.
    //     */
    // }
    constructor(apellido:string){
        this.nombre = "Daniel";
        this.apellido = apellido;
    }

    saludar(){
        console.log(`Hola mundo ${this.nombre}${this.apellido}`)
    }
}

const personas = new Persona("Garces");

