import React from "react";
import { BiSolidMedal } from "react-icons/bi";
import { FaMedal } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdLogout, MdNotifications } from "react-icons/md";

export default function Doctor({ name, pfp, doc }) {
  return (
    <div>
      <nav className="p-10 flex justify-between">
        <h1 className="text-2xl font-bold cursor-pointer hover:underline">
          🧬 HealthHelp
        </h1>
        <div className="flex gap-6 text-md items-center">
          <MdNotifications className="text-2xl text-blue-500" />
          <button className="border border-dashed py-1 px-3 flex items-center gap-4 cursor-pointer">
            Dinesh Battu
            <span className="text-lg">
              <MdLogout />
            </span>
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto">
        <div className=" p-5  text-center  ">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRripLcqGUKIBfgbtmux6U1UY9UkgezqzJzFw&s"
              className="w-[250px] border-2 border-black rounded-full mx-auto"
            />
            <h1 className="text-4xl mt-4 font-bold">Ch. Adith Kumar</h1>
            <p className="text-md text-xl italic">Dermatologist</p>
          </div>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          soluta necessitatibus nam, officia nesciunt quisquam minus, dolorem
          eius quidem deserunt dolorum natus ut quis, et blanditiis! Pariatur
          autem unde id. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Atque libero eligendi veritatis? Aliquam sed saepe sequi
          architecto velit blanditiis labore et voluptate dicta, molestiae ab,
          animi earum tempore optio officia? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Minima quo est molestiae cupiditate,
          quas maiores, magni, perferendis tenetur consequatur officia non ea
          placeat consectetur totam! Eligendi harum iure autem inventore! Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Qui cum labore
          fugiat numquam magni impedit fugit maiores! Suscipit cum nobis
          recusandae. Aliquid impedit nihil nisi doloremque non velit amet
          molestias! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Possimus, vel quis? Accusamus dignissimos excepturi minus aliquam
          voluptates, deserunt facilis delectus corrupti impedit numquam iste
          repudiandae ab molestias quia doloremque perspiciatis.
        </p>

        <h1 className="text-2xl font-bold mt-3 underline">
          Education Qualification 🎓
        </h1>
        <section className="flex justify-between border-3 border-dashed px-5 py-6 mt-3 border-gray-400">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-3xl font-bold">MBBS in Dermatology</h2>
              <p className="text-lg font-semibold">
                Gudlavalleru University of Medical Science
              </p>
            </div>
            <p>
              <IoLocation className="text-lg inline text-red-500 mb-1" />{" "}
              Australia
            </p>
            <p className="justify-end">
              {" "}
              <BiSolidMedal className="text-lg inline text-yellow-500 mb-1" />{" "}
              Gold Medalist
            </p>
          </div>
          <img
            src="https://cdn.shopify.com/s/files/1/0100/0118/6894/files/Duomo-Milano.jpg?v=156508342"
            alt=""
            className="w-72 rounded-full"
          />
        </section>

        <h1 className="text-2xl font-bold mt-3 underline">Experience 🩺</h1>
        <section className="flex justify-between border-3 border-dashed px-5 py-6 mt-3 border-gray-400">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-3xl font-bold">Head of Dermatology</h2>
              <p className="text-lg font-semibold">Adith Group of Hospitals</p>
            </div>
            <p>
              <IoLocation className="text-lg inline text-red-500 mb-1" /> United
              States of America
            </p>
            <p className="justify-end italic">2012 - 2025</p>
          </div>
          <img
            src="https://lh5.googleusercontent.com/proxy/K8jYt6TD0VxwFFPka1suuDJFXIKALwmXnk0FF_dSL8a9w9AJoc3taSDGOMeIoMHXCIBqdY_bHFliu-L3LjwVGpzhF8maRStrnHs4"
            alt=""
            className="w-72 rounded-full"
          />
        </section>

        <h1 className="text-2xl font-bold mt-3 underline">Clinic Location</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15314.185606645533!2d81.05166134999999!3d16.346105200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a361d8b1364907b%3A0x7871c8ce88b75c53!2sGudlavalleru%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1755750783188!5m2!1sen!2sin"
          className="w-full h-[500px] border border-black my-3"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <h1 className="text-2xl font-bold mt-3 underline">Book Appointment</h1>

        <form>
          <label htmlFor="">Name: </label>
          <input type="text" className="border border-gray-500" />
        </form>
      </div>
    </div>
  );
}
