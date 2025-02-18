import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

app.get("/api/deezer", async (req, res) => {
    try {
        const response = await axios.get("https://api.deezer.com/artist/290/top");
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

app.listen(5000, () => console.log("Proxy running on port 5000"));
