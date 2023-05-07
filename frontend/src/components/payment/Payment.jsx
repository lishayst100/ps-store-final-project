
import { useSelector } from 'react-redux'
import { countries } from './countries'
import './Payment.scss'

const Payment = () => {
    const cart = useSelector((state) => state.cart);
    const month = [1,2,3,4,5,6,7,8,9,10,11,12]
    const years = [23,24,25,26,27,28,29,30,31,32,33,34]


  return (
    <div className="containerr">
      <form
        className="bg-light p-4 font-bolder rounded-2 d-flex flex-column gap-3" novalidate>
        <div className="card-number d-flex flex-column align-items-start needs-validation">
          <label htmlFor="validationCustom01">Card Number</label>
          <input
            type="text"
            maxLength={16}
            className="form-control"
            required
            id="validationCustom01"
          />
          <div className="valid-feedback">looks Good!</div>
        </div>

        <div className="card-name d-flex flex-column align-items-start">
          <label htmlFor="">Owner's Name</label>
          <input type="text" className="form-control" required />
        </div>

        <div className="cvc countries d-flex justify-content-center gap-4  ">
          <div className="expration d-flex flex-column align-items-start">
            <label htmlFor="">Expiration</label>
            <div className="month d-flex flex-grow-1">
              <select name="month" id="" className="form-select asad" required>
                {month.map((m) => (
                  <option>{m}</option>
                ))}
              </select>
              <select name="year" id="" className="form-select" required>
                {years.map((y) => (
                  <option>{y}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="cvc d-flex flex-column align-items-start">
            <label htmlFor="cvc">CVC</label>
            <input
              type="text"
              className="form-control"
              maxLength={4}
              required
            />
          </div>

          <div className="cvc d-flex flex-column align-items-start">
            <label htmlFor="">Country</label>
            <select name="country" className="form-select" id="" required>
              {countries.map((c) => (
                <option>{c.name}</option>
              ))}
            </select>
          </div>
        </div>

        <button className="btn btn-primary" type='submit'>Pay Now</button>

        <div>Total Price: {cart.CartTotalAmount}$</div>
      </form>
    </div>
  );
}

export default Payment