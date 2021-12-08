import React from "react"
import cake from '../../Assets/Images/cake.png'
import { Link } from 'react-router-dom';

export default function Avantages() {
  
  return (
    <div className="flex pb-32 bg-yellow-300">
      <div className="sm:px-6 lg:px-8 mx-auto py-12">
        <h2 className="sticky sm:-ml-22 text-xl sm:text-4xl sm:py-6 py-2 -mt-20 pl-2 font-bold text-left bg-gray-800 text-white w-9/12 sm:w-6/12 rounded-sm">Qu'est-ce qu'on trouve chez Zoï ?</h2>
        
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 flex-shrink-0 self-center py-12"> 
            <img className="mt-6 ml-5 w-10/12 rounded-full transform hover:-rotate-12" src={cake} alt="steps images" width="384" height="512" />
            <p className="transform -rotate-6 rounded-lg sm:shadow sm:absolute inset-x-1 justify-items-center sm:text-xl text-center max-w-sm sm:mt-32 my-auto mx-auto sm:px-12 px-4 bg-gray-100 text-gray-700 py-6">
              Des gâteaux individuels à manger sur place ou à emporter. La carte change régulièrement, en fonction des saisons !
              Et toujours 100% vegan 
              <br />
              :)
            </p>          
          </div>
        </div>
        <div className="absolute max-w-7xl mx-auto sm:-mt-72 -mt-56">
          <div className="grid grid-cols-2 flex-shrink-0 self-center py-6"> 
            <p className="sm:block hidden"/>
            <p className="transform rotate-6 z-50 rounded-lg sm:shadow sm:absolute inset-x-1 justify-items-center sm:text-xl text-center max-w-sm mt-36 mx-auto sm:px-12 px-4 bg-gray-100 text-gray-700 py-6">
              Des gâteaux sur commande, pour 4, 6 ou 8 personnes…
              N'hésitez pas à nous appeler, les gâteaux disponibles changent en fonction des saisons également 
              <br />
              :)
            </p>
            <img className="z-1 mx-auto rounded-full w-10/12 transform hover:rotate-12 mt-44" src={cake} alt="steps images" width="384" height="512" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto sm:mt-24 mt-44">
        <div className="grid grid-cols-2 flex-shrink-0 self-center py-6"> 
          <img className="w-10/12 mt-10 sm:mt-3 ml-5 rounded-full transform hover:-rotate-12" src={cake} alt="steps images" width="384" height="512" />
          <p className="transform -rotate-6 rounded-lg sm:shadow sm:absolute inset-x-1 justify-items-center sm:text-xl text-center max-w-sm sm:mt-40 my-auto mx-auto sm:px-12 px-4 bg-gray-100 text-gray-700 py-6">
            Des boissons chaudes ou froides, à consommer sur place ou à emporter ! 
            Café torréfié sur Lyon, limonade artisanale… 
            <br />
            On a tout ce qu'il faut ! 
          </p>          
        </div>
      </div>  
      <Link
        to="/menu"
        className="absolute inset-x-1 justify-items-center max-w-xs mx-auto my-6 inline-flex items-center justify-center px-5 py-3 shadow text-xl font-medium rounded-sm text-gray-600 bg-white transform hover:-rotate-180"
      >
        Découvrez la carte
      </Link>  
    </div>
  </div>
  )
}
