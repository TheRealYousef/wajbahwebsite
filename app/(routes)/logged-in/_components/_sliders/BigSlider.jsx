import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image'

const BigSlider = () => {
  return (
    <Carousel className="w-full py-5">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
            <Image
                src="/banner.jpg" 
                width={1000}
                height={400}
                alt='slider'
                className='w-full h-[200px] md:h-[400px] object-corner rounded-2xl object-cover'
                />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default BigSlider
