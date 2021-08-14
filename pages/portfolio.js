import styles from "@/styles/style.module.scss";
import Layout from "@/components/Layout";
import { useState } from "react";
import Link from "next/link";
export default function PortFolio() {
  const [isEnglish, setIsEnglish] = useState(true);

  const setFr = () => {
    setIsEnglish(false);
  };

  const setEn = () => {
    setIsEnglish(true);
  };
  const { container, hireme, hireme__title, hireme__text, button } = styles;
  return (
    <Layout setFr={setFr} setEn={setEn} isEnglish={isEnglish}>
      <section className={hireme}>
        <div className={container}>
          <h1 className={hireme__title}>
            {isEnglish
              ? "This project is under production"
              : "Ce project est en cours de production"}
          </h1>
          <p className={hireme__text}>
            {isEnglish
              ? " This project is not yet available but it will be very soon."
              : "Ce project n'est pas encore disponible, Il sera disponible dans le plus bref delai."}
          </p>
          <Link href="/">
            <a className={button}>{isEnglish ? "Go Back" : "Retouner"}</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
