import React from "react";

const WhatDoes = () => {
  return (
    <div className="md:mt-20 md:mb-20 bg-cover  w-full">
      <h1 className="text-center mb-3 mt-10 text-xl">WHAT DOES</h1>
      <h1 className="text-center text-xl md:text-4xl sora">
        Improve the Game by Focusing on Key Elements
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-max"
        data-aos="zoom-out-down"
      >
        <div className="card  mt-10 shadow-md">
          <figure className="pt-10">
            <img
              src="https://i.ibb.co/s6bYjVc/image1.jpg"
              alt="icons"
              className="rounded-xl h-20"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Experience Coaching</h2>
            <p className="text-gray-900">
              I have experience coaching individuals in various areas, including
              sports, leadership development, public speaking, and personal
              growth.
            </p>
          </div>
        </div>
        <div className="card  mt-10 shadow-md">
          <figure className="pt-10">
            <img
              src="https://i.ibb.co/qFrW9rG/image2.jpg"
              alt="icons"
              className="rounded-xl h-20"
            />
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title">Mental Stability</h2>
            <p className="text-gray-900">
              Prioritize self-care, set boundaries, seek support, engage in
              stress-reducing activities, practice mindfulness, and cultivate a
              positive mindset.
            </p>
          </div>
        </div>
        <div className="card  mt-10 shadow-md">
          <figure className="pt-10">
            <img
              src="https://i.ibb.co/bdG8yHz/image3.jpg"
              alt="icons"
              className="rounded-xl h-20"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Controlled Recovery</h2>
            <p className="text-gray-900">
              Controlled recovery involves balancing rest and activity,
              gradually returning to normal routines, and prioritizing self-care
              for optimal healing.
            </p>
          </div>
        </div>
        <div className="card  mt-10 shadow-md">
          <figure className="pt-10 ">
            <img
              src="https://i.ibb.co/gjfpQmc/image4.jpg"
              alt="icons"
              className="rounded-xl h-20"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cultural & Educational Activities</h2>
            <p className="text-gray-900">
              Cultural and educational activities encompass a wide range of
              experiences such as museum visits, language classes, art
              workshops, historical tours, and cultural exchange programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatDoes;
