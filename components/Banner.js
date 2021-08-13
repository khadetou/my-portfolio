import styles from "@/styles/style.module.scss";

export default function Banner({ isEnglish }) {
  const {
    container,
    button,
    banner,
    banner__container,
    banner__col1,
    banner__col2,
    banner__p,
    banner__h1,
  } = styles;

  const txt = {
    fr: "Je m'appelle khadetou DIANIFABE et je suis un developpeur full stack en MERN et WAMP stacks, jeu video et mobile, je suis aussi un ui/ux designer et un digital marketer residant au Senegal.",
    en: "Hello, I am Khadetou DIANIFABE, Full stack developer on MERN and WAMP stacks, game developer, mobile developer ui/ux designer,digital markter based in Senegal.",
  };

  const downloadLinks = {
    en: "https://fv6.failiem.lv/down.php?i=bsw8zp28n",
    fr: "https://fv6.failiem.lv/down.php?i=fwz6fj8br",
  };

  return (
    <div className={banner} id="home">
      <div className={`${container} ${banner__container}`}>
        <div className={banner__col1}>
          <h1 className={banner__h1}>Khadetou Dianifabe</h1>
          <p className={banner__p}>{isEnglish ? txt.en : txt.fr}</p>

          <a
            href={isEnglish ? downloadLinks.en : downloadLinks.fr}
            className={button}
          >
            {isEnglish ? "Dowload cv" : "Telechager cv"}
          </a>
        </div>
        <div className={banner__col2}>
          <img src="/images/profile.png" title="profile" />
        </div>
      </div>
    </div>
  );
}
