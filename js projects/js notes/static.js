  ///////////////////////////////////////////////////////

  class Maths {
    sum(a, b) {
      console.log(a + b);
    }

    sub(a, b) {
      console.log(a - b);
    }
  }

  const matematik = new Maths();
  matematik.sum(3, 5);

  //////////////////////////////////////////////////////////////////    // STATIC kullanıldığında ise

  class Taylan {
    static sum(a, b) {
      console.log(a + b);
    }

    sub(a, b) {
      console.log(a - b);
    }
  }

  /*  

const taylan = new Taylan();
taylan.sum(3,5);


hata verecektir.
*/
  // ÇÜNKÜ STATICLERE SINIF ÜZERİNDEN ERİŞİLİR.
  // STATIC OLARAK TANIMLANMAMIŞSA NESNE ÜZERİNDEN ERİŞİLİR.
  //  BUNUN İÇİN CLASS İSMİ ÜZERİNDEN ERİŞECEĞİZ.

  Taylan.sum(5, 7);



  //   böyle çalışır.