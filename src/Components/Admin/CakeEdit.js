import React, { useEffect } from 'react'
import { useState } from 'react';
import Cookies from 'js-cookie';
import { XIcon } from '@heroicons/react/outline';

function CakeEdit(props) {

  const { item } = props
  const [formData, setFormData] = useState("")
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [available, setAvailable] = useState("");
  const [category_id, setCategory_id] = useState("");

  const url=`http://localhost:8000/cake/${item.id}`;

  const handleSubmit = event => {
    event.preventDefault();

    setFormData({ "cake": { "name": name, "description": description, "image": image, "available": available, "category_id": category_id } });
    console.log(formData);
  }

  useEffect(() => {
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      },
      body: JSON.stringify(formData),
    })
    .then((response) => {
      return response;
    })

    .catch((error) => {
      console.log({ error });
    })

  }, [url, formData])

  return (
    <div className='fixed top-36 right-52 my-auto text-4xl bg-red-50 z-50 w-1/2 '>
      <form className='flex flex-col text-lg space-y-12 my-16 text-center text-gray-600' onSubmit={handleSubmit}>
      <label htmlFor="name">
        <p>Intitulé du gâteau</p> 
        <input className='rounded-xl pl-2' type="text" name="name" defaultValue={item.name} onChange={(evt) => setName(evt.target.value)}/>
      </label>
      <label htmlFor="description">
      <p>Description</p>
        <input className='rounded-xl pl-2' type="text" name="description" defaultValue={item.description} onChange={(evt) => setDescription(evt.target.value)}/>
      </label>
      <label htmlFor="category_id" className='-pb-6'>
        <p>Catégorie : </p>
        <select name="category_id" id="category_id" form="category_id" className='w-4/12 mx-auto -space-y-6 text-center rounded-xl h-8' onChange={(evt) => setCategory_id(evt.target.value)}>
          <option>Choisir ci-dessous</option>
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
        <input className='' type="file" name="image" defaultValue={item.image} accept="image/*" onChange={(evt) => setImage(evt.target.value)}/>
      </label>
      <input type="submit" value="Enregister" className='w-6/12 sm:w-2/12 h-12 text-center mx-auto bg-black text-white rounded-xl' />
    </form>
    </div>
  )
}

export default CakeEdit
