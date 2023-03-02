class Insan {
  constructor(name, surname) {
    this.isim = name;
    this.soyisim = surname;
  }

  showInfo() {
    console.log(`
          Ad: ${this.isim}
          Soyad: ${this.soyisim}
          
          `);
  }
}

const insan1 = new Insan("Taylan", "Bayraklı");
const insan2 = new Insan("Tayo", "Bayo");

insan1.showInfo();

console.log(insan2.isim, insan2.soyisim);