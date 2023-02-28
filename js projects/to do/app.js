//! STEP 1 Çağırma İşlemleri

const addInput = document.querySelector("#addInput");
const deleteButton = document.querySelector("#deleteButton");
const addBox = document.querySelector(".addBox");
const listBox = document.querySelector(".listBox");
const list = document.querySelector("#list");
const form = document.querySelector("#form");
const form2 = document.querySelector("#form2");
const addedP = document.querySelector("#addedP");
const deletedP = document.querySelector("#deletedP");
const searchInput = document.querySelector("#searchInput");
let tasks = [];

//! STEP 2 EventListenerları Ekleme
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addTodo);
    list.addEventListener("click", done);
    list.addEventListener("dblclick", deleteTask);
    deleteButton.addEventListener("click", deleteAll);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    searchInput.addEventListener("keyup", filter);
}


// !! STEP 4 Store'daki değerleri ekrana yazdırma


function pageLoaded() {
    check();
    tasks.forEach(function (task) {
        addToUI(task);
    })
}


//!! STEP 5 searchbar filtreleme işlemleri
function filter(e) {
    const filterValue = e.target.value.toLowerCase().trim();
    const todoList = document.querySelectorAll("#eleman");

    if (todoList.length > 0) {

        todoList.forEach(function (todo) {
            if (todo.textContent.toLowerCase().trim().includes(filterValue)) {
                todo.setAttribute("style", "display:block");
            } else {
                todo.setAttribute("style", "display:none");
            }
        })
    } else {
        alert("Arama yapabilmek için listede en az bir değer olmalıdır!");
    }
}




//! STEP 3 Fonksiyonları Oluşturma
function addTodo(e) {

    const text = addInput.value.trim();
    if (text === "" || text === null) {
        alert("Lütfen bir görev ekleyiniz!");
    } else {

        // Arayüze eklemek için;

        addToUI(text);

        //Storage'a eklemek için;

        addToStorage(text);

        //Bilgi eklemek için

        addInfo();

    }

    e.preventDefault();
}

function addToUI(e) {
    const li = document.createElement("li");
    li.textContent = e;
    li.id = "eleman";
    list.appendChild(li);
    addInput.value = "";
}


//info mesajı

function addInfo(e) {

    const info = document.createElement("p");
    info.textContent = "Görev başarılı bir şekilde eklendi!"
    addedP.appendChild(info);
    addedP.style.backgroundColor = "#D4EDDA";
    addedP.style.transition = ".3s"
    setTimeout(() => {
        addedP.textContent = "";
    }, 1000);
}

function addToStorage(e) {
    check();
    tasks.push(e);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Storage durumunu kontrol etmek için;




function check(e) {
    if (localStorage.getItem("tasks") == null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
}

function done(e) {
    e.target.style.textDecoration = "line-through";
    e.target.style.color = "red";
}

function deleteTask(e) {
    // Arayüzden Sil
    e.target.remove();

    // Store'dan Sil
    const deleted = e.target;
    removeFromStorage(deleted.textContent);

    //Bİlgi eklemek için

    deleteInfo();

}

//info mesajı
function deleteInfo() {
    const info = document.createElement("p");
    info.textContent = "Görev başarılı bir şekilde silindi!"
    deletedP.appendChild(info);
    deletedP.style.backgroundColor = "#F8D7DA";
    deletedP.style.transition = ".3s"

    setTimeout(() => {
        deletedP.textContent = "";
    }, 1000);
}


function removeFromStorage(e) {
    check();
    tasks.forEach(function (task, index) {
        if (e === task) { //eğer bana dışarıdan gelen e değeri task'a eşitse
            tasks.splice(index, 1); //indexten başla ve 1 adet sil. yani kendini silmiş olur.
        }
    })
    //sonra local storage'a arrayin güncel halini setle.

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function deleteAll() {
    if (confirm("Tümünü silmek istediğinize emin misiniz?")) {
        const todoListesi = document.querySelectorAll("#eleman");
        if (todoListesi.length > 0) {
            //Ekrandan Silme
            todoListesi.forEach(function (todo) {
                todo.remove();
            });
            //Storage'dan Silme
            tasks = [];
            localStorage.setItem("tasks", JSON.stringify(tasks));
            alert("Tüm görevler başarılı bir şekilde silindi!");

        } else {
            alert("Silmek için en az bir todo olmalıdır");
        }
    }
}


//info mesajı
function deleteAllInfo() {
    const info = document.createElement("p");
    info.textContent = "Tüm görevler başarılı bir şekilde silindi!"
    deletedP.appendChild(info);
    deletedP.style.backgroundColor = "#F8D7DA";
    deletedP.style.transition = ".3s"

    setTimeout(() => {
        deletedP.textContent = "";
    }, 1000);
}
