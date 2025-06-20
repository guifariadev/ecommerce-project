import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {

  const {currency, getCartAmount} = useContext(ShopContext);

  return (
    <div className='w-full'>
      <h2 className='text-2xl'>Cart total</h2>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p> {currency}{getCartAmount()}.00 </p>
        </div>
        <hr /> 
        <div className="flex justify-between">
          <p className='text-lg font-bold'>Total</p>
          <p className='text-lg font-bold'> {currency}{getCartAmount()}.00 </p>
        </div>
      </div>
    </div>
  )
}

export default CartTotal;