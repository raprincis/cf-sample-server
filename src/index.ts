import express from 'express'
import { createServer } from 'http'

const PORT = parseInt(process.env.PORT || '3000', 0)
const application = express()
const httServer = createServer(application)
httServer.listen(PORT, () => {
    console.log(`Server is runing on ${PORT}`)
})


