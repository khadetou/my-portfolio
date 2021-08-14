import styles from "@/styles/style.module.scss";
import { Fragment, useState } from "react";
import Sticky from "react-stickynode";
import Header from "./Headers/header";
import Footer from "./Footer";

export default function Layout({ children, isEnglish, setFr, setEn }) {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  const { sticky } = styles;
  return (
    <Fragment>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header
          className={isSticky ? `${sticky}` : ""}
          isEnglish={isEnglish}
          setFr={setFr}
          setEn={setEn}
        />
      </Sticky>
      <main id="content">{children}</main>
      <Footer isEnglish={isEnglish} />
    </Fragment>
  );
}
