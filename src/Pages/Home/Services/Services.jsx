import React from "react";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, autem!",
      img: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, autem!",
      img: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, autem!",
      img: whitening,
    },
  ];
  return (
    <div className='mt-16'>
      <div>
        <h3 className='text-xl font-bold text-primary uppercase text-center'>
          Our Services
        </h3>
        <h2 className='text-3xl text-center'>Services We Provide</h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
