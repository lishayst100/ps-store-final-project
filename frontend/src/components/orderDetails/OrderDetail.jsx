import React from 'react'
import { useParams } from 'react-router-dom'

const OrderDetail = () => {
    const {_id} = useParams()
  return (
    <div>OrderDetail {_id}
    </div>
  )
}

export default OrderDetail