import styles from "@/styles/style.module.scss";

export default function Contact({ isEnglish }) {
  const {
    contact,
    container,
    contact__box,
    contact__form,
    contact__title,
    contact__p,
    contact__infowrap,
    contact__infoContent,
    contact__info,
    contact__icon,
    contact__text,
    contact__row,
    contact__input,
    contact__textarea,
    contact__submit,
    button,
  } = styles;

  const info = [
    {
      img: "/images/address.svg",
      text: "Senegal Dakar, castor 1",
    },
    {
      img: "/images/email_send.svg",
      text: "khadetou96@gmail.com",
    },
    {
      img: "/images/phone.svg",
      text: "+221 78 600 45 64",
    },
  ];

  return (
    <section className={contact} id="contact">
      <div className={container}>
        <div className={contact__box}>
          <div className={contact__infoContent}>
            <h3 className={contact__title}>
              {isEnglish ? "Get in touch" : "Me Contacter"}
            </h3>
            <p className={contact__p}>
              {isEnglish
                ? "You can get in touch with me with these following infos"
                : "Vous pouvez me contacter avec les coordonnées suivantes:"}
            </p>
            <div className={contact__infowrap}>
              {info.map((item, idx) => (
                <div key={idx} className={contact__info}>
                  <div className={contact__icon}>
                    <img src={item.img} alt={item.text} />
                  </div>
                  <p className={contact__text}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <form className={contact__form}>
            <h3 className={contact__title}>
              {isEnglish ? "Contact me" : "Contactez Moi"}
            </h3>
            <div className={contact__row}>
              <input
                type="text"
                className={contact__input}
                placeholder={isEnglish ? "First Name" : "Prenom"}
              />
              <input
                type="text"
                className={contact__input}
                placeholder={isEnglish ? "Last Name" : "Nom"}
              />
            </div>
            <div className={contact__row}>
              <input
                type="text"
                className={contact__input}
                placeholder={isEnglish ? "Phone" : "Telephone"}
              />
              <input
                type="email"
                className={contact__input}
                placeholder="Email"
              />
            </div>
            <div className={contact__row}>
              <textarea
                name="message"
                className={`${contact__input} ${contact__textarea}`}
                placeholder="Message"
              ></textarea>
            </div>
            <button type="submit" className={`${button} ${contact__submit}`}>
              {isEnglish ? "Send" : "Envoyer"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
