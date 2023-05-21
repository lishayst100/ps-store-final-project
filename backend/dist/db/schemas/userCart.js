import { Schema } from "mongoose";
const userCart = new Schema({
    username: String,
    cart: Array
});
export { userCart };
