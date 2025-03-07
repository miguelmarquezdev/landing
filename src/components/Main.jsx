import React from "react";
import avatar1 from "../../public/img/avatar1.jpg"
import avatar2 from "../../public/img/avatar2.jpg";
import tripadvisor from "../../public/img/tripadvisor.svg";
import gercetur from "../../public/img/gercetur.webp";
import lincencia from "../../public/img/licencia-funcionamiento.webp";
import ruc from "../../public/img/ficha-ruc.webp";
import aeropuerto from "../../public/img/aeropuerto.jpg"


const Main = () => {
  return (
    <div className="bg-neutral-50" id="itinerario">
      <section className="py-20 max-w-screen-lg mx-auto space-y-10 ">
        <h2 className="font-bold text-center text-3xl ">Itinerario</h2>
        <article>
          <div className="w-full flex bg-white overflow-hidden rounded-xl shadow-neutral-200 shadow-2xl">
            <div className="bg-[url(../../public/img/aeropuerto.jpg)] w-4/12 bg-cover bg-center"></div>
            <div className="w-8/12 px-5 py-10 space-y-5">
              <h2 className="font-semibold text-xl">
                DIA 1: RECOJO DEL AEROPUERTO{" "}
              </h2>
              <p>
                Nuestro equipo de TOP INKA TRAVEL los recibirá en el Aeropuerto
                Internacional Jorge Chávez, esperándolos con un letrero para su
                fácil ubicación. Luego, los trasladaremos al hotel, donde
                realizaremos el check-in y los ayudaremos a acomodarse en sus
                habitaciones. Pasarán la noche en Lima, disfrutando de todas las
                comodidades para una estancia placentera.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div className="w-full flex bg-white overflow-hidden rounded-xl shadow-neutral-200 shadow-2xl">
            <div className="w-8/12 px-5 py-10 space-y-5">
              <h2 className="font-semibold text-xl">DIA 2: CITY TOUR LIMA</h2>
              <p>
                Iniciaremos el recorrido con el recojo en su hotel aprox. a las
                8:40 a. m. y comenzaremos explorando la Pirámide de Pucllana, un
                impresionante vestigio de la Lima prehispánica. Luego, nos
                dirigiremos al Centro Histórico para admirar sus majestuosos
                edificios coloniales y visitar el Convento de San Francisco,
                famoso por sus enigmáticas catacumbas y su valioso arte
                religioso colonial. Continuaremos con un recorrido por la Lima
                moderna, incluyendo la Costa Verde, conocida por sus impactantes
                paisajes. El tour finalizará aproximadamente a las 2:00 p. m.{" "}
              </p>
            </div>
            <div className="bg-[url(../../public/img/lima.jpg)] w-4/12 bg-cover bg-center"></div>
          </div>
        </article>
        <article>
          <div className="w-full flex bg-white overflow-hidden rounded-xl shadow-neutral-200 shadow-2xl">
            <div className="bg-[url(../../public/img/huacachina.jpg)] w-4/12 bg-cover bg-center"></div>
            <div className="w-8/12 px-5 py-10 space-y-5">
              <h2 className="font-semibold text-xl">
                DIA 3: PARACAS – HUACACHINA FULL DAY
              </h2>
              <p>
                Te recogeremos en tu hotel alrededor de las 3:45 a. m. para
                iniciar nuestra aventura. Tras 4 horas de viaje, llegaremos a
                Paracas, donde exploraremos la Reserva Nacional y su fascinante
                fauna marina. Luego, disfrutaremos de un delicioso almuerzo en
                un restaurante local antes de continuar hacia Huacachina, un
                oasis en medio del desierto. Allí, exploraremos las dunas,
                viviremos la adrenalina del sandboarding y los emocionantes
                paseos en tubulares. Finalizaremos con una visita a la laguna de
                Huacachina, ideal para relajarse y admirar el paisaje antes de
                regresar a Lima, llegando aproximadamente a las 10:00 p. m.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div className="w-full flex bg-white overflow-hidden rounded-xl shadow-neutral-200 shadow-2xl">
            <div className="w-8/12 px-5 py-10 space-y-5">
              <h2 className="font-semibold text-xl">DIA 4: CITY TOUR CUSCO</h2>
              <p>
                Este día a la hora indicada nuestro transporte pasará por
                nuestro hotel para recogerlos y llevarlos al aeropuerto de lima
                para abordar el avión con dirección a Cusco.
              </p>
              <p>
                Nuestro equipo de TOP INKA TRAVEL, les esperando en el
                aeropuerto de Cusco para llevarlos al hotel, Realizaremos el
                check-in y se acomodaran en sus respectivas habitaciones.
              </p>
              <p>
                Pasaremos a recogerte a las 12:30 pm del hotel para realizar el
                city tour. Durante el city tour, visitaremos cinco atractivos
                turísticos: Sacsayhuamán, Puka Pukara, Q’enqo, Tambomachay y
                Qoricancha. Nuestro tour culminará a las 6:30 pm.
              </p>
            </div>
            <div className="bg-[url(../../public/img/city-tour-cusco.jpg)] w-4/12 bg-cover bg-center"></div>
          </div>
        </article>
        <article>
          <div className="w-full flex bg-white overflow-hidden rounded-xl shadow-neutral-200 shadow-2xl">
            <div className="bg-[url(../../public/img/maras-moray.webp)] w-4/12 bg-cover bg-center"></div>
            <div className="w-8/12 px-5 py-10 space-y-5">
              <h2 className="font-semibold text-xl">
                DIA 5: VALLE SAGRADO VIP + CONEXIÓN
              </h2>
              <p>
                Comenzaremos con el recojo en su hotel a las 6:30 a. m. y nos
                dirigiremos a Chinchero para conocer su arquitectura y el
                proceso de teñido natural. Luego, visitaremos Moray y sus
                terrazas circulares, seguido de Maras, donde observaremos más de
                3,000 pozos de sal.
              </p>
              <p>
                Después, disfrutaremos de un almuerzo buffet en Urubamba. Por la
                tarde, exploraremos el complejo arqueológico de Ollantaytambo y
                finalmente tomaremos el tren hacia Machu Picchu (Aguas
                Calientes), donde pasaremos la noche.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div className="w-full flex bg-white overflow-hidden rounded-xl shadow-neutral-200 shadow-2xl">
            <div className="w-8/12 px-5 py-10 space-y-5">
              <h2 className="font-semibold text-xl">DIA:6 MACHUPICCHU</h2>
              <p>
                Temprano se encontrarán con nuestro guía para abordar el bus de
                Consettur y subir al Santuario de Machu Picchu. Al ingresar,
                disfrutaremos de una visita guiada de 2 horas y 30 minutos,
                explorando sus impresionantes construcciones y su historia. Al
                finalizar el recorrido, descenderemos en el bus de Consettur
                hacia el pueblo de Aguas Calientes. Por la tarde, nos
                dirigiremos a la estación de tren, donde abordaremos el tren de
                regreso a Ollantaytambo. Allí, un representante de la agencia
                nos esperará para trasladarnos de regreso a la ciudad de Cusco,
                llegando aproximadamente a las 20:00 h.
              </p>
            </div>
            <div className="bg-[url(../../public/img/machu-picchu.webp)] w-4/12 bg-cover bg-center"></div>
          </div>
        </article>
        <article>
          <div className="w-full flex bg-white overflow-hidden rounded-xl shadow-neutral-200 shadow-2xl">
            <div className="bg-[url(../../public/img/vinicunca.webp)] w-4/12 bg-cover bg-center"></div>
            <div className="w-8/12 px-5 py-10 space-y-5">
              <h2 className="font-semibold text-xl">
                DIA 7: MONTAÑA DE COLORES
              </h2>
              <p>
                Este día comenzaremos con el recojo de su hotel para dirigirnos
                al pueblo de Cusipata, en un viaje de aproximadamente 2 horas,
                donde disfrutaremos de un delicioso desayuno. Luego,
                continuaremos en vehículo por una hora más hasta el puesto de
                control para iniciar la caminata. Al llegar al mirador de
                Vinicunca o Montaña de Colores (5,200 msnm), nuestro guía nos
                brindará una explicación sobre la orografía y el ecosistema del
                lugar. Posteriormente, retornaremos por el mismo camino hasta
                Llaqto, donde nuestro transporte nos esperará para llevarnos de
                regreso a Cusipata y disfrutar del almuerzo. Finalmente,
                regresaremos a la ciudad de Cusco, llegando aproximadamente a
                las 17:00 h.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div className="w-full flex bg-white overflow-hidden rounded-xl shadow-neutral-200 shadow-2xl">
            <div className="w-8/12 px-5 py-10 space-y-5">
              <h2 className="font-semibold text-xl">DIA 8: LAGUNA HUMANTAY</h2>
              <p>
                Este día comenzaremos con el recojo de su hotel para dirigirnos
                a Mollepata (aprox. 2 h de viaje) y disfrutar de un delicioso
                desayuno. Luego, continuaremos 1 hora más en vehículo hasta
                Soraypampa, donde iniciaremos la caminata. Al llegar a la Laguna
                (4,200 msnm), nuestro guía nos brindará una explicación y
                tendremos tiempo para tomar fotografías. Posteriormente,
                retornaremos por el mismo camino hasta el punto de inicio, donde
                nuestro transporte nos llevará de regreso a Mollepata para el
                almuerzo. Finalmente, retornaremos a Cusco, llegando
                aproximadamente a las 18:00 h.
              </p>
            </div>
            <div className="bg-[url(../../public/img/humantay.webp)] w-4/12 bg-cover bg-center"></div>
          </div>
        </article>
        <article>
          <div className="w-full flex bg-white overflow-hidden rounded-xl shadow-neutral-200 shadow-2xl">
            <div className="bg-[url(../../public/img/traslado.webp)] w-4/12 bg-cover bg-center"></div>
            <div className="w-8/12 px-5 py-10 space-y-5">
              <h2 className="font-semibold text-xl">
                DIA 9: TRASLADO AL AEROPUERTO + TOUR FOTOGRAFICO
              </h2>
              <p>
                Después del desayuno en el hotel, a la hora indicada, el
                transfer pasará por su hotel para llevarlos al aeropuerto y
                abordar el vuelo. Antes del traslado, podrán disfrutar de un
                tour fotográfico por las calles más bonitas de Cusco, capturando
                su encanto histórico y cultural. El check-out es a las 10:00 a.
                m., pero podrán dejar sus maletas en resguardo hasta la hora de
                su viaje.
              </p>
            </div>
          </div>
        </article>
      </section>
      <section className="max-w-screen-xl mx-auto space-y-10" id="testimonios">
        <div className="grid grid-cols-3 gap-x-5 items-center">
          <div className="space-y-5">
            <h2 className="font-bold text-3xl">Nuestros Testimonios</h2>
            <p className="font-semibold text-lg">Cuentanos tu experiencia</p>
            <img src={tripadvisor} alt="tripadvisor logo" />
          </div>
          <div className="border border-neutral-300 p-10 rounded-3xl space-y-2 bg-white hover:-translate-y-2 transition-all duration-300">
            <img src={avatar1} alt="avatar 1" className="rounded-full w-20" />
            <h3 className="font-semibold text-lg">Maravilloso</h3>
            <p>
              La organización de mi viaje a cargo de la asesora estuvo
              excelente, disfruté mucho mi viaje a Cusco con mi familia. Visité
              Machupicchu, Laguna Humantay, Montaña de Colores y el salar de
              Maras quedamos maravillados. Agencia recomendada😊😊😊
            </p>
          </div>
          <div className="border border-neutral-300 p-10 rounded-3xl space-y-2 bg-white hover:-translate-y-2 transition-all duration-300">
            <img src={avatar2} alt="avatar 2" className="rounded-full w-20" />
            <h3 className="font-semibold text-lg">MACHUPICCHU</h3>
            <p>
              Contraté el tour Valle Sagrado y Machupicchu, fue la mejor
              desición elegirlos como agencia ya que todo lo que me ofrecieron
              lo cumplieron y además estuvieron pendientes de nosotros en cada
              tour tanto como los guías y asesores. Todo salió excelente!
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <a
            href="https://www.tripadvisor.com.pe/Attraction_Review-g294314-d24003192-Reviews-Top_Inka_Travel-Cusco_Cusco_Region.html"
            target="_blank" className="bg-[#7F1D1D] text-white py-2 px-5 rounded"
          >
            Ver Comentarios en TripAdvisor
          </a>
        </div>
      </section>
     <div className="bg-white mt-20" id="licencias">
     <section className="max-w-screen-lg mx-auto py-20 space-y-10">
        <h2 className="font-bold text-center text-3xl ">Nuestras Licencias</h2>
        <div className="grid grid-cols-3 gap-10">
          <div>
            <img src={gercetur} alt="gercetur" className="drop-shadow-md" />
          </div>
          <div>
          <img src={ruc} alt="ficha ruc" className="drop-shadow-md" />
          </div>
          <div>
          <img src={lincencia} alt="licencia de funcionamiento" className="drop-shadow-md" />
          </div>
        </div>
      </section>
     </div>
    </div>
  );
};

export default Main;
