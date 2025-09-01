//============================================= IF STATEMENT ========================================================

// syntax
/*
    if (condition) {
        code block goes here
    }
*/

const age: number = 19

if (age >= 18) {
    console.log("Anda bisa buat KTP");
}



//============================================= ELSE STATEMENT ========================================================
// backup plan dari if state ment

if (age >= 18) {
    console.log("Anda bisa buat KTP");
} else {
    console.log("Anda belum bis buat KTP");
    
}



//============================================= ELSE IF STATEMENT ========================================================

const grade: string = "B";

if (grade === "A") {
    console.log("Nilai bagus");
} else if (grade === "B") {
    console.log("Nilai lumayan");
} else if (grade === "C") {
    console.log("Belajar lagi!");
} else { 
    console.log("Input nilai tidak diketahui");
}



//============================================= SWITCH CASE ========================================================
/*
    switch (value) {
        case value1:
            //add code here
            break;
        case value2:
            //add code here
            break;
        case value3:
            //add code here
            break;
        default:
            //add code here
            break;
    }
*/


const day: string = "Senin";

switch (day) {
    case "Senin":
        console.log("Hari Senin");
        break;
    case "Selasa":
        console.log("Hari Selasa");
        break;
    case "Rabu":
        console.log("Hari Rabu");
        break;
    default:
        console.log("Hari tidak ditemukan");
        break;       
}



//============================================= LOGICAL OPERATOR ========================================================
// && -> AND
// || -> OR
// ! -> NOT

// AND -> kedua kondisi harus bernilai true agar menghasilkan value true
const umur: number = 20; // <---- umurnya TRUE
const punyaSIM: boolean = false; // <---- tapi ini FALSE

if (umur >= 18 && punyaSIM) {
    console.log("Boleh bawa kendaraan");    
} else {
    console.log("Belum boleh bawa kendaraan"); // <--- jadi hasilnya false dan execute else
    
}

// OR -> kalau salah satu ada yang true (tidak harus kedua kondisinya seperti 'AND') maka hasilnya jadi true juga

const car: string = "BMW";

if (car === "BMW" || car === "Mercy") {
    console.log("Mobil eropa");
} else {
    console.log("Mobil jepang");
}

// NOT -> membalikkan nilai boolean
const isSunny: boolean = false;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining); //<--- mengoutput boolean isSunny tapi dibalik ->



//============================================= TERNARY OPERATOR ========================================================
// shortcut untuk if else statement
// syntax -------> condition ? true : false

const str: string = "javascript";

if (str === "javascript") {
    console.log("this is javascript");
} else {
    console.log("this is not javascript");
}

//str === "javascript" (<-- condition) ? "this is javascript" (<-- if true) : "this is not javascript" (<-- if false)

console.log (str === "javascript" ? "this is javascript" : "this is not javascript");

// else if bisa juga di bikin ternary tapi tidak disarankan karena sangat sulit dibaca / ruwet



//============================================= LOOP STATEMENT (PENGULANGAN) ========================================================
// rangkaian instruksi yang dilakukan berulang kali hingga kondisinya tidak terpenuhi

// tipe loop : for...loop, while...loop, do...while loop  *hint -> semua loop bisa dimasukin if statement

//  ~ FOR LOOP -> mempunyai 3 statement
//    - initialization : menginisialisasikan variable dari looping itu sendiri
//    - condition : mendefine kondisi dari looping tersebut
//    - increment/update : kode yang di eksekusi diakhir setiap iterasi

/*
    for( initialization ; condition ; increment/update ) {     <--- statement2 harus true untuk me loop code
        code block yang akan diulang/di loop    <--- ini bisa dimasukin if statement
      *** setelah loop berjalan, saat looping kedua kalinya ,'for...loop' akan mengabaikan init ***
    } /*
        URUTAN SIKLUS LOOP :
        1. Inisialisasi → let i = ... (jalan sekali di awal)
        2. Kondisi → i <= N (dicek, kalau benar lanjut, kalau salah berhenti)   <----------------------.
        3. Isi perulangan (body) → kode di dalam { ... } dieksekusi setiap kali kondisi benar          :  (ulang lagi tapi dari 2)
        4. Update / Increment / Decrement → i++ atau i-- (jalan terakhir sebelum cek kondisi lagi) ----.
*/

for (let i = 0; i < 10; i++) {
    console.log(i);
}

//  ~ WHILE
//syntax
/*
    while(condition) {
        code block yang akan di loop
    }
*/

let i: number = 0;

while (i < 10) {
    console.log("Semangat Belajar!");
    
    i++;
}

//  ~ DO WHILE <-- melakukan 'DO' dulu sekali, baru ngecek kondisinya, ngecek diakhir
// syntax
/*
    do {
        code block yang akan di loop
    } while (condition);
*/

let count: number = 6;

do {
    console.log("ini iterasi ke : " + count);
    count++;
} while (count <= 5);

// excercise tipis
// cetak angka genap dari 2 sampe 20 menggunakan looping

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0)
    console.log(i);  
}

//============================================= BREAK ========================================================
// untuk menghentikan looping

let sum: number = 0;

while (true) {
    console.log(sum);
    
    if (sum >= 5)
    break;

    sum++;
}



//============================================= CONTINUE ========================================================
// melakukan skip pada looping

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i); // 3 di skip pake continue -->
}
