const express = require('express');
const app = express();

app.use("/static", express.static("public"));

app.listen(3000, () => console.log(`server is running on port 3000`));

app.get('/',(req,res)=>{
  res.render('todo.ejs');
})

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.post('/',(req, res) => {
  console.log(req.body);
  });