/*Crear una clase Hotel con propiedades como nombre y ubicación. Crear clase Habitación con número de
habitación, precio y estado. Agregar métodos para reservar y liberar habitación. Probar con algunos hoteles e
interacciones. */
class Hotel{
    nombre:string;
    ubicacion:string;

    constructor(nombre:string, ubicacion:string){
        this.nombre=nombre;
        this.ubicacion=ubicacion;
    }
}
class Habitacion extends Hotel {
    numeroHabitacion: number;
    precio: number;
    estado: string;

    constructor(nombre: string, ubicacion: string, numeroHabitacion: number, precio: number) {
        super(nombre, ubicacion);
        this.numeroHabitacion = numeroHabitacion;
        this.precio = precio;
        this.estado = "disponible"; 
    }

    reservar() {
        if (this.estado === "disponible") {
            this.estado = "ocupada";
            console.log(`Habitación ${this.numeroHabitacion} en el hotel ${this.nombre} ha sido reservada.`);
        } else {
            console.log(`La habitación ${this.numeroHabitacion} ya está ocupada.`);
        }
    }

    liberar() {
        if (this.estado === "ocupada") {
            this.estado = "disponible";
            console.log(`Habitación ${this.numeroHabitacion} en el hotel ${this.nombre} ha sido liberada.`);
        } else {
            console.log(`Su reserva a la habitación ${this.numeroHabitacion} ha sido cancelada satisfactoriamente.`);
        }
    }
}

const nuevaReserva= new Habitacion("El dorado", "carrera 12#059", 207, 57000);
nuevaReserva.reservar();
const nuevaReserva2 =new Habitacion("Quindio hotel", "Barrio el limonar", 509, 62000);
    nuevaReserva2.reservar();
const eliminarReserva= new Habitacion("El dorado", "carrera 12#059", 207, 57000)
eliminarReserva.liberar();