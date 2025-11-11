import React from 'react';


const Content = () => {
  return (
    <section className="w-full min-h-screen bg-white text-black px-10 py-20">
      <h2 className="text-4xl font-bold mb-6">Welcome to Our Website</h2>
      <p className="text-lg max-w-3xl">
        This content appears after you scroll past the 3D hero section.
        You can continue adding more components, sections, and animations here.
      </p>
        <div className='w-[95vw] flex justify-center items-center flex-wrap gap-10 mt-10'>
          <div className='relative mt-10'>
          <div className="flex justify-center div-cutout bg-black/50 ">
            <div className="flex justify-center div-cutout bg-white h-96 w-72 scale-x-99 scale-y-99">
              <img src="/aditya.jpeg" alt="Placeholder" className="h-96 w-72 object-cover rounded-lg" />
            </div>
          </div>
            <p className='absolute top-2 left-1 z-50 text-black/80'>/ 01</p>
          </div>


          <div className="flex justify-center mt-10 div-cutout bg-black/50 ">
           <div className="flex justify-center div-cutout bg-white h-96 w-72 scale-x-99 scale-y-99"></div>
          </div>


        <div className="flex justify-center mt-10 div-cutout bg-black h-96 w-72">
        </div>
          <div className="flex justify-center mt-10 div-cutout bg-black h-96 w-72 ">
          </div>
        </div>



    </section>
  );
};


export default Content;
