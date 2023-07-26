

import { RtlInfo } from './RtlInfo';
import { RtlIcons } from './RtlIcons';
import { RtlLogo } from './RtlLogo';
import { RtlNav } from './RtlNav';
import "./style.rtl.header.css"


export default function RtlHeader() {
  return (
    <>
      <div className="wrapper row0">
        <div id="topbar" className="hoc clear">
          <RtlInfo />
          <RtlIcons />
        </div>
      </div>
      <div className="wrapper row1">
        <header id="header" className="hoc clear">
          <RtlLogo />
          <RtlNav />
        </header>
      </div>
    </>
  );
}
