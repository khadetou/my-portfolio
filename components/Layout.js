import styles from "@/styles/style.module.scss";
import { Fragment, useState } from "react";
import Sticky from "react-stickynode";
import Header from "./header/header";
import Meta from "./Meta";

export default function Layout({ children }) {
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
      <Meta />
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header className={isSticky ? `${sticky}` : ""} />
      </Sticky>
      <main id="content">{children}</main>
    </Fragment>
  );
}
