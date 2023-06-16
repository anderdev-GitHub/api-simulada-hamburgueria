const express = require('express')
const uuid = require('uuid')

const port = 3000
const app = express()
app.use(express.json())

const orders = []

app.use((request, response, next) => {
    console.log(`[${request.method}] - ${request.url}`)
    
    next()
})

const checkOrderId = (request, response, next) => {
    const { id } = request.params

    const index = orders.findIndex(user => user.id === id)

    if(index < 0){
        return response.status(404).json({ message: 'Pedido não encontrado.' })
    }

    request.userIndex = index
    request.userId = id

    next()
}

app.get('/order', (request, response) => {

    return response.json(orders)
})

app.post('/order', (request, response) => {
    const { order, clientName, price } = request.body

    const user = { id: uuid.v4(), order, clientName, price, status: 'Em preparação' }

    orders.push(user)

    return response.status(201).json(user)
})

app.put('/order/:id', checkOrderId, (request, response) => {
    const { order, clientName, price } = request.body 
    const index = request.userIndex
    const id = request.userId

    const updateUser = { id, order, clientName, price}

    orders[index] = updateUser

    return response.json(updateUser)
})

app.delete('/order/:id', checkOrderId, (request, response) => {
    const index = request.userIndex

    orders.splice(index,1)

    return response.status(200).json({ message: 'Pedido excluído com sucesso' })
})

app.get('/order/:id', checkOrderId, (request, response) => {
    const index = request.userIndex

    const specificOrder = orders[index]

    response.json(specificOrder)
})

app.patch('/order/:id', checkOrderId, (request, response) => {
    const { id } = request.params
    const index = orders.findIndex(user => user.id === id)

    orders[index].status = 'Pronto'

    response.json(orders[index])
})

app.listen(port, () => {
    console.log(`🌎 Server started on port ${port} 🚀`)
})