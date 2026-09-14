// Edit the details below to personalize the site.

// Real photos of Naris Orchard, in src/assets/venue/.
import venuePhoto1 from "./assets/venue/venue-1.jpg"
import venuePhoto2 from "./assets/venue/venue-2.jpg"
import venuePhoto3 from "./assets/venue/venue-3.jpg"
import venuePhoto4 from "./assets/venue/venue-4.jpg"

// Attire guide illustration (Ninang gowns + Ninong shirts), in src/assets/attire/.
import attireGuideImage from "./assets/attire/attire-guide.jpg"

// RSVP QR code, in src/assets/rsvp/.
import rsvpQrCode from "./assets/rsvp/qr-code.png"

export const couple = {
  partner1First: "Dan",
  partner1Last: "Allen",
  partner2First: "Kaila",
  partner2Last: "June",
  nickname1: "Dan",
  nickname2: "Kai",
  hashtag: "#DanAndKaila2026",
}

// ISO date string used for the countdown and event details.
// TODO: confirm exact ceremony start time.
export const weddingDate = "2026-12-07T15:00:00"

export const venue = {
  name: "Náris Orchard",
  address: "Bulawan, Pagadian City",
  // "Náris Orchard" doesn't geocode reliably on its own (it fuzzy-matches to
  // an unrelated business). This pins the general barangay instead.
  // TODO: replace with the venue's exact Google Maps share link or GPS
  // coordinates once you have one, so guests get the precise pin.
  mapQuery: "Bulawan, Pagadian City, Zamboanga del Sur, Philippines",
}

// TODO: confirm exact ceremony/reception times.
export const schedule = [
  { title: "Ceremony", time: "3:00 PM" },
  { title: "Reception", time: "5:00 PM" },
]

export const ourStory = [
  "We met on February 2022, in university through a mutual friend. It started with a group study, the very normal kind where everyone had their own notes, deadlines, and things they were trying to understand.",
  `At one point, Dan started humming a song, and Kai asked, "You know this?"`,
  "He did.",
  "And somehow, that small question became the beginning of a friendship.",
  "There was no dramatic first meeting. No movie moment. Just two university students who happened to know the same song, got along surprisingly well, and found themselves talking a little longer after studying.",
  "Eventually, the conversations became something they both looked forward to. They talked about school, family, random things, and everything in between. The friendship grew naturally, and somewhere along the way, Dan realized he wanted to know Kai beyond being his study buddy.",
  "So eventually, Dan asked if he could court Kai.",
  "Kai said yes.",
  "And on March 28, 2023, she finally said yes to becoming a couple.",
  "After all that waiting, Dan finally got promoted from manliligaw to boyfriend. No ceremony was held. No certificate was issued.",
  "One of the things that brought them closer was simply being present for each other through the ordinary parts of life.",
  "Dan had a big esports tournament, and Kai became his unofficial number one fan. She was there through the practices, the pressure, the doubts, and all the moments when he wondered if he could actually pull it off. She cheered him on through all of it.",
  "Kai had her own moment of realization too.",
  "Before one of their long trips, Dan asked if they could pray first.",
  "It was a simple thing, but it stayed with her.",
  "Kai realized that this was the kind of life she wanted. Not a perfect life, because they both knew they were far from perfect, but a life where faith was part of the ordinary things. Where they could pray before a long journey, pray through difficult seasons, and keep choosing God and each other along the way.",
  "Of course, being together was not always cute.",
  "They had their first big argument, and Dan had exactly ₱170 left.",
  "₱170.",
  "And with that ₱170, he traveled an hour there and an hour back just to buy Kai her favorite siomai. He even attached a handwritten letter to it.",
  "Was spending his last ₱170 on siomai the wisest financial decision?",
  "Probably not.",
  "Was it romantic?",
  "At the time, yes.",
  "Was it slightly concerning?",
  "Also yes.",
  "Did the apology work?",
  "Apparently.",
  "Over the years, they grew up together through school, work, family, arguments, random adventures, celebrations, difficult seasons, and all the very ordinary days in between.",
  "They learned that love is not always found in big moments. Sometimes it looks like showing up when the other person is tired. Sometimes it is listening to the same story for the fifth time. Sometimes it is praying together. Sometimes it is traveling two hours for siomai with your last ₱170.",
  "And sometimes, it is simply choosing each other again on an ordinary day.",
  "Earlier this year, they decided they were ready to get married and started planning the wedding.",
  "Because the wedding plans had already started, Kai was no longer expecting a proposal. As far as she knew, the next big task was simply making sure the wedding actually happened.",
  "Then came May 16, 2026, her birthday.",
  "With two friends, flowers, a ring, and a little speech, Dan proposed.",
  "There was no huge crowd or elaborate setup. Just a small, intimate moment surrounded by people who mattered, and a question they both already knew the answer to.",
  "And somehow, here they are.",
  "What started so ordinarily became something we are incredibly grateful for.",
  `And by God's grace, the story that began with "You know this?" is now leading us to "I do."`,
]

