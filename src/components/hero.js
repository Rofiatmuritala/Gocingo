"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

function Hero() {
  const [projectCount, setProjectCount] = useState(0);
  const [donationCount, setDonationCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectCount((prevCount) =>
        prevCount < 50 ? prevCount + 1 : prevCount
      );
      setDonationCount((prevCount) =>
        prevCount < 1000000 ? prevCount + 10000 : prevCount
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-white text-center">
        <section>
          <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-6xl ">
            <div class="flex w-full mx-auto text-left">
              <div class="relative inline-flex items-center mx-auto align-middle py-2 px-4 lg:pt-10 sm:px-6 lg:px-8">
                <div class="text-center">
                  <h1 className="text-3xl pt-24 lg:pt-8 font-extrabold tracking-tight text-black sm:text-5xl lg:text-5xl">
                    Making a Difference
                  </h1>
                  <p className="mt-6 text-xl text-black max-w-3xl relative">
                    Our NGO is dedicated to improving lives and creating lasting
                    change in communities around the world. Join us in our
                    mission to make a positive impact.
                  </p>
                  <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                    <div class="mt-3 rounded-lg sm:mt-0">
                      <Link
                        href="/donate"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lime-500 hover:bg-green-600"
                      >
                        Donate Now
                      </Link>
                    </div>
                    <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                      <Link
                        href="/projects"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lime-500 hover:bg-green-600"
                      >
                        Projects
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 text-center">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-3xl font-bold text-indigo-600">
                  {projectCount}
                </h2>
                <p className="mt-2 text-lg text-gray-600">Featured Projects</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 md:px-8">
                <h2 className="text-3xl font-bold text-indigo-600">
                  ${(donationCount / 1000000).toFixed(2)}M
                </h2>
                <p className="mt-2 text-lg text-gray-600">Total Donations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
