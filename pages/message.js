import styles from "@/styles/style.module.scss";
import Layout from "@/components/Layout";
import { useState } from "react";
import Link from "next/link";
export default function Message() {
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
            {isEnglish ? "Message Sent" : "Message Envoyé"}
          </h1>
          <p className={hireme__text}>
            {isEnglish
              ? " Your message has been sent successfully we'll be in touch with you as soon as possible."
              : "Votre message a été envoyé avec succées, nous vous reviendrons de les plus brefs delai."}
          </p>
          <Link href="/">
            <a className={button}>{isEnglish ? "Go Back" : "Retouner"}</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
