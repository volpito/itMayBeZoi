import React, { useEffect, useState } from 'react'
import CakeHover from '../CakeHover/CakeHover';

function CakeIndex(props) {

  const url = "http://localhost:8000/cakes";
  const [cakes, setCakes] = useState([]);

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
  }, [cakes.length])

  return (
    <div>
    <h2>Les classiques </h2>

      {cakes && (
        cakes.map((a, i) => {
        if(a.category.name === 'Classique'){
        return(
          < CakeHover key={i} name={a.name} description={a.description} image={a.image} available={a.available} className={props.className}/>
        )}
        return(null)
      })
      )}
    <h2>Les saisonniers </h2>
      {cakes && (
        cakes.map((a, i) => {
        if(a.category.name === 'Saisonniers'){
        return(
          < CakeHover key={i} name={a.name} description={a.description} image={a.image} available={a.available} className={props.className}/>
        )}
        return(null)
      })
      )}
    <h2>Les spéciaux </h2>
      {cakes && (
        cakes.map((a, i) => {
        if(a.category.name === 'Spéciaux'){
        return(
          < CakeHover key={i} name={a.name} description={a.description} image={a.image} available={a.available} className={props.className}/>
        )}
        return(null)
      })
      )}
    </div>
  )
}

export default CakeIndex
