import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// See docs on how to detect language
// https://react.i18next.com/latest/using-with-hooks
i18n.use(LanguageDetector).init({
  // init with inline resources
  resources: {
    en: {
      translations: {
        informalGreeting: "Hi there!",
        madeWith: "Made with",
        and: "and",
        openSource: "open source",
        callToAction: "Please ask about Covid-19 (Corona-Virus)"
      }
    },
    de: {
      translations: {
        informalGreeting: "Hallöle!",
        madeWith: "Erstellt mit",
        and: "und",
        openSource: "Open Source",
        callToAction: "Stellen Sie eine Frage zu Covid-19 (Corona-Virus)"
      }
    }
  },
  fallbackLng: "de", // language is set here
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;