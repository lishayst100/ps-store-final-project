import { model } from "mongoose";
import { userCart } from "../schemas/userCart.js";
const UserCart = model('userCart', userCart);
export { UserCart };
