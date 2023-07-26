import { createContext, useState } from "react";
import { useTranslation } from "react-i18next";

export const DirectionContext = createContext();

export default function ContextProvider({ children }) {
  const { t, i18n } = useTranslation();
  //
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
  function changeArabic() {
    const elem = document.getElementById("top");
    elem.dir = "rtl";
    i18n.changeLanguage("ar");
  }

  return (
    <DirectionContext.Provider
      value={{ t, i18n, changeArabic, changeEnglish, changePersian }}
    >
      {children}
    </DirectionContext.Provider>
  );
}
