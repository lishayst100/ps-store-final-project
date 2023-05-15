import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ManageOrders = () => {

    const [orders, setOrders] = useState([])
    const nav = useNavigate()

    const getOrders = () => {
        fetch("http://localhost:3001/api/games/allOrders", {
          headers: { Authorization: localStorage.getItem("token") },})
        .then(res => res.json())
        .then(result => setOrders(result))
        .catch(e => console.log(e))
    }

    const deleteOrder = (id) => {
             fetch(`http://localhost:3001/api/games/deleteOrder/${id}`, {
               headers: { Authorization: localStorage.getItem("token") },
               method: "DELETE",
             })
               .then((res) => res.json())
               .then(()=>{getOrders()})
               .catch((e) => console.log(e));
    }


    useEffect(()=>{
        getOrders()
    },[])
  return (
    <div>
        <h2>Order Management</h2>
      <div className="d-flex justify-content-center gap-3 flex-wrap">
        {orders.map((order) => (
          <div key={order._id} className="shadow-lg p-3 rounded-3">
            <p className="text-start font-larger">Order Number : {order._id}</p>
            <p className="text-start font-larger">Order Name : {order.creditCardName}</p>
            <p className="text-start font-larger">
              Number of items : {order.orderDetails.length}
            </p>
            <h4>Total Price : {order.CartTotalAmount}$</h4>

            <div>
              <button
                className="btn btn-primary"
                onClick={() => nav(`/admin/manageOrders/orderDetails/${order._id}`)}
              >
                Order Details
              </button>
              <button className="btn btn-success" onClick={()=>{deleteOrder(order._id)}}>Complete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageOrders