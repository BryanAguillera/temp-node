const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.get('/history', (req, res) => {
    res.status(200).send("HISTORY KINGINA")
})

app.get('*', (req, res) => {
    res.status(404).send("PAGE NOT FOUND SHUNGA")
})

app.listen(5000, () => console.log("App is listening on port 5000...")
)