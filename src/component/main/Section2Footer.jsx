import { useContext } from "react";
import { DirectionContext } from "../../assets/context/DirectionContext";

export function Section2Footer() {
  const { t } = useContext(DirectionContext);
  return (
    <footer className="center">
      <a className="btn" href="#">
        {t(`sectionThirdBtn`)}
      </a>
    </footer>
  );
}
