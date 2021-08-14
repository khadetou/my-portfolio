import styles from "@/styles/style.module.scss";
import Layout from "@/components/Layout";
import { useState } from "react";
import Link from "next/link";
export default function Hotcodes() {
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
              ? "Hotcodes comming soon !"
              : "Hotcodes bientôt disponible! "}
          </h1>
          <p className={hireme__text}>
            {isEnglish
              ? " This start up is under stablishment, go and contact us we will send you a notification one's the services are available."
              : "Nous vous demandons d'envoyer votre contact, vous serez notifié une fois que les services seront disponibles ."}
          </p>
          <Link href="/">
            <a className={button}>{isEnglish ? "Go Back" : "Retouner"}</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
