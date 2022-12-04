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
console.log(countSubsets(puzzleInput));

//   ............21.....................71
//   .....8..............40................
