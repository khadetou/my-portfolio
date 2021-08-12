import styles from "@/styles/style.module.scss";

export default function Service({ isEnglish }) {
  const {
    container,
    section,
    button,
    service,
    service__header,
    service__h3,
    service__cards,
    service__card,
    service__cardContent,
    service__cWrap,
    service__cardTitle,
    service__cardText,
  } = styles;

  const cards = [
    {
      logo: "/images/web.svg",
      title: "ux/ui",
      text: {
        en: "We build beautiful design for your website wich will be followed thoroughly, under your watch, every step of the project  will be sent to you in order to validate before moving to the next step.",
        fr: "Nous faisons de jolies designs pour votre site web, vous pourrez suivre le processus en intéragissant avec nous afin d'avoir un produit conforme à votre commande.",
      },
    },
    {
      logo: "/images/google_code.svg",
      title: "Web App",
      text: {
        en: "We build fast and optimized website by using the last technologies such as Nextjs.",
        fr: "Nous faisons des sites web rapide et optimizées en utilisant les dernieres technologies telque Nextjs.",
      },
    },
    {
      logo: "/images/ios_development.svg",
      title: "Mobile App",
      text: {
        en: "We build mobile apps to suit your needs , We turn your ideas into reality.",
        fr: "Nous faisons des applications mobile ios, android, nous transformons vos idées en un produit fini.",
      },
    },
  ];

  return (
    <section className={`${service} ${section}`} id="services">
      <div className={container}>
        <div className={service__header}>
          <h3 className={service__h3}>Services</h3>
        </div>
        <div className={service__cards}>
          {cards.map((cardItem, idx) => (
            <div className={service__cWrap} key={idx}>
              <div className={service__card}>
                <div className={service__cardContent}>
                  <img src={cardItem.logo} alt={cardItem.title} />
                  <h3 className={service__cardTitle}>{cardItem.title}</h3>
                  <p className={service__cardText}>
                    {isEnglish ? cardItem.text.en : cardItem.text.fr}
                  </p>
                  <a href="#" className={button}>
                    {isEnglish ? "Read more" : "Voire plus"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
