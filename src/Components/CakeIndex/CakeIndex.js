import React, { useEffect, useState } from 'react'

function CakeIndex() {
  
  const url = "http://localhost:8000/cakes.json";
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
  console.log(cakes);
  return (
    <div>
      {cakes && (
        cakes.map((a, i) => {
        return(
          <div key={i}>
            <p key={i}>{a.name} : {a.description} !</p>
          </div>
          )}))}
    </div>
  )
}

export default CakeIndex
