import { useContext } from "react";
import { DirectionContext } from "../../assets/context/DirectionContext";
export function Nav() {
  const { t } = useContext(DirectionContext);
  return (
    <nav id="mainav" className="fl_right">
      <ul className="clear">
        <li className="active">
          <a href="index.html">{t("home")}</a>
        </li>
        <li>
          <a className="drop" href="#">
            {t("pages")}
          </a>
          <ul>
            <li>
              <a href="pages/gallery.html">{t("Gallery")}</a>
            </li>
            <li>
              <a href="pages/full-width.html">{t("FullWidth")}</a>
            </li>
            <li>
              <a href="pages/sidebar-left.html">{t("SidebarLeft")}</a>
            </li>
            <li>
              <a href="pages/sidebar-right.html">{t("SidebarRight")}</a>
            </li>
            <li>
              <a href="pages/basic-grid.html">{t("BasicGrid")}</a>
            </li>
            <li>
              <a href="pages/font-icons.html">{t("FontIcons")}</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="drop" href="#">
            {t("drop")}
          </a>
          <ul>
            <li>
              <a href="#">{t("Level2")}</a>
            </li>
            <li>
              <a className="drop" href="#">
                {t("Level2Drop")}
              </a>
              <ul>
                <li>
                  <a href="#">{t("Level3")}</a>
                </li>
                <li>
                  <a href="#">{t("Level3")}</a>
                </li>
                <li>
                  <a href="#">{t("Level3")}</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">{t("Level2")}</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">{t("link")}</a>
        </li>
        <li>
          <a href="#">{t("link")}</a>
        </li>
        <li>
          <a href="#">{t("link")}</a>
        </li>
      </ul>
    </nav>
  );
}
