/*crear una clase persona con propiedades como nombre, edad, documento identidad y metodos como caminar(), hablar(), comer().
crear algunos objetos persona e interacturar con sus propiedades y metodos*/

class Persona {
    nombre: string;
    edad: number;
    documentoID: number;

    constructor(nombre:string, edad:number, documentoID:number){
        this.nombre =nombre;
        this.edad=edad;
        this.documentoID=documentoID;
    }

    /*metodos*/
    caminar(){
        console.log(`Hola, soy ${this.nombre} tengo ${this.edad} y estoy caminando`)
    }
    hablar(){
        console.log(`Mi documento de identidad es ${this.documentoID} me llamo ${this.nombre} y tengo ${this.edad}`)
    }
    comer(){
        console.log(`Tengo ${this.edad} me llamo ${this.nombre} y estoy comiendo`)
    }
}
const mensaje1 = new Persona("Valentina", 17, 1025532292);
const mensaje2 = new Persona("Andres", 24, 123456789);
const mensaje3 = new Persona("Stefannia", 20, 987654321);
mensaje1.caminar();
mensaje2.hablar();
mensaje3.comer();
