import { useContext } from "react";
import { DirectionContext } from "../../assets/context/DirectionContext";

export function Section1() {
  const { t } = useContext(DirectionContext);
  return (
    <section id="introblocks">
      <ul className="nospace group btmspace-80">
        <li className="one_third first">
          <figure>
            <a className="imgover" href="#">
              <img src="./src/assets/images/demo/348x261.png" alt="" />
            </a>
            <figcaption>
              <h6 className="heading">{t(`sectionHeader1`)}</h6>
              <p>{t(`section1`)}</p>
            </figcaption>
          </figure>
        </li>
        <li className="one_third">
          <figure>
            <a className="imgover" href="#">
              <img src="./src/assets/images/demo/348x261.png" alt="" />
            </a>
            <figcaption>
              <h6 className="heading">{t(`sectionHeader2`)}</h6>
              <p className="">{t(`section2`)}</p>
            </figcaption>
          </figure>
        </li>
        <li className="one_third">
          <figure>
            <a className="imgover" href="#">
              <img src="./src/assets/images/demo/348x261.png" alt="" />
            </a>
            <figcaption>
              <h6 className="heading">{t(`sectionHeader3`)}</h6>
              <p>{t(`section3`)}</p>
            </figcaption>
          </figure>
        </li>
      </ul>
    </section>
  );
}
