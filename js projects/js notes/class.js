class MobilePhone {
    constructor(brand, model, price) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }

    showSpecs() {
      console.log(this.brand, this.model, this.price);
    }
  }


  ///////////////////////////////////////////////////////////////////////////////

  class Apple extends MobilePhone {
    constructor(brand, model, price) {
      super(brand, model, price);
    }

    showAppleSpecs() {
      super.showSpecs();
    }
  }

  const iphone13 = new Apple("Apple", "IP13", "799$");
  iphone13.showAppleSpecs();


  ///////////////////////////////////////////////////////////////////////////////

  class Samsung extends MobilePhone {
    constructor(brand, model, price) {
      super(brand, model, price);
    }
    showSamsungSpecs() {
      super.showSpecs();
    }
  }

  const samsungS22 = new Samsung("Samsung", "S22", "749$");
  samsungS22.showSamsungSpecs();

  ///////////////////////////////////////////////////////////////////////////////


  class Xiaomi extends MobilePhone {
    constructor(brand, model, price) {
      super(brand, model, price);
    }

    showXiaomiSpecs() {
      super.showSpecs();
    }
  }

  const mi12 = new Xiaomi("Xiaomi", "Mi12", "699$");
  mi12.showXiaomiSpecs();