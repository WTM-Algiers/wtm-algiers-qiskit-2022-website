import Head from "next/head";
import OurSpeakers from "../components/OurSpeakers/Index";
import AboutUs from "../components/AboutUs/Index";
import TheyTrustedUs from "../components/TheyTrustedUs/Index";
import OurPartners from "../components/OurPartners/Index";
import Agenda from "../components/Agenda/Index";
import AboutEvent from "../components/AboutEvent/Index";
import Footer from "../components/Footer/Index";
import Hero from "../components/Hero/Index";
export default function Home() {
  return (
    <>
      <Head>
        <title>WTM Algiers Qiskit2022</title>
        <link rel="shortcut icon" href="/qiskit.png" />
      </Head>

      <Hero />
      <main className="font-IBM-Plex">
        <AboutEvent />
        <AboutUs />
        <OurPartners />
        <OurSpeakers/>
        <TheyTrustedUs />
        <Agenda />
      </main>
      <Footer />
    </>
  );
}
