/*Crear una clas vehiculo con subclases coche, barco y avion. cada subclase implementa su propio metodo desplazarse().
crear objetos de las subclases y probar sus metodos */

class Vehiculo{
    tipo:string;

    constructor(tipo:string){
    this.tipo=tipo;
}
desplazar(){
    console.log(`El vehiculo, ${this.tipo} se esta desplazando`);
}
}

class Coche extends Vehiculo{

    constructor(){
        super("Coche");
    }
    desplazarse() {
        console.log(`El ${this.tipo} se esta desplazando por la calle`)
    }
}

class Barco extends Vehiculo {
    constructor() {
        super("Barco");
    }

    desplazarse() {
        console.log(`El ${this.tipo} se esta desplazando por el agua.`);
    }
}

class Avion extends Vehiculo {
    constructor() {
        super("Avión");
    }

    desplazarse() {
        console.log(`El ${this.tipo} se esta dezplazando en el aire.`);
    }
}

// instancias
const miCoche = new Coche();
const miBarco = new Barco();
const miAvion = new Avion();

miCoche.desplazarse();  
miBarco.desplazarse();  
miAvion.desplazarse();
