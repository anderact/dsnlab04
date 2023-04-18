const express = require('express')
const app = express()

const port = 9000

app.get('/', (req, res) => {
    res.send('Laboratorio 04')
})

app.get('/clientes', (req, res) => {
    const clientes = ['Axel', 'Ander', 'Otro']
    res.send(clientes)
})

app.get('/productos', (req, res) => {
    const productos = ['Pera', 'Manzana', 'Uva']
    res.send(productos)
})

app.listen(port, () => {
    console.log(`Aplicación corriendo en ${port}`)
})
