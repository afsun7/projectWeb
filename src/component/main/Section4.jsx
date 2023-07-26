import { useContext } from "react";
import { DirectionContext } from "../../assets/context/DirectionContext";

export function Seaction4() {
    const {t}=useContext(DirectionContext)
  return (
    <div className="wrapper row2">
      <div className="hoc container clear">
        <div className="sectiontitle">
          <p className="nospace font-xs">{t(`sectionFifthHeader`)}</p>
          <p className="heading underline font-x2">{t(`sectionFifthTitle`)}</p>
        </div>
        <ul className="nospace group team">
          <li className="one_quarter first">
            <figure>
              <a className="imgover" href="#">
                <img src="./src/assets/images/demo/300x300.png" alt="" />
              </a>
              <figcaption>
                <strong>A. Doe</strong> <em>{t(`sectionFifthCard`)}</em>
              </figcaption>
            </figure>
          </li>
          <li className="one_quarter">
            <figure>
              <a className="imgover" href="#">
                <img src="./src/assets/images/demo/300x300.png" alt="" />
              </a>
              <figcaption>
                <strong>B. Doe</strong> <em>{t(`sectionFifthCard`)}</em>
              </figcaption>
            </figure>
          </li>
          <li className="one_quarter">
            <figure>
              <a className="imgover" href="#">
                <img src="./src/assets/images/demo/300x300.png" alt="" />
              </a>
              <figcaption>
                <strong>C. Doe</strong> <em>{t(`sectionFifthCard`)}</em>
              </figcaption>
            </figure>
          </li>
          <li className="one_quarter">
            <figure>
              <a className="imgover" href="#">
                <img src="./src/assets/images/demo/300x300.png" alt="" />
              </a>
              <figcaption>
                <strong>D. Doe</strong> <em>{t(`sectionFifthCard`)}</em>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </div>
  );
}
