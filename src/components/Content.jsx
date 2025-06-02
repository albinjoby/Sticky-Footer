import React from 'react'

const Content = () => {
  return (
      <div className="bg-[#cc9463] p-10 h-full w-full flex flex-col justify-between">
        <Section1 />
        <Section2 />
      </div>
  );
}

const Section1 = () =>{
    return (
        <div className='flex gap-20'>
          <div className='flex flex-col gap-1'>
            <p>Home</p>
            <p>Projects</p>
            <p>Our Mission</p>
            <p>Contact Us</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p>News</p>
            <p>Learn</p>
            <p>Certification</p>
            <p>Publications</p>
          </div>
        </div>
      )
}

const Section2 = () =>{
    return(
        <div className='flex items-center justify-start mt-10'>
            <h1 className='text-[12vw] font-serif'>Sticky Footer</h1>
        </div>
    )
}


export default Content