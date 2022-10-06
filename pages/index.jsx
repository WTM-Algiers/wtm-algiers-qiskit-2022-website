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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/qiskit.png" />
      </Head>

      <Hero />
      <main className="font-IBM-Plex">
        <AboutEvent />
        <AboutUs />
        <TheyTrustedUs />
        <OurSpeakers/>
        <OurPartners />
        <Agenda />
      </main>
      <Footer />
    </>
  );
}
