// // import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React  from 'react'
// import { Link } from 'react-router-dom';
// import CheckoutProduct from './CheckoutProduct';
// import "./Payment.css"
// import { useStateValue } from './StateProvider'

// function Payment() {
//     const [{user,basket} ] = useStateValue();
    
//     const [error,setError] = useState(null);
//     const [disabled,setDisabled] = useState(null);
    
//     const stripe=useStripe();
//     const elements=useElements();

//     const handleSumit = e=>{

//     }
//     const handleChange = event=>{
//         setDisabled(event.empty);
//         setError(event,error ? event.error.message : "");

//     }

//     return (
//         <div className="payment">
//             <div className="payment__container">
//             <h1>
//                 Checkout(<Link to="/checkout">{basket?.length} items </Link>)
//             </h1>
//                 <div className="payment__section">
//                     <div className="payment__title">
//                         <h3>Dilevery Address</h3>
//                     </div>
//                     <div className="payment__address">
//                         <p>{user?.email}</p>
//                         <p>123 React Lane</p>
//                         <p>LosAngles CA</p>
//                     </div>
//                 </div>
//                 <div className="payment__section">
//                     <div className="payment__title">
//                         <h3>Review Items and Dilevery </h3>
//                     </div>
//                     <div className="payment__items">
//                     {basket.map(item => {
//                             console.log(item)
//                         return (
//                             <CheckoutProduct
//                                 id={item.id}
//                                 title={item.title}
//                                 image={item.image}
//                                 price={item.price}
//                                 rating={item.rating}
//                             />
//                         )
//                         })}
//                     </div>
//                     </div>
//                     <div className="payment__section">
//                         <div className="payment__title">
//                             <h3>Payment Method</h3>
//                         </div>
//                         <div className="payment__details">
//                             <form onSubmit={handleSumit}>
//                                 <CardElement onChange={handleChange}/>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
        
//     )
// }

// export default Payment
