 //   let langs = ["C#", "C++", "JavaScript", "Python"];
      //   let lang1, lang2, lang3, lang4

      //   lang1 = langs[0];
      //   lang2 = langs[1];
      //   lang3 = langs[2];
      //   lang4 = langs[3];

      //   console.log(lang1,lang2,lang3,lang4);

      // Böyle uzun uzun yazmaktansa şöyle yapılabilir.

      let langs = ["C#", "C++", "JavaScript", "Python"];
      let lang1, lang2, lang3, lang4;
      [lang1, lang2, lang3, lang4] = langs;
      console.log(lang1, lang2, lang3, lang4);

      const hesapla = (x, y) => {
        const toplam = x + y;
        const cikar = x - y;
        const carp = x * y;
        const bol = x / y;

        const dizi = [toplam, cikar, carp, bol];
        return dizi;
      };

      let [a, b, c, d] = hesapla(10, 2);
      console.log(a, b, c, d);

      const person = {
        firstName: "Taylan",
        lastName: "Bayraklı",
        age: 29,
        salary: 15000,
      };

      // let isim, soyisim, yas, maas;

      /*    isim = person.firstName;
      soyisim = person.lastName;
      yas = person.age;
      maas = person.salary;
 */

      let { firstName, lastName, age, salary } = person;
      console.log(firstName, lastName, age, salary);


      // VEYA

      let { firstName:isim, lastName:soyisim, age:yas, salary:maas } = person;
      console.log(isim,soyisim,yas,maas);

      //şeklinde de kullanılabilir !