import React from 'react'

function CakeHover(props) {

  const available = props.available;

  return (
    <div>
      {available && (
      <section className="text-gray-600 body-font hidden sm:block">
        <div className={`grid-cols-2 sm:grid-cols-4 max-w-6xl flex mx-auto ${props?.className}`}>
            <div key={props.name} className={props.className}>
                <div className="flex relative">
                  <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-xl" src={props.image}/>
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-yellow-200 bg-white opacity-0 hover:opacity-100 rounded-xl">
                    <h2 className="tracking-widest text-lg title-font font-medium text-blue-500 mb-1">{props.name}</h2>
                    <p className="leading-relaxed">{props.description}</p>
                  </div>
                </div>
            </div>
        </div>
      </section>
      )}
    </div>
  )
}

export default CakeHover
