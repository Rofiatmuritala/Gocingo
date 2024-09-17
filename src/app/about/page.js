import About from "@/components/about";

// SEO Meta Data
export const metadata = {
  title: "Gocingo NGO - About Us",
  description: "Learn about our mission, values, and the team behind our work.",
};

function page() {
  return (
    <div>
      <About />
    </div>
  );
}

export default page;
