import express from 'express'
import Routers from '~/routes/router'
const app = express()
app.use(express.json())
app.use(express.static('./src/Stactic'))//route page when not Found

app.use('/', Routers)
module.exports =app