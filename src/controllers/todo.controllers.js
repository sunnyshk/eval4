const express = require('express');

const router = express.Router();

let Todo = require('../models/todo.models');

router.post("", async(req,res)=>{
    try {
        let todo = await Todo.create(req.body);
        return res.status(200).send(todo); 
    } catch (error) {
        return res.status(500).send({message:error.message})
    };
});

router.get("", async(req,res)=>{
    try {
        let todo = await Todo.find().lean().exec();
        return res.status(201).send(todo);
    } catch (error) {
        return res.status(500).send({message:error.message});
    };
});


module.exports = router;