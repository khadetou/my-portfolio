import styles from "@/styles/style.module.scss";
import Image from "next/image";
import { useState } from "react";
export default function About({ isEnglish }) {
  const {
    container,
    button,
    about,
    about__container,
    about__col1,
    about__col2,
    about__p,
    about__skills,
    about__header,
    about__h3,
    about__program,
    about__programTitle,
  } = styles;

  const txt = {
    fr: "Je suis un développeur full Stack passionné par les nouvelles technologies, je suis en constant apprentissage. Mon étique de travaille fait de moi un candidat idéal pour la realisation de vos projets.",
    en: "I am a full stack developer passionate about the new technologies I do my best to improve my level every single day. I have a rigorous work ethic which makes me an incredible asset.",
  };

  const skills = [
    {
      img: "/images/html_5.svg",
    },
    {
      img: "/images/css3.svg",
    },
    {
      img: "/images/javascript.svg",
    },
    {
      img: "/images/nodejs.svg",
    },
    {
      img: "/images/react.svg",
    },
    {
      img: "/images/php_logo.svg",
    },
    {
      img: "/images/webpack.svg",
    },
    {
      img: "/images/git.svg",
    },
    {
      img: "/images/laravel.svg",
    },
    {
      img: "/images/bootstrap.svg",
    },
    {
      img: "/images/sass.svg",
    },
  ];

  const mobile = [
    {
      img: "/images/react.svg",
    },
    {
      img: "/images/flutter.svg",
    },
    {
      img: "/images/android.svg",
    },
  ];
  const programming = [
    {
      img: "/images/c++.svg",
    },
    {
      img: "/images/java.svg",
    },
    {
      img: "/images/python.svg",
    },
    {
      img: "/images/c_sharp.svg",
    },
  ];
  const gaming = [
    {
      img: "/images/unreal_engine.svg",
    },
    {
      img: "/images/unity.svg",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className={about} id="about">
      <div className={about__header}>
        <h3
          className={about__h3}
          data-title={isEnglish ? "Who Am I" : "Qui suis je "}
        >
          About Me
        </h3>
      </div>
      <div className={`${container} ${about__container}`}>
        <div className={about__col1}>
          <p className={about__p}>{isEnglish ? txt.en : txt.fr}</p>
          <div className={about__skills}>
            <h3 className={about__programTitle}>Web technologies</h3>
            <div className={about__program}>
              {skills.map((skill, idx) => (
                <Image
                  key={idx}
                  src={skill.img}
                  alt="programmation language"
                  height={94}
                  width={94}
                />
              ))}
            </div>
            {open ? (
              <>
                <h3 className={about__programTitle}>Mobile Technologies</h3>
                <div className={about__program}>
                  {mobile.map((skill, idx) => (
                    <Image
                      key={idx}
                      src={skill.img}
                      alt="programmation language"
                      height={94}
                      width={94}
                    />
                  ))}
                </div>
                <h3 className={about__programTitle}>Gaming Technologies</h3>
                <div className={about__program}>
                  {gaming.map((skill, idx) => (
                    <Image
                      key={idx}
                      src={skill.img}
                      alt="programmation language"
                      height={94}
                      width={94}
                    />
                  ))}
                </div>
                <h3 className={about__programTitle}>Programming languages</h3>
                <div className={about__program}>
                  {programming.map((skill, idx) => (
                    <Image
                      key={idx}
                      src={skill.img}
                      alt="programmation language"
                      height={94}
                      width={94}
                    />
                  ))}
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <a className={button} onClick={() => setOpen(!open)}>
            {isEnglish ? "Read more" : "Voire plus"}
          </a>
        </div>
        <div className={about__col2}>
          <Image src="/images/pp.png" alt="profile" height={703} width={536} />
        </div>
      </div>
    </div>
  );
}
