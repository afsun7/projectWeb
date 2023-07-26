import { useContext } from "react";
import { DirectionContext } from "../../assets/context/DirectionContext";

export function ArticlePicture() {
  const { t } = useContext(DirectionContext);
  return (
    <div id="pageintro" className="hoc clear">
      <article>
        <h3 className="heading">{t("head")}</h3>
        <p>{t(`textPicture`)}</p>
        <footer>
          <ul className="nospace inline pushright">
            <li>
              <a className="btn" href="#">
                {t(`btnLeftPicture`)}
              </a>
            </li>
            <li>
              <a className="btn inverse" href="#">
                {t(`btnRightpicture`)}
              </a>
            </li>
          </ul>
        </footer>
      </article>
    </div>
  );
}
