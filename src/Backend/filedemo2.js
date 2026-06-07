const fs = require("fs");

const readData = () => {
    const data = fs.readFileSync("demo1.txt", "utf8");
    console.log(data);
};

readData();