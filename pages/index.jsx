import Head from "next/head";
import SectionTitle from "../components/shared/SectionTitle";
import AboutUs from "../components/AboutUs";
import Agenda from "../components/Agenda";

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
      <main className="section-container font-IBM-Plex">
      
      </main>
      <AboutUs/>
    </>
  );
}
