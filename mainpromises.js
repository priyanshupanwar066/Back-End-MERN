import fs from "fs/promises"

let a = await fs.readFile("priyu.txt")

let b = await fs.appendFile("priyu.txt" , "\n\n\n\nThis is Amazing promises")

console.log(a.toString(), b);
