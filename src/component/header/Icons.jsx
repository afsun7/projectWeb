import { useContext } from "react";
import { DirectionContext } from "../../assets/context/DirectionContext";

export function Icons() {
  const { t } = useContext(DirectionContext);
  return (
    <div className="fl_right">
      <ul className="nospace">
        <li>
          <a href="index.html">
            <i className="fas fa-home"></i>
          </a>
        </li>
        <li>
          <a href="#" title="Help Centre">
            <i className="far fa-life-ring"></i>
          </a>
        </li>
        <li>
          <a href="#" title="Login">
            <i className="fas fa-sign-in-alt"></i>
          </a>
        </li>
        <li>
          <a href="#" title="Sign Up">
            <i className="fas fa-edit"></i>
          </a>
        </li>
        <li id="searchform">
          <div>
            <form action="#" method="post">
              <fieldset>
                <legend>{t(`search`)}</legend>
                <input type="text" placeholder="Enter search term&hellip;" />
                <button type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </fieldset>
            </form>
          </div>
        </li>
      </ul>
    </div>
  );
}
