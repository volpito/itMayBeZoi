import React, { useState } from 'react'
import CreateCakeForm from './CreateCakeForm';
import CakeIndex from './CakeIndex';

function AdminNav() {

  const [cakeForm, setCakeForm] = useState(false);
  const [cakeList, setCakeList] = useState(false);

  return (
    <div className="flex">
      <div className="mx-auto cursor-pointer" onClick={()=> setCakeForm(true)}>Créer un gâteau</div>
      <div className="mx-auto cursor-pointer" onClick={()=> setCakeList(true)}>Voir les gâteaux</div>

      {cakeForm && <CreateCakeForm onClose={() => setCakeForm(false)} />}
      {cakeList && <CakeIndex onClose={() => setCakeList(false)} />}
  </div>
  )
}

export default AdminNav
