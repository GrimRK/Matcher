import express from "express";
import mongoose from "mongoose";
import cards from "./dbCards.js";
import Cors from 'cors';
//App config
const app = express();
const port= process.env.PORT || 8001
const connection_url='mongodb+srv://GrimRK:grimmyguy@cluster0.asgpe7u.mongodb.net/matcherdb?retryWrites=true&w=majority';

//Middleware
app.use(express.json())
app.use(Cors());

//DB config
mongoose.connect(connection_url)
//API endpoints
app.get("/",(req,res)=>res.status(200).send("Hello"));

app.post("/matcher/cards",(req,res)=>{
    const dbCard = req.body;
    cards.create(dbCard,(err,data)=>{
        if(err)
        {
            res.status(500).send(err);
        }
        else
        {
            res.status(201).send(data);
        }
    });

});
app.get('/matcher/cards',(req,res)=>{
    cards.find((err,data)=>{
        if(err)
        {
            res.status(500).send(err);
        }
        else
        {
            res.status(200).send(data);
        }
    });
});



//Listener
app.listen(port,(req,res)=>{console.log(`On loalhost ${port}`)});