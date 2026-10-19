/* Learn Bangla - alphabet. Copyright © ZyeemZia */
window.LC = window.LC || { course: null, alphabet: null, units: [] };
LC.alphabet = {
 "groups": [
  {
   "id": "vowels",
   "label": "Vowels (স্বরবর্ণ)",
   "note": "11 vowel letters. Inside a word each one (except অ) becomes a vowel sign, shown as its second form."
  },
  {
   "id": "consonants",
   "label": "Consonants (ব্যঞ্জনবর্ণ)",
   "note": "35 consonant letters in the standard order. The last four of the 39 (ৎ ং ঃ ঁ) are under Special signs."
  },
  {
   "id": "signs",
   "label": "Special signs",
   "note": "ৎ ং ঃ ঁ (the last four consonants) and the হসন্ত, which removes a vowel."
  },
  {
   "id": "numerals",
   "label": "Numerals (সংখ্যা)",
   "note": "The digits 0 to 9, used just like 0–9 in English."
  }
 ],
 "items": [
  {
   "id": "o",
   "ch": "অ",
   "name": "shoro o",
   "say": "অ",
   "tr": "o",
   "group": "vowels",
   "sound": "A short, rounded o, like the 'o' in British 'hot' or the 'aw' in 'saw'. This sound also hides inside every consonant.",
   "example": {
    "t": "অনেক",
    "tr": "onek",
    "mean": "many"
   },
   "tip": "অ has no vowel sign: it is the hidden vowel in ক (ko), খ (kho) and the rest."
  },
  {
   "id": "aa",
   "ch": "আ",
   "name": "shoro a",
   "say": "আ",
   "tr": "a",
   "group": "vowels",
   "sound": "An open a, like the 'a' in 'father', but short.",
   "example": {
    "t": "আম",
    "tr": "am",
    "mean": "mango"
   },
   "tip": "আ is অ plus one straight line.",
   "alt": "া"
  },
  {
   "id": "i",
   "ch": "ই",
   "name": "hrosho i",
   "say": "ই",
   "tr": "i",
   "group": "vowels",
   "sound": "Like the 'ee' in 'see', but short.",
   "example": {
    "t": "ইঁদুর",
    "tr": "indur",
    "mean": "mouse"
   },
   "tip": "'hrosho' means short.",
   "alt": "ি"
  },
  {
   "id": "ii",
   "ch": "ঈ",
   "name": "dirgho i",
   "say": "ঈ",
   "tr": "i",
   "group": "vowels",
   "sound": "The same sound as ই in everyday speech. Only the spelling is different.",
   "example": {
    "t": "ঈগল",
    "tr": "igol",
    "mean": "eagle"
   },
   "tip": "'dirgho' means long.",
   "alt": "ী"
  },
  {
   "id": "u",
   "ch": "উ",
   "name": "hrosho u",
   "say": "উ",
   "tr": "u",
   "group": "vowels",
   "sound": "Like the 'oo' in 'food', but short.",
   "example": {
    "t": "উট",
    "tr": "ut",
    "mean": "camel"
   },
   "alt": "ু"
  },
  {
   "id": "uu",
   "ch": "ঊ",
   "name": "dirgho u",
   "say": "ঊ",
   "tr": "u",
   "group": "vowels",
   "sound": "The same sound as উ in everyday speech. Only the spelling is different.",
   "example": {
    "t": "ঊষা",
    "tr": "usha",
    "mean": "dawn"
   },
   "alt": "ূ"
  },
  {
   "id": "ri",
   "ch": "ঋ",
   "name": "ri",
   "say": "ঋ",
   "tr": "ri",
   "group": "vowels",
   "sound": "Said 'ri', as in 'rich'. It is rare and mostly found in words from Sanskrit.",
   "example": {
    "t": "ঋতু",
    "tr": "ritu",
    "mean": "season"
   },
   "alt": "ৃ"
  },
  {
   "id": "e",
   "ch": "এ",
   "name": "e",
   "say": "এ",
   "tr": "e",
   "group": "vowels",
   "sound": "Like the 'e' in 'bed', or the 'a' in 'say' without the glide. In some words it opens to the 'a' of 'cat'.",
   "example": {
    "t": "এলাচ",
    "tr": "elach",
    "mean": "cardamom"
   },
   "alt": "ে"
  },
  {
   "id": "oi",
   "ch": "ঐ",
   "name": "oi",
   "say": "ঐ",
   "tr": "oi",
   "group": "vowels",
   "sound": "Like the 'oy' in 'boy'.",
   "example": {
    "t": "ঐক্য",
    "tr": "oikko",
    "mean": "unity"
   },
   "alt": "ৈ"
  },
  {
   "id": "oh",
   "ch": "ও",
   "name": "o",
   "say": "ও",
   "tr": "o",
   "group": "vowels",
   "sound": "Like the 'o' in 'go', but pure, with no 'w' sound at the end.",
   "example": {
    "t": "ওজন",
    "tr": "ojon",
    "mean": "weight"
   },
   "alt": "ো"
  },
  {
   "id": "ou",
   "ch": "ঔ",
   "name": "ou",
   "say": "ঔ",
   "tr": "ou",
   "group": "vowels",
   "sound": "o and u glided together, a bit like the 'ow' in 'show'.",
   "example": {
    "t": "ঔষধ",
    "tr": "oushodh",
    "mean": "medicine"
   },
   "alt": "ৌ"
  },
  {
   "id": "ka",
   "ch": "ক",
   "name": "ko",
   "say": "ক",
   "tr": "ko",
   "group": "consonants",
   "sound": "An unaspirated k, with no puff of air, like the k in 'skin'.",
   "example": {
    "t": "কলা",
    "tr": "kola",
    "mean": "banana"
   },
   "tip": "Hold a tissue in front of your lips: it stays still for ক and flutters for খ."
  },
  {
   "id": "kha",
   "ch": "খ",
   "name": "kho",
   "say": "খ",
   "tr": "kho",
   "group": "consonants",
   "sound": "k with a strong puff of air, like the k in 'kite' said with extra breath.",
   "example": {
    "t": "খরগোশ",
    "tr": "khorgosh",
    "mean": "rabbit"
   }
  },
  {
   "id": "ga",
   "ch": "গ",
   "name": "go",
   "say": "গ",
   "tr": "go",
   "group": "consonants",
   "sound": "Like the g in 'go'.",
   "example": {
    "t": "গরু",
    "tr": "goru",
    "mean": "cow"
   }
  },
  {
   "id": "gha",
   "ch": "ঘ",
   "name": "gho",
   "say": "ঘ",
   "tr": "gho",
   "group": "consonants",
   "sound": "A breathy g, like the 'g-h' in 'doghouse' said quickly.",
   "example": {
    "t": "ঘর",
    "tr": "ghor",
    "mean": "room, house"
   }
  },
  {
   "id": "nga",
   "ch": "ঙ",
   "name": "umo",
   "say": "ঙ",
   "tr": "ng",
   "group": "consonants",
   "sound": "The 'ng' in 'sing'. It never starts a word.",
   "example": {
    "t": "ব্যাঙ",
    "tr": "bang",
    "mean": "frog"
   },
   "tip": "Its traditional name is said 'umo' (some say 'ungo')."
  },
  {
   "id": "cha",
   "ch": "চ",
   "name": "cho",
   "say": "চ",
   "tr": "cho",
   "group": "consonants",
   "sound": "Like the ch in 'church', but with no puff of air.",
   "example": {
    "t": "চা",
    "tr": "cha",
    "mean": "tea"
   }
  },
  {
   "id": "chha",
   "ch": "ছ",
   "name": "chho",
   "say": "ছ",
   "tr": "chho",
   "group": "consonants",
   "sound": "ch with a strong puff of air.",
   "example": {
    "t": "ছাতা",
    "tr": "chhata",
    "mean": "umbrella"
   }
  },
  {
   "id": "ja",
   "ch": "জ",
   "name": "jo",
   "say": "জ",
   "tr": "jo",
   "group": "consonants",
   "sound": "Like the j in 'jam'.",
   "example": {
    "t": "জাহাজ",
    "tr": "jahaj",
    "mean": "ship"
   }
  },
  {
   "id": "jha",
   "ch": "ঝ",
   "name": "jho",
   "say": "ঝ",
   "tr": "jho",
   "group": "consonants",
   "sound": "A breathy j, like the 'dg-h' in 'hedgehog' said quickly.",
   "example": {
    "t": "ঝড়",
    "tr": "jhor",
    "mean": "storm"
   }
  },
  {
   "id": "nya",
   "ch": "ঞ",
   "name": "inyo",
   "say": "ঞ",
   "tr": "n",
   "group": "consonants",
   "sound": "A nasal n. On its own it is rare; it mostly joins চ or জ, as in পঞ্চাশ.",
   "example": {
    "t": "পঞ্চাশ",
    "tr": "ponchash",
    "mean": "fifty"
   }
  },
  {
   "id": "tta",
   "ch": "ট",
   "name": "to",
   "say": "ট",
   "tr": "to",
   "group": "consonants",
   "sound": "A t with the tongue tip curled back to touch the roof of the mouth. English t is close to it.",
   "example": {
    "t": "টাকা",
    "tr": "taka",
    "mean": "money (taka)"
   }
  },
  {
   "id": "ttha",
   "ch": "ঠ",
   "name": "tho",
   "say": "ঠ",
   "tr": "tho",
   "group": "consonants",
   "sound": "The curled-back t with a puff of air.",
   "example": {
    "t": "ঠান্ডা",
    "tr": "thanda",
    "mean": "cold"
   }
  },
  {
   "id": "dda",
   "ch": "ড",
   "name": "do",
   "say": "ড",
   "tr": "do",
   "group": "consonants",
   "sound": "A d with the tongue tip curled back. English d is close to it.",
   "example": {
    "t": "ডিম",
    "tr": "dim",
    "mean": "egg"
   }
  },
  {
   "id": "ddha",
   "ch": "ঢ",
   "name": "dho",
   "say": "ঢ",
   "tr": "dho",
   "group": "consonants",
   "sound": "The curled-back d with a breath of air.",
   "example": {
    "t": "ঢাকা",
    "tr": "dhaka",
    "mean": "Dhaka (the capital)"
   }
  },
  {
   "id": "nna",
   "ch": "ণ",
   "name": "murdhonno no",
   "say": "ণ",
   "tr": "no",
   "group": "consonants",
   "sound": "Sounds the same as ন (n) in modern Bangla. It is a spelling letter.",
   "example": {
    "t": "হরিণ",
    "tr": "horin",
    "mean": "deer"
   },
   "tip": "Spelling names: ণ is 'murdhonno no', ন is 'dontto no'."
  },
  {
   "id": "ta",
   "ch": "ত",
   "name": "to",
   "say": "ত",
   "tr": "to",
   "group": "consonants",
   "sound": "A soft t: the tongue tip touches the back of the top front teeth, like t in Spanish or French.",
   "example": {
    "t": "তারা",
    "tr": "tara",
    "mean": "star"
   },
   "tip": "ত (tongue on teeth) and ট (tongue curled back) are different letters with different sounds."
  },
  {
   "id": "tha",
   "ch": "থ",
   "name": "tho",
   "say": "থ",
   "tr": "tho",
   "group": "consonants",
   "sound": "The soft teeth-t with a puff of air. It is not the 'th' of 'think'.",
   "example": {
    "t": "থালা",
    "tr": "thala",
    "mean": "plate"
   }
  },
  {
   "id": "da",
   "ch": "দ",
   "name": "do",
   "say": "দ",
   "tr": "do",
   "group": "consonants",
   "sound": "A soft d with the tongue on the back of the top teeth, like d in Spanish.",
   "example": {
    "t": "দরজা",
    "tr": "dorja",
    "mean": "door"
   }
  },
  {
   "id": "dha",
   "ch": "ধ",
   "name": "dho",
   "say": "ধ",
   "tr": "dho",
   "group": "consonants",
   "sound": "The soft teeth-d with a breath of air. It is not the 'th' of 'this'.",
   "example": {
    "t": "ধান",
    "tr": "dhan",
    "mean": "rice plant"
   }
  },
  {
   "id": "na",
   "ch": "ন",
   "name": "dontto no",
   "say": "ন",
   "tr": "no",
   "group": "consonants",
   "sound": "Like the n in 'no'.",
   "example": {
    "t": "নদী",
    "tr": "nodi",
    "mean": "river"
   }
  },
  {
   "id": "pa",
   "ch": "প",
   "name": "po",
   "say": "প",
   "tr": "po",
   "group": "consonants",
   "sound": "p with no puff of air, like the p in 'spin'.",
   "example": {
    "t": "পাখি",
    "tr": "pakhi",
    "mean": "bird"
   }
  },
  {
   "id": "pha",
   "ch": "ফ",
   "name": "pho",
   "say": "ফ",
   "tr": "pho",
   "group": "consonants",
   "sound": "p with a puff of air. Many speakers say it like English f.",
   "example": {
    "t": "ফুল",
    "tr": "phul",
    "mean": "flower"
   }
  },
  {
   "id": "ba",
   "ch": "ব",
   "name": "bo",
   "say": "ব",
   "tr": "bo",
   "group": "consonants",
   "sound": "Like the b in 'boy'.",
   "example": {
    "t": "বই",
    "tr": "boi",
    "mean": "book"
   }
  },
  {
   "id": "bha",
   "ch": "ভ",
   "name": "bho",
   "say": "ভ",
   "tr": "bho",
   "group": "consonants",
   "sound": "A breathy b, like the 'b-h' in 'clubhouse' said quickly. Some speakers say it close to v.",
   "example": {
    "t": "ভাত",
    "tr": "bhat",
    "mean": "cooked rice"
   }
  },
  {
   "id": "ma",
   "ch": "ম",
   "name": "mo",
   "say": "ম",
   "tr": "mo",
   "group": "consonants",
   "sound": "Like the m in 'mother'.",
   "example": {
    "t": "মা",
    "tr": "ma",
    "mean": "mother"
   }
  },
  {
   "id": "ya",
   "ch": "য",
   "name": "ontostho jo",
   "say": "য",
   "tr": "jo",
   "group": "consonants",
   "sound": "Sounds like j in 'jam', just like জ.",
   "example": {
    "t": "যখন",
    "tr": "jokhon",
    "mean": "when"
   }
  },
  {
   "id": "ra",
   "ch": "র",
   "name": "ro",
   "say": "র",
   "tr": "ro",
   "group": "consonants",
   "sound": "A quick tapped r: flick the tongue once against the ridge behind the top teeth.",
   "example": {
    "t": "রুটি",
    "tr": "ruti",
    "mean": "flatbread"
   },
   "tip": "র is ব with a dot below."
  },
  {
   "id": "la",
   "ch": "ল",
   "name": "lo",
   "say": "ল",
   "tr": "lo",
   "group": "consonants",
   "sound": "A clear l, like the l in 'leaf'.",
   "example": {
    "t": "লাল",
    "tr": "lal",
    "mean": "red"
   }
  },
  {
   "id": "sha",
   "ch": "শ",
   "name": "talobbo sho",
   "say": "শ",
   "tr": "sho",
   "group": "consonants",
   "sound": "Like the sh in 'shop'.",
   "example": {
    "t": "শাপলা",
    "tr": "shapla",
    "mean": "water lily"
   }
  },
  {
   "id": "ssha",
   "ch": "ষ",
   "name": "murdhonno sho",
   "say": "ষ",
   "tr": "sho",
   "group": "consonants",
   "sound": "Also 'sh', just like শ. It appears mostly in formal or older words.",
   "example": {
    "t": "ষাঁড়",
    "tr": "shar",
    "mean": "bull"
   }
  },
  {
   "id": "sa",
   "ch": "স",
   "name": "dontto sho",
   "say": "স",
   "tr": "sho",
   "group": "consonants",
   "sound": "Usually 'sh' too. It sounds like s in some clusters, such as স্ত, স্প and স্ক.",
   "example": {
    "t": "সাপ",
    "tr": "shap",
    "mean": "snake"
   }
  },
  {
   "id": "ha",
   "ch": "হ",
   "name": "ho",
   "say": "হ",
   "tr": "ho",
   "group": "consonants",
   "sound": "Like the h in 'house'.",
   "example": {
    "t": "হাতি",
    "tr": "hati",
    "mean": "elephant"
   }
  },
  {
   "id": "ra-dot",
   "ch": "ড়",
   "name": "doye shunno ro",
   "say": "ড়",
   "tr": "ro",
   "group": "consonants",
   "sound": "A flapped r: curl the tongue back, then flick it forward. It never starts a word.",
   "example": {
    "t": "পাহাড়",
    "tr": "pahar",
    "mean": "hill"
   },
   "tip": "ড় is ড with a dot below."
  },
  {
   "id": "rha-dot",
   "ch": "ঢ়",
   "name": "dhoye shunno ro",
   "say": "ঢ়",
   "tr": "rho",
   "group": "consonants",
   "sound": "The flapped ড় with a little breath. Rare, and it never starts a word.",
   "example": {
    "t": "আষাঢ়",
    "tr": "ashar",
    "mean": "Asharh (a month of the Bangla year)"
   }
  },
  {
   "id": "ya-dot",
   "ch": "য়",
   "name": "ontostho o",
   "say": "য়",
   "tr": "y",
   "group": "consonants",
   "sound": "A soft glide like the y in 'yes', or a vowel sound between vowels. It never starts a word.",
   "example": {
    "t": "মেয়ে",
    "tr": "meye",
    "mean": "girl"
   },
   "tip": "য় is য with a dot below."
  },
  {
   "id": "khanda-ta",
   "ch": "ৎ",
   "name": "khondo to",
   "say": "ৎ",
   "tr": "t",
   "group": "signs",
   "sound": "A t with no vowel after it. It only comes at the end of a syllable.",
   "example": {
    "t": "হঠাৎ",
    "tr": "hothat",
    "mean": "suddenly"
   },
   "tip": "Counted as one of the 39 consonants."
  },
  {
   "id": "anusvar",
   "ch": "ং",
   "name": "onushshar",
   "say": "ং",
   "tr": "ng",
   "group": "signs",
   "sound": "Adds 'ng' (as in 'sing') after a vowel.",
   "example": {
    "t": "রং",
    "tr": "rong",
    "mean": "colour"
   },
   "tip": "Counted as one of the 39 consonants."
  },
  {
   "id": "bisarga",
   "ch": "ঃ",
   "name": "bisorgo",
   "say": "ঃ",
   "tr": "h",
   "group": "signs",
   "sound": "Inside a word it doubles the next consonant; at the end of a word it adds a light h.",
   "example": {
    "t": "দুঃখ",
    "tr": "dukkho",
    "mean": "sadness"
   },
   "tip": "Counted as one of the 39 consonants. Do not mix it up with the colon (:)."
  },
  {
   "id": "chandrabindu",
   "ch": "ঁ",
   "name": "chondrobindu",
   "say": "ঁ",
   "tr": "nasal",
   "group": "signs",
   "sound": "Makes the vowel nasal: let air flow through your nose as you say it.",
   "example": {
    "t": "চাঁদ",
    "tr": "chand",
    "mean": "moon"
   },
   "tip": "Its name means 'moon and dot', and that is how it looks."
  },
  {
   "id": "hasanta",
   "ch": "্",
   "name": "hoshonto",
   "say": "্",
   "tr": "no vowel",
   "group": "signs",
   "sound": "Removes the hidden o, so the consonant has no vowel. Usually the letters then join into a conjunct.",
   "example": {
    "t": "শক্ত",
    "tr": "shokto",
    "mean": "hard, strong"
   },
   "tip": "In শক্ত the হসন্ত is hidden inside the joined letters ক্ত (ক্ + ত)."
  },
  {
   "id": "num-0",
   "ch": "০",
   "name": "shunno",
   "say": "শূন্য",
   "tr": "shunno",
   "group": "numerals",
   "sound": "Say শূন্য 'shunno'. The word also means 'empty'.",
   "example": {
    "t": "শূন্য",
    "tr": "shunno",
    "mean": "zero"
   }
  },
  {
   "id": "num-1",
   "ch": "১",
   "name": "ek",
   "say": "এক",
   "tr": "ek",
   "group": "numerals",
   "sound": "Say এক 'ek'; the e is open, close to the 'a' in 'back'.",
   "example": {
    "t": "একটি আম",
    "tr": "ekti am",
    "mean": "one mango"
   }
  },
  {
   "id": "num-2",
   "ch": "২",
   "name": "dui",
   "say": "দুই",
   "tr": "dui",
   "group": "numerals",
   "sound": "Say দুই 'dui', like 'doo-ee'.",
   "example": {
    "t": "দুটি পাখি",
    "tr": "duti pakhi",
    "mean": "two birds"
   }
  },
  {
   "id": "num-3",
   "ch": "৩",
   "name": "tin",
   "say": "তিন",
   "tr": "tin",
   "group": "numerals",
   "sound": "Say তিন 'tin', with the soft teeth-t.",
   "example": {
    "t": "তিনটি ফুল",
    "tr": "tinti phul",
    "mean": "three flowers"
   }
  },
  {
   "id": "num-4",
   "ch": "৪",
   "name": "char",
   "say": "চার",
   "tr": "char",
   "group": "numerals",
   "sound": "Say চার 'char'.",
   "example": {
    "t": "চারটি কলা",
    "tr": "charti kola",
    "mean": "four bananas"
   },
   "tip": "It looks like an English 8, but it means 4!"
  },
  {
   "id": "num-5",
   "ch": "৫",
   "name": "panch",
   "say": "পাঁচ",
   "tr": "panch",
   "group": "numerals",
   "sound": "Say পাঁচ 'panch', with a nasal a.",
   "example": {
    "t": "পাঁচ আঙুল",
    "tr": "panch angul",
    "mean": "five fingers"
   }
  },
  {
   "id": "num-6",
   "ch": "৬",
   "name": "chhoy",
   "say": "ছয়",
   "tr": "chhoy",
   "group": "numerals",
   "sound": "Say ছয় 'chhoy'.",
   "example": {
    "t": "ছয় ঋতু",
    "tr": "chhoy ritu",
    "mean": "six seasons"
   },
   "tip": "Bangladesh has six seasons (ছয় ঋতু)."
  },
  {
   "id": "num-7",
   "ch": "৭",
   "name": "shat",
   "say": "সাত",
   "tr": "shat",
   "group": "numerals",
   "sound": "Say সাত 'shat'.",
   "example": {
    "t": "সাত দিন",
    "tr": "shat din",
    "mean": "seven days"
   }
  },
  {
   "id": "num-8",
   "ch": "৮",
   "name": "at",
   "say": "আট",
   "tr": "at",
   "group": "numerals",
   "sound": "Say আট 'at', with the curled-back t.",
   "example": {
    "t": "আট টাকা",
    "tr": "at taka",
    "mean": "eight taka"
   }
  },
  {
   "id": "num-9",
   "ch": "৯",
   "name": "noy",
   "say": "নয়",
   "tr": "noy",
   "group": "numerals",
   "sound": "Say নয় 'noy', rhyming with 'boy'.",
   "example": {
    "t": "নয়টি ডিম",
    "tr": "noyti dim",
    "mean": "nine eggs"
   }
  }
 ]
};
