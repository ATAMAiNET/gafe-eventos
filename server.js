import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.post('/usuarios', async (req, res) => {
    
    await prisma.user.create({
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })
    res.status(201).send('Ok aqui deu certo')
})

app.get('/usuarios', async (req, res) => {
    let users = []
    if(req.query){
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                age: req.query.age,
                email: req.query.email
            }
        })
    } else {
        users = await prisma.user.findMany()
    }

    res.status(200).json(users)
})

app.put('/usuarios/:id', async (req, res) => {
    
    await prisma.user.update({
        where: {
            id:req.params.id
        },
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })
    res.status(201).send('Ok aqui deu certo')
})

app.delete('/usuarios/:id', async (req, res) => {
    
    await prisma.user.delete({
        where: {
            id:req.params.id
        }
    })
    res.status(200).send('Ok deletado')
})

app.listen(3000)

/*
MongoDB Database user: atamai2013
Passwd: kSEjV2X1aWaBgbpm 
*/