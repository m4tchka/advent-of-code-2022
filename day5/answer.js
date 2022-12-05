// Part 1
import { readFileSync } from "fs";
let input = readFileSync("./inputTest.txt", "utf-8").split("\r\n\r\n");
// console.log(input)
let crates = input[0].split("\r\n");
let columns = crates.pop().split("   ")
let numOfColumns=columns[columns.length - 1]
console.log("crates",crates)
for (let crateLine of crates) {
    console.log("split iine:",crateLine.split(/(\.|s){4}/))
    for (let char = 0; char < ((crateLine.length-(numOfColumns-1))/3); char++) {
        console.log(crateLine.substring(char*4,(char*4)+3))
    }
    // console.log(crateLine.length)
}
// crates


// 123 567 901