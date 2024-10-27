class Pelicula {
    titulo: string;
    duracion: number; //  minutos
    director: string;

    constructor(titulo: string, duracion: number, director: string) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.director = director;
    }
}
class CatalogoPeliculas {
    peliculas: Pelicula[];

    constructor() {
        this.peliculas = [];
    }

    agregarPelicula(pelicula: Pelicula) {
        this.peliculas.push(pelicula);
    }

    buscarPorTitulo(titulo: string): Pelicula | undefined {
        return this.peliculas.find(pelicula => pelicula.titulo === titulo);
    }

    filtrarPorDirector(director: string): Pelicula[] {
        return this.peliculas.filter(pelicula => pelicula.director === director);
    }
}


const catalogo = new CatalogoPeliculas();


const pelicula1 = new Pelicula("Back to the future I", 116, "Robert Zemeckis");
const pelicula2 = new Pelicula("Interstellar", 169, "Christopher Nolan");
const pelicula3 = new Pelicula("La La Land", 128, "Damien Chazelle");


catalogo.agregarPelicula(pelicula1);
catalogo.agregarPelicula(pelicula2);
catalogo.agregarPelicula(pelicula3);


const busquedaTitulo = catalogo.buscarPorTitulo("La La Land");
console.log(busquedaTitulo);

const filtradoDirector = catalogo.filtrarPorDirector("Christopher Nolan");
console.log(filtradoDirector);
