import { Router } from "express";
import formatter from "../commons/formatter.js";
const formRoute = Router()


const responseData = {
    message : 'Got it from Cf',
    date: formatter.formatDate(Date.now())
}


formRoute
    .get("/", (request, response) => {
        response.json(responseData)
    })
    .post("/", (request, response) => {
        response.json(responseData)
    })


export default formRoute