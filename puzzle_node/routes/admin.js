const express = require('express');
const router = express.Router();
const path = require('path');



router.use('/sign-up',(req,res)=>{
    res.send(`<h1>The user ${req.body.username} is registered </h1>`)
})

router.use('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'../', 'views', 'welcome.html'))
})

router.use('/', (req, res)=>{
    res.render('welcome', {docTitle: 'Puzzle Exchange - Welcome'})
})

module.exports = router;