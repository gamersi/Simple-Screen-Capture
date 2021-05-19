function translatefromGerman(transstring) {
  var userLang = navigator.language;
  userLang = userLang.substring(0, 2);
  // TEST: userLang = "en";
  if (userLang === "de") {
    return transstring;
  } else if (userLang === "en") {
    console.log(transstring);
    if (transstring.startsWith("mit 💖 von gamer si gemacht")) {
      return "made with 💖 by gamer si";
    } else if (transstring.startsWith("Simpler Bildschirm Aufnehmer")) {
      return "Simple screen capturer";
    } else if (transstring.includes("Wähle einen eingang(Video)")) {
      return "Please choose a Video source";
    }
  }
}

document.querySelector(".madefooter").textContent = translatefromGerman(
  document.querySelector(".madefooter").textContent
);

document.querySelector(".HeadlineSimple").textContent = translatefromGerman(
  document.querySelector(".HeadlineSimple").textContent
);

document.querySelector(".is-text").textContent = translatefromGerman(
  document.querySelector(".is-text").textContent
);
