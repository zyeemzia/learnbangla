/* Learn Bangla - Unit 1: Bangla Script. Copyright © ZyeemZia */
window.LC = window.LC || { course: null, alphabet: null, units: [] };
LC.units.push({
 "id": "script",
 "order": 1,
 "icon": "অ",
 "color": "teal",
 "title": "Bangla Script",
 "subtitle": "Vowels, consonants, vowel signs, conjuncts and numerals",
 "lessons": [
  {
   "id": "u1-how-script-works",
   "icon": "অ",
   "title": "How Bangla Script Works",
   "subtitle": "Direction, the headline and the hidden vowel",
   "minutes": 10,
   "goals": [
    "Know which way Bangla is written",
    "Spot the মাত্রা (headline)",
    "Understand the hidden vowel অ"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Welcome! Bangla script looks beautiful and a little mysterious at first. Good news: it follows clear rules. Let's see how it works before learning single letters."
    },
    {
     "type": "text",
     "text": "Bangla is written **left to right**, just like English. There are **no capital letters**, so each letter has only one form, even at the start of a name.",
     "title": "Left to right, no capitals"
    },
    {
     "type": "text",
     "text": "Most letters hang from a straight line on top called the {{মাত্রা}} (matra). When letters join into a word, their headlines join too, so the whole word sits under one long line.",
     "title": "The headline"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "কলম",
       "tr": "kolom",
       "mean": "pen"
      },
      {
       "t": "বাবা",
       "tr": "baba",
       "mean": "father"
      },
      {
       "t": "আকাশ",
       "tr": "akash",
       "mean": "sky"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Think of the matra as a washing line: the letters are clothes hanging from it."
    },
    {
     "type": "text",
     "text": "Every consonant carries a built-in vowel sound, {{অ}} (said 'o'). So {{ক}} on its own is 'ko', not just 'k'. For a different vowel you add a small **vowel sign** to the consonant.",
     "title": "The hidden vowel"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "ক",
       "label": "ko",
       "desc": "The consonant alone has the hidden o sound."
      },
      {
       "t": "কা",
       "label": "ka",
       "desc": "Add the sign া and it says 'ka'."
      },
      {
       "t": "কি",
       "label": "ki",
       "desc": "Add the sign ি and it says 'ki'. This sign is written before ক!"
      }
     ]
    },
    {
     "type": "rule",
     "name": "The hidden o often goes quiet",
     "color": "orange",
     "desc": "At the end of a word the hidden o is usually silent. In some words it is said. You learn each word by hearing it.",
     "how": "কলম ends in 'm', but বড় (big) ends in 'ro'.",
     "examples": [
      {
       "t": "কলম",
       "tr": "kolom",
       "hl": "ম"
      },
      {
       "t": "আম",
       "tr": "am",
       "hl": "ম"
      },
      {
       "t": "বড়",
       "tr": "boro",
       "hl": "ড়"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Feature",
      "English",
      "Bangla"
     ],
     "rows": [
      [
       "Direction",
       "Left to right",
       "Left to right"
      ],
      [
       "Capital letters",
       "Yes",
       "No"
      ],
      [
       "Vowels in words",
       "Full letters",
       "Mostly small vowel signs"
      ],
      [
       "Line on top",
       "No",
       "Yes: the {{মাত্রা}}"
      ],
      [
       "Full stop",
       "A dot (.)",
       "An upright line ({{।}})"
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "The Bangla full stop is a small upright line {{।}} called {{দাঁড়ি}} (dari)."
    },
    {
     "type": "practice",
     "text": "Tap each word, listen, and notice the headline running across the top.",
     "lines": [
      "কলম",
      "বাবা",
      "আকাশ",
      "মা",
      "আম"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick check",
     "items": [
      {
       "q": "Which way is Bangla written?",
       "options": [
        "Right to left",
        "Left to right",
        "Top to bottom only"
       ],
       "answer": 1
      },
      {
       "q": "What is the {{মাত্রা}} (matra)?",
       "options": [
        "A dot under a letter",
        "The line on top",
        "A capital letter",
        "The full stop sign"
       ],
       "answer": 1
      },
      {
       "q": "How do you say {{ক}} on its own?",
       "say": "ক",
       "options": [
        "k",
        "ka",
        "ki",
        "ko"
       ],
       "answer": 3
      },
      {
       "q": "Does Bangla have capital letters?",
       "options": [
        "Yes, for names",
        "Only at the start of a sentence",
        "No, never"
       ],
       "answer": 2
      },
      {
       "q": "Which mark is the Bangla full stop?",
       "options": [
        "।",
        ".",
        "ঃ",
        "-"
       ],
       "answer": 0
      },
      {
       "q": "In {{কলম}}, do you say the hidden o after the last letter ম?",
       "options": [
        "No, it is silent",
        "Yes, we say 'kolomo'",
        "Only in poems and songs"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u1-vowels",
   "icon": "আ",
   "title": "The 11 Vowels",
   "subtitle": "স্বরবর্ণ: the vowel letters",
   "minutes": 12,
   "goals": [
    "Recognise all 11 vowel letters",
    "Say each vowel sound",
    "Know when full vowel letters are used"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Bangla has **11 vowel letters** ({{স্বরবর্ণ}}). You use a full vowel letter when a word **starts** with a vowel, or when a vowel follows another vowel."
    },
    {
     "type": "letters",
     "items": [
      "o",
      "aa",
      "i",
      "ii",
      "u",
      "uu",
      "ri",
      "e",
      "oi",
      "oh",
      "ou"
     ]
    },
    {
     "type": "text",
     "text": "{{ই}} / {{ঈ}} and {{উ}} / {{ঊ}} are called 'short' and 'long', but in everyday speech each pair sounds the same. The difference is only in spelling.",
     "title": "Short and long"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "ই",
       "label": "hrosho i",
       "desc": "Short i: sounds like 'ee'."
      },
      {
       "t": "ঈ",
       "label": "dirgho i",
       "desc": "Long i: the same sound today."
      },
      {
       "t": "উ",
       "label": "hrosho u",
       "desc": "Short u: sounds like 'oo'."
      },
      {
       "t": "ঊ",
       "label": "dirgho u",
       "desc": "Long u: the same sound today."
      }
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "অ",
       "label": "o (open)",
       "desc": "Like 'aw' in 'saw', but short."
      },
      {
       "t": "ও",
       "label": "o (closed)",
       "desc": "Like 'o' in 'go', with no 'w' at the end."
      }
     ],
     "title": "Two kinds of o"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "অ and আ are twins: আ is অ plus one extra straight line."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "অনেক",
       "tr": "onek",
       "mean": "many",
       "hl": "অ"
      },
      {
       "t": "আম",
       "tr": "am",
       "mean": "mango",
       "hl": "আ"
      },
      {
       "t": "ইঁদুর",
       "tr": "indur",
       "mean": "mouse",
       "hl": "ই"
      },
      {
       "t": "উট",
       "tr": "ut",
       "mean": "camel",
       "hl": "উ"
      },
      {
       "t": "ঋতু",
       "tr": "ritu",
       "mean": "season",
       "hl": "ঋ"
      },
      {
       "t": "এলাচ",
       "tr": "elach",
       "mean": "cardamom",
       "hl": "এ"
      },
      {
       "t": "ওজন",
       "tr": "ojon",
       "mean": "weight",
       "hl": "ও"
      },
      {
       "t": "ঔষধ",
       "tr": "oushodh",
       "mean": "medicine",
       "hl": "ঔ"
      }
     ],
     "title": "Words that start with a vowel"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "{{ঋ}} is said 'ri'. It is rare and mostly appears in words from Sanskrit, like {{ঋতু}} (season)."
    },
    {
     "type": "practice",
     "text": "Read each line aloud. Tap to check.",
     "lines": [
      "অ আ ই ঈ উ ঊ",
      "ঋ এ ঐ ও ঔ",
      "আম ইঁদুর উট",
      "ঋতু এলাচ ওজন"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick check",
     "items": [
      {
       "q": "Listen. Which vowel do you hear?",
       "say": "আ",
       "options": [
        "আ",
        "অ",
        "ও",
        "এ"
       ],
       "answer": 0
      },
      {
       "q": "How many vowel letters does Bangla have?",
       "options": [
        "26",
        "7",
        "11",
        "50"
       ],
       "answer": 2
      },
      {
       "q": "Which pair sounds the same in everyday speech?",
       "options": [
        "ই and ঈ",
        "অ and আ",
        "এ and ঐ",
        "ও and ঔ"
       ],
       "answer": 0
      },
      {
       "q": "Which vowel is said 'oi', as in 'boy'?",
       "say": "ঐ",
       "options": [
        "ঔ",
        "ঐ",
        "এ",
        "ই"
       ],
       "answer": 1
      },
      {
       "q": "Which word starts with a vowel letter?",
       "options": [
        "উট",
        "কলা",
        "মা",
        "বই"
       ],
       "answer": 0
      },
      {
       "q": "How is {{ঋ}} usually said?",
       "options": [
        "ri",
        "oo",
        "ee",
        "ar"
       ],
       "answer": 0
      },
      {
       "q": "When do you use a full vowel letter like {{আ}}?",
       "options": [
        "After every consonant",
        "Only in the names of people",
        "Only at the end of a sentence",
        "At the start of a word"
       ],
       "answer": 3
      }
     ]
    }
   ]
  },
  {
   "id": "u1-ka-cha-rows",
   "icon": "ক",
   "title": "Consonants 1: ক-row and চ-row",
   "subtitle": "Back of the mouth and roof of the mouth",
   "minutes": 14,
   "goals": [
    "Learn the pattern of a consonant row",
    "Read ক খ গ ঘ ঙ and চ ছ জ ঝ ঞ",
    "Hear the puff of air in aspirated letters"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Consonants ({{ব্যঞ্জনবর্ণ}}) come in neat rows of five called {{বর্গ}} (borgo). Learn the pattern once and you can predict the sounds of a whole row."
    },
    {
     "type": "table",
     "head": [
      "Place",
      "Sound type",
      "ক-row",
      "চ-row"
     ],
     "rows": [
      [
       "1",
       "plain",
       "{{ক}} ko",
       "{{চ}} cho"
      ],
      [
       "2",
       "plain + puff of air",
       "{{খ}} kho",
       "{{ছ}} chho"
      ],
      [
       "3",
       "voiced",
       "{{গ}} go",
       "{{জ}} jo"
      ],
      [
       "4",
       "voiced + breath",
       "{{ঘ}} gho",
       "{{ঝ}} jho"
      ],
      [
       "5",
       "nasal",
       "{{ঙ}} umo",
       "{{ঞ}} inyo"
      ]
     ],
     "title": "The pattern of every row"
    },
    {
     "type": "text",
     "text": "The {{ক}}-row ({{ক-বর্গ}}) is made at the back of the mouth, like English k and g.",
     "title": "ক-বর্গ"
    },
    {
     "type": "letters",
     "items": [
      "ka",
      "kha",
      "ga",
      "gha",
      "nga"
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "ক",
       "label": "ko",
       "desc": "No puff of air: like the k in 'skin'."
      },
      {
       "t": "খ",
       "label": "kho",
       "desc": "A strong puff: like the k in 'kite', with extra breath."
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Hold a tissue in front of your lips. It should stay still for {{ক}} and flutter for {{খ}}."
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{ঙ}} never starts a word. You meet it in the middle or at the end, as in {{ব্যাঙ}} (frog)."
    },
    {
     "type": "text",
     "text": "The {{চ}}-row ({{চ-বর্গ}}) is made with the tongue pressed against the roof of the mouth, close to English ch and j.",
     "title": "চ-বর্গ"
    },
    {
     "type": "letters",
     "items": [
      "cha",
      "chha",
      "ja",
      "jha",
      "nya"
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "{{ঞ}} likes to hide in pairs such as {{ঞ্চ}} and {{ঞ্জ}}, as in {{পঞ্চাশ}} (fifty)."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "কলা",
       "tr": "kola",
       "mean": "banana",
       "hl": "ক"
      },
      {
       "t": "খরগোশ",
       "tr": "khorgosh",
       "mean": "rabbit",
       "hl": "খ"
      },
      {
       "t": "গরু",
       "tr": "goru",
       "mean": "cow",
       "hl": "গ"
      },
      {
       "t": "ঘর",
       "tr": "ghor",
       "mean": "room, house",
       "hl": "ঘ"
      },
      {
       "t": "চা",
       "tr": "cha",
       "mean": "tea",
       "hl": "চ"
      },
      {
       "t": "ছাতা",
       "tr": "chhata",
       "mean": "umbrella",
       "hl": "ছ"
      },
      {
       "t": "জাহাজ",
       "tr": "jahaj",
       "mean": "ship",
       "hl": "জ"
      },
      {
       "t": "ঝড়",
       "tr": "jhor",
       "mean": "storm",
       "hl": "ঝ"
      }
     ]
    },
    {
     "type": "practice",
     "text": "Read the rows, then the words.",
     "lines": [
      "ক খ গ ঘ ঙ",
      "চ ছ জ ঝ ঞ",
      "কলা খরগোশ গরু ঘর",
      "চা ছাতা জাহাজ ঝড়"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick check",
     "items": [
      {
       "q": "Listen. Which letter is it?",
       "say": "খ",
       "options": [
        "ক",
        "গ",
        "ঘ",
        "খ"
       ],
       "answer": 3
      },
      {
       "q": "Which letter has a puff of air?",
       "options": [
        "ছ",
        "চ",
        "জ",
        "ঙ"
       ],
       "answer": 0
      },
      {
       "q": "What does {{চা}} mean?",
       "say": "চা",
       "options": [
        "water",
        "tea",
        "rice",
        "milk"
       ],
       "answer": 1
      },
      {
       "q": "Which letter is the nasal of the ক-row?",
       "options": [
        "ঙ",
        "ঞ",
        "গ",
        "ন"
       ],
       "answer": 0
      },
      {
       "q": "How many letters are in one {{বর্গ}} (row)?",
       "options": [
        "3",
        "4",
        "10",
        "5"
       ],
       "answer": 3
      },
      {
       "q": "{{ঘ}} sounds like…",
       "options": [
        "g + breath, as in 'doghouse'",
        "k with no puff of air, as in 'skin'",
        "'ng' as in 'sing'",
        "'j' as in 'jam'"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u1-ta-rows",
   "icon": "ট",
   "title": "Consonants 2: Two Kinds of T and D",
   "subtitle": "ট-row (tongue curled back) and ত-row (tongue on teeth)",
   "minutes": 15,
   "goals": [
    "Read ট ঠ ড ঢ ণ and ত থ দ ধ ন",
    "Hear curled-back vs teeth sounds",
    "Avoid the English 'th' trap"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "These two rows are the trickiest for English speakers, because Bangla has **two kinds of t and d**. Take it slowly; your ear will learn."
    },
    {
     "type": "text",
     "text": "For the {{ট}}-row ({{ট-বর্গ}}), curl the tip of your tongue back and touch the roof of your mouth behind the gum ridge. English t and d are quite close to these.",
     "title": "Tongue curled back"
    },
    {
     "type": "letters",
     "items": [
      "tta",
      "ttha",
      "dda",
      "ddha",
      "nna"
     ]
    },
    {
     "type": "text",
     "text": "For the {{ত}}-row ({{ত-বর্গ}}), touch the back of your top front teeth with the tip of your tongue. The sound is softer, like t and d in Spanish or French.",
     "title": "Tongue on the teeth"
    },
    {
     "type": "letters",
     "items": [
      "ta",
      "tha",
      "da",
      "dha",
      "na"
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "ট",
       "label": "to (curled)",
       "desc": "Tongue curled back. Close to English t."
      },
      {
       "t": "ত",
       "label": "to (teeth)",
       "desc": "Tongue on the teeth. Softer than English t."
      },
      {
       "t": "ড",
       "label": "do (curled)",
       "desc": "Tongue curled back. Close to English d."
      },
      {
       "t": "দ",
       "label": "do (teeth)",
       "desc": "Tongue on the teeth, like Spanish d."
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{থ}} and {{ধ}} are **not** the 'th' of 'think' or 'this'. They are the soft teeth-t and teeth-d with a puff of breath."
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "{{ণ}} and {{ন}} sound the same today. {{ণ}} is just a spelling letter, as in {{হরিণ}} (deer)."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "টাকা",
       "tr": "taka",
       "mean": "money",
       "hl": "ট"
      },
      {
       "t": "ঠান্ডা",
       "tr": "thanda",
       "mean": "cold",
       "hl": "ঠ"
      },
      {
       "t": "ডিম",
       "tr": "dim",
       "mean": "egg",
       "hl": "ড"
      },
      {
       "t": "ঢাকা",
       "tr": "dhaka",
       "mean": "Dhaka",
       "hl": "ঢ"
      },
      {
       "t": "তারা",
       "tr": "tara",
       "mean": "star",
       "hl": "ত"
      },
      {
       "t": "থালা",
       "tr": "thala",
       "mean": "plate",
       "hl": "থ"
      },
      {
       "t": "দরজা",
       "tr": "dorja",
       "mean": "door",
       "hl": "দ"
      },
      {
       "t": "ধান",
       "tr": "dhan",
       "mean": "rice plant",
       "hl": "ধ"
      },
      {
       "t": "নদী",
       "tr": "nodi",
       "mean": "river",
       "hl": "ন"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "The money of Bangladesh is the taka ({{টাকা}}). Its sign is {{৳}}. Dhaka ({{ঢাকা}}) is the capital."
    },
    {
     "type": "practice",
     "text": "Read in pairs. Feel where your tongue goes.",
     "lines": [
      "ট ত",
      "ড দ",
      "ঠ থ",
      "ঢ ধ",
      "টাকা তারা ডিম দরজা"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick check",
     "items": [
      {
       "q": "Where does your tongue go for {{ত}}?",
       "options": [
        "On the back of the top teeth",
        "Curled back to the roof of the mouth",
        "Down behind the bottom teeth",
        "Between the lips"
       ],
       "answer": 0
      },
      {
       "q": "Which letter is closest to English 'd'?",
       "options": [
        "দ",
        "ড",
        "ধ",
        "ঢ"
       ],
       "answer": 1
      },
      {
       "q": "Listen. Which word do you hear?",
       "say": "ঢাকা",
       "options": [
        "ঢাকা",
        "টাকা",
        "ডাকা",
        "থাকা"
       ],
       "answer": 0
      },
      {
       "q": "Is {{থ}} like the 'th' in 'think'?",
       "options": [
        "Yes, exactly the same",
        "Yes, but a little longer",
        "Only at the end of words",
        "No: it is t with a puff"
       ],
       "answer": 3
      },
      {
       "q": "What does {{নদী}} mean?",
       "say": "নদী",
       "options": [
        "river",
        "door",
        "money",
        "plate"
       ],
       "answer": 0
      },
      {
       "q": "Which two letters sound the same today?",
       "options": [
        "ট and ত",
        "ণ and ন",
        "ড and দ",
        "থ and ঠ"
       ],
       "answer": 1
      }
     ]
    }
   ]
  },
  {
   "id": "u1-pa-row",
   "icon": "প",
   "title": "Consonants 3: প-row, য র ল",
   "subtitle": "Lip sounds and three smooth letters",
   "minutes": 12,
   "goals": [
    "Read প ফ ব ভ ম",
    "Read য র ল",
    "Tell ব and র apart"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "The {{প}}-row ({{প-বর্গ}}) is made with the lips, like English p, b and m. Then come three smooth letters: {{য}}, {{র}} and {{ল}}."
    },
    {
     "type": "letters",
     "items": [
      "pa",
      "pha",
      "ba",
      "bha",
      "ma"
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "প",
       "label": "po",
       "desc": "Lips together, no puff of air."
      },
      {
       "t": "ফ",
       "label": "pho / fo",
       "desc": "With a puff. Many people say it like English f."
      },
      {
       "t": "ব",
       "label": "bo",
       "desc": "Like English b."
      },
      {
       "t": "ভ",
       "label": "bho",
       "desc": "b + breath, like 'clubhouse' said fast."
      }
     ]
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "{{ফুল}} (flower) is said 'phul' or 'ful'. You will hear both in Bangladesh."
    },
    {
     "type": "text",
     "text": "{{য}} sounds like {{জ}} (j). {{র}} is a quick tapped r: flick the tongue once, as in Spanish 'pero'. {{ল}} is like English l, light and clear.",
     "title": "য, র and ল"
    },
    {
     "type": "letters",
     "items": [
      "ya",
      "ra",
      "la"
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "{{র}} is {{ব}} with a dot underneath. Same shape, different letter!"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "পাখি",
       "tr": "pakhi",
       "mean": "bird",
       "hl": "প"
      },
      {
       "t": "ফুল",
       "tr": "phul",
       "mean": "flower",
       "hl": "ফ"
      },
      {
       "t": "বই",
       "tr": "boi",
       "mean": "book",
       "hl": "ব"
      },
      {
       "t": "ভাত",
       "tr": "bhat",
       "mean": "cooked rice",
       "hl": "ভ"
      },
      {
       "t": "মা",
       "tr": "ma",
       "mean": "mother",
       "hl": "ম"
      },
      {
       "t": "যখন",
       "tr": "jokhon",
       "mean": "when",
       "hl": "য"
      },
      {
       "t": "রুটি",
       "tr": "ruti",
       "mean": "flatbread",
       "hl": "র"
      },
      {
       "t": "লাল",
       "tr": "lal",
       "mean": "red",
       "hl": "ল"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Rice ({{ভাত}}) is at the heart of most meals in Bangladesh. An old saying calls Bangalis {{মাছে ভাতে বাঙালি}}: 'fish-and-rice Bengalis'."
    },
    {
     "type": "practice",
     "text": "Read the letters, then the words.",
     "lines": [
      "প ফ ব ভ ম",
      "য র ল",
      "পাখি ফুল বই ভাত",
      "মা যখন রুটি লাল"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick check",
     "items": [
      {
       "q": "Listen. Which word is it?",
       "say": "ভাত",
       "options": [
        "ভাত",
        "বাত",
        "হাত",
        "ভাই"
       ],
       "answer": 0
      },
      {
       "q": "Which letter is ব with a dot below?",
       "options": [
        "ড়",
        "র",
        "য়",
        "ঢ়"
       ],
       "answer": 1
      },
      {
       "q": "{{য}} usually sounds like…",
       "options": [
        "y",
        "z",
        "j",
        "r"
       ],
       "answer": 2
      },
      {
       "q": "What does {{পাখি}} mean?",
       "say": "পাখি",
       "options": [
        "flower",
        "book",
        "rice",
        "bird"
       ],
       "answer": 3
      },
      {
       "q": "Which letter is made with the lips?",
       "options": [
        "ক",
        "ম",
        "ত",
        "চ"
       ],
       "answer": 1
      },
      {
       "q": "How is {{র}} made?",
       "options": [
        "One quick tap of the tongue",
        "Rolled for a long time",
        "Silent, like the r in British 'car'",
        "Like a w, with round lips"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u1-sh-and-dots",
   "icon": "শ",
   "title": "Consonants 4: শ ষ স হ and the Dotted Letters",
   "subtitle": "Three 'sh' letters, হ, ড় ঢ় য়",
   "minutes": 12,
   "goals": [
    "Read শ ষ স হ",
    "Know that স is usually 'sh'",
    "Read the dotted letters ড় ঢ় য়"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Almost there! This lesson covers three 'sh' letters, {{হ}}, and three letters that wear a dot."
    },
    {
     "type": "text",
     "text": "{{শ}}, {{ষ}} and {{স}} are usually all said **'sh'**. {{স}} sounds like 's' mainly in clusters such as {{স্ত}}, as in {{রাস্তা}} (road).",
     "title": "Three letters, one sound"
    },
    {
     "type": "letters",
     "items": [
      "sha",
      "ssha",
      "sa",
      "ha"
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "শ",
       "label": "talobbo sho",
       "desc": "The usual 'sh'. Very common."
      },
      {
       "t": "ষ",
       "label": "murdhonno sho",
       "desc": "Also 'sh'. Mostly in formal or older words."
      },
      {
       "t": "স",
       "label": "dontto sho",
       "desc": "Usually 'sh', but 's' in some clusters."
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Bangla speakers use these names when they spell aloud, so learn them: 'talobbo sho', 'murdhonno sho', 'dontto sho'."
    },
    {
     "type": "text",
     "text": "{{ড়}}, {{ঢ়}} and {{য়}} are {{ড}}, {{ঢ}} and {{য}} with a dot below. They never start a word.",
     "title": "Letters with a dot"
    },
    {
     "type": "letters",
     "items": [
      "ra-dot",
      "rha-dot",
      "ya-dot"
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "ড",
       "label": "do",
       "desc": "Tongue curled back, like English d."
      },
      {
       "t": "ড়",
       "label": "ro (flap)",
       "desc": "Curl the tongue back and flick it forward."
      },
      {
       "t": "য",
       "label": "jo",
       "desc": "Sounds like j."
      },
      {
       "t": "য়",
       "label": "y / o",
       "desc": "A soft glide like y, or a vowel sound."
      }
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "শাপলা",
       "tr": "shapla",
       "mean": "water lily",
       "hl": "শ"
      },
      {
       "t": "ষাঁড়",
       "tr": "shar",
       "mean": "bull",
       "hl": "ষ"
      },
      {
       "t": "সাপ",
       "tr": "shap",
       "mean": "snake",
       "hl": "স"
      },
      {
       "t": "হাতি",
       "tr": "hati",
       "mean": "elephant",
       "hl": "হ"
      },
      {
       "t": "পাহাড়",
       "tr": "pahar",
       "mean": "hill",
       "hl": "ড়"
      },
      {
       "t": "মেয়ে",
       "tr": "meye",
       "mean": "girl",
       "hl": "য়"
      },
      {
       "t": "নয়",
       "tr": "noy",
       "mean": "nine",
       "hl": "য়"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "The {{শাপলা}} (water lily) is the national flower of Bangladesh."
    },
    {
     "type": "practice",
     "text": "Read aloud. Watch the dots!",
     "lines": [
      "শ ষ স হ",
      "ড ড়  ঢ ঢ়  য য়",
      "শাপলা সাপ হাতি",
      "পাহাড় মেয়ে নয়"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick check",
     "items": [
      {
       "q": "How is {{স}} said in {{সাপ}} (snake)?",
       "say": "সাপ",
       "options": [
        "s",
        "z",
        "sh",
        "ch"
       ],
       "answer": 2
      },
      {
       "q": "Which letter has a dot?",
       "options": [
        "য",
        "য়",
        "ব",
        "ঢ"
       ],
       "answer": 1
      },
      {
       "q": "Can {{ড়}} start a word?",
       "options": [
        "No",
        "Yes, often",
        "Only in names"
       ],
       "answer": 0
      },
      {
       "q": "Listen. What does it mean?",
       "say": "হাতি",
       "options": [
        "water lily",
        "elephant",
        "snake",
        "girl"
       ],
       "answer": 1
      },
      {
       "q": "What is the national flower of Bangladesh?",
       "options": [
        "গোলাপ",
        "শিমুল",
        "শাপলা",
        "কদম"
       ],
       "answer": 2
      },
      {
       "q": "{{য়}} in {{মেয়ে}} (girl) sounds like…",
       "options": [
        "a soft y",
        "a hard j",
        "a rolled r",
        "a strong h"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u1-vowel-signs",
   "icon": "কা",
   "title": "Vowel Signs (কার)",
   "subtitle": "How vowels attach to consonants",
   "minutes": 16,
   "goals": [
    "Recognise the 10 vowel signs",
    "Know where each sign sits",
    "Read consonant + vowel sign pairs"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Inside a word, vowels change shape. They become small **vowel signs** called {{কার}} (kar), attached to a consonant. Every vowel except {{অ}} has one."
    },
    {
     "type": "table",
     "head": [
      "Vowel",
      "Sign",
      "Name",
      "Where it goes",
      "Example"
     ],
     "rows": [
      [
       "{{আ}}",
       "{{া}}",
       "{{আ-কার}}",
       "after",
       "{{কা}} ka"
      ],
      [
       "{{ই}}",
       "{{ি}}",
       "{{ই-কার}}",
       "before",
       "{{কি}} ki"
      ],
      [
       "{{ঈ}}",
       "{{ী}}",
       "{{ঈ-কার}}",
       "after",
       "{{কী}} ki"
      ],
      [
       "{{উ}}",
       "{{ু}}",
       "{{উ-কার}}",
       "below",
       "{{কু}} ku"
      ],
      [
       "{{ঊ}}",
       "{{ূ}}",
       "{{ঊ-কার}}",
       "below",
       "{{কূ}} ku"
      ],
      [
       "{{ঋ}}",
       "{{ৃ}}",
       "{{ঋ-কার}}",
       "below",
       "{{কৃ}} kri"
      ],
      [
       "{{এ}}",
       "{{ে}}",
       "{{এ-কার}}",
       "before",
       "{{কে}} ke"
      ],
      [
       "{{ঐ}}",
       "{{ৈ}}",
       "{{ঐ-কার}}",
       "before",
       "{{কৈ}} koi"
      ],
      [
       "{{ও}}",
       "{{ো}}",
       "{{ও-কার}}",
       "both sides",
       "{{কো}} ko"
      ],
      [
       "{{ঔ}}",
       "{{ৌ}}",
       "{{ঔ-কার}}",
       "both sides",
       "{{কৌ}} kou"
      ]
     ]
    },
    {
     "type": "build",
     "base": [
      "ক",
      "ম",
      "ল"
     ],
     "marks": [
      "া",
      "ি",
      "ী",
      "ু",
      "ূ",
      "ৃ",
      "ে",
      "ৈ",
      "ো",
      "ৌ"
     ],
     "labels": [
      "a",
      "i",
      "i",
      "u",
      "u",
      "ri",
      "e",
      "oi",
      "o",
      "ou"
     ],
     "title": "Build the syllables"
    },
    {
     "type": "rule",
     "name": "ি, ে and ৈ go first",
     "color": "red",
     "desc": "These three signs are written **before** the consonant, but you say them **after** it.",
     "how": "Read the consonant first, then the vowel: {{নি}} = n + i = 'ni'.",
     "examples": [
      {
       "t": "পানি",
       "tr": "pani",
       "hl": "নি"
      },
      {
       "t": "মেঘ",
       "tr": "megh",
       "hl": "মে"
      },
      {
       "t": "বৈশাখ",
       "tr": "boishakh",
       "hl": "বৈ"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "{{ো}} hugs the consonant: {{ে}} on the left, {{া}} on the right. {{কো}} = 'ko'."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "দুধ",
       "tr": "dudh",
       "mean": "milk",
       "hl": "দু"
      },
      {
       "t": "ভূত",
       "tr": "bhut",
       "mean": "ghost",
       "hl": "ভূ"
      },
      {
       "t": "কৃষক",
       "tr": "krishok",
       "mean": "farmer",
       "hl": "কৃ"
      },
      {
       "t": "দোকান",
       "tr": "dokan",
       "mean": "shop",
       "hl": "দো"
      },
      {
       "t": "মৌমাছি",
       "tr": "moumachhi",
       "mean": "bee",
       "hl": "মৌ"
      },
      {
       "t": "নদী",
       "tr": "nodi",
       "mean": "river",
       "hl": "দী"
      },
      {
       "t": "বিড়াল",
       "tr": "biral",
       "mean": "cat",
       "hl": "বি"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "A few pairs change shape: {{রু}} (ru), {{রূ}} (ru), {{শু}} (shu), {{হু}} (hu), {{গু}} (gu) and {{হৃ}} (hri). Look carefully when you meet them.",
     "title": "Special shapes"
    },
    {
     "type": "practice",
     "text": "Read each line aloud.",
     "lines": [
      "কা কি কী কু কূ কৃ কে কৈ কো কৌ",
      "মা মি মু মে মো",
      "পানি দুধ মেঘ",
      "দোকান মৌমাছি বিড়াল"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick check",
     "items": [
      {
       "q": "Where is {{ি}} written?",
       "options": [
        "Before the consonant",
        "After the consonant, on the right",
        "Under the consonant",
        "Above the headline"
       ],
       "answer": 0
      },
      {
       "q": "Listen and choose.",
       "say": "মে",
       "options": [
        "মে",
        "মা",
        "মি",
        "মো"
       ],
       "answer": 0
      },
      {
       "q": "How do you read {{কু}}?",
       "say": "কু",
       "options": [
        "ki",
        "ku",
        "ko",
        "ke"
       ],
       "answer": 1
      },
      {
       "q": "Which sign is {{আ-কার}}?",
       "options": [
        "ি",
        "ু",
        "ে",
        "া"
       ],
       "answer": 3
      },
      {
       "q": "{{কো}} is {{ক}} plus…",
       "options": [
        "two া signs, one each side",
        "ু below it and া after it",
        "ি and ী",
        "ে and া around it"
       ],
       "answer": 3
      },
      {
       "q": "What does {{দোকান}} mean?",
       "say": "দোকান",
       "options": [
        "milk",
        "bee",
        "shop",
        "ghost"
       ],
       "answer": 2
      },
      {
       "q": "In {{পানি}}, which vowel sound comes last?",
       "options": [
        "a",
        "o",
        "e",
        "i"
       ],
       "answer": 3
      }
     ]
    }
   ]
  },
  {
   "id": "u1-special-signs",
   "icon": "ং",
   "title": "Special Signs: ্ ং ঃ ঁ ৎ",
   "subtitle": "Five small signs with big jobs",
   "minutes": 12,
   "goals": [
    "Recognise হসন্ত, অনুস্বার, বিসর্গ, চন্দ্রবিন্দু and খণ্ড ত",
    "Know what sound each one makes"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Five small signs do big jobs. They are easy to spot once you know them."
    },
    {
     "type": "letters",
     "items": [
      "hasanta",
      "anusvar",
      "bisarga",
      "chandrabindu",
      "khanda-ta"
     ]
    },
    {
     "type": "table",
     "head": [
      "Sign",
      "Name",
      "What it does",
      "Example"
     ],
     "rows": [
      [
       "{{্}}",
       "{{হসন্ত}} hoshonto",
       "Removes the hidden vowel",
       "{{ক্}} k (no o)"
      ],
      [
       "{{ং}}",
       "{{অনুস্বার}} onushshar",
       "Adds 'ng'",
       "{{রং}} rong"
      ],
      [
       "{{ঃ}}",
       "{{বিসর্গ}} bisorgo",
       "Doubles the next consonant, or adds a light h",
       "{{দুঃখ}} dukkho"
      ],
      [
       "{{ঁ}}",
       "{{চন্দ্রবিন্দু}} chondrobindu",
       "Makes the vowel nasal",
       "{{চাঁদ}} chand"
      ],
      [
       "{{ৎ}}",
       "{{খণ্ড ত}} khondo to",
       "A t with no vowel after it",
       "{{হঠাৎ}} hothat"
      ]
     ]
    },
    {
     "type": "text",
     "text": "The {{হসন্ত}} is a small slanted stroke under a letter. It says: 'no vowel here'. Usually the two letters **join** into a conjunct instead, so you rarely see the হসন্ত itself.",
     "title": "হসন্ত and joining"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "ক্ + ত = ক্ত",
       "tr": "k + to = kto"
      },
      {
       "t": "শক্ত",
       "tr": "shokto",
       "mean": "hard, strong",
       "hl": "ক্ত"
      }
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "ং",
       "label": "ng (sign)",
       "desc": "Adds 'ng' after a vowel: রং, বাংলা."
      },
      {
       "t": "ঙ",
       "label": "ng (letter)",
       "desc": "A full letter that can join others: ব্যাঙ, সঙ্গে."
      }
     ],
     "title": "Same sound, two shapes"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "কাদা",
       "label": "kada",
       "desc": "mud"
      },
      {
       "t": "কাঁদা",
       "label": "kanda",
       "desc": "to cry: the ঁ makes the 'a' nasal"
      }
     ],
     "title": "One small sign, a new word"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "{{চন্দ্রবিন্দু}} means 'moon and dot'. Look: {{ঁ}} is a little moon with a dot!"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "বাংলা",
       "tr": "bangla",
       "mean": "Bangla",
       "hl": "ং"
      },
      {
       "t": "সংখ্যা",
       "tr": "shongkha",
       "mean": "number",
       "hl": "ং"
      },
      {
       "t": "দুঃখ",
       "tr": "dukkho",
       "mean": "sadness",
       "hl": "ঃ"
      },
      {
       "t": "চাঁদ",
       "tr": "chand",
       "mean": "moon",
       "hl": "ঁ"
      },
      {
       "t": "হঠাৎ",
       "tr": "hothat",
       "mean": "suddenly",
       "hl": "ৎ"
      },
      {
       "t": "উৎসব",
       "tr": "utshob",
       "mean": "festival",
       "hl": "ৎ"
      }
     ]
    },
    {
     "type": "practice",
     "text": "Find the special sign in each word, then read it.",
     "lines": [
      "রং বাংলা সংখ্যা",
      "দুঃখ চাঁদ",
      "হঠাৎ উৎসব",
      "কাদা কাঁদা"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick check",
     "items": [
      {
       "q": "Which sign makes a vowel nasal?",
       "options": [
        "ং",
        "ঃ",
        "্",
        "ঁ"
       ],
       "answer": 3
      },
      {
       "q": "What does {{ং}} add?",
       "options": [
        "h",
        "t",
        "ng",
        "a nasal vowel"
       ],
       "answer": 2
      },
      {
       "q": "Listen. Which word is it?",
       "say": "চাঁদ",
       "options": [
        "ছাদ",
        "চাঁপা",
        "চাঁদ",
        "চাল"
       ],
       "answer": 2
      },
      {
       "q": "What does {{ৎ}} stand for?",
       "options": [
        "a long a sound",
        "t with no vowel after it",
        "the letter ত with a hidden o",
        "a nasal sound"
       ],
       "answer": 1
      },
      {
       "q": "In {{দুঃখ}} (dukkho), what does {{ঃ}} do?",
       "options": [
        "Adds a strong 'h' sound",
        "Doubles the k sound",
        "Makes the u nasal",
        "Ends the sentence"
       ],
       "answer": 1
      },
      {
       "q": "What does {{কাঁদা}} mean?",
       "say": "কাঁদা",
       "options": [
        "mud",
        "to cry",
        "moon",
        "to laugh"
       ],
       "answer": 1
      },
      {
       "q": "What is {{্}} called?",
       "options": [
        "হসন্ত",
        "মাত্রা",
        "কার",
        "দাঁড়ি"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u1-conjuncts",
   "icon": "ক্ষ",
   "title": "Conjuncts (যুক্তবর্ণ)",
   "subtitle": "When consonants join together",
   "minutes": 18,
   "goals": [
    "Read common conjuncts",
    "Recognise র-ফলা, য-ফলা and রেফ",
    "Know that some conjuncts change their sound"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "When two consonants meet with **no vowel between them**, Bangla often joins them into one shape: a {{যুক্তবর্ণ}} (conjunct). Some are easy to see through; some are new shapes to learn."
    },
    {
     "type": "table",
     "head": [
      "Conjunct",
      "Made of",
      "Example",
      "Meaning"
     ],
     "rows": [
      [
       "{{ক্ষ}}",
       "{{ক}} + {{ষ}}",
       "{{শিক্ষা}} shikkha",
       "education"
      ],
      [
       "{{জ্ঞ}}",
       "{{জ}} + {{ঞ}}",
       "{{জ্ঞান}} gyan",
       "knowledge"
      ],
      [
       "{{ঙ্গ}}",
       "{{ঙ}} + {{গ}}",
       "{{সঙ্গে}} shonge",
       "with"
      ],
      [
       "{{ন্ত}}",
       "{{ন}} + {{ত}}",
       "{{শান্ত}} shanto",
       "calm"
      ],
      [
       "{{স্ত}}",
       "{{স}} + {{ত}}",
       "{{রাস্তা}} rasta",
       "road"
      ],
      [
       "{{ন্দ}}",
       "{{ন}} + {{দ}}",
       "{{সুন্দর}} shundor",
       "beautiful"
      ],
      [
       "{{ক্ত}}",
       "{{ক}} + {{ত}}",
       "{{রক্ত}} rokto",
       "blood"
      ],
      [
       "{{ষ্ট}}",
       "{{ষ}} + {{ট}}",
       "{{মিষ্টি}} mishti",
       "sweet"
      ],
      [
       "{{ল্প}}",
       "{{ল}} + {{প}}",
       "{{গল্প}} golpo",
       "story"
      ],
      [
       "{{চ্চ}}",
       "{{চ}} + {{চ}}",
       "{{বাচ্চা}} bachcha",
       "child"
      ]
     ],
     "title": "Common conjuncts"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{ক্ষ}} is said 'kh' at the start of a word ({{ক্ষমা}}, khoma, forgiveness) and 'kkh' in the middle ({{শিক্ষা}}). {{জ্ঞ}} is said 'gy' at the start ({{জ্ঞান}}) and 'gg' in the middle ({{বিজ্ঞান}}, biggan, science)."
    },
    {
     "type": "text",
     "text": "Three letters turn into small marks when they join others.",
     "title": "Three special helpers"
    },
    {
     "type": "rule",
     "name": "র-ফলা ( ্র )",
     "color": "blue",
     "desc": "An r **after** a consonant becomes a small slanted stroke at its foot.",
     "how": "প্রথম = প + র + থ + ম: 'prothom' (first).",
     "examples": [
      {
       "t": "প্রথম",
       "tr": "prothom",
       "hl": "প্র"
      },
      {
       "t": "গ্রাম",
       "tr": "gram",
       "hl": "গ্র"
      },
      {
       "t": "ট্রেন",
       "tr": "tren",
       "hl": "ট্রে"
      }
     ]
    },
    {
     "type": "rule",
     "name": "য-ফলা ( ্য )",
     "color": "purple",
     "desc": "A য **after** a consonant becomes a small zigzag on the right. After the first letter with া it makes the 'a' of 'bag'; in the middle of a word it doubles the consonant.",
     "examples": [
      {
       "t": "ব্যাগ",
       "tr": "bag",
       "hl": "ব্যা"
      },
      {
       "t": "সত্য",
       "tr": "shotto",
       "hl": "ত্য"
      },
      {
       "t": "বিদ্যা",
       "tr": "biddya",
       "hl": "দ্যা"
      }
     ]
    },
    {
     "type": "rule",
     "name": "রেফ ( র্ )",
     "color": "green",
     "desc": "An r **before** a consonant becomes a small hook on top of the next letter, above the headline. Say the r first.",
     "examples": [
      {
       "t": "সূর্য",
       "tr": "shurjo",
       "hl": "র্য"
      },
      {
       "t": "বর্ষা",
       "tr": "borsha",
       "hl": "র্ষ"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "The great river {{পদ্মা}} is said 'podda', not 'podma'. Some conjuncts change their sound, so listen to every new word."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "ক্ষমা",
       "tr": "khoma",
       "mean": "forgiveness",
       "hl": "ক্ষ"
      },
      {
       "t": "বিজ্ঞান",
       "tr": "biggan",
       "mean": "science",
       "hl": "জ্ঞ"
      },
      {
       "t": "বন্ধু",
       "tr": "bondhu",
       "mean": "friend",
       "hl": "ন্ধ"
      },
      {
       "t": "ছাত্র",
       "tr": "chhatro",
       "mean": "student",
       "hl": "ত্র"
      },
      {
       "t": "বিশ্ব",
       "tr": "bishsho",
       "mean": "world",
       "hl": "শ্ব"
      }
     ],
     "title": "More words"
    },
    {
     "type": "practice",
     "text": "Find the conjunct, then read the word.",
     "lines": [
      "শিক্ষা জ্ঞান সঙ্গে",
      "শান্ত রাস্তা সুন্দর",
      "প্রথম গ্রাম ট্রেন",
      "ব্যাগ সত্য সূর্য বর্ষা"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick check",
     "items": [
      {
       "q": "What is a {{যুক্তবর্ণ}}?",
       "options": [
        "A vowel sign",
        "A letter with a dot",
        "Two consonants joined",
        "A word with no vowels at all"
       ],
       "answer": 2
      },
      {
       "q": "{{ক্ষ}} is made of…",
       "options": [
        "ক + স",
        "খ + ষ",
        "ক + শ",
        "ক + ষ"
       ],
       "answer": 3
      },
      {
       "q": "Listen. Which word is it?",
       "say": "প্রথম",
       "options": [
        "পরথম",
        "প্রথা",
        "প্রথম",
        "পথম"
       ],
       "answer": 2
      },
      {
       "q": "Where does রেফ ( র্ ) appear?",
       "options": [
        "At the bottom, as a slanted stroke",
        "On the right, as a zigzag",
        "Before the word",
        "On top, above the headline"
       ],
       "answer": 3
      },
      {
       "q": "How is {{পদ্মা}} said?",
       "say": "পদ্মা",
       "options": [
        "podma",
        "padma",
        "podda",
        "pomda"
       ],
       "answer": 2
      },
      {
       "q": "What does {{বন্ধু}} mean?",
       "say": "বন্ধু",
       "options": [
        "friend",
        "student",
        "road",
        "story"
       ],
       "answer": 0
      },
      {
       "q": "Which word has a য-ফলা?",
       "options": [
        "ব্যাগ",
        "গ্রাম",
        "শিক্ষা",
        "গল্প"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u1-numerals",
   "icon": "১",
   "title": "Bangla Numerals",
   "subtitle": "০ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯",
   "minutes": 10,
   "goals": [
    "Read the digits ০ to ৯",
    "Say the numbers 0 to 10",
    "Read prices and dates"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Bangladesh uses its own digits on signs, prices, calendars and buses. They work exactly like 0–9: same place values, new shapes."
    },
    {
     "type": "letters",
     "items": [
      "num-0",
      "num-1",
      "num-2",
      "num-3",
      "num-4",
      "num-5",
      "num-6",
      "num-7",
      "num-8",
      "num-9"
     ]
    },
    {
     "type": "table",
     "head": [
      "Digit",
      "Word",
      "Say",
      "Value"
     ],
     "rows": [
      [
       "{{০}}",
       "{{শূন্য}}",
       "shunno",
       "0"
      ],
      [
       "{{১}}",
       "{{এক}}",
       "ek",
       "1"
      ],
      [
       "{{২}}",
       "{{দুই}}",
       "dui",
       "2"
      ],
      [
       "{{৩}}",
       "{{তিন}}",
       "tin",
       "3"
      ],
      [
       "{{৪}}",
       "{{চার}}",
       "char",
       "4"
      ],
      [
       "{{৫}}",
       "{{পাঁচ}}",
       "panch",
       "5"
      ],
      [
       "{{৬}}",
       "{{ছয়}}",
       "chhoy",
       "6"
      ],
      [
       "{{৭}}",
       "{{সাত}}",
       "shat",
       "7"
      ],
      [
       "{{৮}}",
       "{{আট}}",
       "at",
       "8"
      ],
      [
       "{{৯}}",
       "{{নয়}}",
       "noy",
       "9"
      ],
      [
       "{{১০}}",
       "{{দশ}}",
       "dosh",
       "10"
      ]
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "৪",
       "label": "4, not 8!",
       "desc": "Looks like an English 8 but means four."
      },
      {
       "t": "৮",
       "label": "8",
       "desc": "This is the Bangla eight."
      }
     ],
     "title": "Don't be fooled"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "৫০ টাকা",
       "tr": "ponchash taka",
       "mean": "50 taka"
      },
      {
       "t": "১৯৭১",
       "tr": "unish sho ekattor",
       "mean": "1971, the year of Bangladesh's independence"
      },
      {
       "t": "২১ ফেব্রুয়ারি",
       "tr": "ekushe februari",
       "mean": "21 February",
       "note": "Read aloud as একুশে ফেব্রুয়ারি."
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "21 February ({{একুশে ফেব্রুয়ারি}}) honours the people who gave their lives for the Bangla language in 1952. UNESCO made it International Mother Language Day."
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "From 11 to 99, Bangla has a separate word for every number (21 is {{একুশ}}). Learn 1–10 first; the rest come step by step."
    },
    {
     "type": "practice",
     "text": "Read the digits and numbers aloud.",
     "lines": [
      "০ ১ ২ ৩ ৪",
      "৫ ৬ ৭ ৮ ৯",
      "১০ ২০ ৫০ ১০০"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick check",
     "items": [
      {
       "q": "What is {{৪}}?",
       "options": [
        "8",
        "7",
        "9",
        "4"
       ],
       "answer": 3
      },
      {
       "q": "Listen. Which digit is it?",
       "say": "সাত",
       "options": [
        "৯",
        "৭",
        "১",
        "৬"
       ],
       "answer": 1
      },
      {
       "q": "How do you say {{৫}}?",
       "options": [
        "চার",
        "ছয়",
        "পাঁচ",
        "পঞ্চাশ"
       ],
       "answer": 2
      },
      {
       "q": "Which is 10?",
       "options": [
        "১",
        "১০",
        "০১",
        "১০০"
       ],
       "answer": 1
      },
      {
       "q": "Read: {{৩}} + {{২}} = ?",
       "options": [
        "৬",
        "৪",
        "৮",
        "৫"
       ],
       "answer": 3
      },
      {
       "q": "What price is {{৮০ টাকা}}?",
       "options": [
        "40 taka",
        "8 taka",
        "800 taka",
        "80 taka"
       ],
       "answer": 3
      }
     ]
    }
   ]
  },
  {
   "id": "u1-reading-lab",
   "icon": "পড়",
   "title": "Reading Lab",
   "subtitle": "Put it all together: words and short sentences",
   "minutes": 15,
   "goals": [
    "Read new words step by step",
    "Read two short sentences",
    "Meet some famous Bangladeshi words"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Time to put it all together! Read slowly: consonant, vowel sign, next consonant. Tap any word to check yourself."
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Find the consonants",
       "desc": "Spot each consonant or conjunct from left to right."
      },
      {
       "title": "Add the vowel signs",
       "desc": "Remember: ি, ে and ৈ sit in front but are said after."
      },
      {
       "title": "Check the small signs",
       "desc": "Look for ং, ঃ, ঁ, ৎ and dots."
      },
      {
       "title": "Say it smoothly",
       "t": "বিড়াল",
       "tr": "biral",
       "mean": "cat",
       "desc": "Blend the syllables into one word."
      }
     ],
     "title": "How to read a new word"
    },
    {
     "type": "practice",
     "text": "Word ladders: each line grows one step.",
     "lines": [
      "ক কা কাক",
      "ম মা মাছ",
      "ব বা বাঘ",
      "প পা পাখি"
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "বাংলাদেশ",
       "tr": "bangladesh",
       "mean": "Bangladesh"
      },
      {
       "t": "ঢাকা",
       "tr": "dhaka",
       "mean": "Dhaka"
      },
      {
       "t": "পদ্মা",
       "tr": "podda",
       "mean": "the Padma river"
      },
      {
       "t": "ইলিশ",
       "tr": "ilish",
       "mean": "hilsa fish"
      },
      {
       "t": "রিকশা",
       "tr": "riksha",
       "mean": "rickshaw"
      },
      {
       "t": "বৈশাখ",
       "tr": "boishakh",
       "mean": "Boishakh, the first month of the Bangla year"
      }
     ],
     "title": "Famous words"
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "The {{ইলিশ}} (hilsa) is the national fish of Bangladesh, and the Royal Bengal tiger ({{বাঘ}}) is the national animal."
    },
    {
     "type": "sentence",
     "t": "আমি বাংলা শিখি।",
     "tr": "ami bangla shikhi",
     "mean": "I learn Bangla.",
     "words": [
      {
       "t": "আমি",
       "mean": "I"
      },
      {
       "t": "বাংলা",
       "mean": "Bangla"
      },
      {
       "t": "শিখি",
       "mean": "learn"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "এটা আমার বই।",
     "tr": "eta amar boi",
     "mean": "This is my book.",
     "words": [
      {
       "t": "এটা",
       "mean": "this"
      },
      {
       "t": "আমার",
       "mean": "my"
      },
      {
       "t": "বই",
       "mean": "book"
      }
     ],
     "note": "Bangla needs no word for 'is' in a sentence like this one."
    },
    {
     "type": "practice",
     "text": "Read these short sentences.",
     "lines": [
      "আমি বাংলা শিখি।",
      "এটা আমার বই।",
      "পাখি গান গায়।",
      "মা ভাত রান্না করে।"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick check",
     "items": [
      {
       "q": "Listen. Which word is it?",
       "say": "বাঘ",
       "options": [
        "বাঘ",
        "বাগ",
        "ভাগ",
        "বাঁশ"
       ],
       "answer": 0
      },
      {
       "q": "How do you read {{মাছ}}?",
       "say": "মাছ",
       "options": [
        "machh",
        "moch",
        "michh",
        "mach-o"
       ],
       "answer": 0
      },
      {
       "q": "What does {{আমি}} mean?",
       "say": "আমি",
       "options": [
        "you",
        "we",
        "I",
        "my"
       ],
       "answer": 2
      },
      {
       "q": "Which word means 'cat'?",
       "options": [
        "মৌমাছি",
        "কাক",
        "বিড়াল",
        "পাখি"
       ],
       "answer": 2
      },
      {
       "q": "In {{পদ্মা}}, how is {{দ্ম}} said?",
       "options": [
        "dm",
        "md",
        "dd",
        "m"
       ],
       "answer": 2
      },
      {
       "q": "How do you read {{রিকশা}}?",
       "say": "রিকশা",
       "options": [
        "rikosha",
        "rekasha",
        "roksha",
        "riksha"
       ],
       "answer": 3
      },
      {
       "q": "What is the national fish of Bangladesh?",
       "options": [
        "রুই",
        "চিংড়ি",
        "কই",
        "ইলিশ"
       ],
       "answer": 3
      }
     ]
    }
   ]
  }
 ]
});
