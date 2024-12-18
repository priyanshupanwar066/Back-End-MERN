const fs = require("fs");

// console.log(fs);

console.log("Starting");
// fs.writeFileSync("priyu.txt" , "Priyu is a Good boy")


fs.writeFile("priyu2.txt" , "Priyanshu Panwar", ()=>{ 
    console.log("done");
    fs.readFile("priyu2.txt" , (error , data)=>{
        console.log(error , data.toString());
        
    } )
})


fs.appendFile("priyu2.txt" , "priyu 65675", (e, d)=>{
    console.log(d);
    
})
console.log("ending");

