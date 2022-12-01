// import fs from 'fs'
import { readFileSync } from 'fs';
function findMostCalories(data) {
    let arr = data.split("\n\r")
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        // arr[i]= arr[i].split("\n\r")/* .reduce((acc,curr)=>acc+curr) */
    }
    console.log(arr)
    return Math.max(...arr)
}
findMostCalories(readFileSync("./input1test.txt","utf-8"))