import React from "react";
import cake from '../../Assets/Images/cake.png'

export default function Cards() {

const people = [
  {
    role: `Chez Zoï, on a à coeur de proposer des produits de qualité au prix le plus raisonnable possible, afin de rendre cette alimentation accessible à tous et que tout le monde se fasse plaisir !`,
    classname: "transform hover:-translate-y-2",
    imageUrl:
      `${cake}`,
  },
  {    
    role: `Des pâtisseries élaborées sans aucun produit d'origine animale. Ni lait, ni oeuf, ni beurre… Toujours 100% végétales !`,
    classname: "transform hover:rotate-12",
    imageUrl:
      `${cake}`,
  },
  {
    role: `Sur place… (ou vous propose également une sélection de cafés & boissons fraiches pour accompagner votre douceur) ou à emporter ! `,
    classname: "transform hover:-translate-y-2",
    imageUrl:
      `${cake}`,
  },
]

  return (
    <div className="mx-auto py-20 bg-blue-50">
        <h2 className="sm:ml-16 font-bold tracking-tight text-gray-900 text-xl sm:text-4xl pb-12">
          <span className="sticky sm:-mt-32 -mt-24 block w-40 sm:w-72 text-white sm:py-6 py-2 bg-gray-800 px-2 rounded-sm">On s'engage !</span>
        </h2>      
        <div className="space-y-8 sm:space-y-12 mt-12 text-center">
        <ul
          className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-3"
        >
        {people.map((person) => (
          <li key={person.role}>
            <div className="space-y-4">
              <img className={`rounded-xl mx-auto h-40 w-40 lg:w-40 lg:h-40 ${person.classname}`} src={person.imageUrl} alt="" />
              <div className="space-y-2">
                <div className="text-xs font-medium lg:text-sm">
                  <p className="text-gray-400">{person.role}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}