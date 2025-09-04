// SOAL 1

const angka: number[] = [12, 5, 23, 18, 4, 45, 32];


let angkaSorted = angka.sort((a, b) => a - b);//--------------------- sort
    console.log(angkaSorted);
let angkaLength = angka.length;                        // CHALANGE: COBA BUAT KODE INI JADI FUNGSI!!
    console.log(angkaLength);

let angkaHigh: number = angka[0];
    console.log(angkaHigh);
let angkaLow: number = angka[angka.length - 1];
    console.log(angkaLow);
const sum = angka.reduce((a, b)  => a + b)
    console.log(sum);
const avrg = sum / angkaLength
    console.log(avrg);
    


function search(angka: number[]) {//---------------- not sort
    let angkaMax = Math.max(...angka);
    console.log(angkaMax);
    
    let angkaMin = Math.min(...angka);
    console.log(angkaMin);
    
    const average = angka.reduce((a, b) => a + b)
        return `${angkaMax} angka terbesar, ${angkaMin} angka terkecil, rata-rata ${average / angka.length}`
}

console.log(search(angka));



// SOAL 2

let fruits: string[] = ["apple", "banana", "cherry", "date"];

function addChar(fruits: string[]) {

    fruits.splice(-1, 1, " and date")
    console.log(fruits);
    
    const changedFruits = fruits.join()
    console.log(changedFruits);

    return changedFruits
}

console.log(addChar(fruits));



// SOAL 3

let numb: number[] = [5, 6, 4, 3, 1, 1];

const secondSmallest = function (numb: number[]) {
    return Math.min(...numb) + 1
}                                                 // <--- FLAWED
console.log(secondSmallest(numb));


function secondSmallest2(arr) {
    let smallest = Infinity;
    let secondSmallest2 = Infinity;

    for (const num of arr) {
        if (num < smallest) {                   // <---- CORRECT
            secondSmallest2 = smallest;
            smallest = num;
        } else if (num < secondSmallest2 && num > smallest) {
            secondSmallest2 = num;
        }
    }

    return secondSmallest2
}

console.log(secondSmallest2(numb));


// SOAL 4

let arrOfNumber1: number[] = [1, 2, 3];
let arrOfNumber2: number[] = [3, 2, 1];


function arraySum(arr1: number[], arr2: number[]) {
    const newArray: number[] = []
    for (let i = 0; i < arrOfNumber1.length; i++) {
        newArray.push(arrOfNumber1[i] + arrOfNumber2[i])
        console.log(newArray);
    }
    return newArray
} 

console.log(arraySum(arrOfNumber1, arrOfNumber2));



// SOAL 5

let numbers: number[] = [1, 2, 3, 4, 5];

function newElement(number: number) {
    console.log(numbers);
    if (numbers.includes(number) === true) {
        return numbers;
    } else {
        numbers.push(number);
        return numbers
    }
}
console.log(newElement(7));



// SOAL 6
//bikin loop, berkondisi kalau bukan 'number' gagal tapi kalau number langsung ditambahkan

function sumNumber(arr: number[]) {
    let result = 0;
    for(let i of arr) {
        if(typeof i == "number") {
            result += i;
        }
    }
    return result
} 

console.log(sumNumber(["3", 1, "string", null, false, undefined, 2, true]));


// SOAL 7
//slice, [num], if


function maxSize(maxCap: number,...arr: number[]) {
    const result: number[] = [];
    for(let i in arr) {
        if(Number(i) == maxCap) {
            break;
        } else {
            result.push(arr[i])
        }
    }
    return result
}
console.log(maxSize(5, 5, 10, 24, 3,  6, 7, 8));



// SOAL 8

function combiner(arr1: number[], arr2: number[]) {
    return arr1.concat(arr2)
}
console.log(combiner([1, 2, 3], [4, 5, 6]));



// SOAL 9

function duplicateVal(arr: number[]) {
    let notDuplicate: number[] = []
    let duplicate: number[] = []
    for(let i of arr) {
        !duplicate.includes(i) && (notDuplicate.includes(i)? duplicate.push(i) : notDuplicate.push(i));
    }
    return duplicate
}
console.log(duplicateVal([1, 2, 2, 2, 3, 3, 4, 5, 5]));

// SOAL 10
function differentiate(arr1: number[], arr2: number[]) {
    let result: number [] = []
    for (let i of arr1) {
        !arr2.includes(i) && result.push(i)
    }
    for (let i of arr2) {
        !arr1.includes(i) && result.push(i)
    }
    return result
}
console.log(differentiate([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));



// SOAL 11
function primitiveData(arr: any[]) {
    let nonPrimitive: any[] = []
    let primitive: any[] = []
    for (let i of arr) {
        if (typeof(i) === 'object') {
            nonPrimitive.push(i)
        } else {
            primitive.push(i)
        }
    }
    return primitive
}
console.log(primitiveData([1, [], undefined, {}, "string", {}, []]));



// SOAL 12
function duplicateSum(arr: number[]) {
    let notDuplicate: number[] = []
    let duplicate: number[] = []
    for(let i of arr) {
        !duplicate.includes(i) && (notDuplicate.includes(i)? duplicate.push(i) : notDuplicate.push(i));
    console.log(duplicate);
    }

    const sumDuplicate = duplicate.reduce((a, b) => {
        return a + b
    })
    console.log(sumDuplicate);
    
}
    

console.log(duplicateSum([10, 20, 40, 10, 50, 30, 10, 60, 10]));



// SOAL 13

function rpsGame(string: string) {

    let opp: string[] = ["rock", "paper", "scissor"]
    //console.log(opp.length);
    // console.log(opp[2]);

    const randomizer = Math.floor(Math.random() * opp.length)
    // console.log(randomizer);
    const randomizerChoose = opp[randomizer]
    //console.log(randomizerChoose);
    
    if (string === "rock" && randomizer === 0 || string === "paper" && randomizer === 1 || string === "scissor" && randomizer === 2) {
        return "draw";
    } else if (string === "rock" && randomizer === 2 || string === "paper" && randomizer === 0 || string === "scissor" && randomizer === 1) {
        return "you win"
    } else if (string === "rock" && randomizer === 1 || string === "paper" && randomizer === 2 || string === "scissor" && randomizer === 0) {
        return "you lose"
    } else {
        return "choose rock, paper, or scissor"
    }
}

console.log(rpsGame("scissor"));














