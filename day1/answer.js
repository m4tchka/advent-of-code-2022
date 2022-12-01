// Part 1
import { readFileSync } from "fs";
let puzzleInput = readFileSync("./input.txt", "utf-8");

function findMostCalories(data) {
    let arr = data.split("\r\n\r\n"); 
    // Split array by each double line break (Windows)
    // ["1000\r\n2000\r\n3000\r\n, 4000"]
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i]
            .split("\r\n")
            .map(Number)
            .reduce((acc, curr) => acc + curr);
    }
    return Math.max(...arr);
}
console.log(findMostCalories(puzzleInput)); // 71502

// Part 2
function find3MostCalories(data) {
    let arr = data.split("\r\n\r\n");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i]
            .split("\r\n")
            .map(Number)
            .reduce((acc, curr) => acc + curr);
    }
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3];
}
console.log(find3MostCalories(puzzleInput)); // 208191
