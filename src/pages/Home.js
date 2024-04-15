import React from "react";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Services from "../components/Services";
import Specialist from "../components/Specialist";
import BookAppointment from "../components/BookAppointment ";

function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Services />
      <Specialist />
      <BookAppointment />
    </>
  );
}

export default Home;
