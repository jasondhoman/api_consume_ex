const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;
const fetch = require('node-fetch');

//middleware
app.use(cors());
app.use(express.json()); 


app.get('/launches', async(req,res) => {
    try {
        const launches = await fetch('https://api.spacexdata.com/v4/launches');
        const data = await launches.json();
        res.json(data);
    } catch (error) {
        console.error(error);
    }
});

app.get('/', (req,res) => {
    res.status(403).send('You seem to have taken a wrong turn')
});

app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
  });