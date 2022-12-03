// Part 1
import { readFileSync } from "fs";
let puzzleInput = readFileSync("./inputTest.txt", "utf-8").split("\r\n");

function sumDuplicateItemTypes(arr) {
    let sumPriority = 0;
    for (let i = 0; i < arr.length; i++) {
        let firstHalfChars = new Set(arr[i].substring(0, arr[i].length / 2));
        // Create a set of unique characters from the first half of the string
        for (let j = arr[i].length / 2; j < arr[i].length; j++) {
            if (firstHalfChars.has(arr[i][j])) {
                // Looping through the second half of the string, check if each character is present in the first half set, to find the common character from both halves.
                if (arr[i].charCodeAt([j]) <= 90) {
                    //  UTF18 has lowercase characters having higher values, whereas the question puts lowercase characters at lower priority value 
                    // So first check if the common character is upper or lowercase, then subtract a different offset and add the result to sumPriority 
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
