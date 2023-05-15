import React, { useEffect, useState } from 'react'

const UserOrder = () => {
    const [user, setUser] = useState({})
    const username = JSON.parse(localStorage.getItem("user")).username;
    const getOrder = () => {
        fetch(`http://localhost:3001/api/games/userOrder/${username}`)
        .then(res => res.json())
        .then(result => setUser(result))
        .catch(e => console.log(e))
    }


    useEffect(getOrder,[])
  return (
    <div>
      <div className="shadow-lg p-3 rounded-3">
        <p className="text-start font-larger">Order Number : {user._id}</p>
        <p className="text-start font-larger">
          Order Name : {user.creditCardName}
        </p>
        <h4>Total Price : {user.CartTotalAmount}$</h4>
      </div>
    </div>
  );
}

export default UserOrder