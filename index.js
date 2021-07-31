const express = require("express");
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app = express();

const server = app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});


app.get('*', (req, res) => {
    res.send('Hello World!')
})
