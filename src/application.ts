import express from 'express'
import formRoute from './routes/form.js'
const application = express()


application.use("/form", formRoute)

export default application