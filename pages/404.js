import styles from "@/styles/style.module.scss";
import Layout from "@/components/Layout";
import { useState } from "react";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";
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
            <FaExclamationTriangle /> 404
          </h1>
          <h4 className={hireme__text}>There is nothing here !</h4>
          <Link href="/">
            <a className={button}>{isEnglish ? "Go Back" : "Retouner"}</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
