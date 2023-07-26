import { useContext } from "react";
import { DirectionContext } from "../../assets/context/DirectionContext";

export function Section6() {
  const { t } = useContext(DirectionContext);
  return (
    <div
      className="wrapper bgded"
      style={{
        backgroundImage: `url(./src/assets/images/demo/backgrounds/04.png)`,
      }}
    >
      <section id="testimonials" className="hoc clear">
        <div className="one_half overlay">
          <ul className="nospace">
            <li>
              <blockquote>{t(`sectionSeventh1`)}</blockquote>
              <figure className="clear">
                <img
                  className="circle"
                  src="./src/assets/images/demo/60x60.png"
                  alt=""
                />
                <figcaption>
                  <h6 className="heading">A. Doe</h6>
                  <em>CEO / {t(`sectionSeventh2`)}</em>
                </figcaption>
              </figure>
            </li>
            <li>
              <footer>
                <a className="btn inverse" href="#">
                  {t(`VIEW MORE`)}
                </a>
              </footer>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
