import Head from "next/head";
import Agenda from "../components/Agenda/Index";
import SectionTitle from "../components/shared/SectionTitle";
import YellowButton from "../components/shared/yellowButton";
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
        <SectionTitle title={"Our Partners"} />
        <Agenda />
        <YellowButton title={"Your section name"}/>
      </main>
    </>
  );
}
