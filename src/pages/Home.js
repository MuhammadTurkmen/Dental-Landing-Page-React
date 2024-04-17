import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Services from "../components/Services";
import Specialist from "../components/Specialist";
import BookAppointment from "../components/BookAppointment ";
import Testimonial from "../components/Testimonial";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const hash = location.hash.replace("#", "");
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Call scroll func tion on hash change or initial load
    handleScroll();

    // Listen for hash changes
    window.addEventListener("hashchange", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleScroll);
    };
  }, [location]); // Depend on location to handle hash changes
  return (
    <>
      <Hero />
      <Benefits />
      <Services />
      <Specialist />
      <BookAppointment />
      <Testimonial />
    </>
  );
}

export default Home;
