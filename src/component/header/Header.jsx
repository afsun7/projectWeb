import { Info } from "./Info";
import { Icons } from "./Icons";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
export default function Header() {
  return (
    <>
      <div className="wrapper row0">
        <div id="topbar" className="hoc clear">
          <Info />
          <Icons />
        </div>
      </div>
      <div className="wrapper row1">
        <header id="header" className="hoc clear">
          <Logo />
          <Nav />
        </header>
      </div>
    </>
  );
}
