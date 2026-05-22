import express from 'express';

const app = express();

const PORT = 5000;

app.get('/' , (req , res) => {
    res.send("App is Running");
})

app.listen(PORT , () => {
    console.log(`App is Running on http://localhost:${PORT}`)
})