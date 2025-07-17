import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import fs from "fs"
import { fileURLToPath } from 'url'
import path from 'path'
import userRouter from './routes/userRoute.js'
dotenv.config()

const app = express()

// const fileName = fileURLToPath(import.meta.url)
// const dirname = path.dirname(fileName)



app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// app.use('/uploads', express.static(path.join(dirname, 'uploads')))

app.use(userRouter)

mongoose.connect(process.env.CONNECTION)
.then(()=> console.log("DB Connected."))
.catch((error) => console.log("Error in DB connection:", error))

const port  = process.env.PORT || 6000


app.listen(port, ()=> console.log(`Running on port ${port}`))