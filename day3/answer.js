// Part 1
import { readFileSync } from "fs";
let puzzleInput = readFileSync("./input.txt", "utf-8").split("\r\n");

function sumDuplicateItemTypes(arr) {
    let sumPriority = 0;
    for (let i = 0; i < arr.length; i++) {
        let firstHalfChars = new Set(arr[i].substring(0, arr[i].length / 2));
        for (let j = arr[i].length / 2; j < arr[i].length; j++) {
            if (firstHalfChars.has(arr[i][j])) {
                console.log(
                    "Both halves have:",
                    arr[i][j],
                    "of utf18 value:",
                    arr[i].charCodeAt([j])
                );
                if (arr[i].charCodeAt([j]) <= 90) {
                    sumPriority += arr[i].charCodeAt([j]) - 38;
                } else {
                    sumPriority += arr[i].charCodeAt([j]) - 96;
                }
                break;
            }
        }
    }
    return sumPriority
}
console.log(sumDuplicateItemTypes(puzzleInput));
