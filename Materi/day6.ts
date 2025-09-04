//=============================== OBJECT ORIENTED PROGRAMMING ================================

// cara menuliskan object

const object = {}; // cara 1

const object2 = new Object(); //cara 2

interface User {
    name: string;
    email: string;
    hobby?: string; //<--- kalau mau optional pake '?'
    // greet: {} => void; //<--- artinya fungsi ini tidak me return apapun
    // greet: {} => string; //<--- jika fungsi me return sesuatu isi sesuai dengan fungsinya mereturn apa
}

const user: User = {
    name: "budi",
    email: "budi@mail.com", //<--- jangan lupa coma
    // greet() {
        // console.log("Hello!");
        // return "Hello!"
};
// bisa isi fungsi dalam object

console.log(user.name);
console.log(user["email"]);

//============================================ ADD PROPERTY ==================================================

const person: any = {
    name: "joko",
    age: 30,
};

console.log(person);

person.hobby = "mancing" //<--- nambahin property

console.log(person);

person["address"] = "jakarta"; //<--- atau gini juga bisa

console.log(person);

//============================================ DELETE PROPERTY ==================================================

delete person.address;
delete person["hobby"];

console.log(person);

//============================================ IMMUTABLE & MUTABLE ==================================================
/*
immutable: merujuk pada tipe data yang tidak diubah setelah dibuat
(primitive data type)

mutable: merujuk pada tipe data yang bisa diubah setelah dibuat
(non primitive data type)
*/

//immutable
const count1: number = 4;
let count2: number = count1;
count2 = 10

console.log(count1);
console.log(count2);

//mutable
let orang1: any = {name: "jack"};
// let orang2: any = orang1; // kalo yang ini, kita ganti object2 ini nanti object1 bakal ngikut padahal yang diganti cuma object2
let orang2: any = {...orang1} // shallow copy = bikin object baru dan hanya mereferensi object yg disebut pake '...'

orang2.age = 20

console.log(orang1);
console.log(orang2);

//============================================ OPTIONAL CHAINING ==================================================
const user2: any = {}   //<--- kosong

console.log(user2.address);
// console.log(user2.address.street); // kalo gini gak bakal jalan/mati error, biar ga error pake optional atau '?' seperti dibawah
console.log(user2.address?.street);

//============================================ FOR IN ==================================================
//untuk looping dalam object

const person2: any = {
    name: "siti",
    age: 35,
};

for (const key in person2) {
    console.log(key);
    console.log(person2[key]);
}

person2['name']
console.log(person2['age'])

//============================================ DESTRUCTUTING ASSIGNMENT ==================================================
//mengeluarkan property dalam object/array menjadi sebuah variable

// versi object
const animal: any = {
    name: "joe",
    age: 2,
}

console.log(animal.name); //<--- sebelum destructuring
console.log(animal.age);

const {name, age} = animal; // <--- ini destructuring syntax

console.log(name); 
// |--- setelah destructuring, tinggal panggil key nya aja
console.log(age);

//versi array
const array: number[]= [10, 20]

console.log(array[0]);//<--- sebelum destructuring
console.log(array[1]);

const [nol, satu] = array;// <--- destructuring array, bebas menamai indexnya 

console.log(nol);
//  |--- setelah destructuring, manggilnya sesuai dengan index dan nama yang diberikan saat destructuring
console.log(satu);

//============================================ SPREAD OPERATOR ==================================================
//digunakan untuk copy isi object / menggabungkan object

const objectOne = {name: "joko", password: "Admin123"};
const objectTwo = {email: "joko@mail.com"};

const result = {...objectOne, ...objectTwo}// <--- cara gabungin
// HATI HATI kalau pakai ini jika memiliki 2 key yang sama karena key akan ditimpa dengan key penambah
console.log(result);

//============================================ THIS KEYWORD ==================================================
//mengakses property lain di dalam sebuah object

const person3 = {
    firstName: "jake",
    lastName: "blake",
    greet() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

person3.greet()

//============================================ CLASS ==================================================
// template atau cetakan untuk membuat object

// class declaration (sering terpakai)
class User2 {
    greeting () {
        console.log("Hello World!");
        
    }
}

// class expression
const User3 = class {
    greeting () {    //<------------------------------------ fungsi dalam class biasanya disebut method
        console.log("Hello World!");
        
    }
}

const human = new User2();
const human2 = new User3();
const human3 = new User2();

human.greeting();
human2.greeting();
human3.greeting();

//============================================ CONSTRUCTOR ==================================================
// method bawaan dari class yang akan dijalankan pertama kali saat membuat object baru menggunakan class

//Access Modifier  -> public & private
class Person {
    name: string; // <-- ini public Access jadi bisa di diubah diluar class
    #email: string; // <-- ini private Access jadi hanya bisa diubah di dalam class

    constructor (name: string, email: string) {
        this.name = name;
        this.#email = email;
    }

    greeting() {  //<-------- bisa ditambahin 'private' di depan greeting kalau mau accessnya private
        return `Hello ${this.#email}`
    }

}

const person4 = new Person("budi", "budi@mail.com")
console.log(person4.name);
// console.log(person.#email);

console.log(person4.greeting());











