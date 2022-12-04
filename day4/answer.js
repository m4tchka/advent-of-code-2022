// Part 1
import { readFileSync } from "fs";
let puzzleInput = readFileSync("./input.txt", "utf-8").split("\r\n");

function countSubsets(arr) {
    let subsets = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(",");
        let [elf1Start, elf1End] = arr[i][0].split("-").map(Number);
        let [elf2Start, elf2End] = arr[i][1].split("-").map(Number);
        if (
            (elf1Start <= elf2Start && elf1End >= elf2End) ||
            (elf2Start <= elf1Start && elf2End >= elf1End)
        ) {
            subsets++;
        }
    }

    return subsets;
}
// console.log(countSubsets(puzzleInput));

// Part 2
function countOverlaps(arr) {
    let overlaps = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(",");
        let [elf1Start, elf1End] = arr[i][0].split("-").map(Number);
        let [elf2Start, elf2End] = arr[i][1].split("-").map(Number);
        if (
            !(
                (elf1Start < elf2Start && elf1End < elf2Start) ||
                (elf1Start > elf2End && elf1End > elf2End)
            )
        ) {
            overlaps++;
        }
    }
    return overlaps;
}
console.log(countOverlaps(puzzleInput));

// ..2...4......
// .........6...8..

// ..2......6...
// .....4......8...

// ... x.......y....
// .a.b.....
