
import { createServer } from 'http'
import application from './application.js'

const PORT = parseInt(process.env.PORT || '3000', 0)
const httServer = createServer(application)
httServer.listen(PORT, () => {
    console.log(`Server is runing on ${PORT}`)
})


