import Layout from "@/components/Layout";
import Meta from "@/components/Meta";
import Banner from "@/components/Banner";
import Service from "@/components/Service";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hireme from "@/components/Hireme";
import { useState } from "react";
import Header from "@/components/Header";
export default function Home() {
  const [isEnglish, setIsEnglish] = useState(true);

  const setFr = () => {
    setIsEnglish(false);
  };

  const setEn = () => {
    setIsEnglish(true);
  };
  return (
    <Layout setFr={setFr} setEn={setEn} isEnglish={isEnglish}>
      <Meta title="Portolio" />
      <Banner isEnglish={isEnglish} />
      <Service isEnglish={isEnglish} />
      <Portfolio isEnglish={isEnglish} />
      <About isEnglish={isEnglish} />
      <Contact isEnglish={isEnglish} />
      <Hireme isEnglish={isEnglish} />
    </Layout>
  );
}
