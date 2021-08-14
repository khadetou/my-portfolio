import styles from "@/styles/style.module.scss";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { API_URL } from "../config";
import "react-toastify/dist/ReactToastify.css";
import router from "next/router";
import Image from "next/image";

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

  const [values, setValue] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );
    if (hasEmptyFields) {
      toast.error("Please fill in all fields");
      return;
    }

    const res = await fetch(`${API_URL}/infos`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      toast.error("Something went wrong");
    } else {
      await res.json();
      router.push("/message");
      toast.success("Message sent successfully");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...values, [name]: value });
  };

  return (
    <section className={contact} id="contact">
      <ToastContainer />
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
                    <Image
                      src={item.img}
                      alt={item.text}
                      width={67}
                      height={67}
                    />
                  </div>
                  <p className={contact__text}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <form className={contact__form} onSubmit={submitHandler}>
            <h3 className={contact__title}>
              {isEnglish ? "Contact me" : "Contactez Moi"}
            </h3>
            <div className={contact__row}>
              <input
                name="firstname"
                type="text"
                className={contact__input}
                placeholder={isEnglish ? "First Name" : "Prenom"}
                value={values.firstname}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastname"
                className={contact__input}
                placeholder={isEnglish ? "Last Name" : "Nom"}
                value={values.lastname}
                onChange={handleInputChange}
              />
            </div>
            <div className={contact__row}>
              <input
                type="text"
                name="phone"
                className={contact__input}
                placeholder={isEnglish ? "Phone" : "Telephone"}
                value={values.phone}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                className={contact__input}
                placeholder="Email"
                value={values.email}
                onChange={handleInputChange}
              />
            </div>
            <div className={contact__row}>
              <textarea
                name="message"
                className={`${contact__input} ${contact__textarea}`}
                placeholder="Message"
                value={values.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <input
              type="submit"
              value={isEnglish ? "Send" : "Envoyer"}
              className={`${button} ${contact__submit}`}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
