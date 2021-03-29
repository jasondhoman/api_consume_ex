const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;
const fetch = require('node-fetch');

//middleware
app.use(cors());
app.use(express.json()); //req.body


app.get('/launches', async( ) => {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/launches');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
});

app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
  });