import { useContext } from "react";
import { DirectionContext } from "../../assets/context/DirectionContext";

export function Section2() {
  const { t } = useContext(DirectionContext);
  return (
    <section id="overview">
      <div className="sectiontitle">
        <p className="nospace font-xs">{t(`sectiontitle`)}</p>
        <p className="heading underline font-x2">{t(`sectionOverview`)}</p>
      </div>
      <ul className="nospace group btmspace-80">
        <li className="one_third">
          <article>
            <div className="clear">
              <a href="#">
                <i className="fas fa-tape"></i>
              </a>
              <h6 className="heading">{t(`sectionThirdHeader1`)}</h6>
            </div>
            <p>{t(`sectionThirdOverview1`)}</p>
          </article>
        </li>
        <li className="one_third">
          <article>
            <div className="clear">
              <a href="#">
                <i className="fas fa-table-tennis"></i>
              </a>
              <h6 className="heading">{t(`sectionThirdHeader2`)}</h6>
            </div>
            <p>{t(`sectionThirdOverview2`)}</p>
          </article>
        </li>
        <li className="one_third">
          <article>
            <div className="clear">
              <a href="#">
                <i className="fas fa-people-carry"></i>
              </a>
              <h6 className="heading">{t(`sectionThirdHeader3`)}</h6>
            </div>
            <p>{t(`sectionThirdOverview3`)}</p>
          </article>
        </li>
      </ul>
      <footer className="center">
        <a className="btn" href="#">
          {t(`sectionThirdBtn`)}
        </a>
      </footer>
    </section>
  );
}
