import React from 'react'
import banner from '../Assets/Images/banner.png'
import ContactForm from '../Components/ContactForm/ContactForm'

function Contact() {
  return (
    <div className="h-screen py-96 lg:py-0 sm:mb-0 mb-96 lg:bg-transparent bg-yellow-500">
      <div className="bg-fixed h-screen bg-top lg:pb-0 pb-72 bg-cover filter brightness-50" style={{backgroundImage: `url(${banner})`}}>
      </div>
      <div className="absolute top-24 inset-x-0 justify-items-center ">
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
