import { useContext } from "react";
import { DirectionContext } from "../../assets/context/DirectionContext";

export function Section1() {
  const { t } = useContext(DirectionContext);
  const section1 = [
    {
      className: "one_third first",
      textH6: "sectionHeader1",
      textP: "section1",
    },
    {
      className: "one_third",
      textH6: "sectionHeader2",
      textP: "section2",
    },
    {
      className: "one_third",
      textH6: "sectionHeader3",
      textP: "section3",
    },
  ];
  return (
    <section id="introblocks">
      <ul className="nospace group btmspace-80">
        {section1.map((card) => (
          <li className={card.className}>
            <figure>
              <a className="imgover" href="#">
                <img src="./src/assets/images/demo/348x261.png" alt="" />
              </a>
              <figcaption>
                <h6 className="heading">{t(card.textH6)}</h6>
                <p>{t(card.textP)}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
