const translations = {
  ABOUT_HEADER: [
    `Hi there!\nI'm Florentin, a young digital product designer from Germany focused on creating digital products for humans.\n\nWith a focus on user interface, web and print design, I strive to create usable and polished products through passionate and deliberate design.`,
    `Hallo zusammen! \nIch bin Florentin, ein junger digitaler Produktdesigner, der sich auf die Entwicklung digitaler Produkte für den Menschen konzentriert. \n\n Mit einem Fokus auf Benutzeroberfläche, Web- und Druckdesign bemühe ich mich, durch Leidenschaft und durchdachte und brauchbare Produkte herzustellen absichtlicher Entwurf.`
  ]
};

window.systemCulture = (navigator.language || navigator.userLanguage).toLowerCase().indexOf("de") > -1 ? "de-DE" : "en-US";

class Translation {
  getPhrase(keyword, countryCode) {
    countryCode = countryCode || window.systemCulture;

    if (translations[keyword]) {
      if (countryCode.indexOf("de-") > -1) {
        return translations[keyword][1];
      } else {
        return translations[keyword][0];
      }
    } else {
      return keyword;
    }
  }
}

export default new Translation();
