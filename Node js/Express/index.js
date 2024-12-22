import express from 'express';

const port = 3000;
const app = express();

app.get("/" , (req , res) => {
    res.send("Hello this is the server first response")
})
app.get("/Contact" , (req , res) => {  //Another route
    res.send("This the is the contact page")
})
app.get("/Suffynux" , (req , res) => { //Another route
    res.send("This is the Suffynux page")
})
app.get("/blank" , (req , res) => { //Another route
    res.send("blank page ")
})



app.listen(port , () => {
    console.log("server is running");

})