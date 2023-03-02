import React from 'react'
import mockupdescarga from '../assets/images/mockupdescarga.png'
import logoPlayStore from '../assets/images/logo-play-store.png'

const Footer = () => {
  return (
    <section className='flex flex-col justify-center items-center p-8'>
        <div>
            <h2 className='text-primary text-5xl font-bold'>Descargala YA</h2>
            <p className='text-2xl'>Y has <span className='text-secundary'>match</span>  con tu <br /> trabajo ideal en <br /> Tecnología</p>
        </div>
        <div className='flex flex-col items-center '>
            <img src={mockupdescarga} alt="" />
            <button className="mt-12 bg-black h-[60px] w-[200px] flex justify-center items-center rounded-md text-[#fff]" >
          <img className="w-10" src={logoPlayStore} alt="Jobs Match" />
          <div className="">
          DESCARGAR EN <br />
          <span>Google Play</span>
          </div>
        </button>
        </div>
    </section>
  )
}

export default Footer