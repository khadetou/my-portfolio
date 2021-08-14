import styles from "@/styles/style.module.scss";
import Link from "next/link";
import Image from "next/image";

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

  // const grid = useRef();

  // const [active, setActive] = useState({
  //   activeObj: { id: 1, data: "*", title: "All" },
  //   obj: [
  //     { id: 1, data: "*", title: "All" },
  //     //   { id: 2, data: ".ui", title: "UI/UX" },
  //     //   { id: 3, data: ".webdev", title: "Web Dev" },
  //   ],
  // });

  const data = [
    {
      img: "/images/ui.png",
      title: { en: "web dev", fr: "projet web" },
      name: "Proshop",
      link: { available: true, path: "http://senproshop.herokuapp.com/" },
    },
    {
      img: "/images/ui.png",
      title: { en: "web dev", fr: "projet web" },
      name: "Dj Events",
      link: {
        available: true,
        path: "https://sendj-events-next-js.vercel.app/",
      },
    },
    {
      img: "/images/ui.png",
      title: { en: "web dev", fr: "projet web" },
      name: "Blog",
      link: {
        available: true,
        path: "https://next-markdown-blog-nine.vercel.app/",
      },
    },
    {
      img: "/images/ui.png",
      title: { en: "web dev", fr: "projet web" },
      name: "Bookit",
      link: { available: false, path: "/portfolio" },
    },
    {
      img: "/images/ui.png",
      title: { en: "web dev", fr: "projet web" },
      name: "MarketPlace",
      link: { available: false, path: "/portfolio" },
    },
    {
      img: "/images/ui.png",
      title: { en: "web dev", fr: "projet web" },
      name: "devconnectors",
      link: { available: false, path: "/portfolio" },
    },
  ];

  // useEffect(() => {
  //   setActive({ ...active, activeObj: active.obj[0] });
  // }, [active]);

  // const toggleClass = (i) => {
  //   setActive({ ...active, activeObj: active.obj[i] });
  // };

  // const toggleActiveClass = (i) => {
  //   if (active.obj[i] === active.activeObj) {
  //     return " activebtn";
  //   } else {
  //     return "";
  //   }
  // };

  return (
    <section className={`${portfolio} ${section}`} id="portfolio">
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
            <button
              className={`${portfolio__filterBtn} activebtn`}
              data-filter={button.data}
            >
              All
            </button>
          </div>

          <div className={portfolio__grid}>
            {data.map((item, idx) => (
              <div key={idx} className={portfolio__gridItem}>
                <div className={portfolio__galery}>
                  <Image
                    src={item.img}
                    alt="portfolio"
                    width={366}
                    height={324}
                  />
                </div>
                <div className={portfolio__overlay}>
                  <h3 className={portfolio__title}>
                    {isEnglish ? item.title.en : item.title.fr}
                  </h3>
                  <div className={portfolio__btnContainer}>
                    <span className={portfolio__project}>{item.name}</span>
                    {item.link.available ? (
                      <a
                        href={item.link.path}
                        className={`${button} ${portfolio__btn}`}
                      >
                        View Demo
                      </a>
                    ) : (
                      <Link href={item.link.path}>
                        <a className={`${button} ${portfolio__btn}`}>
                          {" "}
                          View Demo
                        </a>
                      </Link>
                    )}
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
