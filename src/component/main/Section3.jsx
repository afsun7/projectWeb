import { useContext } from "react";
import { DirectionContext } from "../../assets/context/DirectionContext";

export function Section3() {
  const { t } = useContext(DirectionContext);
  return (
    <div
      className="bgded overlay"
      style={{
        backgroundImage: `url(./src/assets/images/demo/backgrounds/02.png)`,
      }}
    >
      <section id="splitfifty" className="hoc container clear">
        <div className="sectiontitle">
          <p className="nospace font-xs">{t(`sectionFourth1`)}</p>
          <p className="heading underline font-x2">{t(`sectionFourth2`)}</p>
        </div>
        <div
          className="bgded clear"
          style={{
            backgroundImage: `url(./src/assets/images/demo/backgrounds/03.png)`,
          }}
        >
          <article>
            <h6 className="heading font-x2">{t(`sectionFourth3`)}</h6>
            <p>{t(`sectionFourth4`)}</p>
            <footer>
              <a className="btn" href="#">
                {t(`sectionFourthBtn`)}
              </a>
            </footer>
          </article>
        </div>
      </section>
    </div>
  );
}
