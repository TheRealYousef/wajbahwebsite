import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const TopCategoryList = ({categoryList}) => {
  return (
    <div className='flex gap-5 mt-10 overflow-auto mx-7 md:mx-20 justify-center'>
    {categoryList.map((category,index)=>(
    <Link  href={'/products-category/' + category.attributes.name} key={index} className='flex flex-col items-center
     bg-indigo-50 gap-2 p-3 mt-4 rounded-xl group cursor-pointer
     hover:bg-gray-100 w-[150px] min-w-[100px] justify-center text-center '>
        <Image
        src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + category.attributes.icon.data[0].attributes.url}
         alt='category'
         width={50}
         height={50}
         className='group-hover:scale-125 transition-all ease-in-out'
        />
        <h2>{category.attributes.name}</h2>
    
    </Link>
))}
    </div>
  )
}

export default TopCategoryList
