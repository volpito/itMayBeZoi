import React from 'react'
import pic from '../Assets/Images/montee.jpg'

function Carte() {
  return (
    <div className="grid lg:grid-cols-3 grid-row-3 w-full justify-items-center text-gray-700">
      <div className="bg-yellow-50 w-full text-center py-12">
        <h2 className="text-xl font-bold">
          En vitrine aujourd'hui :
        </h2>
      </div>  
      
      <div>
        <img src={pic} alt="vue de la boutique de l'extérieur"/>
      </div>   
      
      <div className="bg-yellow-50 w-full text-center py-12 px-4">
        <h2 className="text-4xl font-bold">
          N'hésitez pas à commander !
        </h2>
        <p className="text-lg my-12">
          Les individuels sont disponibles tous les jours en boutique, comme dans une pâtisserie classique.
          Pour les gâteaux en grand format par contre, il faut réserver minimum deux jours en avance pour que notre petite équipe puisse s'organiser :)
        </p>
        <h3 className="font-extrabold mt-20">
          NOS GÂTEAUX EN GRAND FORMAT
          4, 6 OU 8 PERSONNES
        </h3>
        <p className="font-bold my-4">
          <span className="block">ROCHER CHOCO NOISETTE - 22.50€ - 31.50€</span>
          <span className="block">PARIS BREST 12.30€ - 20.50€ - 28.70€</span>
          <span className="block">TOURBILLON PÉCAN 12.30€ - 20.50€ - 28.70€</span>
          <span className="block">PISTACHE CERISE - 13.50€ - 22.50€ - 31.50</span>
          <span className="block">TARTE TIRAMISU 12.30€ - 20.50€ - 28.70 €</span>
          <span className="block">TARTE CITRON BASILIC 10.20€ - 17€ - 23.80€</span>
          <span className="block">FORET NOIRE 14€ - 20€ - 28€</span>
        </p>
        <p className="lg:absolute relative pt-12 lg:pt-0 bottom-4 mx-2">
          A commander en boutique ou au 06 02 16 76 01
          Minimum deux jours à l'avance :)
        </p>
      </div>
    </div>
  )
}

export default Carte
