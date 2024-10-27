/*Crear una clase FiguraGeometrica y subclases Triángulo, Círculo y Cuadrado. Implementar el método area() en
cada subclase. Crear objetos y calcular sus áreas. */

class FiguraGeometrica {
area(){
}
}    

class Triangulo extends FiguraGeometrica {
    base: number;
    alto: number;

    constructor(base: number, alto: number) {
        super();
        this.base = base;
        this.alto = alto;
    };
//Calculo de area de un triangulo 
area():number{
    return (this.base*this.alto)/2;
}
}

// CUADRADO
class Cuadrado extends FiguraGeometrica{
    base:number;
    alto:number;
    constructor(base: number, alto: number) {
        super();
        this.base = base;
        this.alto = alto;
    };
//Calculo del area de un cuadrado
area():number{
    return (this.base*this.alto);
}
}
// CIRCULO
    class Circulo extends FiguraGeometrica {
        radio: number;
    
        constructor(radio: number) {
            super();
            this.radio = radio;
        }
    
        area(): number {
            return Math.PI * Math.pow(this.radio, 2)
        }
    }


// instancias e interacciones de cada uno


// TRIANGULO
const AreaTriangulo= new Triangulo(2, 7);
AreaTriangulo.area();
console.log(`De acuerdo a los numeros ingresados, el area del triangulo es: ${AreaTriangulo.area()}`)

//CUADRADO
const AreaCuadrado= new Cuadrado(2,2);
AreaCuadrado.area();
console.log(`De acuerdo a los numeros ingresados, el area de el cuadrado es: ${AreaCuadrado.area()}`)

//CIRCULO
const AreaCirculo= new Circulo(8)
AreaCirculo.area();
console.log(`De acuerdo a el numero ingresado (correspondiente a medida del radio) el area de el circulo es de: ${AreaCirculo.area()}`)

