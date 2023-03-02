const yazdir = (ad, soyad) => {
    console.log("Merhaba", ad, soyad)
}

yazdir("taylan", "bayraklı");

//eğer kod satırı tek satırdan oluşuyorsa kıvırcık parantezleri kullanmadan da yazabiliriz.


const yazdir2 = (ad, soyad) => console.log("Merhaba benim adım", ad, soyad)
yazdir2("taylan", "bayraklı");

// yine aynı şekilde parametre de tek değerden oluşuyorsa parametre parantezleri de kaldırılabilir.


const yazdir3 = ad => console.log(ad);
yazdir3("tayo");

/////////////////////////////////////////////////


const kupAl = (x) => {
    return x * x * x;
}

console.log(kupAl(3));


// tek bir işlem yapıp return yapıyorsa return'ü de kaldırabiliriz.

const kareAl = x => x * x;
console.log(kareAl(2));
