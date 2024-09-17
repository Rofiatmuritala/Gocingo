"use client";

import Link from "next/link";
import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Clean Water Initiative",
    description:
      "Providing clean and safe drinking water to rural communities in developing countries.",
    image: "/clean-water.jpg",
    status: "ongoing",
    category: "Clean Water",
  },
  {
    id: 2,
    title: "Education for All",
    description:
      "Building schools and providing educational resources in underprivileged areas.",
    image: "/education.jpg",
    status: "completed",
    category: "Education",
  },
  {
    id: 3,
    title: "Sustainable Agriculture",
    description:
      "Teaching sustainable farming techniques to improve food security and livelihoods.",
    image: "/Sustainable-Agriculture.png",
    status: "ongoing",
    category: "Sustainable Agriculture",
  },
  {
    id: 4,
    title: "Healthcare Outreach",
    description:
      "Mobile clinics providing essential healthcare services to remote communities.",
    image: "/Health.jpg",
    status: "completed",
    category: "Health",
  },
  {
    id: 5,
    title: "Renewable Energy",
    description: "Implementing solar power solutions in off-grid communities.",
    image: "/Energy.jpg",
    status: "completed",
    category: "Energy",
  },
  {
    id: 6,
    title: "Education for All",
    description:
      "Building schools and providing educational resources in underprivileged areas.",
    image: "/education.jpg",
    status: "ongoing",
    category: "Education",
  },
  {
    id: 7,
    title: "Sustainable Agriculture",
    description:
      "Teaching sustainable farming techniques to improve food security and livelihoods.",
    image: "/Sustainable-Agriculture.png",
    status: "completed",
    category: "Sustainable Agriculture",
  },
];

const categories = [
  "All",
  "Education",
  "Energy",
  "Health",
  "Clean Water",
  "Sustainable Agriculture",
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filter, setFilter] = useState("all");
  const filteredProjects = projects.filter((project) => {
    const categoryMatch =
      activeCategory === "All" || project.category === activeCategory;
    const statusMatch = filter === "all" || project.status === filter;
    return categoryMatch && statusMatch;
  });

  const displayedProjects =
    location.pathname === "/" ? filteredProjects.slice(0, 3) : filteredProjects;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto  py-16 px-4 sm:py-18 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:pt-8 mt-6 font-extrabold text-gray-900 sm:text-4xl">
            Our Projects
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Explore the initiatives that are making a difference in communities
            around the world.
          </p>
        </div>

        {location.pathname === "/projects" && (
          <div className="mt-12">
            <div className="flex flex-wrap  justify-center space-y-2 space-x-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap px-4 py-2 rounded-md transition-colors duration-300 ${
                    activeCategory === category
                      ? "bg-lime-500 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {location.pathname === "/projects" && (
          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                filter === "all"
                  ? "bg-lime-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("ongoing")}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                filter === "ongoing"
                  ? "bg-lime-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              Ongoing
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                filter === "completed"
                  ? "bg-lime-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              Completed
            </button>
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white overflow-hidden shadow-lg rounded-lg"
            >
              <Link href={`/projects/${project.id}`}>
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
                          ? "bg-lime-100 text-lime-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {project.status === "ongoing" ? "Ongoing" : "Completed"}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {location.pathname === "/" && (
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-lime-600 hover:bg-lime-700"
            >
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
