import React from "react";
import mujerHero from "../assets/images/chica 1.png";
import mockupdescarga from '../assets/images/mockupdescarga.png'
import logoPlayStore from '../assets/images/logo-play-store.png'
import vector from '../assets/images/vector.png'

const Hero = () => {
  return (
    <section className="max-w-5xl h-[90vh] grid grid-cols-1 md:grid-cols-8">
      {/*Information */}
      <div className=" md:col-span-5 flex items-center justify-center p-16 pt-1">
        <div>
          <h1 className="text-4xl font-bold pb-6 text-negro">
            <span className="text-primary">Postúlate</span> rápido y ahorra
            tiempo en la búsqueda de tu nuevo trabajo en Tecnología
          </h1>
          <p className="text-1xl font-bold">
            Crea tu perfil en menos de 5 minutos y postúlate solo presionando{" "}
            <span className="text-verde">ME GUSTA</span>.{" "}
          </p>
          <div className="flex pt-4">
            <div className="mt-[50px] img-none bg-gradient-to-r from-primary via-secundary w-[280px] h-[280px] rounded-full">
            </div>
            <img className="absolute ml-[40px] w-[180px] "  src={mujerHero} alt="" />
          </div>
        </div>
      </div>
      <div className="md:col-span-3 flex flex-col pr-16 pt-[100px] items-center relative ">
        <img className="absolute -z-10" src={vector} alt="vector" />
        <img className="w-[350px]" src={mockupdescarga} alt="Jobs Match" />
        <button className="mt-12 bg-black h-[60px] w-[200px] flex justify-center items-center rounded-md text-[#fff]" >
          <img className="w-10" src={logoPlayStore} alt="Jobs Match" />
          <div className="">
          DESCARGAR EN <br />
          <span>Google Play</span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
