import Head from "next/head";
import TheyTrustedUs from "../components/TheyTrustedUs/Index";
import OurPartners from "../components/OurPartners/Index";
import Agenda from "../components/Agenda/Index";
import SectionTitle from "../components/shared/SectionTitle";
import AboutEvent from "../components/AboutEvent/Index";
import YellowButton from "../components/shared/YellowButton";
import Footer from "../components/Footer/Index";
import Hero from '../components/Hero/Index'
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

      </Head>
      <Hero />
      <main className="section-container font-IBM-Plex">
        <AboutEvent />
        <TheyTrustedUs />
        <SectionTitle title={"Our Partners"} />
        <OurPartners />
        <Agenda />

      </main>
        <Footer />
    </>
  );
}
