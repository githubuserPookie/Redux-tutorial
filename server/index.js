import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: "*"
}))

app.get("/api/bugs", (req, res) => {
    res.json([
        {
            id: 1,
            description: "Bug 1",
            userId: 1,
            resolved: true
        }, {
            id: 2,
            description: "Bug 2",
            userId: 2
        }, {
            id: 3,
            description: "Bug 3",
            userId: 2
        }, {
            id: 4,
            description: "Bug 4"
        }
    ])
})

app.listen(5001, () => console.log("App is listenning on port 5000!"));