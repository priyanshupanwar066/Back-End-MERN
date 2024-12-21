use('MERN');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
  {
    "name": "JavaScript",
    "price": 1000,
    "Instructor": "Priyanshu Panwar"
  },
  {
    "name": "Python",
    "price": 1200,
    "Instructor": "Ankita Sharma"
  },
  {
    "name": "Java",
    "price": 900,
    "Instructor": "Rahul Verma"
  },
  {
    "name": "C++",
    "price": 1100,
    "Instructor": "Neha Gupta"
  },
  {
    "name": "Web Development",
    "price": 1500,
    "Instructor": "Aman Singh"
  },
  {
    "name": "Mobile Development",
    "price": 1400,
    "Instructor": "Ritika Jain"
  },
  {
    "name": "Data Science",
    "price": 2000,
    "Instructor": "Saurabh Patel"
  },
  {
    "name": "Cybersecurity",
    "price": 1800,
    "Instructor": "Vikas Kumar"
  },
  {
    "name": "React",
    "price": 1300,
    "Instructor": "Simran Kaur"
  },
  {
    "name": "Node.js",
    "price": 1000,
    "Instructor": "Aditya Joshi"
  }
]
);


// Print a message to the output window.
console.log(`Done Insterting data`);