const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Homepage');
})

app.listen(3000,(err)=>{
    console.log('Running on port 3000')
})