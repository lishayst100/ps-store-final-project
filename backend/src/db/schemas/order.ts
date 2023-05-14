import { Schema } from "mongoose";


const cartItem = new Schema({
  title: String,
  description: String,
  frontImage: String,
  price: Number,
  img1: String,
  img2: String,
  rating: Number,
  iframe: String,
  platform: String,
  cartQuantity: Number,
  __v: Number,
  _id: Number
});


const order = new Schema({
  creditCardName: String,
  orderDetails: [cartItem]
});



export {order}