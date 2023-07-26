import { useContext } from "react";
import { DirectionContext } from "../../assets/context/DirectionContext";

export function Section5() {
  const { t } = useContext(DirectionContext);
  return (
    <div className="wrapper row3">
      <section className="hoc container clear">
        <div className="sectiontitle">
          <p className="nospace font-xs">{t(`sectionSixthHeader`)}</p>
          <p className="heading underline font-x2">{t(`sectionSixthTitel`)}</p>
        </div>
        <ul id="stats" className="nospace group">
          <li>
            <i className="fab fa-sticker-mule"></i>
            <p>
              <a href="#">123</a>
            </p>
            <p>{t(`sectionSixth1`)}</p>
          </li>
          <li>
            <i className="fab fa-pied-piper-alt"></i>
            <p>
              <a href="#">1234</a>
            </p>
            <p>{t(`sectionSixth2`)}</p>
          </li>
          <li>
            <i className="fas fa-globe"></i>
            <p>
              <a href="#">12345</a>
            </p>
            <p>{t(`sectionSixth3`)}</p>
          </li>
          <li>
            <i className="fas fa-ribbon"></i>
            <p>
              <a href="#">6789</a>
            </p>
            <p>{t(`sectionSixth4`)}</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
