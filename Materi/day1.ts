// versi JS

const message = "Hello";

// versi TS
const message2: string = "Hello";

//============================================= STRING BUILT IN METHOD ========================================================
const name: string = "Ajay";
const name2: string = "Kocak";

console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.replace("A", "P"));
console.log(name.replaceAll("A", "P"));
console.log(name.split(""));
console.log(name.split(" "));
console.log(name.concat(name2)); //atau pake concat "+"
console.log(name.slice(1));
console.log(name.slice(1, 3)); //index mulai dari 0



//============================================= TEMPLATE LITERALS/TEMPLATE STRING ========================================================
const welcome: string = "Welcome";
const name3: string = "Budi";

console.log(welcome + " " + name3);
console.log(`${welcome} ${name3}`);



//============================================= NUMBER BUILT IN METHOD ========================================================
const angka: string = "4000";
console.log(Number(angka));
console.log(parseInt(angka));
console.log(Math.max(1, 2, 3));
console.log(Math.min(1, 2, 3));
//ada Number MIN & MAX Value, cek sendiri aja



//============================================= STRING CONVERSION ========================================================
const angka2: number = 5000;
console.log(String(angka2));
console.log(angka2.toString());



//============================================= BOOLEAN CONVERSION ========================================================
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean("Budi"));
console.log(Boolean(" "));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean("false"));



//============================================= TANGGAL/DATE ========================================================
const now: Date = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth() + 1); // bulan agak aneh karena biasanya kurang 1 jadi '+1'
console.log(now.getDay());
console.log(now.getDate());

now.setDate(10);
now.setMonth(2);
now.setFullYear(2040);

console.log(now);



//============================================= BASIC OPERATOR ========================================================
/*
    +  -> tambah
    -  -> kurang
    *  -> kali
    /  -> bagi
    %  -> modulo (sisa bagi)
    ** -> pangkat
*/

console.log(1 + 1);
console.log(2 - 1);
console.log(4 * 1);
console.log(10 / 5);
console.log(9 % 2); // sisa bagi, berapa kali 2 yang mendekati 9 = 4 -->  4 * 2 = 8  --> 8 - 9 = 1
console.log(3 ** 2);



//============================================= MODIFY IN PLACE ========================================================
let n: number = 4;

n += 2; // n = n + 2

console.log(n);



//============================================= INCREMENT & DECREMENT ========================================================
let counter: number = 1;

counter++; // increment
counter--; //decrement

console.log(counter);



//=========================================== POSTFIX & PREFIX =================================== --> masih nyambung increment & decrement
let counter2: number = 2;

console.log(counter2++); // ini postfix (harusnya 2 tapi ditambahinnya dibelakang layar jadi ditampilin dulu)
// console.log(++counter2): // ini prefix (ditambahin dulu baru ditampilin) hasilnya '3'



//============================================= COMPARISON OPERATOR ========================================================
/*
    ==
    ===
    <
    >
    <=
    >=
*/

//console.log(2 == "2");// pengecekan di valuenya saja hasilnya 'true' (kerana valuenya sama)
//console.log(2 === "2");// pengecekan value dan data type (strict equal) hasilnya 'false' (karena beda tipe)
console.log(2 < 5);
console.log(2 > 5);
console.log(5 <= 5);
console.log(5 >= 5);



//============================================= MATH ========================================================
// Math ceil -> membulatkan angka ke atas
console.log(Math.ceil(4.2));

// Math floor -> membulatkan angka ke bawah
console.log(Math.floor(4.8));

// Math round -> membulatkan angka ke bilangan terdekat
console.log(Math.round(4.8));
console.log(Math.round(4.3));

// Math max -> mengembalikan angka terbesar dari sekumpulan angka
console.log(Math.max(1, 10, 100, 12, 70));

// Math min -> mengembalikan angka terkecil dari sekumpulan angka
console.log(Math.min(1, 10, 100, 12, 70));

// Math abs -> menghilangkan tanda negatif
console.log(Math.abs(-200));

// Math random -> menghasilkan angka acak antara 0 dan 1 atau berapapun
console.log(Math.floor(Math.random() * 100) + 1);
    //bisa lebih spesifik, RUMUS --> Math.floor(Math.random() * (max - min + 1) + min);
const max: number = 20
const min: number = 12

    console.log(Math.floor(Math.random() * (max - min + 1) + min));



//============================================= HOISTING ========================================================

console.log(a);

var a; // <-- var is hoisted (automatically put to the top), so it can be put in log, even when its not set the value first

//console.log(b); <-- bakalan error

let b;

