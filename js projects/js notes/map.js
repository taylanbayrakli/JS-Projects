let value;

const map1 = new Map();

map1.set("a", 1);
map1.set("b", 3);
map1.set("c", 5);

//   console.log(map1.get("b"));

const map2 = new Map();

map2.set("isim", "taylan");
map2.set("soyisim", "bayraklı");
map2.set("yaş", 29);
map2.set("uyruk", "Türk");
map2.set(67, "zonguldak");

//console.log(map2.get("isim"));

value = map2.delete(67);
//console.log(value);

//console.log(map2.size); kaç eleman olduğunu gösterir.

//HAS

//console.log(map2.has("isim"));

// for(let value of map2){
//     console.log(value);
// }

/* const keys =map2.keys();
      console.log(keys);


      // keys.forEach((key)=>{console.log(key)});  ARRAY'E ÇEVİRMEDEN MAPLERİ BU ŞEKİLDE YAZDIRAMAYIZ.
*/

/*   const keys = Array.from(map2.keys());
//şimdi deneyelim                                                             çalışır ama uzun yol. for of loop ile daha kolay bir şekilde yapabiliriz.
keys.forEach((key) => {
  console.log(key, map2.get(key));
}); */

for (let key of map2.keys()) {
  console.log(key);
}

console.log("----------------------------------");

for (let value of map2.values()) {
  console.log(value);
}

// MAPTEN ARRAYE ÇEVİRMEK !

const array = Array.from(map2);
console.log(array);

// ARRAYDEN MAPE ÇEVİRMEK !

const array2 = [
  [34, "İstanbul"],
  [35, "İzmir"],
  [06, "Ankara"],
  [01, "Adana"],
];

const myMap = new Map(array2);
console.log(myMap);