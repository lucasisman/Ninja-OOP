class Ninja {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 100; // Salud predeterminada de 100
        this.velocidad = 3; // Velocidad predeterminada de 3
        this.fuerza = 3; // Fuerza predeterminada de 3
    }

    sayName() {
        console.log(`Mi nombre es ${this.nombre}.`);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Salud: ${this.salud}`);
        console.log(`Velocidad: ${this.velocidad}`);
        console.log(`Fuerza: ${this.fuerza}`);
    }

    drinkSake() {
        this.salud += 10;
        console.log(`${this.nombre} bebió sake y ahora tiene ${this.salud} de salud.`);
    }
}

const ninja1 = new Ninja("Lucas");
ninja1.sayName(); // Salida: Mi nombre es Lucas.
ninja1.showStats();
// Salida:
// Nombre: Lucas
// Salud: 100
// Velocidad: 3
// Fuerza: 3

  ninja1.drinkSake(); // Salida: Lucas bebió sake y ahora tiene 110 de salud.