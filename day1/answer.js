// Part 1
import { readFileSync } from "fs";
let puzzleInput = readFileSync("./input.txt", "utf-8");

function findMostCalories(data) {
    let arr = data.split("\r\n\r\n"); 
    // Split array by each double line break (Windows, so CRLF)
    // console.log(arr) // ["1000\r\n2000\r\n3000", "4000", "5000\r\n6000", ...]
    for (let i = 0; i < arr.length; i++) {
        // Loop through array
        arr[i] = arr[i]
            .split("\r\n")
            // Split each element by its line breaks into several strings, 
            .map(Number)
            // Turn each newly-split element into a number
            .reduce((acc, curr) => acc + curr);
            // Sum all the elements in each sub-array of numbers and assign that sum as the new value of the array entry.
    }
    return Math.max(...arr);
    // Return the largest entry in the array
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
    // As above ...
    arr.sort((a, b) => a - b);
    // Sort array by ascending value
    return arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3];
    // Return the sum of the largest (last) 3 entries
}
console.log(find3MostCalories(puzzleInput)); // 208191
