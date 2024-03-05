class Ninja {
    constructor(nombre) {
      this.nombre = nombre;
      this.salud = 100;
      this.velocidad = 3;
      this.fuerza = 3;
    }
    sayName() {
        console.log(`Soy el Ninja ${this.nombre}`);
      }

    showStats() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Fuerza: ${this.fuerza}`);
        console.log(`Velocidad: ${this.velocidad}`);
        console.log(`Salud: ${this.salud}`);
      }
    drinkSake() {
        this.salud += 10;
        console.log(`${this.nombre} ganó 10 puntos de salud. Salud actual: ${this.salud}`);
      }
    }

    const ninja1 = new Ninja("Hyabusa");

    ninja1.sayName();
    ninja1.showStats();
    ninja1.drinkSake();


    class Sensei extends Ninja {
        constructor(nombre) {
          super(nombre);
          this.salud = 200;
          this.velocidad = 10;
          this.fuerza = 10;
          this.sabiduria = 10;
        }
      
        speakWisdom() {
          super.drinkSake();
          console.log(`El sabio ${this.nombre} dice: "La paciencia es la clave de la sabiduría."`);
        }
      }
      
      const sensei1 = new Sensei("Maestro Splinter");
      
      sensei1.sayName();
      sensei1.showStats();
      sensei1.speakWisdom();
      