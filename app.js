// 1-savol

// let arr = ["salom", "hy", 5]

// function func(arr) {
//     let res = arr[0]

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > res) {
//             res = arr[i]
//         }

//     }


//     return res
// }

// let natija = func(arr)
// console.log(natija);

// 2-savol

// let arr = ["salom", "hy", 5]

// function func(arr) {
//     let res = arr.join(" ")



//     return res
// }

// let natija = func(arr)
// console.log(natija);

// 3-savol

// let arr = ["salom", "hy", 5];

// function func(arr) {
//     let res = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'string') {
//             let firstLetter = arr[i][0].toUpperCase();
//             let restOfString = arr[i].slice(1);
//             res.push(firstLetter + restOfString);
//         }
//     }

//     return res;
// }

// let natija = func(arr);
// console.log(natija);


// 4-savol

// let arr = [1, 2, 4, 5, 6, "salom"]

// function func(arr) {
//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] == "number") {
//             newArr.push(arr[i])
//         }

//     }

//     let sum = 1;

//     for (const iterator of newArr) {
//         sum *= iterator
//     }

//     return sum
// }

// let natija = func(arr)
// console.log(natija);

// 5-savol

// ???

// 6-savol

// let arr = ["salom", "hy", 5]

// function func(arr) {
//     let res = []
//     for (let i = arr.length -1; i >= 0; i--) {
//         res.push(arr[i])
//     }


//     return res
// }

// let natija = func(arr)
// console.log(natija);

// 7-savol

// let arr = [1,2,3,4,5,6,,7,8,5]

// function func(arr) {
//     let newArr = []
//     arr.forEach((element, index) => {
//         newArr.push(index)
//     });

//     return newArr
// }

// let natija = func(arr)
// console.log(natija);

// 8-savol

// let arr = [1, 2, 3, 4, 5, 6, , 7, 8, 5];

// function func(array, value) {
//     let newArr = [];

//     array.forEach((element, index) => {
//         if (element === value) { 
//             newArr.push(index); 
//         }
//     });

//     return newArr;
// }

// let natija = func(arr, 5); 
// console.log(natija); 

// 9-savol

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let num = +prompt("Iltimos son kiriting")

// function func(arr, num) {
//     let newArr = []

//     for (const iterator of arr) {
//         if (typeof iterator == "number") {
//             newArr.push(iterator + num)
//         }
//     }

//     return newArr


// }

// let natija = func(arr, num)
// console.log(natija);

// 10-savol

// let arr = [1,2,3,-1,-2,-3]

// function func(arr) {
//     let newArr1 = []
//     let newArr2 = []

//     for (const iterator of arr) {
//         if (iterator > 0) {
//             newArr1.push(iterator)
//         }else{
//             newArr2.push(iterator)
//         }
//     }

//     return [newArr1, newArr2]



// }

// let natija = func(arr)
// console.log(natija[0]);
// console.log(natija[1]);

// 11-savol

// let arr = []
// let n = +prompt("iltimos son kiriting nechigacha masiv yaratmoqchi bolsangiz")

// function func(arr, n) {
//     for (let i = 0; i <= n; i++) {
//         arr.push(i)
//     }

//     return arr
// }

// let natija = func(arr, n)
// console.log(natija);


// 12-savol

// let arr = [1,2,3,4,5,6,7,8,9,10]

// function func(arr) {
//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i].toString())

//     }



//     return newArr
// }

// let natija = func(arr)
// console.log(natija);



// 13-savol

// let arr = [1, 2, 3, 4, 6, 7, 8, 9, 10];

// function func(array) {
//     let newArr = [];

//     for (let i = 0; i < array.length; i += 2) {
//         newArr.push(array[i]);
//     }

//     return newArr;
// }

// let natija = func(arr);
// console.log(natija);


// 14-savol

// let arr = [1, 2, 3, 4, 6, 7, 8, 9, 10];

// function func(arr) {
//     let cont = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//             cont++
//         }
//     }

//     return cont
// }

// let natija = func(arr);
// console.log(natija);


// 15-savol

// let arr = [1, 2, 3, 4, 6, 7, 8, 9, 10];

// function func(arr) {
//     let max = arr[0]
//     let min = arr[0]

//     for (const iterator of arr) {
//         if (iterator > max) {
//             max = iterator
//         }

//         if (iterator < min) {
//             min = iterator
//         }
//     }

//     return [max, min]
// }

// let natija = func(arr);
// console.log(natija[0]);
// console.log(natija[1]);


// 16-savol

// let myArray = [1, 2, 3, 4, 5];

// function func(array) {
//     let newArr = [];

//     for (let element of array) {
//         newArr.push(element, element);
//     }

//     return newArr;
// }

// let result = func(myArray);
// console.log(result); 


// 17-savol

// function func(massiv) {
//     let ozgartiruv = massiv.slice(); 

//     for (let i = ozgartiruv.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));

//         [ozgartiruv[i], ozgartiruv[j]] = [ozgartiruv[j], ozgartiruv[i]];
//     }

//     return ozgartiruv;
// }

// let arr = [1, 2, 3, 4, 5];
// let natija = func(arr);
// console.log(natija);

// 18-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let num = 5;

// function func(arr, num) {
//     let newArr = [];
    
//     for (const iterator of arr) {
//         newArr.push(iterator + num); 
//     }

//     return newArr.join(" ");
// }

// let natija = func(arr, num);
// console.log(natija); 

// 19-savol

// let arr = ["salom" , 15]

// function func(arr) {
//     let newArr = []

//     for (const iterator of arr) {
//         if (typeof iterator == "string") {
//             newArr.push(iterator)
//         }
//     }
    

//     return newArr
// }

// let natija = func(arr);
// console.log(natija); 


// 20-savol

// let arr = [" ", "", 12]

// function func(arr) {
//     let sum = 0;

//     for (const iterator of arr) {
//         if (iterator == " " || iterator == "") {
//             sum++
//         }
//     }


//     return sum
// }

// let natija = func(arr)
// console.log(natija);

// 21-savol

// let arr = ["salom", "alik"];

// function teskariYoz(arr) {
//     let yangiArr = [];

//     for (const element of arr) {
//         let teskariElement = element.split('').reverse().join('');
//         yangiArr.push(teskariElement);
//     }

//     return yangiArr;
// }

// let natija = teskariYoz(arr);
// console.log(natija); 

// 22-savol

// let arr = [1,2,3,4,5,6,7,8,9,10];

// function func(arr) {
//     let newArr = []
//     for (const iterator of arr) {
//         newArr.push(iterator + (1/2))
//     }
    
//     return newArr
// }

// let natija = func(arr);
// console.log(natija);

// 23-savol

// let arr = [1,2,3,4,5,6,7,8,9,10, 0, 0];

// function func(arr) {
//     let newArr = []
//     for (const iterator of arr) {
//         if (iterator == 0) {
//             newArr.push(iterator)
//         }
//     }
    
//     return newArr
// }

// let natija = func(arr);
// console.log(natija);

// 24-savol

// function ajratToqJuft(massiv) {
//     let juftIndeks = [];
//     let toqIndeks = [];

//     for (let i = 0; i < massiv.length; i++) {
//         if (i % 2 === 0) {
//             juftIndeks.push(massiv[i]); 
//         } else {
//             toqIndeks.push(massiv[i]); 
//         }
//     }

//     return { juftIndeks, toqIndeks };
// }

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const natija = ajratToqJuft(myArray);
// console.log(natija); 

// 25-savol

// function faktorial(n) {
//     if (n === 0 || n === 1) return 1;
//     let natija = 1;
//     for (let i = 2; i <= n; i++) {
//         natija *= i;
//     }
//     return natija;
// }

// function faktorialMassiv(massiv) {
//     return massiv.map(element => faktorial(element));
// }

// const myArray = [1, 2, 3, 4, 5];
// const natija = faktorialMassiv(myArray);
// console.log(natija);

