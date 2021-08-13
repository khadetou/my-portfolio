import styles from "@/styles/style.module.scss";
import { Link as LS } from "react-scroll";
import Link from "next/link";

export default function Footer({ isEnglish }) {
  const {
    footer,
    container,
    footer__grid,
    footer__bottom,
    footer__contact,
    footer__address,
    footer__icons,
    footer__icon,
    footer__links,
    footer__gridCol,
    footer__link,
    footer__title,
  } = styles;

  const icons = [
    {
      name: "facebook",
      img: "/images/facebook.svg",
    },
    {
      name: "instagram",
      img: "/images/instagram.svg",
    },
    {
      name: "github",
      img: "/images/github.svg",
    },
    {
      name: "behance",
      img: "/images/behance.svg",
    },
  ];

  const Links = [
    {
      path: "home",
      label: { en: "Home", fr: "Accueille" },
    },
    {
      path: "services",
      label: { en: "Services", fr: "Services" },
    },
    {
      path: "portfolio",
      label: { en: "Portfolio", fr: "Portfolio" },
    },
    {
      path: "about",
      label: { en: "About", fr: "A Propos" },
    },
    {
      path: "contact",
      label: { en: "Contact", fr: "Contact" },
    },
  ];

  const services = [
    {
      path: "/hotcodes",
      label: "Web Design",
    },
    {
      path: "/hotcodes",
      label: "Web Dev",
    },
    {
      path: "/hotcodes",
      label: "App Design",
    },
    {
      path: "/hotcodes",
      label: "App Dev",
    },
    {
      path: "/hotcodes",
      label: "UI Design",
    },
  ];
  return (
    <footer className={footer}>
      <div className={container}>
        <div className={footer__grid}>
          <div className={`${footer__contact} ${footer__gridCol}`}>
            <LS
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              aria-label="Get Started"
            >
              <img src="/images/log.svg" alt="logo" />
            </LS>
            <p className={footer__address}>Senegal Dakar, castor 1</p>

            <div className={footer__icons}>
              {icons.map((icon, idx) => (
                <a key={idx} href="#" className={footer__icon}>
                  <img src={icon.img} alt={icon.name} />
                </a>
              ))}
            </div>
          </div>
          <div className={`${footer__gridCol}`}>
            <h3 className={footer__title}>Links</h3>
            <div className={footer__links}>
              {Links.map((link, idx) => (
                <LS
                  activeClass="active"
                  key={idx}
                  to={link.path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  aria-label="Get Started"
                  className={footer__link}
                >
                  {isEnglish ? link.label.en : link.label.fr}
                </LS>
              ))}
            </div>
          </div>
          <div className={`${footer__gridCol}`}>
            <h3 className={footer__title}>Services</h3>
            <div className={footer__links}>
              {services.map((link, idx) => (
                <Link key={idx} href={link.path}>
                  <a className={footer__link}>{link.label}</a>
                </Link>
              ))}
            </div>
          </div>

          <div className={`${footer__gridCol}`}>
            <h3 className={footer__title}>Contact me</h3>
            <div className={footer__links}>
              <p className={footer__link}>+221 78 600 45 64</p>
              <p className={footer__link}>khadetou@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={footer__bottom}></div>
      </div>
    </footer>
  );
}
