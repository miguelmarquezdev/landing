import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 items-center bg-primary rounded-t-4xl">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.295127609737!2d-71.98665112514844!3d-13.517471286850409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab6db0d210bc0287%3A0xe1c56185f13461f8!2sTop%20Inka%20Travel!5e0!3m2!1ses-419!2spe!4v1741031618791!5m2!1ses-419!2spe"
          className="w-full h-96"
          loading="lazy"
        ></iframe>
      </div>
      <div className="bg-primary p-20 text-white flex gap-10">
        <div className="space-y-10">
          <h2 className="font-bold text-3xl">Top Inka Travel</h2>
          <ul>
            <li className="flex flex-col space-y-3">
              <a href="" className="flex gap-x-2 items-center">
                <FaLocationDot />
                C. Nueva Alta 495, Cusco 08000
              </a>
              <a
                className="flex gap-x-2 items-center"
                href="tel:+51 961 731 825"
                target="_blank"
              >
                <FaPhoneAlt />
                +51 961 731 825
              </a>
              <a
                href="mailto:info@topinkatravel.com"
                className="flex gap-x-2 items-center"
              >
                <IoMail />
                info@topinkatravel.com
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-10">
          <h2 className="font-bold text-3xl">Síguenos</h2>
          <ul className="flex flex-col gap-y-3">
            <li>
              <a
                href="https://www.facebook.com/TopInkaTravelAgency"
                target="_blank"
                className="flex items-center gap-x-2 hover:text-white/60 transition-all duration-300"
              >
                <FaFacebook /> Facebook
              </a>{" "}
            </li>
            <li>
              <a
                href="https://www.instagram.com/topinkatravelagency/"
                target="_blank"
                className="flex items-center gap-x-2 hover:text-white/60 transition-all duration-300"
              >
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@topinkatravel"
                target="_blank"
                className="flex items-center gap-x-2 hover:text-white/60 transition-all duration-300"
              >
                <FaTiktok /> Tik tok
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a
        href=""
        className="bg-primary hover:bg-red-950 transition-all duration-300 p-5 fixed bottom-5 right-5 rounded-full"
      >
        <FaWhatsapp className="text-3xl text-white" />
      </a>
    </footer>
  );
};

export default Footer;
