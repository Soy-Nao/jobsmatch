import React from "react";
import { AiFillStar } from 'react-icons/ai'
const Plans = () => {
  return (
    <section className="bg-[#EBEDF0] max-w-5xl p-4 md:p-6 h-[auto] w-[100vw] flex flex-col items-center justify-center ">
      <h2 className="text-4xl text-primary font-bold ">
      Nuestros servicios
      </h2>
      <div className="flex justify-evenly flex-col md:flex-row  mt-10 md:gap-[100px] ">
        <div className="">
          <div className="bg-[#EBEDF0] m-6 md:w-[200px] md:h-auto p-6 border-[3px] border-[#F5F6F7] shadow-xl shadow-secundary flex flex-col  items-center">
            <h2 className="text-4xl font-bold pb-6 text-center ">$0</h2>
            <div className="border-t-[1px] pb-6 border-secundary w-[190px]"></div>
            <ul className="list-disc pl-8 ">
              <li className="pb-4">Crea tu perfil</li>
              <li className="pb-8">Postulate a todas las vacantes</li>
            </ul>
            <button className="bg-secundary  text-blanco text-2xl font-semibold p-2 w-[180px] rounded-lg">
                FREE
            </button>
          </div>
        </div>
        <div className="">
        <div className="bg-[#EBEDF0] p-6 m-6 md:w-[200px] md:h-auto border-[3px] border-[#F5F6F7] shadow-xl shadow-primary flex flex-col  items-center">
            <h2 className="relative text-4xl font-bold pb-6  text-center "><AiFillStar className="text-secundary absolute left-[-40px] top-[5px]" /> $10</h2>
            <div className="border-t-[1px] pb-6  border-primary w-[190px]"></div>
            <ul className="list-disc pl-8 ">
              <li className="pb-4">Recibe nuevas vacantes a tu WhatsApp.</li>
              <li className="pb-4">Notificación al instante cuando hagas Match.</li>
              <li className="pb-8">Perfil destacado dentro de la plataforma.</li>
            </ul>
            <button className="bg-primary  text-blanco text-2xl font-semibold p-2 w-[180px] rounded-lg">
                PREMIUM
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
