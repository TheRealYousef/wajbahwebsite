import React from 'react'
import Slider from './_components/_sliders/Slider'
import BigSlider from './_components/_sliders/BigSlider'
import ProductList from './_components/_products/ProductList'

const LoggedIn = () => {
  return (
    <div className='mt-40 md:mt-28 px-24'>
      <BigSlider />

      <ProductList productList={productList}/>
      <Slider number={5} />
    </div>
  )
}

export default LoggedIn
