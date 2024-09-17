"use client";

import React from "react";

const FundraisingCards = () => {
  const cards = [
    {
      title: "Turkey-Syria Relief",
      description: "65% of donations goes to Syria Relief",
      bgColor: "bg-green-500",
    },
    {
      title: "Health",
      description: "Life skills for 2,587 kids in South Africa",
      bgColor: "bg-black",
    },
    {
      title: "Education",
      description: "Sponsor food, to orphans in India",
      bgColor: "bg-yellow-400",
    },
  ];

  return (
    <>
      <section className="grid grid-cols-1 gap-2  md:grid-cols-3 lg:gap-6 p-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className={` p-2 md:p-5 text-white ${card.bgColor} rounded-lg shadow-md`}
          >
            <h3 className=" text-xs md:text-lg lg:text-xl font-bold">
              {card.title}
            </h3>
            <p className="mt-2 text-xs lg:text-xl">{card.description}</p>
            <button className="mt-4 bg-white text-xs md:text-lg lg:text-xl text-black px-2 lg:px-4 py-2 rounded-full lg:rounded-full">
              Donate now
            </button>
          </div>
        ))}
      </section>
      <section className="text-center p-10 bg-lime-400 rounded shadow-md h-50 mx-10">
        <h2 className="text-sm lg:text-6xl justify-center text-center font-bold lg:mx-40">
          Fundraising on Gocingo takes just a few minutes
        </h2>
        <div className="mt-8 flex justify-around text-sm lg:text-lg grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 ">
          <div className="text-center">
            <img
              src="/team-member-1.jpg"
              alt=""
              className="rounded-full w-32 h-32 mx-auto"
            />
            <h2>Give Happiness</h2>
            <p className="text-center mx-6 hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              sunt exercitationem laborum,
            </p>
          </div>
          <div className="text-center">
            <img
              src="/team-member-3.jpg"
              alt=""
              className="rounded-full w-32 h-32 mx-auto"
            />
            <h2>Share Love</h2>
            <p className="text-center mx-6 hidden">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo est quam ipsam iure, nam!
            </p>
          </div>
          <div className="text-center">
            <img
              src="/team-member-1.jpg"
              alt=""
              className="rounded-full w-32 h-32 mx-auto"
            />
            <h2>Build Socially</h2>
            <p className="text-center mx-6 hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              voluptates iusto voluptas
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FundraisingCards;
