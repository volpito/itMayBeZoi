import React from 'react'

function ImgSection() {
  return (
    <section className="overflow-hidden text-gray-700">
      <div className="container py-12 py-2 mx-auto lg:pt-12  lg:px-0">
        <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/3">
                <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://dummyimage.com/500x300/F3F4F7/8693ac"/>
                </div>
                <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://dummyimage.com/501x301/F3F4F7/8693ac"/>
                </div>
                <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://dummyimage.com/600x360/F3F4F7/8693ac"/>
                </div>
            </div>
            <div className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://dummyimage.com/601x361/F3F4F7/8693ac"/>
                </div>
                <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://dummyimage.com/502x302/F3F4F7/8693ac"/>
                </div>
                <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://dummyimage.com/503x303/F3F4F7/8693ac"/>
                </div>
            </div>
            <div className="flex flex-wrap w-1/3">
                <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://dummyimage.com/500x300/F3F4F7/8693ac"/>
                </div>
                <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://dummyimage.com/501x301/F3F4F7/8693ac"/>
                </div>
                <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://dummyimage.com/600x360/F3F4F7/8693ac"/>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ImgSection
