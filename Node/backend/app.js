const express = require("express");
const app = express();


app.get("/test", (req, res) => {
  console.log("test api called..");
  res.send("test api called...");
});

const user = {
  id: 1,
  name: "amit",
  age: 23,
};

const users = [
  {
    id: 1,
    name: "maharshi",
    age: 23,
  },
  {
    id: 2,
    name: "jenish",
    age: 24,
  },
  {
    id: 3,
    name: "shrey",
    age: 25,
  },
];


app.get("/user", (req, res) => {

  res.json({
    message: "success",
    data: user,
  });
});

app.get("/users", (req, res) => {
  res.json({
    message: "user fetch successfully !!",
    data: users
  })
})

app.get("/users1", (req, res) => {

  res.write(JSON.stringify(user))
  res.send()
})

app.get("/users2", (req, res) => {
  res.set("content-type", "text/html")
  res.write(`<h1>Hello</h1>`)
  res.send()
})


app.get("/usertable", (req, res) => {

  res.set("content-type", "text/html")
  res.write(`<center><table cellspacing='5px' cellpadding='10px' border='1px' solid>
    <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>AGE</th>
    </tr>`)
  for (i of users) {
    res.write(`<tr><td>${i.id}</td>`)
    res.write(`<td>${i.name}</td>`)
    res.write(`<td>${i.age}</td></tr>`)
  }
  res.write(`</table></center>`)
  res.send()

})
app.get("/getuserbyid/:id", (req, res) => {
  console.log("params", req.params);
  console.log(req.params.id);

  var foundUser = users.find((user) => user.id == req.params.id);
  console.log("found object", foundUser);

  if (foundUser) {
    res.json({
      message: "user found",
      data: foundUser,
    });
  }
  else {
    res.json({
      message: "user not found",

    });
  }

});
//task
var students = [
  {
    "id": 101,
    "name": "Amit Sharma",
    "college": "ABC College",
    "marks": 85
  },
  {
    "id": 102,
    "name": "Rahul Patel",
    "college": "XYZ College",
    "marks": 78
  },
  {
    "id": 103,
    "name": "Neha Shah",
    "college": "PQR College",
    "marks": 92
  },
  {
    "id": 104,
    "name": "Pooja Verma",
    "college": "LMN College",
    "marks": 88
  },
  {
    "id": 105,
    "name": "Karan Mehta",
    "college": "DEF College",
    "marks": 81
  }
]

app.get("/studentsbymarks", (req, res) => {
  app.get("/students/:marks", (req, res) => {
    const marks = req.params.marks;

    const filteredStudents = students.filter(
      (student) => student.marks > marks
    );
    res.json(filteredStudents);
  });
})

app.get("/studenfromcollage/:studentname/:collagename", (req, res) => {
  const studentname = req.params.studentname;
  const collegename = req.params.collagename;

  res.send(`${studentname} from ${collegename}`);
});

app.get("/searchstudent",(req,res)=>{
    console.log("query",res.query)
    res.json({
        message:"search student by query"
    })
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});