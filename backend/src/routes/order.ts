import { Router } from "express";
import _ from "underscore";

const router = Router()


router.post('/order' , (req,res)=> {
    const name = req.body.creditCardName;
    const orderDetails = req.body.orderDetails;
    const body = {name,orderDetails}
    res.json({message: `${JSON.stringify(body)}`})

})



export {router as orderRouter}