import { useContext } from "react";
import { DirectionContext } from "../../assets/context/DirectionContext";

export function Section5() {
  const section5 = [
    { className: "fab fa-sticker-mule", number: 123, textP: "sectionSixth1" },
    {
      className: "fab fa-pied-piper-alt",
      number: 1234,
      textP: "sectionSixth2",
    },
    {
      className: "fab fa-pied-piper-alt",
      number: 12345,
      textP: "sectionSixth3",
    },
    {
      className: "fas fa-ribbon",
      number: 6789,
      textP: "sectionSixth4",
    },
  ];
  const { t } = useContext(DirectionContext);
  return (
    <div className="wrapper row3">
      <section className="hoc container clear">
        <div className="sectiontitle">
          <p className="nospace font-xs">{t(`sectionSixthHeader`)}</p>
          <p className="heading underline font-x2">{t(`sectionSixthTitel`)}</p>
        </div>
        <ul id="stats" className="nospace group">
          {section5.map((card) => (
            <li>
              <i className={card.className}></i>
              <p>
                <a href="#">{card.number}</a>
              </p>
              <p>{t(card.textP)}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
