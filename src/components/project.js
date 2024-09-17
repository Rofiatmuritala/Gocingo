"use client";
import Link from "next/link";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Clean Water Initiative",
    description:
      "Providing clean and safe drinking water to rural communities in developing countries.",
    image: "/clean-water.jpg",
    status: "ongoing",
  },
  {
    id: 2,
    title: "Education for All",
    description:
      "Building schools and providing educational resources in underprivileged areas.",
    image: "/education.jpg",
    status: "ongoing",
  },
  {
    id: 3,
    title: "Sustainable Agriculture",
    description:
      "Teaching sustainable farming techniques to improve food security and livelihoods.",
    image: "/Sustainable-Agriculture.png",
    status: "ongoing",
  },
];

function Project() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Projects
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Explore the initiatives that are making a difference in communities
            around the world.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white overflow-hidden shadow-lg rounded-lg"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={project.image}
                  alt={project.title}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                  <div className="mt-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        project.status === "ongoing"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {project.status === "ongoing" ? "Ongoing" : "Completed"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-lime-600 hover:bg-lime-700"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
