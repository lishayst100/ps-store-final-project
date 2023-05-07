import React, { useEffect, useState } from 'react'
import { countries } from './countries'



const PaymentCopm = () => {

  return (
    <div>
        <select name="" id="" className='form-select w-25'>
            {countries.map(c => (
                <option>{c.name}</option>
            ))}
        </select>
    </div>
  )
}

export default PaymentCopm