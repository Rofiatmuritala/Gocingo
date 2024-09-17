"use client";

const TeamSection = () => {
  const team = [
    { name: "Courtney Henry", role: "Founder", image: "team-member-1.jpg" },
    {
      name: "Brooklyn Simmons",
      role: "Product Manager",
      image: "team-member-1.jpg",
    },
    { name: "Jerome Bell", role: "Lead Manager", image: "team-member-1.jpg" },
    {
      name: "Cameron Williamson",
      role: "Marketing Coordinator",
      image: "team-member-1.jpg",
    },
  ];

  return (
    <section className="p-6 bg-white">
      <h2 className="text-3xl mt-4 font-bold text-center mb-6">
        Meet our team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-6">
        {team.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-80 h-40 md:h-56 object-cover"
            />
            <h3 className="mt-4 text-sm md:text-lg lg:text-xl font-bold">
              {member.name}
            </h3>
            <p className="text-sm lg:text-xl">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TeamSection;
