class Usuario {
    
    constructor ( nombre, apellido, libros[], mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [libros];
    this.mascotas = [mascotas];
    }

    getFullName () {
        return this.nombre + "" + this.apellido 
        
    }

    //array de mascotas



    addMascota (mascota) { 
        this.mascotas.push(mascota)
    }

    countMascotas() {
        return this.mascotas.length
        }
    

    addBook(nombreLibro, escritor) {
        const libro = {nombre: nombreLibro, autor: escritor}
        this.libros.push (libro);
    }

    getBookNames () {
        return this.libros.nombreLibro
        }
    }


const U = new Usuario ('Carlos ', 'Messi');

user = U.getFullName();
U.addMascota('China');
U.addMascota('Panatufla');
U.countMascotas(); 
U.addBook('La tregua', 'Benedetti');
U.getBookNames();

console.log (user);
console.log (U.countMascotas());
console.log (U.getBookNames());
