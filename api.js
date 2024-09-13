const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const quotes = [
    {
        content: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        content: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        content:
            "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
    },
    {
        content: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein",
    },
    {
        content: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins",
    },
    {
        content:
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        content: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
    },
    {
        content: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        content: "Act as if what you do makes a difference. It does.",
        author: "William James",
    },
    {
        content:
            "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs",
    },
    {
        content: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky",
    },
    {
        content:
            "Whether you think you can or you think you can't, you're right.",
        author: "Henry Ford",
    },
    {
        content:
            "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
    },
    {
        content: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson",
    },
    {
        content: "Opportunities don't happen. You create them.",
        author: "Chris Grosser",
    },
];

app.use(cors());

app.use(express.json());

app.get("/api/quote", (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(randomQuote);
});

app.post("/api/quote", (req, res) => {
    const { content, author } = req.body;
    if (!content || !author) {
        return res
            .status(400)
            .json({ error: "Both content and author required" });
    }
    const newQuote = { content, author };
    quotes.push(newQuote);
    res.status(201).json(newQuote);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
