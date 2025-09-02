//===================================== ARRAY ================================================
const arr = [];
const arr2 = new Array();

//array of string
const arrString: string[] = ["A", "B", "C", "D"];

// array of number
const arrNumber: number[] = [1, 2, 3, 4, 5];

console.log(arrString[1]);
console.log(arrNumber[3]);

//object > key > value | tidak peduli urutan | name (key) : "budi" (value) , age (key) : 17 (value)

// untuk memberikan type kepada object harus menggunakan interface (kontrak)
// searching tentang pascal case
interface Student {
  name: string;
  address: string;
  age: number;
  hobby: string[];
}

const student = {
  name: "Budi",
  age: 17,
  address: "Jl. Setiabudi 10",
  hobby: ["badminton", "futsal", "mancing"], // <------- bisa masukkan array ke dalam object
};

// how to access inside of the array
console.log(student.name);

const students = [
  {
    name: "Budi",
    age: 17,
    address: "Jl. Setiabudi 10",
    hobby: ["badminton", "futsal", "mancing"],
  },
  {
    name: "Siti",
    age: 17,
    address: "Jl. Setiabudi 10",
    hobby: ["badminton", "futsal", "mancing"],
  },
];

// how to access array of object
console.log(students[1].name);

//===================================== FOR OF ================================================

/*
for(value 'of' variables) {
    // add logic here
    }
    */

