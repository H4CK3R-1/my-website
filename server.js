const express = require("express");
const app = express();
const path = require("path");

// Static Files (HTML, CSS, JS Serve Karna)
app.use(express.static(path.join(__dirname, "public")));

// Contact Form Handle Karna (POST Request)
app.use(express.json());
app.post("/contact", (req, res) => {
    console.log(req.body);
    res.send("Message Received!");
});

// Server Start Karna
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
