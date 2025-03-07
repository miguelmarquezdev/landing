import React from "react";
import logo from "../../public/img/logo-footer.png";
import WeTravelButton  from './WeTravelButton'

const Header = () => {
  return (
    <nav>
      <div className="w-full mx-auto max-w-screen-xl relative z-50">
        <navbar className="flex gap-5 bg-white/20 backdrop-blur-md justify-between items items-center absolute w-full top-10 py-1 px-10 rounded-full">
          <img src={logo} alt="" className="w-36" />
          <div className="flex space-x-5">
            <ul className="flex space-x-5 items-center text-white">
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#itinerario">Itinerario</a>
              </li>
              <li>
                <a href="#testimonios">Testimonios</a>
              </li>
              <li>
                <a href="#licencias">Licencias</a>
              </li>
            </ul>
            <a
              href="https://wa.me/51967502774" target="_blank"
              className="bg-[#7f1d1d] text-white py-3 px-7 rounded-full"
            >
              Whatsapp
            </a>
          </div>
        </navbar>
      </div>
      <section id="inicio" className="bg-[url(../../public/img/bannermapi.webp)] w-full h-[750px]  bg-cover bg-center flex justify-center items-center flex-col  before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black before:to-black/10 before:opacity-30 before:h-full">
        <div className="max-w-screen-lg space-y-10 relative">
          <h1 className="text-white font-bold text-5xl text-center">
            Peru MáDesgico{" "}
            <span className="text-cyan-300">8 días 7 noches</span>
          </h1>
          <div className="w-full flex bg-white overflow-hidden rounded-xl">
            <div className="bg-[url(../../public/img/mapitwo.jpg)] w-4/12 bg-cover bg-center"></div>
            <div className="w-8/12 px-5 py-10 space-y-5">
              <div className="flex justify-center items-center space-x-5 border border-neutral-300 rounded-lg max-w-lg mx-auto py-3">
                <div>
                  <div className="flex ">
                    <div className="text-red-500 text-xs">Desde</div>
                    <div className="text-gray-600 font-black text-4xl">
                      577 USD
                    </div>
                  </div>
                </div>
                <div>
                  <WeTravelButton />
                </div>
              </div>
              <h2 className="font-semibold text-xl">Resumen</h2>
              <p>
                "Discover Cusco, the historic capital of the Inca Empire and
                gateway to the iconic Machu Picchu. With its rich cultural
                heritage, cobblestone streets, and landmarks like Sacsayhuamán
                and the Temple of the Sun (Qoricancha), Cusco promises an
                unforgettable experience. Explore the vibrant San Pedro Market,
                savor Peru’s exquisite cuisine, and immerse yourself in the
                authenticity of its traditions. Plan your trip to Cusco and feel
                the magic of one of South America’s most captivating cities."
              </p>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Header;
