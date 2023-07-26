import { useContext } from "react";
import { DirectionContext } from "../../assets/context/DirectionContext";
import { Section2Footer } from "./Section2Footer";
import { Section2Header } from "./Section2Header";

export function Section2() {
  const { t } = useContext(DirectionContext);
  const section2 = [
    {
      className: "fas fa-tape",
      textH6: "sectionThirdHeader1",
      textP: "sectionThirdOverview1",
    },
    {
      className: "fas fa-table-tennis",
      textH6: "sectionThirdHeader2",
      textP: "sectionThirdOverview2",
    },
    {
      className: "fas fa-people-carry",
      textH6: "sectionThirdHeader3",
      textP: "sectionThirdOverview3",
    },
  ];
  return (
    <section id="overview">
      <Section2Header />
      <ul className="nospace group btmspace-80">
        {section2.map((card) => (
          <li className="one_third">
            <article>
              <div className="clear">
                <a href="#">
                  <i className={card.className}></i>
                </a>
                <h6 className="heading">{t(card.textH6)}</h6>
              </div>
              <p>{t(card.textP)}</p>
            </article>
          </li>
        ))}
      </ul>
      <Section2Footer />
    </section>
  );
}
