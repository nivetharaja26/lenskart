import React, { useContext } from "react";
import Card from "../../components/Card";

import { CartProvider } from "../../utils/CartContext";

const Cart = () => {
  const { cart, removeProduct } = useContext(CartProvider);

  const totalAmount = cart.reduce(
    (total, num) => total + parseInt(num.price),
    0
  );


  //const [amount,setamount]=useState('');
 const amount=totalAmount;
  const handleSubmit=(e) => {
    e.preventDefault();
    if(amount===""){
      alert("Order something...");

    }
    else{
      
        var options={

            key:"rzp_test_5804o947wwUHvG",
            key_secret:"fieMaiKL1qSV4ZzrcsPV8ph7",
            amount:amount*100,
            currency:"INR",
            name:"Payment",
            description:"to pay",
            handler:function(response){
              alert(response.razorpay_payment_id);
            },
            prefill:{
              name:"Nivetha",
              email:"niv2652@gmail.com",
              contact:"9360287002"
            },
            notes:{
              address:"Razorpay Corporate Office"
            },
            theme:{
              color:"blue"
            }
          
        };

        var pay=new window.Razorpay(options);
        pay.open();



    }
  }


  return (
    <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      {cart.length ? (
        <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {cart.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              price={product.price}
              buttonName="Remove Product"
              action={({ id }) => removeProduct(id)}
            />
          ))}
        </div>
      ) : (
        <h1 className="text-2xl text-center"> Cart is Empty...</h1>
      )}

      <div>
        <br/><br/>
        <button onClick={handleSubmit} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2 h-20 w-full">BUY</button>
      </div>
    </div>
  );
};

export default Cart;
