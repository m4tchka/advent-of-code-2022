// Part 1
import { readFileSync } from "fs";
let puzzleInput = readFileSync("./input.txt", "utf-8").split("\r\n");

function countSubsets(arr) {
    let subsets = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(",");
        // Split by commas to get each elf's range
        let [elf1Start, elf1End] = arr[i][0].split("-").map(Number);
        let [elf2Start, elf2End] = arr[i][1].split("-").map(Number);
        // Transform each elf's range from a string into 2 numbers, a start and end.
        if (
            (elf1Start <= elf2Start && elf1End >= elf2End) ||
            // elf1 starts before and ends after elf2,
            (elf2Start <= elf1Start && elf2End >= elf1End)
            //  elf2 starts before and ends after elf1
        ) {
            subsets++;
        }
    }

    return subsets;
}
console.log(countSubsets(puzzleInput));

// Part 2
function countOverlaps(arr) {
    let overlaps = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(",");
        let [elf1Start, elf1End] = arr[i][0].split("-").map(Number);
        let [elf2Start, elf2End] = arr[i][1].split("-").map(Number);
        // As above ...
        if (!(elf1End < elf2Start || elf1Start > elf2End)) {
            // There are no overlaps at all, when either:
            // elf1 ends before elf2 has started,
            // elf1 starts after elf2 ends
            // So take this condition and apply the NOT operator to get the opposite
            overlaps++;
        }
    }
    return overlaps;
}
console.log(countOverlaps(puzzleInput));
