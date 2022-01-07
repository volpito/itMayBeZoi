import React from 'react'
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function CakeEdit(props) {

  const { item, onSend } = props;
  const [formData, setFormData] = useState("")
  const [name, setName] = useState("");
  const [cake, setCake] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [available, setAvailable] = useState("");
  const [category_id, setCategory_id] = useState(props.category_id);

  const url=`http://localhost:8000/cakes/${item.id}`;

  useEffect(() => {
      fetch(url, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
        },
      }).then((response) => response.json())
        .then((response) => {
          setCake(response);
        }).catch(function () {
          console.log("error");
        });

    }
  , [url]);

  const handleSubmit = event => {
    event.preventDefault();

    setFormData({ "cake": { "name": (name !== "") ? name : item.name, "description": (description !== "") ? description : item.description, "image": (image !== "") ? image : item.image, "available": (available !== item.available) ? available : item.available, "category_id": (category_id !== "") ? category_id : item.category_id } });
    console.log(formData);
  
    fetch(url, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('JWLRToken')}`,
        //'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(formData),
    })
    .then((response) => {
      return response;
    })
    .then(()=>{
      setName("");
      setDescription("");
      setImage("");
      setAvailable(false);
    })
    .catch((error) => {
      console.log({ error });
    })
    onSend();
  }
  return (
    <div className='z-30 fixed top-36 right-52 my-auto text-4xl bg-red-50 z-50 w-5/12 '>
      <h2 className='text-lg text-center pt-12 pb-6 text-gray-600 underline'>Modifier l'état ou les infos du gâteau :</h2>
      <form className='flex flex-col text-lg space-y-12 text-center text-gray-600' onSubmit={handleSubmit}>
      <label htmlFor="name">
        <p>Intitulé du gâteau</p> 
        <input className='rounded-xl pl-2' type="text" name="name" placeholder={cake.name} onChange={(evt) => setName(evt.target.value)}/>
      </label>
      <label htmlFor="description">
      <p>Description</p>
        <input className='rounded-xl pl-2' type="text" name="description" placeholder={cake.description} onChange={(evt) => setDescription(evt.target.value)}/>
      </label>
      <label htmlFor="category_id" className='-pb-6'>
        <p>Catégorie : </p>
        <select name="category_id" id="category_id" form="category_id" className='w-4/12 mx-auto -space-y-6 text-center rounded-xl h-8' onChange={(evt) => setCategory_id(evt.target.value)}>
          <option value={item.category_id} selected>{item.category_id}</option>
          <option value="1">Classiques</option>
          <option value="2">Saisonniers</option>
          <option value="3">Spéciaux</option>
        </select>
        </label>
      <label htmlFor="available">
      <p>En vitrine </p>
        <input type="checkbox" defaultChecked={available} name="available" onChange={(evt) => setAvailable(evt.target.value)}/>
      </label>
      <label htmlFor="image" >
        <input className='' type="file" name="image" placeholder={cake.image} accept="image/*" onChange={(evt) => setImage(evt.target.value)}/>
      </label>
      <input type="submit" value="Enregister" className='w-6/12 sm:w-3/12 h-12 text-center mx-auto bg-black text-white rounded-xl mx-12' />
    </form>
    </div>
  )
}

export default CakeEdit
