// SOAL 1

let inputNumber: number = 5;

for (let i = 1; i < 10; i++) {
    console.log(`${inputNumber} x ${i} = ${inputNumber * i}`);   
}

//SOAL 2

let word: string = "madam";
let palindrome : string = "";

for (let i = word.length-1 ; i >= 0; i--) {
    palindrome = palindrome + word [i]
}

if (palindrome === word) {
        console.log(`${palindrome} is a palindrome`);
} else {
    console.log(`${word} is not a palindrome`);
    
}

//SOAL 3

let km: number = 0.6236262;
let cm: number = 16236;

if (km >= 0) {
    console.log(`${km} km = ${km * 100000} cm`);
}

if (cm >= 0) {
    console.log(`${cm} cm = ${cm / 100000} km`);
}

//SOAL 4

let inputValue: number = 90000;

let currenyFormat : any = new Intl.NumberFormat('id-ID',  {
    style: 'currency',
    currency: 'IDR'
})

let formattedValue = currenyFormat.format(inputValue);

console.log(formattedValue);


//SOAl 5

let inputWord: string = "Hello World";
let search: string = "llo";

const stringSearch: string = inputWord.replace(search, ""); // <--------- this is the method ".replace"
console.log(stringSearch);


//SOAL 6

// looping satu per satu, split berdasarkan index, index "0" jadiin uppercase, abis itu di sambung lagi

let sentence: string = "hello world";

let sentenceSplit = sentence.split(" ");
console.log(sentenceSplit);

for (let i = 0; i < sentenceSplit.length; i++) {
    console.log(i);
    sentenceSplit[i] = sentenceSplit[i][0].toUpperCase() + sentenceSplit[i].slice(1);
}
console.log(sentenceSplit.join(" "));

//SOAL 7

let text: string = "The QuiCk BrOwN Fox";

let swapText: string = "";

for (let i = 0; i < text.length; i++) {
    console.log(i);
    let char = text[i]
    console.log(char);

    if (char === char.toUpperCase()) {
                console.log(char);
        swapText = swapText + char.toLowerCase()
                console.log(swapText);        
    } else {
        swapText = swapText + char.toUpperCase()
        console.log(char);
        
    }
    
}

console.log(swapText);


//SOAL 8
let n1: number = 24;
let n2: number = 56;

console.log(Math.max(n1, n2));

if (n1 < n2) {
    console.log(`${n2} is larger than ${n1}`);
} else {
    console.log(`${n1} is larger than ${n2}`);
    
}

//SOAL 9

let num1: number = 3;
let num2: number = 4;
let num3: number = 5;
let num4: number = 6;

let sorting = [num1, num2, num3, num4].sort((a, b) => b-a);

console.log(sorting);

// bisa juga pake Math.min mau ngurut dari  kecil / kalo cari / ngurut dari paling besar Math.max


//SOAL 10
let input: any = "halo";
let type = typeof input

if (type === "string") {
    console.log("1");
} else if (type === "number") {
    console.log("2");
} else {
    console.log("3");
}

//SOAL 11

let inputText: string = "An apple a day keeps the doctor away"

let changeText: string = inputText.replaceAll(/a/gi, "*")

console.log(changeText);

// excercise day 3  github https://github.com/danielreinhard1129/fundamental-jcwdjktam-37