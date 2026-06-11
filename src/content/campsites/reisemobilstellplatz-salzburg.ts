import type { CampsiteConfig } from "../types";

/**
 * 1. Reisemobil-Stellplatz Salzburg — honest config, 100 % aus der eigenen Quelle
 * (raw/digest + promobil-„Stellplatz des Monats"-Artikel) abgeleitet.
 *
 * BILD-LAGE: Hero = amenity-d054a79eee (wheree.com, Übersicht mit Salzburger
 * Bergkulisse, kein Wasserzeichen). Galerie = 4 saubere Platz-Fotos aus camping.info/wheree.com,
 * alle provenance-gebunden an DIESEN Platz. Kein YouTube-Frame mehr im Einsatz.
 */
const IMG = "/campsites/reisemobilstellplatz-salzburg";

const reisemobilstellplatzSalzburg: CampsiteConfig = {
  name: "1. Reisemobil-Stellplatz Salzburg",
  shortName: "Salzburg",
  slug: "reisemobilstellplatz-salzburg",
  ort: "Salzburg",
  region: "Salzburg",
  brandKind: "Reisemobil-Stellplatz",
  regionLong: "Reisemobil-Stellplatz · Stadtrand Salzburg · Österreich",

  theme: "schiefer",
  heroVariant: "center",

  claim: "Ankommen, wo Salzburg beginnt",
  claimEmphasis: "wo Salzburg beginnt",
  intro:
    "Der erste Reisemobil-Stellplatz der Mozartstadt: von der A1 ohne Stadtverkehr direkt auf den Platz, 106 großzügige Stellflächen — und der Bus ins Zentrum hält gleich an der Einfahrt.",

  statement: {
    text: "Hier endet die Autobahn — und dein Salzburg-Urlaub beginnt.",
    emphasis: "dein Salzburg-Urlaub beginnt",
  },

  pillars: [],

  usps: [
    "Hunde kostenlos",
    "Brötchenservice (Hauptsaison)",
    "WLAN",
    "365 Tage geöffnet",
    "Direkt von der A1",
    "Stellplätze bis 20 m",
  ],

  trust: {
    heading: "Von Reisemobilisten für Reisemobilisten geplant",
    headingEmphasis: "für Reisemobilisten",
    intro:
      "2017 von erfahrenen Reisemobilisten gebaut und von promobil zum „Stellplatz des Monats“ gekürt: 106 ebene Stellflächen, eine 30 m lange Ver- & Entsorgung und kurze Wege — durchdacht bis ins Detail.",
  },

  awards: [],

  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: {
      src: `${IMG}/amenity-d054a79eee.webp`,
      alt: "Reisemobil-Stellplatz Salzburg: Blick über den Platz mit Holzgebäude der Rezeption, Wohnmobilen auf den Stellflächen und der Salzburger Bergkulisse im Hintergrund",
    },
  },

  camping: {
    heading: "Der Stellplatz",
    intro:
      "106 ebene Stellflächen mit mindestens 5 m Breite und bis zu 20 m Länge, breite Verkehrswege, zentrale Ver- & Entsorgung und ein eigener Hundegarten.",
    features: [],
  },

  // Anreise — die Kernstärke des Platzes. Routing-Detail aus der eigenen Anfahrtsseite,
  // ergänzt um allgemein bekanntes geografisches Wissen (erlaubte Ausnahme).
  anreise: {
    heading: "Von der A1 in 900 Metern zum Platz",
    modes: [
      {
        title: "Mit dem Reisemobil",
        text: "A1 Westautobahn bis zum Knoten Salzburg-Nord, Ausfahrt Salzburg Nord. Nach der ersten Ampel links und rund 900 m bis zur Einfahrt auf der rechten Seite — aus Wien wie aus München gleichermaßen einfach.",
      },
      {
        title: "Mit Bus & Bahn",
        text: "Die Bushaltestelle liegt direkt an der Einfahrt; ins Zentrum der Mozartstadt sind es rund 20 Minuten Fahrt. Der Salzburger Hauptbahnhof ist wenige Kilometer entfernt.",
      },
      {
        title: "Lage & Stadt",
        text: "Am ruhigen Stadtrand gelegen: Festung Hohensalzburg, Getreidegasse und die Mozart-Häuser erreichst du in wenigen Minuten, Schloss Hellbrunn und der Untersberg liegen ganz in der Nähe.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Platz",
    headingEmphasis: "Platz",
    intro: "106 Stellflächen, ein eigener Hundegarten und das Kaffeehaus direkt am Platz — alles auf einen Blick.",
    tag: "Ganzjährig geöffnet",
    images: [
      {
        src: `${IMG}/amenity-121862fb76.webp`,
        alt: "Reisemobil-Stellplatz Salzburg: Wohnmobile auf den Stellflächen mit hölzernen Trennwänden, Bäumen und Hügeln im Hintergrund",
      },
      {
        src: `${IMG}/amenity-3ccc55e193.webp`,
        alt: "Reisemobil-Stellplatz Salzburg: Nummerierte Stellflächen mit Begrünungsstreifen zwischen den Reihen und Blick auf die Salzburger Bergkulisse",
      },
      {
        src: `${IMG}/amenity-a9969a1b0f.webp`,
        alt: "Reisemobil-Stellplatz Salzburg: Holzgebäude mit Rezeption und Kaffeehaus, Blick von der Stellfläche aus",
      },
      {
        src: `${IMG}/amenity-0d18d5fdab.webp`,
        alt: "Reisemobil-Stellplatz Salzburg: Eingang zur Rezeption im rustikalen Holzbau mit Hirschgeweih und Platz-Informationen",
      },
    ],
  },

  booking: {
    heading: "Dein Stellplatz in der Mozartstadt",
    headingEmphasis: "der Mozartstadt",
    intro:
      "Wähle Stellplatz-Typ und Zeitraum — wir bestätigen deine Anfrage persönlich. Reservierung optional gegen einmalig € 7, eine Anzahlung ist nicht nötig.",
    pricesArePlaceholder: false,
    priceNote:
      "Preis pro Nacht je Reisemobil inkl. Frischwasser, Entsorgung und Sanitär · zzgl. Nächtigungsabgabe € 3,55 pro Person/Tag (Kinder bis 15 frei) · Stand 2025",
    highlight: {
      title: "Direkt von der Autobahn",
      text: "Ausfahrt Salzburg Nord, einmal abbiegen, rund 900 m — und du stehst auf dem Platz.",
    },
    categories: [
      { id: "standard", label: "Stellplatz", perNight: 27 },
      { id: "komfort", label: "Komfort-Stellplatz", perNight: 32 },
      { id: "komfort-xl", label: "Komfort bis 20 m", perNight: 47 },
    ],
  },

  kontakt: {
    tel: "+43 676 911 4244",
    telHref: "tel:+436769114244",
    mail: "office@reisemobilstellplatz-salzburg.at",
    adresse: "Carl-Zuckmayer-Straße 26 · 5101 Salzburg · Österreich",
    coords: { lat: 47.8357, lng: 13.0604 },
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Anreise", href: "#anreise" },
    { label: "Preise", href: "#booking" },
    { label: "Kontakt", href: "#booking" },
  ],
};

export default reisemobilstellplatzSalzburg;
