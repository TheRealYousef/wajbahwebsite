import React from 'react'

const ProductCategory = () => {
  return (
      <div>
          <h2 className='p-4 bg-primary text-white font-bold
          text-center text-2xl'>{params.categoryName}</h2>
          <TopCategoryList categoryList={categoryList}/>
            <div className='p-5 md:p-10 '>
            <ProductList productList={productList}/>
            </div>
      </div>
  )
}

export default ProductCategory
