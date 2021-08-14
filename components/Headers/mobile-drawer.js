import {
  FaFacebookF,
  FaTwitter,
  FaGithubAlt,
  FaDribbble,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import Drawer from "@/components/drawer";
import { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import menuItems from "./header.data";
import styles from "@/styles/style.module.scss";

const socials = [
  {
    path: "/",
    icon: <FaFacebookF />,
  },
  {
    path: "/",
    icon: <FaTwitter />,
  },
  {
    path: "/",
    icon: <FaGithubAlt />,
  },
  {
    path: "/",
    icon: <FaDribbble />,
  },
];

export default function MobileDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);
  const {
    mobile__handler,
    mobile__drawer,
    mobile__close,
    mobile__content,
    mobile__menu,
    header__dropdown,
    header__lang,
    header__selectLang,
  } = styles;

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <div className={mobile__handler}>
          <IoMdMenu size="26px" />
        </div>
      }
      open={isDrawerOpen}
      toggleHandler={() => setIsDrawerOpen(!isDrawerOpen)}
      closeButton={<IoMdClose size="24px" color="#000000" />}
      drawerStyle={mobile__drawer}
      closeBtnStyle={mobile__close}
    >
      <Scrollbars autoHide>
        <div className={mobile__content}>
          <div className={mobile__menu}>
            {menuItems.map((menuItem, i) => (
              <Link
                activeClass="active"
                to={menuItem.path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
                onClick={() => setIsDrawerOpen(false)}
              >
                {isEnglish ? menuItem.label.en : menuItem.label.fr}
              </Link>
            ))}

            <div>
              <div className={header__dropdown}>
                <a className={header__lang} style={{ position: "relative" }}>
                  {isEnglish ? "English" : "Français"}
                  <FaCaretDown style={{ position: "absolute", right: "0" }} />
                </a>
                <div className={header__selectLang}>
                  <span onClick={() => setIsEnglish(false)}>
                    <input
                      type="radio"
                      checked={isEnglish ? false : true}
                      onChange={() => {}}
                      id="fr"
                    />
                    <label htmlFor="fr">Français -FR</label>
                  </span>
                  <span onClick={() => setIsEnglish(true)}>
                    <input
                      type="radio"
                      checked={isEnglish ? true : false}
                      id="en"
                      onChange={() => {}}
                    />
                    <label htmlFor="en">English -En</label>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className={mobile__menuFooter}>
            <div className={mobile__social}>
              {socials.map((socialItem, i) => (
                <span key={i} className={mobile__icon}>
                  <Link to={socialItem.path}>{socialItem.icon}</Link>
                </span>
              ))}
            </div>
          </div> */}
        </div>
      </Scrollbars>
    </Drawer>
  );
}
