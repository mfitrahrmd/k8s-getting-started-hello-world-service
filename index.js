const express = require("express")

const PORT = process.env.APP_PORT || 3000

const app = express()

app.get("/", (req, res) => {
    res.json({
        "message": "Hello World"
    })
})

app.listen(PORT, () => {
    console.log(`app run on port ${PORT}`)
})
