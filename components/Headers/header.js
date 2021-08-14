import styles from "@/styles/style.module.scss";
import { Link } from "react-scroll";
import { FaCaretDown } from "react-icons/fa";
import Logo from "components/Logo";
import menuItems from "./header.data";
import MobileDrawer from "./mobile-drawer";

export default function Header({ className, isEnglish, setFr, setEn }) {
  const {
    header,
    header__container,
    header__nav,
    header__btn,
    header__buttons,
    header__lang,
    header__dropdown,
    header__selectLang,
  } = styles;

  return (
    <header className={`${header} ${className}`} id="header">
      <div className={header__container}>
        <Logo />
        <nav className={header__nav}>
          {menuItems.map((menuItem, i) => (
            <Link
              activeClass="active"
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}
            >
              {isEnglish ? menuItem.label.en : menuItem.label.fr}
            </Link>
          ))}

          <div className={header__buttons}>
            <div className={header__dropdown}>
              <a className={header__lang}>
                {isEnglish ? "English" : "Français"} <FaCaretDown />
              </a>
              <div className={header__selectLang}>
                <span onClick={setFr}>
                  <input
                    type="radio"
                    checked={isEnglish ? false : true}
                    onChange={() => {}}
                    id="fr"
                  />
                  <label htmlFor="fr">Français -FR</label>
                </span>
                <span onClick={setEn}>
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
        </nav>

        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={header__btn}
          aria-label="Get Started"
        >
          {isEnglish ? "HIRE ME" : "RECRUTER"}
        </Link>
        <MobileDrawer />
      </div>
    </header>
  );
}
