import React from 'react'
import banner from '../../Assets/Images/banner.png'

function HeroBanner() {
  return (
    <main>
        <div className="bg-red-50">
          <div className="inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-8xl mx-auto">
            <div className="shadow-xl sm:overflow-hidden">
              <div className=" inset-0">
                <img
                  className="h-auto object-cover"
                  src={banner}
                  alt="fine patisserie"
                />
              </div>
            </div>
          </div>
          <a
            href="#"
            className="sticky sm:-mt-10 -mt-4 sm:h-24 flex items-center justify-center font-bold text-xl sm:text-4xl text-center sm:max-w-3xl max-w-sm mx-auto px-4 py-3 border border-transparent text-base font-medium rounded-sm shadow-sm text-white bg-gray-900 sm:px-8"
          >
            Une nouvelle expérience de la pâtisserie
          </a>
        </div>
      </main>
  )
}

export default HeroBanner
