import React, { useEffect, useState } from 'react'
import { XIcon } from "@heroicons/react/outline";
import Cookies from 'js-cookie';

function CreateCakeForm(props) {

  const { onClose } = props;
  const [formData, setFormData] = useState("")
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [available, setAvailable] = useState("");
  const [category_id, setCategory_id] = useState("");
  
  const handleSubmit = event => {
    event.preventDefault();

    setFormData({ "cake": { "name": name, "description": description, "image": image, "available": available, "category_id": category_id } });
    console.log(formData);
  }

  const url="http://localhost:8000/cakes";

  useEffect(() => {
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('JWLRToken')}`
      },
      body: JSON.stringify(formData),
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log({ error });
    })

  }, [formData])

  return (
    <div className='absolute text-4xl bg-red-50 z-50 w-full h-full -m-24'>
      <XIcon onClick={onClose} className="m-6 w-7 h-7" />
      <form className='flex flex-col text-lg space-y-12 text-center text-gray-600' onSubmit={handleSubmit}>
      <label htmlFor="name">
        <p>Intitulé du gâteau</p> 
        <input className='rounded-xl pl-2' type="text" name="name" onChange={(evt) => setName(evt.target.value)}/>
      </label>
      <label htmlFor="description">
      <p>Description</p>
        <input className='rounded-xl pl-2' type="text" name="description" onChange={(evt) => setDescription(evt.target.value)}/>
      </label>
      <label htmlFor="category_id" className='-pb-6'>
        <p>* Catégorie : </p>
        <select name="category_id" id="category_id" form="category_id" className='w-2/12 mx-auto -space-y-6 text-center rounded-xl h-8' onChange={(evt) => setCategory_id(evt.target.value)}>
          <option value="" disabled selected>Choisir ci-dessous</option>
          <option value="1">Classiques</option>
          <option value="2">Saisonniers</option>
          <option value="3">Spéciaux</option>
        </select>
        </label>
      <label htmlFor="available">
      <p>Disponible </p>
        <input type="checkbox" name="available" onChange={(evt) => setAvailable(evt.target.value)}/>
      </label>
      <label htmlFor="image" >
        <input className='' type="file" name="image" accept="image/*" onChange={(evt) => setImage(evt.target.value)}/>
      </label>
      <span className='absolute right-12 bottom-12 text-gray-400 text-xs'> * champ obligatoire  </span>
      <input type="submit" value="Enregister" className='w-6/12 sm:w-2/12 h-12 text-center mx-auto bg-black text-white rounded-xl' />
    </form>
    </div>
  )
}

export default CreateCakeForm
