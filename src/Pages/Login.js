import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

import Admin from './Admin';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logInfo, setLogInfo] = useState({});

  const url="http://localhost:8000/users/sign_in";

  const onSend = (e) => {
    e.preventDefault();

    setLogInfo({ "user": { "email": email, "password": password } });
  };

  useEffect(() => {
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logInfo),
    })
    .then((response) => {
      return response;
    })
    .then((res) =>
      res
        .json()
        .then((json) => ({
          token: res.headers.get("authorization").split(" ")[1],
          json,
        }))
      .then(({ token, json }) => {
        console.log(token)
        console.log(json)
        Cookies.set("user_id", json.token.id);
        Cookies.set('token', token);
        Cookies.set('email_owner', email);
      })
    )

    .catch((error) => {
      console.log({ error });
    })

  }, [logInfo, email])

  return (
    
    <div className='bg-red-50 p-24'>
      {!Cookies.get('token')&& (
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto h-full">
          <form onSubmit={onSend}>
            <div className="form-group mb-6">
              <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email</label>
              <input 
                type="email" 
                className="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                id="exampleInputEmail2"
                aria-describedby="emailHelp" 
                placeholder="patronne@BigBoss.com"
                onChange={(evt) => setEmail(evt.target.value)}
                />
            </div>
            <div className="form-group mb-6">
              <label htmlFor="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Mot de passe</label>
              <input 
                type="password" 
                className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                id="exampleInputPassword2"
                placeholder="MDPdeFDP"
                onChange={(evt) => setPassword(evt.target.value)}
                />
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="form-group form-check">
                <input 
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="exampleCheck2"
                />
                <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Se souvenir de moi</label>
              </div>
            </div>
            <button 
              type="submit" 
              className="
              w-full
              px-6
              py-2.5
              bg-blue-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out">Go !</button>
          </form>
        </div>
      )}

      {Cookies.get('token') && (
        <Admin />
      )}
    </div>
  )
}

export default Login
