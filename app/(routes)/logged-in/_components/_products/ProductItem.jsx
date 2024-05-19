import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { Badge } from "@/components/ui/badge"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const ProductItem = () => {

  return (
    <div className=' p-2 md:p-6 flex flex-col items-left
      justify-left gap-3 border rounded-xl hover:scale-105 hover:shadow-sm
      transition-all ease-in-out'>
        <Image
        src="/item.jpg"
        width={500}
        height={200}
        alt='product'
        className='h-[250px] w-[300px] rounded-xl object-cover'
        />

        <h2 className='font-semibold text-lg'>Big One Sandwich</h2>

        <div className='flex gap-3'>
            {product.attributes.sellingprice&&
            <h2 className='font-medium text-lg'>120 EGP</h2>
            }
            <h2 className={`font-medium text-lg ${product.attributes.sellingprice&&'line-through text-gray-500'}`}>130 EGP</h2>
        </div>
            <div className='flex justify-between'>
            <div className='flex gap-1 items-center'>
            <h2 className='font-medium text-sm text-gray-400'>Willy's Kitchen</h2>
            {product.attributes.verified &&
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#19ef15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
            }           
            </div>

            {product.attributes.sellingprice&&
            <Badge variant="destructive">hot Deals</Badge>
            }

            </div>
            

        
        

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline"
            className="text-primary hover:text-white hover:bg-primary"
            >
                Add to cart
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
               <ProductItemDetail product={product}/>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
    </div>
  )
}

export default ProductItem
