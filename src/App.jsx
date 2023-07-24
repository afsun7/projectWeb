import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import Header from "./component/headre/Header";

function App() {
  const { t, i18n } = useTranslation();

  function changeEnglish() {
    const elem = document.getElementById("top");
    elem.dir = "ltr";
    i18n.changeLanguage("en");
  }
  function changePersian() {
    const elem = document.getElementById("top");
    elem.dir = "rtl";
    i18n.changeLanguage("fr");
  }
  return (
    <>
      <body id="top">
        {/* <!-- Top Background Image Wrapper --> */}
        {/* <Header changeEnglish={changeEnglish} changePersian={changePersian} t={t} /> */}
        <div
          className="bgded overlay"
          style={{
            backgroundImage: `url(./src/assets/images/demo/backgrounds/01.png)`,
          }}
        >
          <div className="wrapper row0">
            <div id="topbar" className="hoc clear">
              <div className="fl_left">
                <ul className="nospace">
                  <li>
                    <i className="fas fa-phone rgtspace-5"></i> +00 (123) 456
                    7890
                  </li>
                  <li>
                    <i className="far fa-envelope rgtspace-5"></i>{" "}
                    info@domain.com
                  </li>
                </ul>
              </div>
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
                          <input
                            type="text"
                            placeholder="Enter search term&hellip;"
                          />
                          <button type="submit">
                            <i className="fas fa-search"></i>
                          </button>
                        </fieldset>
                      </form>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="wrapper row1">
            <header id="header" className="hoc clear">
              <div
                id="logo"
                className="fl_left"
                style={{
                  display: "flex",
                  alignItems: "center",
                  direction: "ltr",
                }}
              >
                <h1>
                  <a href="index.html">Sislaf</a>
                </h1>
                <div className="persian" onClick={changePersian}>
                  فارسی
                </div>
                <div className="engilsh" onClick={changeEnglish}>
                  english
                </div>
              </div>
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
                        <a href="pages/sidebar-right.html">
                          {t("SidebarRight")}
                        </a>
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
            </header>
          </div>

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
        </div>
        {/* <!-- End Top Background Image Wrapper --> */}

        <div className="wrapper row3">
          <main className="hoc container clear">
            {/* <!-- main body --> */}

            <section id="introblocks">
              <ul className="nospace group btmspace-80">
                <li className="one_third first">
                  <figure>
                    <a className="imgover" href="#">
                      <img src="./src/assets/images/demo/348x261.png" alt="" />
                    </a>
                    <figcaption>
                      <h6 className="heading">{t(`sectionHeader1`)}</h6>
                      <p>{t(`section1`)}</p>
                    </figcaption>
                  </figure>
                </li>
                <li className="one_third">
                  <figure>
                    <a className="imgover" href="#">
                      <img src="./src/assets/images/demo/348x261.png" alt="" />
                    </a>
                    <figcaption>
                      <h6 className="heading">{t(`sectionHeader2`)}</h6>
                      <p className="">{t(`section2`)}</p>
                    </figcaption>
                  </figure>
                </li>
                <li className="one_third">
                  <figure>
                    <a className="imgover" href="#">
                      <img src="./src/assets/images/demo/348x261.png" alt="" />
                    </a>
                    <figcaption>
                      <h6 className="heading">{t(`sectionHeader3`)}</h6>
                      <p>{t(`section3`)}</p>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </section>

            <hr className="btmspace-80" />

            <section id="overview">
              <div className="sectiontitle">
                <p className="nospace font-xs">{t(`sectiontitle`)}</p>
                <p className="heading underline font-x2">
                  {t(`sectionOverview`)}
                </p>
              </div>
              <ul className="nospace group btmspace-80">
                <li className="one_third">
                  <article>
                    <div className="clear">
                      <a href="#">
                        <i className="fas fa-tape"></i>
                      </a>
                      <h6 className="heading">{t(`sectionThirdHeader1`)}</h6>
                    </div>
                    <p>{t(`sectionThirdOverview1`)}</p>
                  </article>
                </li>
                <li className="one_third">
                  <article>
                    <div className="clear">
                      <a href="#">
                        <i className="fas fa-table-tennis"></i>
                      </a>
                      <h6 className="heading">{t(`sectionThirdHeader2`)}</h6>
                    </div>
                    <p>{t(`sectionThirdOverview2`)}</p>
                  </article>
                </li>
                <li className="one_third">
                  <article>
                    <div className="clear">
                      <a href="#">
                        <i className="fas fa-people-carry"></i>
                      </a>
                      <h6 className="heading">{t(`sectionThirdHeader3`)}</h6>
                    </div>
                    <p>{t(`sectionThirdOverview3`)}</p>
                  </article>
                </li>
              </ul>
              <footer className="center">
                <a className="btn" href="#">
                  {t(`sectionThirdBtn`)}
                </a>
              </footer>
            </section>
            {/* main body  */}
            <div className="clear"></div>
          </main>
        </div>

        <div
          className="bgded overlay"
          style={{
            backgroundImage: `url(./src/assets/images/demo/backgrounds/02.png)`,
          }}
        >
          <section id="splitfifty" className="hoc container clear">
            <div className="sectiontitle">
              <p className="nospace font-xs">{t(`sectionFourth1`)}</p>
              <p className="heading underline font-x2">{t(`sectionFourth2`)}</p>
            </div>
            <div
              className="bgded clear"
              style={{
                backgroundImage: `url(./src/assets/images/demo/backgrounds/03.png)`,
              }}
            >
              <article>
                <h6 className="heading font-x2">{t(`sectionFourth3`)}</h6>
                <p>{t(`sectionFourth4`)}</p>
                <footer>
                  <a className="btn" href="#">
                    {t(`sectionFourthBtn`)}
                  </a>
                </footer>
              </article>
            </div>
          </section>
        </div>

        <div className="wrapper row2">
          <div className="hoc container clear">
            <div className="sectiontitle">
              <p className="nospace font-xs">{t(`sectionFifthHeader`)}</p>
              <p className="heading underline font-x2">
                {t(`sectionFifthTitle`)}
              </p>
            </div>
            <ul className="nospace group team">
              <li className="one_quarter first">
                <figure>
                  <a className="imgover" href="#">
                    <img src="./src/assets/images/demo/300x300.png" alt="" />
                  </a>
                  <figcaption>
                    <strong>A. Doe</strong> <em>{t(`sectionFifthCard`)}</em>
                  </figcaption>
                </figure>
              </li>
              <li className="one_quarter">
                <figure>
                  <a className="imgover" href="#">
                    <img src="./src/assets/images/demo/300x300.png" alt="" />
                  </a>
                  <figcaption>
                    <strong>B. Doe</strong> <em>{t(`sectionFifthCard`)}</em>
                  </figcaption>
                </figure>
              </li>
              <li className="one_quarter">
                <figure>
                  <a className="imgover" href="#">
                    <img src="./src/assets/images/demo/300x300.png" alt="" />
                  </a>
                  <figcaption>
                    <strong>C. Doe</strong> <em>{t(`sectionFifthCard`)}</em>
                  </figcaption>
                </figure>
              </li>
              <li className="one_quarter">
                <figure>
                  <a className="imgover" href="#">
                    <img src="./src/assets/images/demo/300x300.png" alt="" />
                  </a>
                  <figcaption>
                    <strong>D. Doe</strong> <em>{t(`sectionFifthCard`)}</em>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrapper row3">
          <section className="hoc container clear">
            <div className="sectiontitle">
              <p className="nospace font-xs">{t(`sectionSixthHeader`)}</p>
              <p className="heading underline font-x2">
                {t(`sectionSixthTitel`)}
              </p>
            </div>
            <ul id="stats" className="nospace group">
              <li>
                <i className="fab fa-sticker-mule"></i>
                <p>
                  <a href="#">123</a>
                </p>
                <p>{t(`sectionSixth1`)}</p>
              </li>
              <li>
                <i className="fab fa-pied-piper-alt"></i>
                <p>
                  <a href="#">1234</a>
                </p>
                <p>{t(`sectionSixth2`)}</p>
              </li>
              <li>
                <i className="fas fa-globe"></i>
                <p>
                  <a href="#">12345</a>
                </p>
                <p>{t(`sectionSixth3`)}</p>
              </li>
              <li>
                <i className="fas fa-ribbon"></i>
                <p>
                  <a href="#">6789</a>
                </p>
                <p>{t(`sectionSixth4`)}</p>
              </li>
            </ul>
          </section>
        </div>
        <div
          className="wrapper bgded"
          style={{
            backgroundImage: `url(./src/assets/images/demo/backgrounds/04.png)`,
          }}
        >
          <section id="testimonials" className="hoc clear">
            <div className="one_half overlay">
              <ul className="nospace">
                <li>
                  <blockquote>{t(`sectionSeventh1`)}</blockquote>
                  <figure className="clear">
                    <img
                      className="circle"
                      src="./src/assets/images/demo/60x60.png"
                      alt=""
                    />
                    <figcaption>
                      <h6 className="heading">A. Doe</h6>
                      <em>CEO / {t(`sectionSeventh2`)}</em>
                    </figcaption>
                  </figure>
                </li>
                <li>
                  <footer>
                    <a className="btn inverse" href="#">
                      {t(`VIEW MORE`)}
                    </a>
                  </footer>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="wrapper row3">
          <section className="hoc container clear">
            <div className="sectiontitle">
              <p className="nospace font-xs">{t(`sectionEighthHeader`)}</p>
              <p className="heading underline font-x2">
                {t(`sectionEighthTitel`)}
              </p>
            </div>
            <ul id="latest" className="nospace group">
              <li className="one_third first">
                <article>
                  <a className="imgover" href="#">
                    <img src="./src/assets/images/demo/348x261.png" alt="" />
                  </a>
                  <ul className="nospace meta group">
                    <li>
                      <i className="fas fa-user"></i> <a href="#">Admin</a>
                    </li>
                    <li>
                      <i className="far fa-clock"></i>
                      <time dateTime="2045-04-06T08:15+00:00">06 Apr 2045</time>
                    </li>
                  </ul>
                  <div className="excerpt">
                    <h6 className="heading">{t(`sectionEighthLeftTitel`)}</h6>
                    <p>{t(`sectionEighthLeftHeader`)}</p>
                    <footer>
                      <a className="btn" href="#">
                        {t(`sectionEighthLeftBtn`)}
                      </a>
                    </footer>
                  </div>
                </article>
              </li>
              <li className="one_third">
                <article>
                  <a className="imgover" href="#">
                    <img src="./src/assets/images/demo/348x261.png" alt="" />
                  </a>
                  <ul className="nospace meta group">
                    <li>
                      <i className="fas fa-user"></i> <a href="#">Admin</a>
                    </li>
                    <li>
                      <i className="far fa-clock"></i>
                      <time dateTime="2045-04-05T08:15+00:00">05 Apr 2045</time>
                    </li>
                  </ul>
                  <div className="excerpt">
                    <h6 className="heading">{t(`sectionEighthMiddleTitel`)}</h6>
                    <p>{t(`sectionEighthMiddleHeader`)}</p>
                    <footer>
                      <a className="btn" href="#">
                        {t("sectionEighthMiddleBtn")}
                      </a>
                    </footer>
                  </div>
                </article>
              </li>
              <li className="one_third">
                <article>
                  <a className="imgover" href="#">
                    <img src="./src/assets/images/demo/348x261.png" alt="" />
                  </a>
                  <ul className="nospace meta group">
                    <li>
                      <i className="fas fa-user"></i> <a href="#">Admin</a>
                    </li>
                    <li>
                      <i className="far fa-clock"></i>
                      <time dateTime="2045-04-04T08:15+00:00">04 Apr 2045</time>
                    </li>
                  </ul>
                  <div className="excerpt">
                    <h6 className="heading">{t(`sectionEighthRightTitel`)}</h6>
                    <p>{t(`sectionEighthRightHeader`)}</p>
                    <footer>
                      <a className="btn" href="#">
                        {t(`sectionEighthRightBtn`)}
                      </a>
                    </footer>
                  </div>
                </article>
              </li>
            </ul>
          </section>
        </div>
        <div
          className="bgded overlay row4"
          style={{
            backgroundImage: `url(./src/assets/images/demo/backgrounds/05.png)`,
          }}
        >
          <footer id="footer" className="hoc clear">
            <div className="center btmspace-50">
              <h6 className="heading">Sislaf</h6>
              <ul className="faico clear">
                <li>
                  <a className="faicon-dribble" href="#">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a className="faicon-facebook" href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="faicon-google-plus" href="#">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a className="faicon-linkedin" href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a className="faicon-twitter" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="faicon-vk" href="#">
                    <i className="fab fa-vk"></i>
                  </a>
                </li>
              </ul>
              <p className="nospace">
                Pellentesque ante integer mollis risus vitae condimentum
                vulputate elit.
              </p>
            </div>

            <hr className="btmspace-50" />

            <div className="group btmspace-50">
              <div className="one_quarter first">
                <h6 className="heading">Erat adipiscing metus</h6>
                <p className="nospace btmspace-15">
                  Mi etiam ac enim quis risus hendrerit ullamcorper nam faucibus
                  lectus eget.
                </p>
                <form method="post" action="#">
                  <fieldset>
                    <legend>Newsletter:</legend>
                    <input
                      className="btmspace-15"
                      type="text"
                      value=""
                      placeholder="Name"
                    />
                    <input
                      className="btmspace-15"
                      type="text"
                      value=""
                      placeholder="Email"
                    />
                    <button type="submit" value="submit">
                      Submit
                    </button>
                  </fieldset>
                </form>
              </div>
              <div className="one_quarter">
                <h6 className="heading">Auctor tellus diam</h6>
                <ul className="nospace linklist">
                  <li>
                    <article>
                      <p className="nospace btmspace-10">
                        <a href="#">
                          Mauris nam odio dui vestibulum a molestie ac pulvinar
                          a tellus donec nisi dui.
                        </a>
                      </p>
                      <time className="block font-xs" dateTime="2045-04-06">
                        Friday, 6<sup>th</sup> April 2045
                      </time>
                    </article>
                  </li>
                  <li>
                    <article>
                      <p className="nospace btmspace-10">
                        <a href="#">
                          Mattis ipsum ut leo ut elementum odio sed tellus
                          quisque malesuada bibendum.
                        </a>
                      </p>
                      <time className="block font-xs" dateTime="2045-04-05">
                        Thursday, 5<sup>th</sup> April 2045
                      </time>
                    </article>
                  </li>
                </ul>
              </div>
              <div className="one_quarter">
                <h6 className="heading">Laoreet non sodales</h6>
                <ul className="nospace linklist">
                  <li>
                    <a href="#">Amet blandit non quam quisque</a>
                  </li>
                  <li>
                    <a href="#">Cursus faucibus nulla in mauris</a>
                  </li>
                  <li>
                    <a href="#">Libero interdum quis molestie</a>
                  </li>
                  <li>
                    <a href="#">Ut convallis non felis mauris</a>
                  </li>
                  <li>
                    <a href="#">Volutpat consequat nibh aenean</a>
                  </li>
                </ul>
              </div>
              <div className="one_quarter">
                <h6 className="heading">Aliquam mollis tortor</h6>
                <ul className="nospace clear latestimg">
                  <li>
                    <a className="imgover" href="#">
                      <img src="./src/assets/images/demo/100x100.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="imgover" href="#">
                      <img src="./src/assets/images/demo/100x100.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="imgover" href="#">
                      <img src="./src/assets/images/demo/100x100.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="imgover" href="#">
                      <img src="./src/assets/images/demo/100x100.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="imgover" href="#">
                      <img src="./src/assets/images/demo/100x100.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="imgover" href="#">
                      <img src="./src/assets/images/demo/100x100.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="imgover" href="#">
                      <img src="./src/assets/images/demo/100x100.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="imgover" href="#">
                      <img src="./src/assets/images/demo/100x100.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="imgover" href="#">
                      <img src="./src/assets/images/demo/100x100.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="ctdetails" className="clear">
              <ul className="nospace clear">
                <li className="one_quarter first">
                  <div className="block clear">
                    <a href="#">
                      <i className="fas fa-phone"></i>
                    </a>
                    <span>
                      <strong>Give us a call:</strong> +00 (123) 456 7890
                    </span>
                  </div>
                </li>
                <li className="one_quarter">
                  <div className="block clear">
                    <a href="#">
                      <i className="fas fa-envelope"></i>
                    </a>
                    <span>
                      <strong>Send us a mail:</strong> support@domain.com
                    </span>
                  </div>
                </li>
                <li className="one_quarter">
                  <div className="block clear">
                    <a href="#">
                      <i className="fas fa-clock"></i>
                    </a>
                    <span>
                      <strong> Monday - Saturday:</strong> 08.00am - 18.00pm
                    </span>
                  </div>
                </li>
                <li className="one_quarter">
                  <div className="block clear">
                    <a href="#">
                      <i className="fas fa-map-marker-alt"></i>
                    </a>
                    <span>
                      <strong>Come visit us:</strong> Directions to
                      <a href="#">our location</a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </footer>
        </div>

        <div className="wrapper row5">
          <div id="copyright" className="hoc clear">
            <p className="fl_left">
              Copyright &copy; 2018 - All Rights Reserved -
              <a href="#">Domain Name</a>
            </p>
            <p className="fl_right">
              Template by
              <a
                target="_blank"
                href="https://www.os-templates.com/"
                title="Free Website Templates"
              />
            </p>
          </div>
        </div>
        <a id="backtotop" href="#top">
          <i className="fas fa-chevron-up"></i>
        </a>
      </body>
    </>
  );
}
export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