export const venueImages = [venuePhoto1, venuePhoto2, venuePhoto3, venuePhoto4]

// PLACEHOLDER: these are names from a different couple's (Peregrino-Evangelista)
// entourage card, used only to lay out the section design.
// TODO: replace every name below with Dan & Kaila's actual entourage.
export const entourage = {
  parentsOfGroom: ["Joel P. Serafin", "Amy B. Peregrino"],
  parentsOfBride: ["John S. Evangelista Jr.", "Cecilia M. Evangelista"],
  principalSponsors: {
    left: [
      "Bishop J. Raymond T. Mora",
      "Ptr. Nowell S. Evangelista",
      "Ptr. Mark S. Evangelista",
      "Ptr. Ritchie E. Llanto",
      "Ptr. Jovir S. Arcay",
      "Doc. Noel C. Herrera",
      "Doc. Jover C. Punsalan",
      "Mita M. Bolano",
      "Feller T. Buna",
      "Engr. Agapito C. Tinampay",
      "Ptr. Anthony Cris P. Cabo",
      "Doc. Erickson G. Padunan",
    ],
    right: [
      "Rodelia S. Mora",
      "Carol Rose A. Evangelista",
      "Doc. Caren Q. Evangelista",
      "Raya Mae B. Llanto",
      "Alma Lynn S. Arcay",
      "Doc. Maria Theresa P. Herrera",
      "Doc. Rowena L. Punsalan",
      "Milweda D. Miguel",
      "Daeu Fatima P. Buna",
      "Josephine P. Tinampay",
      "Jin Aessa S. Cabo",
      "Glennelie M. Padunan",
    ],
  },
  bestMan: "Aaron John C. Prias",
  maidOfHonor: "Kelly Ruth M. Evangelista",
  secondarySponsors: {
    candle: ["Darryl Billy F. Apao", "Danielle G. Apao"],
    cord: ["Rolando B. Abisan, Jr.", "Vera Jessica R. Abisan"],
    veil: ["Mark Anthony P. Paredes", "Jie Ann G. Paredes"],
  },
  groomsmen: [
    "Mark Louis B. Sumindol",
    "Aries Ivan M. Garibay",
    "Jan Karl R. Soloma",
    "Denler Dwight G. Tumalay",
    "Benz Audi L. Alba",
  ],
  bridesmaids: [
    "Rhoda Michelle B. Peregrino",
    "Phoebe Grace M. Butial",
    "Danielle Mari A. Evangelista",
    "Hazel P. Tinampay",
    "Elizabeth L. Labadan",
    "Wranah Dawn A. Diasnes",
  ],
  bibleBearer: "Ethan Paul Q. Evangelista",
  coinBearer: "Joseph Andre A. Evangelista",
  ringBearer: "Luke Daniel M. Evangelista",
  flowerGirls: [
    "Evia Paula Q. Evangelista",
    "Ellis Paulin Q. Evangelista",
    "Yma Lexy Bactung",
    "Rania Elizabeth B. Llanto",
  ],
}

export const attireGuide = {
  principalSponsors: {
    ninang: "Long formal gown, nude tones",
    ninong: "Long sleeves, nude tones, black pants",
    image: attireGuideImage,
  },
  guestColors: [
    ["#d3b0a1", "#ab9a94", "#a67b5b"],
    ["#8a9a7e", "#5f7350", "#34420d"],
    ["#a98b6b", "#7a5a3a", "#4a3222"],
  ],
}

export const giftGuide = [
  "Your presence is already a precious gift to us. If you choose to bless us further, a monetary gift toward our new life together in Iloilo would be sincerely appreciated.",
  "Most of all, we ask for your prayers as we build a marriage centered on Christ.",
]

export const rsvp = {
  deadline: "October 31, 2026",
  qrCode: rsvpQrCode,
}
