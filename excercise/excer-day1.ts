// 1 ===============================================================

let panjangRect: number = 5;
let lebarRect: number = 3;

const areaOfRectangle: number = panjangRect * lebarRect;

console.log(areaOfRectangle);

// 2 ===============================================================

panjangRect = 8;
lebarRect = 9;

const perOfRectangle: number = 2 * (panjangRect + lebarRect);
console.log(perOfRectangle);

// 3 ===============================================================

const circRad: number = 5;

const pi = Math.PI;
console.log(pi);

const circDiam: number = 2 * circRad;
console.log(circDiam);

const circCircum: number = pi * circDiam;
console.log(circCircum);

const circArea: number = pi * circRad ** 2;
console.log(circArea);

// 4 ===============================================================

let angel1: number = 80;
let angel2: number = 65;

const angel3: number = 180 - angel1 - angel2;
console.log(angel3);

// 5 ===============================================================

// -convert day into year
// -there's 400 days

let totalDays: number = 400;

totalDays = 5437;

let years: number = Math.floor(totalDays / 365);
console.log(years);

let daysLeft: number = totalDays % 365;
console.log(daysLeft);

let month: number = Math.floor(daysLeft / 30);
console.log(month);

let days: number = daysLeft % 30;
console.log(days);

console.log(
  totalDays +
    " Days" +
    " = " +
    years +
    " year," +
    month +
    " month," +
    days +
    " days."
);

// 6 ================================================================

const dateFrom: Date = new Date("2022-01-20");
let dateTo: Date = new Date("2022-01-22");

console.log((dateTo.getTime() - dateFrom.getTime()) / 86400000);

// TANGGAL DIMULAI DARI 1970-01-01
// TIPE DATA 'Date' PUNYA BUILT IN METHOD UTK AMBIL MILISCND DARI 1970 SAMPE SKRG <-- khusus TS
