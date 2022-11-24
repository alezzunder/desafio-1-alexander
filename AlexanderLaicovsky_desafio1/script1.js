class Usuario {
    
    constructor ( nombre, apellido, libros, mascotas) {
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
    

    addBook(libro) {
        libro = {nombreLibro: "nombre", escritor: "autor"}
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
//no logre entender como programar bien para que tome a libro como un objeto con dos parametros y estos se entiendan como tal con solo ponerlos 
console.log (U.getBookNames());
