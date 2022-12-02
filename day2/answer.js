// Part 2
import { readFileSync } from "fs";
let puzzleInput = readFileSync("./input.txt", "utf-8").split("\r\n");

function calcMostScore(arr) {
    let score = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(" ");
        let roundScore = 0;
        roundScore += calcRoundOutcome(arr[i][0], arr[i][1]);
        roundScore += calcPlayerMoveScore(arr[i][1]);
        // For each round, get the score from the outcome of the round and the player's move. Then add the total score for the round to the total score
        score += roundScore;
    }
    return score;
}
function calcRoundOutcome(cpuMove, playerMove) {
    if (
        (cpuMove === "A" && playerMove === "Y") ||
        (cpuMove === "B" && playerMove === "Z") ||
        (cpuMove === "C" && playerMove === "X")
    ) {
        return 6;
        // Win condition
    } else if (
        (cpuMove === "A" && playerMove === "X") ||
        (cpuMove === "B" && playerMove === "Y") ||
        (cpuMove === "C" && playerMove === "Z")
    ) {
        return 3;
        // Draw condition
    } else {
        return 0;
        // Loss condition
    }
}
function calcPlayerMoveScore(playerMove) {
    switch (playerMove) {
        case "X":
            return 1;
        case "Y":
            return 2;
        case "Z":
            return 3;
    }
}
console.log(calcMostScore(puzzleInput));
