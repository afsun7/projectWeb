import { useContext } from "react";
import { DirectionContext } from "../../assets/context/DirectionContext";

export function Section7() {
  const { t } = useContext(DirectionContext);
  const section7 = [
    {
      className: "one_third first",
      time: "2045-04-06T08:15+00:00",
      date: "06 Apr 2045",
      textH6: "sectionEighthLeftTitel",
      textP: "sectionEighthLeftHeader",
      btn: "sectionEighthLeftBtn",
    },
    {
      className: "one_third",
      time: "2045-04-05T08:15+00:00",
      date: "05 Apr 2045",
      textH6: "sectionEighthMiddleTitel",
      textP: "sectionEighthMiddleHeader",
      btn: "sectionEighthMiddleBtn",
    },
    {
      className: "one_third",
      time: "2045-04-04T08:15+00:00",
      date: "04 Apr 2045",
      textH6: "sectionEighthRightTitel",
      textP: "sectionEighthRightHeader",
      btn: "sectionEighthRightBtn",
    },
  ];
  return (
    <div className="wrapper row3">
      <section className="hoc container clear">
        <div className="sectiontitle">
          <p className="nospace font-xs">{t(`sectionEighthHeader`)}</p>
          <p className="heading underline font-x2">{t(`sectionEighthTitel`)}</p>
        </div>
        <ul id="latest" className="nospace group">
          {section7.map((card) => (
            <li className={card.className}>
              <article>
                <a className="imgover" href="#">
                  <img src="./src/assets/images/demo/348x261.png" alt="" />
                </a>
                <ul className="nospace meta group">
                  <li>
                    <i className="fas fa-user"></i> <a href="#">Admin</a>
                  </li>
                  <li>
                    <i className="far fa-clock"></i>
                    <time dateTime={card.time}>{card.date}</time>
                  </li>
                </ul>
                <div className="excerpt">
                  <h6 className="heading">{t(card.textH6)}</h6>
                  <p>{t(card.textP)}</p>
                  <footer>
                    <a className="btn" href="#">
                      {t(card.btn)}
                    </a>
                  </footer>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
