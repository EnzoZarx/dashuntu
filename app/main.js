import { cpu } from './system/components/cpu.js'
const express = require('express')
const app = express()

let port = 3000

app.get('/', (req, res) => {
  res.send(String(cpu.brand))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})