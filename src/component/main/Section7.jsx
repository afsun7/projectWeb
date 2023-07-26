import { useContext } from "react";
import { DirectionContext } from "../../assets/context/DirectionContext";

export function Section7() {
  const { t } = useContext(DirectionContext);
  return (
    <div className="wrapper row3">
      <section className="hoc container clear">
        <div className="sectiontitle">
          <p className="nospace font-xs">{t(`sectionEighthHeader`)}</p>
          <p className="heading underline font-x2">{t(`sectionEighthTitel`)}</p>
        </div>
        <ul id="latest" className="nospace group">
          <li className="one_third first">
            <article>
              <a className="imgover" href="#">
                <img src="./src/assets/images/demo/348x261.png" alt="" />
              </a>
              <ul className="nospace meta group">
                <li>
                  <i className="fas fa-user"></i> <a href="#">Admin</a>
                </li>
                <li>
                  <i className="far fa-clock"></i>
                  <time dateTime="2045-04-06T08:15+00:00">06 Apr 2045</time>
                </li>
              </ul>
              <div className="excerpt">
                <h6 className="heading">{t(`sectionEighthLeftTitel`)}</h6>
                <p>{t(`sectionEighthLeftHeader`)}</p>
                <footer>
                  <a className="btn" href="#">
                    {t(`sectionEighthLeftBtn`)}
                  </a>
                </footer>
              </div>
            </article>
          </li>
          <li className="one_third">
            <article>
              <a className="imgover" href="#">
                <img src="./src/assets/images/demo/348x261.png" alt="" />
              </a>
              <ul className="nospace meta group">
                <li>
                  <i className="fas fa-user"></i> <a href="#">Admin</a>
                </li>
                <li>
                  <i className="far fa-clock"></i>
                  <time dateTime="2045-04-05T08:15+00:00">05 Apr 2045</time>
                </li>
              </ul>
              <div className="excerpt">
                <h6 className="heading">{t(`sectionEighthMiddleTitel`)}</h6>
                <p>{t(`sectionEighthMiddleHeader`)}</p>
                <footer>
                  <a className="btn" href="#">
                    {t("sectionEighthMiddleBtn")}
                  </a>
                </footer>
              </div>
            </article>
          </li>
          <li className="one_third">
            <article>
              <a className="imgover" href="#">
                <img src="./src/assets/images/demo/348x261.png" alt="" />
              </a>
              <ul className="nospace meta group">
                <li>
                  <i className="fas fa-user"></i> <a href="#">Admin</a>
                </li>
                <li>
                  <i className="far fa-clock"></i>
                  <time dateTime="2045-04-04T08:15+00:00">04 Apr 2045</time>
                </li>
              </ul>
              <div className="excerpt">
                <h6 className="heading">{t(`sectionEighthRightTitel`)}</h6>
                <p>{t(`sectionEighthRightHeader`)}</p>
                <footer>
                  <a className="btn" href="#">
                    {t(`sectionEighthRightBtn`)}
                  </a>
                </footer>
              </div>
            </article>
          </li>
        </ul>
      </section>
    </div>
  );
}
