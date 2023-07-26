import { useContext } from "react";
import { DirectionContext } from "../../assets/context/DirectionContext";

export function Logo() {
  const {changeArabic, changeEnglish, changePersian } =
    useContext(DirectionContext);
  return (
    <div
      id="logo"
      className="fl_left "
      style={{
        display: "flex",
        alignItems: "center",
        direction: "ltr",
      }}
    >
      <h1>
        <a href="index.html ">Sislaf</a>
      </h1>
      <div className="persian " onClick={changePersian}>
        فارسی
      </div>
      <div
        className="engilsh"
        onClick={changeEnglish}
        style={{ paddingLeft: "0.5rem" }}
      >
        English
      </div>
      <div
        className="arabic"
        onClick={changeArabic}
        style={{ paddingLeft: "0.5rem" }}
      >
        العربیه
      </div>
    </div>
  );
}
