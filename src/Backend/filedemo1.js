const fs = require("fs")

const writeData = async()=>{
    await fs.writeFileSync("demo1.txt","Hello")
}
writeData()