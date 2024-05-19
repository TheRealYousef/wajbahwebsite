import React from 'react'
import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function Slider({number}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {Array.from({ length: number }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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

export default Slider