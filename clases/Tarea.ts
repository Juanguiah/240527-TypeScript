//Hacer una clase que implemente una interface

interface Saludar{
    decirHola();
}
class SaludarEnEspañol implements {    
    decirHola(){
        return 'Hola';
    }
}

let yo: Saludar = new SaludarEnEspañol()

yo.decirHola