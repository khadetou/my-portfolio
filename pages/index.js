import Layout from "@/components/Layout";
import Meta from "@/components/Meta";
import Banner from "@/components/Banner";
import { useState } from "react";
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
    </Layout>
  );
}
