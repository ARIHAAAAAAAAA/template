import express from "express"

const app = express()
const port = 3111

app.get('/', (req, res) => {
  res.send('Hello Worldddd!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})