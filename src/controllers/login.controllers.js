const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const Login = require('../models/login.models');

router.post("", async(req,res)=>{
    try {
        const login = await Login.create(req.body);
        return res.status(200).send(login);
    } catch (error) {
        return res.status(500).send({message:error.message})
    };
});

module.exports = router;


