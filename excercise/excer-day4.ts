// SOAL 1 --
// buat fungsi yang dapat membuat pola segitiga berdasrkan dengan 'height' yang kita berikan
//nested loop


function segitiga (height: number) {
    console.log(height);
    for (let i = 1; i <= height; i++) {
        let row: string = "";

        for(let j = 1; j <= i; j++) {
            row += j + " ";
        }

        console.log(row);
        
    }
}


//1
//1 2
//1 2 3

segitiga(5);


// SOAL 2

function segitiga2 (height: number) {
    console.log(height);
    let currentNumber: number = 1;

    for (let i = 1; i <= height; i++) {
        let row: string = "";

        for(let j = 1; j <= i; j++) {
            if (currentNumber < 10) {
            row += "0" + currentNumber + " ";
        } else {
            row += currentNumber + " ";
        }
        currentNumber++
        
    }
    console.log(row);
    
}
}
segitiga2(10)





// SOAL 3 --
// buat fungsi yang bisa me loop angka berdasarkan input yang kita berikan
// dan mengganti perkalian angka 3 dengan "FIZZ" dan mengganti perkalian angka 5 dengan  "BUZZ"
// dan jika angka tersebut adalah perkalian 3 dan 5 terganti dengan "FIzzBuzz"



function countdown(n: number) {

let message: string = "";
for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        message += "FizzBuzz" + " ";
    } else if (i % 5 === 0) {
         message += "Buzz" + " ";
    } else if (i % 3 === 0) {
         message += "Fizz" + " ";
    } else {
         message += i + " ";
    }
}
console.log(message);
}

countdown(27)




// SOAL 4
// buat fungsi untuk menghitung BMI
// formula BMI = weight / (height) kuadrat

let weightkg: number = 900;
let heightm: number = 167 / 100;
let bmi: number = weightkg / (heightm * heightm);
let fixedBmi: any = bmi.toFixed
console.log(bmi);


function calculator (num : number) {
    if (bmi < 18.5) {
        return "less weight"
    } else if (bmi >= 18.9 && bmi <= 25.0) {
        return "ideal"
    } else if(bmi >= 25.0 && bmi <= 30.0) {
        return "overweigth"
    } else if(bmi >= 30.0 && bmi <= 39.9) {
        return "very overweigth" 
    } else {
        return "obesity"
    }
}

console.log(calculator(bmi));

// SOAL 5
//buat fungsi untuk  menghilangkan angka ganjil dalam array dan mereturn array baru yang hanya berisi angka genap

let scores: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenArray = scores.filter((score, index) => {
    if (score % 2 === 0) {
        return score
    }
})

console.log(evenArray);


// SOAL 6
// buat fungsi untuk memisahkan (split) dan merubah string menjadi array of words

const text1 = (text1: string) => {
    return text1.split(" ");
}

console.log(text1("Hello World"));
