import express from "express";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    fs.readFile('home.html',(err, data)=>{
        res.write(data);
        res.end()
    })
})

app.use(express.static(__dirname + '/public'))

app.listen(PORT, ()=>{
    console.log(`running on localhost:${PORT}`)
})