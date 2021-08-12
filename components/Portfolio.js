import styles from "@/styles/style.module.scss";
import { useState, useEffect, useRef } from "react";

export default function Portfolio({ isEnglish }) {
  const {
    section,
    container,
    button,
    portfolio,
    portfolio__bg,
    portfolio__header,
    portfolio__h3,
    portfolio__body,
    portfolio__filter,
    portfolio__filterBtn,
    portfolio__grid,
    portfolio__gridItem,
    portfolio__galery,
    portfolio__overlay,
    portfolio__title,
    portfolio__btnContainer,
    portfolio__project,
    portfolio__btn,
  } = styles;

  const grid = useRef();

  const [active, setActive] = useState({
    activeObj: { id: 1, data: "*", title: "All" },
    obj: [
      { id: 1, data: "*", title: "All" },
      //   { id: 2, data: ".ui", title: "UI/UX" },
      //   { id: 3, data: ".webdev", title: "Web Dev" },
    ],
  });

  const data = [
    {
      img: "/images/ui.png",
      title: "web dev",
      name: "Proshop",
      link: "http://senproshop.herokuapp.com/",
    },
    {
      img: "/images/ui.png",
      title: "web dev",
      name: "Dj Events",
      link: "https://sendj-events-next-js.vercel.app/",
    },
    {
      img: "/images/ui.png",
      title: "web dev",
      name: "Blog",
      link: "https://next-markdown-blog-nine.vercel.app/",
    },
    {
      img: "/images/ui.png",
      title: "web dev",
      name: "devconnectors",
      link: "#",
      style: {
        position: "absolute",
        left: "0px",
        top: "447px",
      },
    },
    {
      img: "/images/ui.png",
      title: "web dev",
      name: "devconnectors",
      link: "#",
      style: {
        position: "absolute",
        left: "447.953px",
        top: "447px",
      },
    },
    {
      img: "/images/ui.png",
      title: "web dev",
      name: "devconnectors",
      link: "#",
      style: {
        position: "absolute",
        left: "895.906px",
        top: "447px",
      },
    },
  ];

  useEffect(() => {
    setActive({ ...active, activeObj: active.obj[0] });
  }, []);

  const toggleClass = (i) => {
    setActive({ ...active, activeObj: active.obj[i] });
  };

  const toggleActiveClass = (i) => {
    if (active.obj[i] === active.activeObj) {
      return " activebtn";
    } else {
      return "";
    }
  };

  return (
    <section className={`${portfolio} ${section}`}>
      <div className={portfolio__bg}></div>
      <div className={container}>
        <div className={portfolio__header}>
          <h3
            className={portfolio__h3}
            data-title={isEnglish ? "My Work" : "Mon Travaille"}
          >
            Portfolio
          </h3>
        </div>
        <div className={portfolio__body}>
          <div className={portfolio__filter}>
            {active.obj.map((button, idx) => (
              <button
                className={`${portfolio__filterBtn} ${toggleActiveClass(idx)}`}
                key={idx}
                data-filter={button.data}
                onClick={() => {
                  toggleClass(idx);
                }}
              >
                {button.title}
              </button>
            ))}
          </div>

          <div ref={grid} className={portfolio__grid}>
            {data.map((item, idx) => (
              <div key={idx} className={portfolio__gridItem}>
                <div className={portfolio__galery}>
                  <img src={item.img} alt="portfolio" />
                </div>
                <div className={portfolio__overlay}>
                  <h3 className={portfolio__title}>{item.title}</h3>
                  <div className={portfolio__btnContainer}>
                    <span className={portfolio__project}>{item.name}</span>
                    <a
                      href={item.link}
                      className={`${button} ${portfolio__btn}`}
                    >
                      View Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
