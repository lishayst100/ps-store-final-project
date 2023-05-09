
import { useDispatch, useSelector } from 'react-redux'
import { countries } from './countries'
import './Payment.scss'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { initialValues, validationSchema } from '../../validations/payment';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../features/cartSlice';
import Swal from "sweetalert2";

const Payment = () => {
    const cart = useSelector((state) => state.cart);
    const month = [1,2,3,4,5,6,7,8,9,10,11,12]
    const years = [23,24,25,26,27,28,29,30,31,32,33,34]
    const nav =useNavigate()
    const dispatch = useDispatch()

    const handlePayment = () => {
       dispatch(clearCart()); 
       Swal.fire('Thank you For Purchase In Our Store','','success')
       setTimeout(()=>{nav('/')}, 3000)
    
        
    };


  return (
    <div className="containerr">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handlePayment}>
        <Form
          className="bg-light p-4 font-bolder rounded-2 d-flex flex-column gap-3"
          novalidate
        >
          
          <div className="card-number d-flex flex-column align-items-start needs-validation">
            <label htmlFor="validationCustom01">Card Number</label>
            <Field
              name="creditCardNumber"
              type="text"
              className="form-control"
              id="creditCardNumber"
            />
            <ErrorMessage
              name="creditCardNumber"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="card-name d-flex flex-column align-items-start">
            <label htmlFor="">Owner's Name</label>
            <Field
              name="creditCardName"
              type="text"
              className="form-control"
              id="creditCardName"
            />
            <ErrorMessage
              name="creditCardName"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="cvc countries d-flex justify-content-center gap-4  ">
            <div className="expration d-flex flex-column align-items-start">
              <label htmlFor="">Expiration</label>
              <div className="month d-flex flex-grow-1">
                <select
                  name="month"
                  id=""
                  className="form-select asad"
                  required
                >
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
              <Field name="CVC" type="text" className="form-control" id="CVC" />
              <ErrorMessage
                name="CVC"
                component="div"
                className="text-danger"
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

          <button className="btn btn-primary" type="submit">
            Pay Now
          </button>

          <div>Total Price: {cart.CartTotalAmount}$</div>
        </Form>
      </Formik>
    </div>
  );
}

export default Payment