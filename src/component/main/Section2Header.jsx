import { useContext } from "react";
import { DirectionContext } from "../../assets/context/DirectionContext";

export function Section2Header() {
  const { t } = useContext(DirectionContext);
  return (
    <div className="sectiontitle">
      <p className="nospace font-xs">{t(`sectiontitle`)}</p>
      <p className="heading underline font-x2">{t(`sectionOverview`)}</p>
    </div>
  );
}
