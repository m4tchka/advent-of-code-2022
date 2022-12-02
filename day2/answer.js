// Part 2
import { readFileSync } from "fs";
let puzzleInput = readFileSync("./input.txt", "utf-8").split("\r\n");

function calcMostScore(arr) {
    let score = 0;
    for (let i = 0; i < arr.length; i++) {
        let roundScore = 0;
        arr[i] = arr[i].split(" ");
        if (
            (arr[i][0] === "A" && arr[i][1] === "Y") ||
            (arr[i][0] === "B" && arr[i][1] === "Z") ||
            (arr[i][0] === "C" && arr[i][1] === "X")
        ) {
            roundScore += 6;
        } else if (
            (arr[i][0] === "A" && arr[i][1] === "X") ||
            (arr[i][0] === "B" && arr[i][1] === "Y") ||
            (arr[i][0] === "C" && arr[i][1] === "Z")
        ) {
            roundScore += 3;
        } else {
            roundScore += 0;
        }
        switch (arr[i][1]) {
            case "X":
                roundScore++;
                break;
            case "Y":
                roundScore += 2;
                break;
            case "Z":
                roundScore += 3;
                break;
        }
        score += roundScore;
    }
    return score;
}
console.log(calcMostScore(puzzleInput));
