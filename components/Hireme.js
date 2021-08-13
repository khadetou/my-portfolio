import styles from "@/styles/style.module.scss";
import { Link } from "react-scroll";
export default function Hireme({ isEnglish }) {
  const { container, hireme, hireme__title, hireme__text, header__btn } =
    styles;
  return (
    <section className={hireme}>
      <div className={container}>
        <h1 className={hireme__title}>
          {isEnglish ? "Let’s talk about a project" : "Discutons d'un project"}
        </h1>
        <p className={hireme__text}>
          {isEnglish
            ? " You have a project in mind and you want to achieve it , i am your man."
            : "Vous avez un projet en tête et vous voulez la voire se réaliser, je suis votre homme."}
        </p>
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
      </div>
    </section>
  );
}
