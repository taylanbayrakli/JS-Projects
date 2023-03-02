const set = new Set();
set.add("Taylan");
set.add(29);
set.add(29);
set.add(29);
set.add(29);
set.add(29);
set.add({ username: "taylan", password: 1 });
set.add([1, 2, 3, 4]);

// bir item bir kez kaydedildiği için birden fazla eklenen aynı itemler size'ı değiştirmez.

console.log(set.size);