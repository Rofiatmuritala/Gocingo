import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

// SEO Meta Data
export const metadata = {
  title: "Gocingo NGO",
  description:
    "Our NGO is dedicated to improving lives and creating lasting change in communities around the world. Join us in our mission to make a positive impact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
