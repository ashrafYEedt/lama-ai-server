const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
    const userMessage = (req.body.message || "").toLowerCase();
    
    let reply = "أنا لمى، ما فهمت عليك تمام، حاول تشرح لي أكثر!";

    if (userMessage.includes("هلا") || userMessage.includes("مرحبا")) {
        reply = "هلا فيك! شلونك؟";
    } else if (userMessage.includes("كيفك") || userMessage.includes("شلونك")) {
        reply = "تمام وبخير دامك بخير!";
    } else if (userMessage.includes("احبك")) {
        reply = "وأنا بعد أحبك، لا تخجل!";
    } else if (userMessage.includes("مع السلامة")) {
        reply = "مع السلامة يا قلبي، لا تطول الغيبة!";
    }

    res.json({ reply });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Lama AI server is running on port ${port}`);
});