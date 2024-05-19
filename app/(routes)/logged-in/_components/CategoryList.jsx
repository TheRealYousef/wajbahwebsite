import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = ({categoryList}) => {
  return (
<div className='mt-10'>

        <h2 className='text-black  text-2xl'>
            Our Categories
        </h2>

        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-5'>
            {categoryList.map((category,index)=>(
            <Link  href={'/products-category/' + category.attributes.name} key={index} className='flex flex-col items-center
             bg-indigo-50 gap-2 p-3 mt-4 rounded-xl group cursor-pointer
             hover:bg-gray-100 justify-center text-center'>
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
</div>
)
}

export default CategoryList
