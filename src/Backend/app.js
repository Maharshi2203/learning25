console.log("Hello");
console.log("app file loaded")
const empsal = require("./employee")
const users = require("./users")
const student = require("./student")

console.log("employee salary =",empsal)
console.log(users)
console.log(users.userName)
console.log(users.usercity)
console.log(student)


student.addStudent(18,"12th")
const studentinfo = student.printStudent()
console.log(studentinfo)