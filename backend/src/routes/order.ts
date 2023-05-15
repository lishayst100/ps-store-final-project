import { Router } from "express";
import _ from "underscore";
import { Order } from "../db/models/order.js";

const router = Router()


router.post('/order' , (req,res)=> {
    const body = _.pick(req.body, "creditCardName", "orderDetails",);
    new Order(body)
      .save()
      .then((result) => res.json({ message: "added game" }))
      .catch((e) => res.json({ error: `${e}` }));

})



export {router as orderRouter}