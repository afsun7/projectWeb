import { useContext } from "react";
import { DirectionContext } from "../../assets/context/DirectionContext";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";

export function Main() {
  const { t } = useContext(DirectionContext);
  return (
    <div className="wrapper row3">
      <main className="hoc container clear">
        {/* <!-- main body --> */}
        <Section1 />

        <hr className="btmspace-80" />

        <Section2 />
        {/* main body  */}
        <div className="clear"></div>
      </main>
    </div>
  );
}
