/*Crear una clase Electrodoméstico con subclases Televisor, Nevera y Lavadora. Cada electrodoméstico tiene
propiedades como precio y color. Crear algunos objetos y probar. */
class Electrodomestico{
    precio:number;
    color: string;
    marca: string;
    constructor(precio:number, color:string, marca:string){
        this.precio=precio;
        this.color=color;
        this.marca=marca;
    }
}
class Televisor extends Electrodomestico{
    compra(){
        console.log(`Su compra de el televisor ${this.marca}, ${this.color} tiene un costo de ${this.precio}`)
    }
}

class Nevera extends Electrodomestico{
    compra(){
        console.log(`Su compra de la nevera marca ${this.marca},${this.color} tiene un costo de ${this.precio}`)
    }
}

class Lavadora extends Electrodomestico{
    compra(){
        console.log(`Su compra de la lavadora marca ${this.marca},${this.color} tiene un costo de ${this.precio}`)
    }
}
const tv1=new Televisor(289000, "negro", "Samsung");
tv1.compra();
const nevera1=new Nevera(470200, "gris","Haceb");
nevera1.compra();
const lavadora1= new Lavadora(1400000, "beige", "Electrolux")
lavadora1.compra();
