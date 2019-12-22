const express = require('express');
const path = require('path');
const router = express.Router();


router.use('/start',(req,res)=> {
    // Redirect to '/' if login was not done
    res.sendFile(path.join(__dirname,'../', 'views', 'start.html'))
})

module.exports = router;