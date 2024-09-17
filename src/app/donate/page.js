import DonateForm from "@/components/donate";

// SEO Meta Data
export const metadata = {
  title: "Gocingo NGO - Contact Us",
  description:
    "Have questions about our work or how you can get involved, contact us today",
};

function page() {
  return (
    <div>
      <DonateForm />
    </div>
  );
}

export default page;
