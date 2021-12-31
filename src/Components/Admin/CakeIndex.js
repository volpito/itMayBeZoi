import React, { useEffect, useState } from 'react'
import { XIcon } from "@heroicons/react/outline";
import CakeEdit from './CakeEdit';


function CakeIndex(props) {
  const { onClose } = props;

  const [cakes, setCakes] = useState([]);
  const [cakeEdit, setCakeEdit] = useState(false);
  const [available, setAvailable] = useState(false);
  const [id, setId] = useState("");
  const url = "http://localhost:8000/cakes";

  useEffect(() => {
    fetch(url, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        response.json()
        .then((json) => {
          setCakes(json)
        })
      })
  
      .catch((error) => {
        console.log({ error });
      });
  }, [cakes.length, available])

  const sendEditAvailable = (itemId, itemAvailable) => {
    setId(itemId)
  }

  const sendEdit = (itemId) => {
    setCakeEdit(true);
    setId(itemId)
  }

  const sendDelete = (itemId) => {
    setId(itemId)

  }

  return (
    <>
    <div className='absolute bg-red-50 z-40 w-full h-94 -mt-24 -ml-12'>
      <XIcon onClick={onClose} className="m-6 w-7 h-7" />
      {cakes && (
        cakes.map((a, i) => {

          return(
            <div key={i} className='mb-6 mx-12'>
              <p key={i} className='mb-3'>
                {a.name}
              </p>
              <div className='flex space-x-12'>
                <button onClick={() => {sendEdit(a.id)}} className='border-2 border-gray-100 hover:border-gray-300 px-2 py-1 rounded-xl	bg-green-400 hover:bg-green-200'>Modifier</button>
                <button onClick={() => {sendDelete(a.id)}} className='border-2 border-gray-100 hover:border-gray-300 px-2 py-1 rounded-xl	bg-red-400 hover:bg-red-200'>Supprimer</button>
                <label className='mx-auto' htmlFor="available"> <p>{a.available? "En vitrine" : "Indisponible"}</p>
                  <input type="checkbox" name="available" className='mx-auto' checked={a.available} onChange={() => {sendEditAvailable(a.id, a.available)}}/>
                </label>
              </div>
            </div>
          )
        }))}
    </div>
    <div>
      {cakeEdit && (
        <CakeEdit className='' id={id} onClose={() => setCakeEdit(false)}/>
      )}
    </div>
    </>
  )
}

export default CakeIndex
