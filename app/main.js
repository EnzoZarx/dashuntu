import si from './library.js'
const express = require('express')
const app = express()

let port = 3000
let cpu = {
  brand:""
}

si.cpu().then(data => {
  cpu.brand = data.brand
})

app.get('/', (req, res) => {
  res.send(String(cpu.brand))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})