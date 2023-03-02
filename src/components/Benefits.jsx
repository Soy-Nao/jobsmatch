import React from "react";
import completaTuPerfil from "../assets/images/completatuperfil.png";
import imgSearc from "../assets/images/imgSearc.png";
import imagenCohete from '../assets/images/imagenCohete.png';

const Benefits = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <div>
        <h1 className="text-5xl font-bold text-primary flex md:justify-center">
          Beneficios
        </h1>
      </div>
      <div className="max-w-5xl md:h-[60vh] grid grid-cols-1 md:grid-cols-9 ">
        <div className="md:col-span-3  flex flex-col items-center md:p-6 ">
          <img
            className=""
            src={completaTuPerfil}
            alt="Completa Tu Perfil"
          />
          <h2 className="text-primary font-bold text-3xl ">
            Completa tu perfil
          </h2>
          <p className="text-1xl">
            Hemos implementado la manera más rápida y sencilla de completar tu
            perfil y solo te tomará 5 minutos.{" "}
          </p>
        </div>
        <div className="md:col-span-3 flex flex-col items-center md:p-6 ">
        <img className="" src={imgSearc} alt="imgSearc" />
          <h2 className="text-primary font-bold text-3xl text-center">            
            Búsquedas adaptadas a ti
          </h2>
          <p>
            Las vacantes mostradas serán las alineadas a los datos que
            completaste en tu perfil.
          </p>
        </div>
        <div className="md:col-span-3 flex flex-col items-center md:p-6">
          <img src={imagenCohete} alt="" />
          <h2 className="text-primary  font-bold text-3xl ">
            Postúlate
          </h2>
          <p>¿Te gusto la vacante? Pues no pierdas tiempo solo con un “ME GUSTA” ya toda tu información le llegó a la persona que ofrece empleo</p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
