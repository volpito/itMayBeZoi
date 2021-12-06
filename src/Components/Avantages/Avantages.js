import React from "react"
import cake from '../../Assets/Images/cake.png'

export default function Avantages() {
  
  return (
    <div className="flex bg-red-50 pb-12">
      <div className="sm:px-6 lg:px-8 mx-auto">
        <h2 className="text-2xl -mt-6 pl-2 font-bold text-left bg-gray-900 text-white w-9/12 sm:w-5/12 py-2 rounded-sm">Qu'est-ce qu'on trouve chez Zoï ?</h2>
        
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 flex-shrink-0 self-center py-12"> 
            <img className="mt-6 ml-5 w-11/12 rounded-full transform hover:-rotate-12" src={cake} alt="steps images" width="384" height="512" />
            <p className="rounded-lg sm:absolute inset-x-1 justify-items-center sm:text-xl text-center max-w-sm sm:mt-32 my-auto mx-auto sm:px-12 px-4 bg-red-50 text-gray-700 py-6">
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
            <p className="z-50 rounded-lg sm:absolute inset-x-1 justify-items-center sm:text-xl text-center max-w-sm mt-36 mx-auto sm:px-12 px-4 bg-red-50 text-gray-700 py-6">
              Des gâteaux sur commande, pour 4, 6 ou 8 personnes…
              N'hésitez pas à nous appeler, les gâteaux disponibles changent en fonction des saisons également 
              <br />
              :)
            </p>
            <img className="z-1 rounded-full w-11/12 transform hover:rotate-12 mt-44" src={cake} alt="steps images" width="384" height="512" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto sm:mt-24 mt-44">
        <div className="grid grid-cols-2 flex-shrink-0 self-center py-6"> 
          <img className="w-11/12 mt-3 ml-5 rounded-full transform hover:-rotate-12" src={cake} alt="steps images" width="384" height="512" />
          <p className="rounded-lg sm:absolute inset-x-1 justify-items-center sm:text-xl text-center max-w-sm sm:mt-40 my-auto mx-auto sm:px-12 px-4 bg-red-50 text-gray-700 py-6">
            Des boissons chaudes ou froides, à consommer sur place ou à emporter ! 
            Café torréfié sur Lyon, limonade artisanale… 
            <br />
            On a tout ce qu'il faut ! 
          </p>          
        </div>
      </div>    
    </div>
  </div>
  )
}
