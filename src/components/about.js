import React from "react";

const teamMembers = [
  {
    name: "Jane Doe",
    title: "Executive Director",
    image: "/team-member-1.jpg",
    bio: "Jane has been with our NGO for over 10 years, leading initiatives across the globe.",
  },
  {
    name: "John Smith",
    title: "Project Manager",
    image: "/team-member-2.jpg",
    bio: "John specializes in sustainable development projects and community engagement.",
  },
  {
    name: "Emily Brown",
    title: "Fundraising Coordinator",
    image: "/team-member-3.jpg",
    bio: "Emily has a passion for connecting donors with meaningful projects that create lasting impact.",
  },
];

function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl mt-8 font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-sm md:text-lg text-gray-500">
            Learn about our mission, values, and the team behind our work.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
          <p className="mt-4 text-sm md:text-lg text-gray-500">
            Our NGO is dedicated to improving lives and creating lasting change
            in communities around the world. We focus on sustainable
            development, education, and healthcare initiatives to empower
            individuals and build stronger communities.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900">Our Values</h3>
          <ul className="mt-4 text-sm md:text-lg text-gray-500 list-disc list-inside">
            <li>
              Compassion: We approach our work with empathy and understanding.
            </li>
            <li>
              Integrity: We maintain the highest ethical standards in all our
              operations.
            </li>
            <li>
              Innovation: We seek creative solutions to complex challenges.
            </li>
            <li>
              Collaboration: We believe in the power of partnerships to achieve
              greater impact.
            </li>
            <li>
              Sustainability: We strive for long-term, lasting change in all our
              projects.
            </li>
          </ul>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900">Our Team</h3>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-gray-100 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  className="w-full h-56 object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h4>
                  <p className="text-indigo-600">{member.title}</p>
                  <p className="mt-4 text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
