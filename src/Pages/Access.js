import React from 'react'
import banner from '../Assets/Images/banner.png'
import GMaps from '../Components/GMaps/GMaps';

function Access() {
  return (
    <div>
      <div className="bg-fixed h-80 bg-top bg-cover" style={{backgroundImage: `url(${banner})`}}/>
      <p
        className="sticky sm:-mt-10 -mt-4 sm:h-24 flex items-center justify-center font-bold text-xl sm:text-4xl text-center sm:max-w-3xl max-w-sm mx-auto px-4 py-3 border border-transparent text-base font-medium rounded-sm shadow-sm text-white bg-gray-900 sm:px-8"
      >
        On se retrouve à La boutique ?
      </p>
      <p className="my-12 text-gray-700">
        <span className="block text-center">46 Montée de la Grande Côte</span>

        <span className="block text-center">69001 LYON</span>
      </p>
        <hr className="w-1/12 mx-auto"/>
      <p className="my-12 text-gray-700">
        <span className="block text-center">Le lundi : de 8H30 à 18H</span>

        <span className="block text-center">Du mardi au vendredi : de 8H30 à 19H</span>

        <span className="block text-center">Le samedi : de 10H à 19H</span>

        <span className="block text-center">Le dimanche : de 10h à 18H</span>
      </p>

      <GMaps />

      <div className="bg-fixed h-80 bg-top bg-cover" style={{backgroundImage: `url(${banner})`}}/>
    </div>
  )
}

export default Access
