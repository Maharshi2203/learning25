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



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});