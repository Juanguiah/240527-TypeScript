interface Personas {
    nombre: string,
    apellido: string
}

function personas(obj:Personas): void{
    console.log(obj.nombre)
    console.log(obj.apellido)
}

personas({nombre: "Daniel", apellido: "Garces"})

function get():string;
function get(id: number): string;
function get(id: string): string;

function get(id?:number | string): any {
    if(id !== undefined){
        //Buscará la información por id
    }else{
        //Buscará toda la información
    }
}


get()