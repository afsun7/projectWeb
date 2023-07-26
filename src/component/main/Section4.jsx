import { useContext } from "react";
import { DirectionContext } from "../../assets/context/DirectionContext";

export function Seaction4() {
  const { t } = useContext(DirectionContext);
  const section4 = [
    { className: "one_quarter first", text: "A. Doe" },
    { className: "one_quarter", text: "B. Doe" },
    { className: "one_quarter", text: "C. Doe" },
    { className: "one_quarter", text: "D. Doe" },
  ];
  return (
    <div className="wrapper row2">
      <div className="hoc container clear">
        <div className="sectiontitle">
          <p className="nospace font-xs">{t(`sectionFifthHeader`)}</p>
          <p className="heading underline font-x2">{t(`sectionFifthTitle`)}</p>
        </div>
        <ul className="nospace group team">
          {section4.map((card) => (
            <li className={card.className}>
              <figure>
                <a className="imgover" href="#">
                  <img src="./src/assets/images/demo/300x300.png" alt="" />
                </a>
                <figcaption>
                  <strong>{card.text}</strong> <em>{t(`sectionFifthCard`)}</em>
                </figcaption>
              </figure>
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
}
