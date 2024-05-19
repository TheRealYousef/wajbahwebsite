"use client"

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ShoppingBasket } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import { toast } from 'sonner'
import { LoaderIcon } from 'lucide-react'
import { UpdateCartContext } from '../_context/UpdateCartContext'

const ProductItemDetails = ({product}) => {

const jwt=sessionStorage.getItem('jwt');
const user=JSON.parse(sessionStorage.getItem('user'));
const {updateCart, setUpdateCart}=useContext(UpdateCartContext)

const [productTotalPrice, setProductTotalPrice] = useState(
    product.attributes.sellingprice?
    product.attributes.sellingprice:
    product.attributes.mrp
)

const router=useRouter();
const [quantity, setQuantity] = useState(1);
const [loading, setLoading] = useState(false);

const addToCart=()=>{
  setLoading(true);
  if(!jwt)
  {
      router.push('/sign-in');
      setLoading(false);
      return;
  }

  const data={
    data:{
      quantity:quantity,
      amount:(quantity*productTotalPrice).toFixed(2),
      products:product.id,
      users_permissions_user:user.id,
      userId:user.id
    }
  }

  console.log(data);

  GlobalApi.addToCart(data,jwt).then(resp=>{
    console.log(resp);
    toast('Added to Cart');
    setUpdateCart(!updateCart);
    setLoading(false);
    },(e)=>{
    toast('Error while adding into Cart');
    setLoading(false);
    })

}

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-7
    bg-white text-black items-center'>
        <Image 
        src="/item.jpg"
        alt='image'
        width={300}
        height={300}
        className='p-5 h-[300px] w-[300px] object-contain  border rounded-xl'
        />
        <div className='flex flex-col gap-3'>
            <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-semibold'>Big One Sandwich</h2>
            {product.attributes.sellingprice&&
            <Badge variant="destructive">hot Deals</Badge>
            }
            </div>

            <h2 className='text-sm text-gray-500'>Crispy chicken thighs are balanced by a creamy burger sauce, placed on a toasted brioche bun.</h2>
            <h2><span className='font-bold'>Category : </span>Grilled🔥</h2>
            <div className='flex gap-1 items-center'>
            <h2 className='font-medium text-sm text-gray-400'>Willy's Kitchen</h2>
            {product.attributes.verified &&
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#19ef15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
            }           
            </div>
            <div className='flex gap-3'>
            {product.attributes.sellingprice&&
            <h2 className='font-semibold text-2xl'>120 EGP</h2>
            }
            <h2 className={`font-semibold text-2xl ${product.attributes.sellingprice&&'line-through text-gray-500'}`}>90 EGP</h2>
        </div>
        <h2>Quantity : basic 150 gm</h2>
        <div className='flex flex-col items-baseline gap-3'>
            <div className='flex gap-3'>
            <div className='p-2 border rounded-xl flex gap-10 items-center px-3'>
                <button disabled={quantity==1} onClick={()=>setQuantity(quantity-1)}>-</button>
                <h2 >{quantity}</h2>
                <button onClick={()=>setQuantity(quantity+1)}>+</button>
            </div>
            <h2 className='text-2xl font-semibold'> = {(quantity * productTotalPrice).toFixed(2)} EGP</h2>
            </div>
        </div>
        <Button className="flex gap-3" onClick={()=>addToCart()}>
                <ShoppingBasket/>
                {loading?<LoaderIcon className='animate-spin'/>:'Add to Cart'}
            </Button>
        </div>
    </div>
  )
}

export default ProductItemDetails
