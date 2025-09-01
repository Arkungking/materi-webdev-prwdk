// SOAL 1
// buat code untuk ngecek apakah suatu angkat itu genap atau ganjil

let userInput: number = 35;

if (userInput % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// SOAL 2
// angka prima adalah angka asli yang lebih dari satu dan hanya memiliki 2 faktor pembagi, yaitu 1 dan angka itu sendiri
// 2, 3, 5, 7, 11

let input: number = 6;
let isPrime: boolean = true;

for (let i = 2; i < input; i++) {
    if (input % i === 0)
        isPrime = false;
        break;
} 
    if (isPrime) {
        console.log(input + " angka prima");
    } else {
        console.log(input + " bukan angka prima");
        
    }

// SOAL 3
// buat code untuk mencari hasil dari penjumlahan dari angka 1 hingga N

let N: number = 16;
let sumNumber: number = 0;

for (let i = 1; i <= N; i++) {
  sumNumber = sumNumber + i;
}
console.log("Penjumlahan dari 1 hingga " + N + " adalah " + sumNumber); //<--- log taro di luar

// SOAL 4
// buat code untuk mencari faktorial dari sebuah angka

let inputNumber: number = 4;
let factorialResult: number = inputNumber;

for (let i = inputNumber - 1; i >= 1; i--) {
  factorialResult = factorialResult * i; 
}

console.log("factorial dari " + inputNumber + " = " + factorialResult);

// SOAL 5
// buat code untuk mencetak N pertama dari angka fibonacci
// fibonacci adalah pertambahan antara dua angka sebelumnya

let numb: number = 12;

let n1: number = 1;
let n2: number = 1;
let sum: number = 1;

for (let i = 2; i < numb; i++) {
  sum = n1 + n2;
  n1 = n2;       
  n2 = sum;      
}
console.log(sum);

/*
    EXPLAINATION:
    Start: n1 = 1, n2 = 1

    i = 2 → sum = 1 + 1 = 2, --> then n1 = 1, n2 = 2

    i = 3 → sum = 1 + 2 = 3, --> then n1 = 2, n2 = 3

    i = 4 → sum = 2 + 3 = 5, --> then n1 = 3, n2 = 5

    i = 5 → sum = 3 + 5 = 8, --> then n1 = 5, n2 = 8

    i = 11 → finally gives the 12th Fibonacci number
*/