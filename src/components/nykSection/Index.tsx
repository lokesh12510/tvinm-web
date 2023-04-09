import React from 'react'
import Container from '../ui/Container'
import Image from 'next/image'

const NYKSection = () => {
  return (
    <Container className='py-[30px] md:py-[60px]'>
        <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 md:col-span-1 order-2 md:order-1">
                <div className="w-full h-[150px] md:h-[300px] relative">
                <Image src={'/images/nyks-logo.jpg'} alt='nyks-logo' fill style={{objectFit:'contain'}}/>
                </div>
            </div>
            <div className="col-span-2 md:col-span-1 order-1 md:order-2">
                <h3 className='font-bold text-2xl text-center md:text-left mb-3'>Nehru Yuva Kendra </h3>
                <p className='mb-3 text-gray-800'>
                Thambatty Vivekanandar Illaignar Narpani Mandram is affiliated with Nehru Yuva Kendra, The Nilgiris District which is under Government of India- Ministry of Youth Affairs and Sports. After affiliation the Youth Club would become eligible to participate, partner and access the services provided by NYKS. Once a Youth Club is affiliated with NYK, the magnitude of programmes available for the Youth Club increases and they can be part and parcel of the NYK sponsored activities. Registered Youth Clubs earn trust of the public and Governments. Registered Youth Clubs are more credible in the eyes of the public and Governments.
                </p>
            </div>
        </div>
    </Container>
  )
}

export default NYKSection