const fruits: string[] = ["apple", "banana", "orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

//===================================== FOR OF ================================================
// 1. Function Declaration
/*
function namaFunction(parameter) {
    // add logic here
    }
    */

// parameter tidak sama dengan argumen

function square(angka: number) {
  return angka * angka;
} // kalau mau menghasilan sesuatu pake "return", return hanya bisa sekali, tidak bisa menambah logic
// dalam satu function yang menggunakan return

console.log(square(10));
console.log(square(5));
console.log(square(23));

// 2. Function Expression
const square2 = function (angka: number) {
    return angka * angka;
}:
// console.log(); <----- cara pengambilan sama aja kayak yang diatas

//===================================== FUNCTION SCOPE ================================================
// 'variable' yang di define atau di buat di dalam function, hanya bisa diakses di dalam function tsb

function greeting() {
  const hello: string = "Hello";

  console.log(hello);

  return hello;
}
// console.log(hello); <------ ini gak akan bisa

//===================================== PARAMETER & ARGUMENT ================================================
// parameter -> variable yng  mewakili value dari argimetn yang dimasukkan
// argument -> value yang dimasukkan saat pemanggilan/eksekusi function

function greeting2(name: string) {
  //console.log("Hello");
  const hello: string = "Hello ";
  return hello + name;
}

//argument
console.log(greeting2("Budi"));

//========================================== DEFAULT PARAMETER ================================================

function multiply(a: number, b: number = 4) {

  console.log(a);
  console.log(b);

  return a * b;
}

console.log(multiply(2)); //<--- kalo argument kosong bakal pake default param
console.log(multiply(2, 10));

//========================================== REST PARAMETER ================================================
// mewakili sisa argument ke dalam 1 variable parameter

function myFunc(a: number, b: number, ...manyMoreArgs: number[]) {
  console.log(a);
  console.log(b);
  console.log(manyMoreArgs);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8);

//========================================== NESTED FUNCTION ================================================
// Fungsi yang berada dalam fungsi

function getMassage(firstName: string) {
  //<------ outer function
  function sayHello() {
    //<------- inner function
    return "Hello " + firstName + ", ";
  }
  function welcome() {
    //<-------- inner function
    return "Welcome to purwadhika";
  }
  return sayHello() + welcome();
}

console.log(getMassage("Budi"));

//========================================== RECURSIVE ================================================
// fungsi yang memanggil dirinya sendiri

function countdown(number: number) {
  console.log(number);

  let nextNumber = number -1;

  if (nextNumber > 0) {
    countdown(nextNumber);
  }
}

countdown(6);

//========================================== ARROW FUNCTION ================================================
// shortcut untuk menuliskan Function Expression

//contoh function expression
const square3 = function (angka: number) {
  return angka * angka;
};

//syntax : (parameter) => {}
//contoh jika diubah ke arrow function
const square4 = (angka: number) => {
  return angka * angka;
};

//kalo hanya satu line bisa disingkat seperti ini
const square5 = (angka: number) => angka * angka;

//========================================== ARRAY BUILT IN METHOD ================================================
// JOIN --> menggabungkan value yang ada dalam array ke dalam bentuk string
const words: string[] = ["Hello", "World"];
console.log(words.join(", ")); //<--tergantung argumen apa yang diinginkan
console.log(words.join(" ")); //<--tergantung argumen apa yang diinginkan
console.log(words.join("")); //<--tergantung argumen apa yang diinginkan

// POP --> menghilangkan value paling akhir/belakang dalam array
const words2: string[] = ["Hello", "World", " TEST"];
words2.pop();
console.log(words2);

// SHIFT --> menghilangkan value paling pertama/depan dalam array
const words3: string[] = ["Hello", "World", " TEST"];
console.log(words3);
words3.shift();
console.log(words3);

// UNSHIFT --> menambahkan value ke ururtan paling depan dalam array
const words4: string[] = ["Hello", "World", " TEST"];
words4.unshift("joko");
console.log(words4);

// PUSH --> menambahkan value ke urutan paling akhir dalam array
const words5: string[] = ["Hello", "World", " TEST"];
words5.push("siti");
console.log(words5);

// SPLICE --> untuk menghapus, mengganti, atau menambahkan value pada sebuah array
// rumus --> splice(startIndex, brpYgMauDiDelete, item)
const months: string[] = ["jan", "mar", "apr", "mei"];
//menambahkan data
months.splice(1, 0, "feb");
console.log(months);

//menghapus data
months.splice(4, 1);
console.log(months);

//mengedit data
months.splice(0, 1, "janu");
console.log(months);

// SLICE --> mereturn array baru berdasarkan start index dan end index
// rumus --> slice(startIndex, endIndex)
const fruits2: string[] = ["apple", "banana", "orange", "mango", "lemon"];
console.log(fruits2.slice(1, 4));

// INDEXOF --> mencari index dari value yang kita cari kalau tidak ditemukan akan mereturn -1
const fruits3: string[] = ["apple", "banana", "orange", "mango", "lemon"];
console.log(fruits3.indexOf("orange"));

// SORT --> mengurutkan isi array berupa string atau number
const fruits4: string[] = ["banana", "orange", "apple", "mango", "lemon"];
fruits4.sort();
console.log(fruits4);

const points: number[] = [2, 8, 6, 4, 5, 10];
points.sort();
console.log(points); //<-- kurang bagus sepuluh didepan karena ngebaca angka depan

points.sort((a, b) => a - b); //<-- ascending / kecil ke besar
console.log(points);

points.sort((a, b) => b - a); //<-- descending / besar ke kecil
console.log(points);

// REVERSE --> membalikkan urutan element dalam array
const points2: number[] = [2, 8, 6, 4, 5, 10];
points2.reverse();
console.log(points2);

// INCLUDES --> mengecek value pada array ada atau tidak. Hasil returnya adalah boolean
const fruits5: string[] = ["banana", "orange", "apple", "mango", "lemon"];
console.log(fruits5.includes("apple"));
console.log(fruits5.includes("rambutan"));

// MAP --> melakukan looping pada array dan akan mereturn array baru
const points3: number[] = [1, 2, 3, 4, 5];

const result = points3.map((point, index) => {
  console.log(index);

  return point * 2;
});

console.log(result);

// FOREACH --> melakukan looping pada array tapi tidak mereturn array baru
const fruits6: string[] = ["banana", "orange", "apple", "mango", "lemon"];
fruits6.forEach((fruit, index) => {
  console.log(index);
  console.log(fruit);
});

// FILTER --> melakukan loopin pada array dan menghasilkan array baru berdarkan kondisi pada return yang functionnya
const ages: number[] = [32, 15, 41, 22, 31];
const result4 = ages.filter((age) => {
  return age > 22;
});
console.log(result4);

// FIND --> mencari value yang ditemukan pertama kali dalam array
const ages2: number[] = [32, 15, 41, 22, 31, 45, 15];
const result5 = ages2.find((age) => {
  return age > 14 && age < 16;
});
console.log(result5);

// FINDINDEX --> mirip kaya find tapi yang dihasilkan adalah indexnya
const ages3: number[] = [9, 12, 15, 40, 22, 12];
const result6 = ages3.findIndex((age) => {
  return age > 12;
});
console.log(result6); // ini index -->

// REDUCE --> biasa digunakan untuk melakukan operasi aritmatika pada tiap isi array
const numbers: number[] = [200, 50, 100, 50];

const result7 = numbers.reduce((a, b) => {
  return a + b; // tergantung kebutuhan bisa "*", "-", "/"
});
console.log(result7);
