import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({productList}) => {
  return (
    <div className='mt-5'>
        <h2 className='text-black text-2xl'>
            Try this Today 
        </h2>
        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        gap-5 mt-6'>
            {productList.map((product,index)=>index<8&&(
                <ProductItem product={product}/>
            ))}
        </div>

    </div>
  )
}

export default ProductList
