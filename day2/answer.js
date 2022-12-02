// Part 1
import { readFileSync } from "fs";
let puzzleInput = readFileSync("./input.txt", "utf-8").split("\r\n");

function calcTotalScore(arr) {
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
console.log(calcTotalScore(puzzleInput));


// Part 2
function calcTotalScore2(arr) {
    let score = 0;
    for (let i = 0; i < arr.length; i++) {
        // arr[i] = arr[i].split(" ");
        // Already split in part 1 above, and arrays are passed by reference
        let roundScore = 0
        roundScore += findPlayerMoveAndScore(arr[i][0],arr[i][1]) 
        // Determine which move the player should play, based on the cpuMove and desired outcome, and add the points for that move to the round score
        roundScore += calcActualRoundOutcome(arr[i][1])
        // Add the score from the outcome 
        score += roundScore
    }
    return score;
}
function findPlayerMoveAndScore(cpuMove, intendedOutcome) {
    if (
        (cpuMove === "A" && intendedOutcome === "Y") ||
        (cpuMove === "B" && intendedOutcome === "X") ||
        (cpuMove === "C" && intendedOutcome === "Z")
    ) {
        return 1;
        // Rock condition
    } else if (
        (cpuMove === "A" && intendedOutcome === "Z") ||
        (cpuMove === "B" && intendedOutcome === "Y") ||
        (cpuMove === "C" && intendedOutcome === "X")
    ) {
        return 2;
        // Paper condition
    } else {
        return 3;
        // Scissors condition
    }
}
function calcActualRoundOutcome(outcome) {
    switch (outcome) {
        case "X":
            return 0;
        case "Y":
            return 3;
        case "Z":
            return 6;
    }
}
console.log(calcTotalScore2(puzzleInput));