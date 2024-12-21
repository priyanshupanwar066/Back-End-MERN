//CRUD OPERATION
use("CurdDb")


// db.createCollection("courses")

// db.courses.insertOne(
// {
//     name: "Priyu Devops Free Course",
//     price: 0,
//     duration: "5 month",
//     instructor: "Priyanshu Panwar",
//     students: 100,
// })

// db.courses.insertMany([
// {
//     name: "Priyu Java Developer Course",
//     price: 100,
//     duration: "6 month",
//     instructor: "Priyanshu Panwar",
//     students: 150,
// }, 
// {
//     name: "Priyu Python Developer Course",
//     price: 150,
//     duration: "7 month",
//     instructor: "Priyanshu Panwar",
//     students: 200,
// },
// {
//     name: "Priyu React Developer Course",
//     price: 200,
//     duration: "8 month",
//     instructor: "Priyanshu Panwar",
//     students: 250,

// },
// {
//     name: "Priyu Angular Developer Course",
//     price: 250,
//     duration: "9 month",
//     instructor: "Priyanshu Panwar",
//     students: 300,
//  },
// {
//     name: "Priyu Node.js Developer Course",
//     price: 300,
//     duration: "10 month",
//     instructor: "Priyanshu Panwar",
//     students: 350,
// },
// {
//     name: "Priyu MongoDB Developer Course",
//     price: 350,
//     duration: "11 month",
//     instructor: "Priyanshu Panwar",
//     students: 400,
// },
// {
//     name: "Priyu Flutter Developer Course",
//     price: 400,
//     duration: "12 month",
//     instructor: "Priyanshu Panwar",
//     students: 450,
// },
// ]
// )

//READ


// let a = db.courses.find({ instructor: "Priyanshu Panwar"})

// console.log(a.count());

// let a = db.courses.find({ instructor: "Priyanshu Panwar"})

// console.log(a.toArray());


// let b = db.courses.findOne({ instructor: "Priyanshu Panwar"})

// console.log(b);




//UPDATE

// db.courses.updateOne({instructor: "Priyanshu Panwar"} ,{$set:{instructor: "Priyu Panwar"}})


// db.courses.updateMany({instructor: "Priyanshu Panwar"} ,{$set:{instructor: "Priyu Panwar"}})



//DELETE

// db.courses.deleteOne({price:100})

db.courses.deleteMany({price:100})
