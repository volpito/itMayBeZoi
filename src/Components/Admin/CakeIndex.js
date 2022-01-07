import React, { useEffect, useState } from 'react'
import { XIcon } from "@heroicons/react/outline";
import CakeEdit from './CakeEdit';


function CakeIndex(props) {
  const { onClose } = props;

  const [cakes, setCakes] = useState([]);
  const [item, setItem] = useState("");
  const [send, setSend] = useState(false);

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
      .then(()=>{
        setSend(false);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, [cakes.length, send])

  const sendEdit = (item) => {
    setItem(item)
  }

  const sendDelete = (item) => {
    setItem(item)

  }

  return (
    <>
    <div className='absolute bg-red-50 z-40 w-full h-full -mt-28 -ml-24'>
      <XIcon onClick={onClose} className="m-6 w-7 h-7" />
      {cakes && (
        cakes.map((a, i) => {

          return(
            <div key={i} className='mb-6 mx-12 pl-24'>
              <p key={i} className='mb-3'>
                {a.name} ________ {a.category.name}
              </p>
              <div className='flex space-x-12'>
                <button onClick={() => {sendEdit(a)}} className='border-2 border-gray-100 hover:border-gray-300 px-2 py-1 rounded-xl	bg-green-400 hover:bg-green-200'>Modifier</button>
                <button onClick={() => {sendDelete(a)}} className='border-2 border-gray-100 hover:border-gray-300 px-2 py-1 rounded-xl	bg-red-400 hover:bg-red-200'>Supprimer</button>
                <button className={`border-2 border-gray-100 hover:border-gray-300 px-2 py-1 rounded-xl	${a.available ? "bg-blue-400" : "bg-yellow-400"}`}>{a.available? "En vitrine" : "Indisponible"}</button>
              </div>
            </div>
          )
        }))}
        <div>
          <CakeEdit item={item} onSend={() => setSend(true)}/>
        </div>
    </div>
    </>
  )
}

export default CakeIndex
