import { useContext } from "react";
import { DirectionContext } from "../../assets/context/DirectionContext";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Seaction4 } from "./Section4";
import { Section5 } from "./Section5";
import { Section6 } from "./Section6";
import { Section7 } from "./Section7";

export function Main() {
  const { t } = useContext(DirectionContext);
  return (
    <>
      <div className="wrapper row3">
        <main className="hoc container clear">
          <Section1 />

          <hr className="btmspace-80" />

          <Section2 />

          <div className="clear"></div>
        </main>
      </div>

      <Section3 />

      <Seaction4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </>
  );
}
