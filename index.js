import express from "express"

const app = express()
const port = 3000

app.use(express.json())

app.get("/", (request, response) => {
    response.send("Hello World!")
})

app.get("/:file", (request, response) => {
    console.log(`${JSON.stringify(request.params)}`)
    response.send(request.params)
})

app.post("/", (request, response) => {
    console.log(`${JSON.stringify(request.body)}`)
    response.end()
})

app.listen(port, () => console.log(`Listening at ${port}`))