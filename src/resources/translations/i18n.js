import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to our app!",
          home: "Home",
          about: "About",
          experience: "Experience",
          contact: "Contact",
          myNameLarge: "Michael Angel Bermudez",
          myNameShort: "Michael Bermudez",
          motivationalQuote1: "In a digital world, I'm the architect behind the experiences. With passion, I innovate and transcend borders, one pixel at a time.",
          motivationalQuote2: "In the vast digital universe, I find inspiration from my roots and experiences",
          motivationalQuote3: "Every web challenge is an opportunity to grow, and at 30, I'm still learning",
        }
      },
      es: {
        translation: {
          welcome: "¡Bienvenido a nuestra aplicación!",
          home: "Inicio",
          about: "Sobre mí",
          experience: "Experiencia",
          contact: "Contacto",
          myNameLarge: "Miguel Ángel Bermúdez",
          myNameShort: "Miguel Bermúdez",
          motivationalQuote1: "En un mundo digital, soy el arquitecto detrás de las experiencias. Con pasión, innovo y trasciendo fronteras, un pixel a la vez.",
          motivationalQuote2: "En el vasto universo digital, encuentro inspiración en mis raíces y experiencias",
          motivationalQuote3: "Cada desafío web es una oportunidad para crecer, y a los 30, todavía estoy aprendiendo",
        }
      }
    },
    lng: "en",  // Idioma predeterminado
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
