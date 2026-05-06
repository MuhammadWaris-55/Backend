import express from 'express'; //To use this import syntax have to add "type" : "module" in package.json

const app = express();

const port = process.env.PORT || 5000; // This syntax means if you not have .env file then take port from here

app.get('/', (req, res) => {
    res.send("Express is working")
})

app.get('/api/jokes', (req, res) => { //This is a standard way to write API
    const jokes = [
        {
            id: 1,
            title: "Programmer Joke",
            content: "Why do programmers prefer dark mode? Because light attracts bugs."
        },
        {
            id: 2,
            title: "JavaScript Joke",
            content: "Why was the JavaScript developer sad? Because he didn’t know how to 'null' his feelings."
        },
        {
            id: 3,
            title: "Backend Joke",
            content: "Why did the server go to therapy? Too many requests."
        },
        {
            id: 4,
            title: "Debugging Joke",
            content: "Debugging: Removing the needles from the haystack."
        }
    ];
    res.send(jokes)
})

app.listen(port, () => {
    console.log(`App is listening on port : ${port} `)
})