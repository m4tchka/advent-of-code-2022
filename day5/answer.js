// Part 1
import { readFileSync } from "fs";
let input = readFileSync("./inputTest.txt", "utf-8").split("\r\n\r\n");
// console.log(input)
let crates = input[0].split("\r\n");
let columns = crates.pop().split("   ")
let numOfColumns=Number(columns[columns.length - 1])
console.log("crates",crates)
let stack = new Array(numOfColumns).fill([])
for (let crateRow of crates) {
    // console.log("split iine:",crateRow.split(/(\.|s){4}/))
    for (let char = 0; char < ((crateRow.length-(numOfColumns-1))/3); char++) {
        let crate = crateRow.substring(char*4,(char*4)+3)
        console.log(crate)
        stack[char].push(crate[1])
    }
    // console.log(crateLine.length)
}
// crates

console.log(stack)
// 123 567 901