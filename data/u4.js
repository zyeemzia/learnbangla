/* Learn Bangla - Unit 4. Copyright © ZyeemZia */
window.LC = window.LC || { course: null, alphabet: null, units: [] };
LC.units.push({
 "id": "grammar",
 "order": 4,
 "icon": "আমি",
 "color": "indigo",
 "title": "Grammar Made Easy",
 "subtitle": "Word order, respect, tenses, questions and the little endings that hold Bangla together",
 "lessons": [
  {
   "id": "u4-word-order",
   "icon": "ক্রিয়া",
   "title": "Word Order: Verb Last",
   "subtitle": "Subject, object, verb",
   "minutes": 12,
   "goals": [
    "Put the verb at the end of a sentence",
    "Use “after-words” (postpositions) instead of prepositions",
    "Build simple sentences of your own"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Here is the biggest secret of Bangla grammar: **the verb goes last**. English says “I eat rice”. Bangla says “I rice eat”. Once this clicks, everything else is easier!"
    },
    {
     "type": "rule",
     "name": "Subject + Object + Verb",
     "color": "green",
     "desc": "Who does it, then what, then the action at the very end.",
     "examples": [
      {
       "t": "আমি ভাত খাই।",
       "tr": "ami bhat khai",
       "mean": "I eat rice.",
       "hl": "খাই"
      },
      {
       "t": "সারা বই পড়ে।",
       "tr": "shara boi pore",
       "mean": "Sara reads books.",
       "hl": "পড়ে"
      },
      {
       "t": "রাফি ফুটবল খেলে।",
       "tr": "rafi futbol khele",
       "mean": "Rafi plays football.",
       "hl": "খেলে"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "আমি ভাত খাই।",
     "tr": "ami bhat khai",
     "mean": "I eat rice.",
     "words": [
      {
       "t": "আমি",
       "mean": "I"
      },
      {
       "t": "ভাত",
       "mean": "rice"
      },
      {
       "t": "খাই",
       "mean": "eat"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Imagine every Bangla sentence as a little train: the **verb is the last carriage**. Who? What? Where? When? can join in the middle, but the verb always pulls in at the back."
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Start with who",
       "t": "আমি",
       "tr": "ami",
       "mean": "I"
      },
      {
       "title": "Add when",
       "t": "আমি প্রতিদিন",
       "tr": "ami protidin",
       "mean": "I every day"
      },
      {
       "title": "Add where",
       "t": "আমি প্রতিদিন স্কুলে",
       "tr": "ami protidin skule",
       "mean": "I every day to school"
      },
      {
       "title": "Finish with the verb",
       "t": "আমি প্রতিদিন স্কুলে যাই।",
       "tr": "ami protidin skule jai",
       "mean": "I go to school every day."
      }
     ],
     "title": "Build a sentence step by step"
    },
    {
     "type": "sentence",
     "t": "রাফি তার বোনকে একটা বই দিল।",
     "tr": "rafi tar bonke ekta boi dilo",
     "mean": "Rafi gave his sister a book.",
     "words": [
      {
       "t": "রাফি",
       "mean": "Rafi"
      },
      {
       "t": "তার",
       "mean": "his"
      },
      {
       "t": "বোনকে",
       "mean": "to sister"
      },
      {
       "t": "একটা",
       "mean": "a"
      },
      {
       "t": "বই",
       "mean": "book"
      },
      {
       "t": "দিল",
       "mean": "gave"
      }
     ]
    },
    {
     "type": "rule",
     "name": "After-words, not before-words",
     "color": "blue",
     "desc": "English has prepositions (**in** Dhaka, **with** me). Bangla puts these words **after** the noun: postpositions.",
     "examples": [
      {
       "t": "ঢাকা থেকে",
       "tr": "dhaka theke",
       "mean": "from Dhaka",
       "hl": "থেকে"
      },
      {
       "t": "আমার সাথে",
       "tr": "amar shathe",
       "mean": "with me",
       "hl": "সাথে"
      },
      {
       "t": "বাড়ির দিকে",
       "tr": "barir dike",
       "mean": "towards the house",
       "hl": "দিকে"
      },
      {
       "t": "স্কুলের পরে",
       "tr": "skuler pore",
       "mean": "after school",
       "hl": "পরে"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Bangla word order is quite flexible because the endings show who does what. But a beginner can never go wrong with: **who + when + where + what + verb**."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "তুমি কী খাও?",
       "tr": "tumi ki khao?",
       "mean": "What do you eat?",
       "note": "question word stays in the middle"
      },
      {
       "t": "আমি আমার নানির সাথে থাকি।",
       "tr": "ami amar nanir shathe thaki",
       "mean": "I live with my grandmother."
      },
      {
       "t": "বাবা সকালে অফিসে যান।",
       "tr": "baba shokale ofishe jan",
       "mean": "Dad goes to the office in the morning."
      }
     ]
    },
    {
     "type": "practice",
     "text": "Read aloud. Notice that each sentence ends with the verb.",
     "lines": [
      "আমি ভাত খাই।",
      "সারা বই পড়ে।",
      "আমি প্রতিদিন স্কুলে যাই।",
      "বাবা সকালে অফিসে যান।",
      "আমি ঢাকা থেকে এসেছি।"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "Where does the verb usually go in a Bangla sentence?",
       "options": [
        "at the start",
        "after the subject",
        "at the end",
        "anywhere at all"
       ],
       "answer": 2
      },
      {
       "q": "Which is the correct way to say “I eat rice”?",
       "options": [
        "আমি ভাত খাই।",
        "আমি খাই ভাত।",
        "খাই আমি ভাত।",
        "ভাত খাই আমি না।"
       ],
       "answer": 0
      },
      {
       "q": "“From Dhaka” in Bangla is…",
       "options": [
        "থেকে ঢাকা",
        "ঢাকা থেকে",
        "ঢাকার থেকেই",
        "থেকে ঢাকার"
       ],
       "answer": 1,
       "explain": "{{থেকে}} comes after the place."
      },
      {
       "q": "Listen. What does it mean?",
       "say": "সারা বই পড়ে।",
       "options": [
        "Sara buys books.",
        "The book is Sara's.",
        "Sara doesn't read.",
        "Sara reads books."
       ],
       "answer": 3
      },
      {
       "q": "Which word is the verb in {{রাফি ফুটবল খেলে}}?",
       "options": [
        "রাফি",
        "ফুটবল",
        "none of them",
        "খেলে"
       ],
       "answer": 3
      },
      {
       "q": "How do you say “with me”?",
       "options": [
        "সাথে আমি",
        "আমার সাথে",
        "আমি সাথে",
        "সাথে আমার"
       ],
       "answer": 1
      },
      {
       "q": "Listen. Where does Dad go in the morning?",
       "say": "বাবা সকালে অফিসে যান।",
       "options": [
        "to the market",
        "to school",
        "to the office",
        "to the mosque"
       ],
       "answer": 2
      }
     ]
    }
   ]
  },
  {
   "id": "u4-pronouns",
   "icon": "তুমি",
   "title": "Pronouns & Three Levels of Respect",
   "subtitle": "তুই, তুমি and আপনি",
   "minutes": 15,
   "goals": [
    "Know the Bangla pronouns",
    "Choose between তুই, তুমি and আপনি",
    "Match the verb ending to the level of respect"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "English has just one “you”. Bangla has **three**, from very close to very polite. Choosing the right one shows respect, and Bangladeshis notice!"
    },
    {
     "type": "table",
     "head": [
      "",
      "One person",
      "More than one"
     ],
     "rows": [
      [
       "I / we",
       "{{আমি}} ami",
       "{{আমরা}} amra"
      ],
      [
       "you (intimate)",
       "{{তুই}} tui",
       "{{তোরা}} tora"
      ],
      [
       "you (familiar)",
       "{{তুমি}} tumi",
       "{{তোমরা}} tomra"
      ],
      [
       "you (polite)",
       "{{আপনি}} apni",
       "{{আপনারা}} apnara"
      ],
      [
       "he / she",
       "{{সে}} she",
       "{{তারা}} tara"
      ],
      [
       "he / she (respectful)",
       "{{তিনি}} tini, {{উনি}} uni",
       "{{তাঁরা}} tara, {{ওনারা}} onara"
      ]
     ],
     "title": "The pronouns"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "তুই",
       "label": "Very close",
       "desc": "Best friends of the same age, little children, sometimes brothers and sisters. With anyone else it sounds rude!"
      },
      {
       "t": "তুমি",
       "label": "Friendly",
       "desc": "Friends, classmates, younger people, and in many families, parents. Warm and normal."
      },
      {
       "t": "আপনি",
       "label": "Polite",
       "desc": "Strangers, elders, teachers, shopkeepers, anyone you are not sure about."
      }
     ],
     "title": "Which “you”?"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "When in doubt, use {{আপনি}}. Being too polite is never a problem. Calling a stranger {{তুই}} can cause real offence."
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "In many families children say {{তুমি}} to their parents; in some more traditional families they use {{আপনি}}, especially with the father. Grandparents often call grandchildren {{তুই}} with love."
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "Bangla pronouns have **no gender**. {{সে}} means “he” **or** “she”. Easy!"
    },
    {
     "type": "text",
     "text": "Each “you” has its own verb ending. Here is the verb {{করা}} (to do) in the present:",
     "title": "Verb endings follow respect"
    },
    {
     "type": "table",
     "head": [
      "Pronoun",
      "Verb",
      "Say it",
      "Ending"
     ],
     "rows": [
      [
       "{{আমি}} / {{আমরা}}",
       "{{করি}}",
       "kori",
       "-i"
      ],
      [
       "{{তুই}} / {{তোরা}}",
       "{{করিস}}",
       "koris",
       "-is"
      ],
      [
       "{{তুমি}} / {{তোমরা}}",
       "{{করো}}",
       "koro",
       "-o"
      ],
      [
       "{{আপনি}} / {{আপনারা}}",
       "{{করেন}}",
       "koren",
       "-en"
      ],
      [
       "{{সে}} / {{তারা}}",
       "{{করে}}",
       "kore",
       "-e"
      ],
      [
       "{{তিনি}} / {{উনি}}",
       "{{করেন}}",
       "koren",
       "-en"
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Plural doesn't change the verb: {{আমি করি}}, {{আমরা করি}}. And the respectful {{-েন}} ending is the same for “you” ({{আপনি}}) and “he/she” ({{তিনি}}): **-en = respect**."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "তুই কী করিস?",
       "tr": "tui ki koris?",
       "mean": "What do you do? (to a best friend)",
       "hl": "করিস"
      },
      {
       "t": "তুমি কী করো?",
       "tr": "tumi ki koro?",
       "mean": "What do you do? (friendly)",
       "hl": "করো"
      },
      {
       "t": "আপনি কী করেন?",
       "tr": "apni ki koren?",
       "mean": "What do you do? (polite)",
       "hl": "করেন"
      }
     ],
     "title": "One question, three levels"
    },
    {
     "type": "table",
     "head": [
      "",
      "Ordinary",
      "Respectful"
     ],
     "rows": [
      [
       "this person (near)",
       "{{এ}} e",
       "{{ইনি}} ini"
      ],
      [
       "that person (there)",
       "{{ও}} o",
       "{{উনি}} uni"
      ],
      [
       "he / she (not here)",
       "{{সে}} she",
       "{{তিনি}} tini"
      ]
     ],
     "title": "Near and far"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "{{তিনি}} is mostly used in writing and formal speech. In conversation people say {{উনি}} for someone they respect: {{উনি আমার শিক্ষক}} (He/She is my teacher)."
    },
    {
     "type": "practice",
     "text": "Ask “How are you?” at each level.",
     "lines": [
      "কেমন আছিস?",
      "কেমন আছ?",
      "কেমন আছেন?",
      "আপনি কী করেন?",
      "উনি আমার শিক্ষক।"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "Which “you” should you use with a shopkeeper you don't know?",
       "options": [
        "তুই",
        "তুমি",
        "আপনি",
        "সে"
       ],
       "answer": 2
      },
      {
       "q": "{{সে}} can mean…",
       "options": [
        "he or she",
        "only he",
        "only she",
        "they"
       ],
       "answer": 0
      },
      {
       "q": "Choose the verb: {{আপনি কী ___?}}",
       "options": [
        "করিস",
        "করেন",
        "করো",
        "করি"
       ],
       "answer": 1,
       "explain": "{{আপনি}} takes the {{-েন}} ending."
      },
      {
       "q": "Listen. Who is the speaker most likely talking to?",
       "say": "তুই কী করিস?",
       "options": [
        "a teacher",
        "a stranger",
        "a grandfather",
        "a close friend"
       ],
       "answer": 3
      },
      {
       "q": "Choose the verb: {{আমরা বাংলা ___}} (study)",
       "options": [
        "পড়ি",
        "পড়িস",
        "পড়েন",
        "পড়ো"
       ],
       "answer": 0,
       "explain": "{{আমরা}} uses the same ending as {{আমি}}."
      },
      {
       "q": "Which pronoun is respectful “he/she” in conversation?",
       "options": [
        "ও",
        "এ",
        "উনি",
        "তুই"
       ],
       "answer": 2
      },
      {
       "q": "Listen. Which level of respect is this?",
       "say": "কেমন আছেন?",
       "options": [
        "intimate (তুই)",
        "friendly (তুমি)",
        "it isn't a question",
        "polite (আপনি)"
       ],
       "answer": 3
      }
     ]
    }
   ]
  },
  {
   "id": "u4-to-be",
   "icon": "আছে",
   "title": "“To Be”: আছে, হয় and No Verb",
   "subtitle": "Three ways to say am, is, are",
   "minutes": 15,
   "goals": [
    "Make “X is Y” sentences with no verb",
    "Use {{আছে}} for being somewhere and for “have”",
    "Use {{হওয়া}} for “become” and general facts"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "English uses “to be” for everything. Bangla splits it into three jobs. Let's take them one at a time."
    },
    {
     "type": "rule",
     "name": "Job 1: “X is Y”: no verb at all!",
     "color": "green",
     "desc": "When you say what or who something is, or describe it, just put the two words side by side.",
     "examples": [
      {
       "t": "আমি ছাত্র।",
       "tr": "ami chhatro",
       "mean": "I am a student.",
       "hl": "ছাত্র"
      },
      {
       "t": "সে আমার বন্ধু।",
       "tr": "she amar bondhu",
       "mean": "He/She is my friend.",
       "hl": "বন্ধু"
      },
      {
       "t": "বাড়িটা বড়।",
       "tr": "barita boro",
       "mean": "The house is big.",
       "hl": "বড়"
      },
      {
       "t": "এটা আমার বই।",
       "tr": "eta amar boi",
       "mean": "This is my book.",
       "hl": "বই"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Talk like a newspaper headline: “I student.” “House big.” That's perfect Bangla!"
    },
    {
     "type": "rule",
     "name": "Job 2: আছে: is there / is somewhere / have",
     "color": "blue",
     "desc": "Use {{আছে}} when something **exists** or **is in a place**, for how someone **is**, and for **having** things.",
     "examples": [
      {
       "t": "বইটা টেবিলে আছে।",
       "tr": "boita tebile achhe",
       "mean": "The book is on the table.",
       "hl": "আছে"
      },
      {
       "t": "আমি ভালো আছি।",
       "tr": "ami bhalo achhi",
       "mean": "I am well.",
       "hl": "আছি"
      },
      {
       "t": "বাসায় কেউ আছে?",
       "tr": "bashay keu achhe?",
       "mean": "Is anyone at home?",
       "hl": "আছে"
      },
      {
       "t": "আমার একটা বোন আছে।",
       "tr": "amar ekta bon achhe",
       "mean": "I have a sister.",
       "hl": "আছে"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Pronoun",
      "is / are (now)",
      "was / were"
     ],
     "rows": [
      [
       "{{আমি}}",
       "{{আছি}} achhi",
       "{{ছিলাম}} chhilam"
      ],
      [
       "{{তুই}}",
       "{{আছিস}} achhis",
       "{{ছিলি}} chhili"
      ],
      [
       "{{তুমি}}",
       "{{আছ}} achho",
       "{{ছিলে}} chhile"
      ],
      [
       "{{আপনি}} / {{তিনি}}",
       "{{আছেন}} achhen",
       "{{ছিলেন}} chhilen"
      ],
      [
       "{{সে}} / it",
       "{{আছে}} achhe",
       "{{ছিল}} chhilo"
      ]
     ],
     "title": "আছে: present and past"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "In the past, Job 1 also uses these forms: {{আমি ছাত্র}} (I am a student) → {{আমি ছাত্র ছিলাম}} (I was a student)."
    },
    {
     "type": "sentence",
     "t": "আমার দুইটা ভাই আছে।",
     "tr": "amar duita bhai achhe",
     "mean": "I have two brothers.",
     "words": [
      {
       "t": "আমার",
       "mean": "my"
      },
      {
       "t": "দুইটা",
       "mean": "two"
      },
      {
       "t": "ভাই",
       "mean": "brother(s)"
      },
      {
       "t": "আছে",
       "mean": "exist"
      }
     ],
     "note": "There is no verb “to have”. Bangla says “my two brothers exist”."
    },
    {
     "type": "rule",
     "name": "Job 3: হওয়া: to be, to become",
     "color": "orange",
     "desc": "Use {{হওয়া}} for becoming something, for the future of “to be”, and for things that usually happen.",
     "examples": [
      {
       "t": "আমি ডাক্তার হব।",
       "tr": "ami daktar hobo",
       "mean": "I will be a doctor.",
       "hl": "হব"
      },
      {
       "t": "শীতকালে খুব ঠান্ডা হয়।",
       "tr": "shitkale khub thanda hoy",
       "mean": "It gets very cold in winter.",
       "hl": "হয়"
      },
      {
       "t": "উনি আমার মামা হন।",
       "tr": "uni amar mama hon",
       "mean": "He is my uncle (by relation).",
       "hl": "হন"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "To ask how someone is related to you, people say {{উনি তোমার কী হন?}}, literally “What does he/she become to you?”. A very common family question!"
    },
    {
     "type": "practice",
     "text": "Read aloud and spot the job: no verb, আছে, or হওয়া.",
     "lines": [
      "আমি ছাত্র।",
      "আমি ভালো আছি।",
      "আমার একটা বোন আছে।",
      "বাড়িটা বড়।",
      "আমি ডাক্তার হব।",
      "আমি তখন ছোট ছিলাম।"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "How do you say “I am a student”?",
       "options": [
        "আমি ছাত্র আছি।",
        "আমি ছাত্র।",
        "আমার ছাত্র আছে।",
        "আমি ছাত্র হয়।"
       ],
       "answer": 1,
       "explain": "Job 1: no verb at all."
      },
      {
       "q": "How do you say “I have a sister”?",
       "options": [
        "আমি একটা বোন।",
        "আমি বোন আছি।",
        "আমার বোন হয়।",
        "আমার একটা বোন আছে।"
       ],
       "answer": 3
      },
      {
       "q": "Listen. Where is the book?",
       "say": "বইটা টেবিলে আছে।",
       "options": [
        "in the bag",
        "on the table",
        "at school",
        "under the bed"
       ],
       "answer": 1
      },
      {
       "q": "Which word means “was” with {{আমি}}?",
       "options": [
        "ছিল",
        "আছি",
        "ছিলাম",
        "হব"
       ],
       "answer": 2
      },
      {
       "q": "{{আমি ডাক্তার হব}} means…",
       "options": [
        "I will be a doctor.",
        "I am a doctor.",
        "I was a doctor.",
        "I have a doctor."
       ],
       "answer": 0
      },
      {
       "q": "Listen. What does it mean?",
       "say": "বাসায় কেউ আছে?",
       "options": [
        "Is anyone at home?",
        "Who is at school?",
        "The house is big.",
        "I'm at home now."
       ],
       "answer": 0
      },
      {
       "q": "Choose: {{আপনি কেমন ___?}}",
       "options": [
        "আছি",
        "আছিস",
        "ছিলাম",
        "আছেন"
       ],
       "answer": 3
      }
     ]
    }
   ]
  },
  {
   "id": "u4-present-simple",
   "icon": "করি",
   "title": "Present Simple",
   "subtitle": "I do, you go, she eats",
   "minutes": 15,
   "goals": [
    "Find the root of a verb",
    "Add the right present ending",
    "Talk about habits and facts"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "The present simple is for habits and facts: “I drink tea”, “She lives in Sylhet”. You already know the endings from the pronouns lesson. Now let's use them with real verbs."
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Take the dictionary form",
       "t": "করা",
       "tr": "kora",
       "mean": "to do"
      },
      {
       "title": "Drop the -া to find the root",
       "t": "কর্",
       "tr": "kor",
       "mean": "do-"
      },
      {
       "title": "Add the ending for the person",
       "t": "করি",
       "tr": "kori",
       "mean": "I do"
      }
     ],
     "title": "How to build it"
    },
    {
     "type": "table",
     "head": [
      "Pronoun",
      "করা (do)",
      "খাওয়া (eat)",
      "যাওয়া (go)",
      "থাকা (live)"
     ],
     "rows": [
      [
       "{{আমি}} / {{আমরা}}",
       "{{করি}}",
       "{{খাই}}",
       "{{যাই}}",
       "{{থাকি}}"
      ],
      [
       "{{তুই}} / {{তোরা}}",
       "{{করিস}}",
       "{{খাস}}",
       "{{যাস}}",
       "{{থাকিস}}"
      ],
      [
       "{{তুমি}} / {{তোমরা}}",
       "{{করো}}",
       "{{খাও}}",
       "{{যাও}}",
       "{{থাকো}}"
      ],
      [
       "{{আপনি}} / {{তিনি}}",
       "{{করেন}}",
       "{{খান}}",
       "{{যান}}",
       "{{থাকেন}}"
      ],
      [
       "{{সে}} / {{তারা}}",
       "{{করে}}",
       "{{খায়}}",
       "{{যায়}}",
       "{{থাকে}}"
      ]
     ],
     "title": "Present simple"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "The five endings: **-i, -is, -o, -en, -e**. Say them like a little song: “ee, is, oh, en, eh”!"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Verbs whose root ends in a vowel, like {{খা}} (eat) and {{যা}} (go), squeeze the endings a little: {{খাই}}, {{খাও}}, {{খান}}, {{খায়}}. Listen and copy."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "আমি প্রতিদিন চা খাই।",
       "tr": "ami protidin cha khai",
       "mean": "I drink tea every day.",
       "hl": "খাই"
      },
      {
       "t": "সে স্কুলে যায়।",
       "tr": "she skule jay",
       "mean": "He/She goes to school.",
       "hl": "যায়"
      },
      {
       "t": "আপনি কোথায় থাকেন?",
       "tr": "apni kothay thaken?",
       "mean": "Where do you live?",
       "hl": "থাকেন"
      },
      {
       "t": "তুমি কী করো?",
       "tr": "tumi ki koro?",
       "mean": "What do you do?",
       "hl": "করো"
      },
      {
       "t": "আমরা বাংলা শিখি।",
       "tr": "amra bangla shikhi",
       "mean": "We learn Bangla.",
       "hl": "শিখি"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "আমার মা রোজ সকালে নামাজ পড়েন।",
     "tr": "amar ma roj shokale namaj poren",
     "mean": "My mother prays every morning.",
     "words": [
      {
       "t": "আমার",
       "mean": "my"
      },
      {
       "t": "মা",
       "mean": "mother"
      },
      {
       "t": "রোজ",
       "mean": "every day"
      },
      {
       "t": "সকালে",
       "mean": "in the morning"
      },
      {
       "t": "নামাজ",
       "mean": "prayer"
      },
      {
       "t": "পড়েন",
       "mean": "says (respectful)"
      }
     ],
     "note": "We use the respectful {{-েন}} for parents and elders, even when talking **about** them."
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Talking about your parents, grandparents or teachers, use the respectful ending: {{বাবা অফিসে যান}}, {{দাদি গল্প বলেন}}. Using {{যায়}} for your father can sound disrespectful."
    },
    {
     "type": "practice",
     "text": "Read aloud. Then change each sentence to talk about yourself.",
     "lines": [
      "সে স্কুলে যায়।",
      "আপনি কোথায় থাকেন?",
      "বাবা অফিসে যান।",
      "আমরা বাংলা শিখি।",
      "আমি প্রতিদিন চা খাই।"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "Choose: {{আমি ভাত ___}}",
       "options": [
        "খায়",
        "খান",
        "খাই",
        "খাস"
       ],
       "answer": 2
      },
      {
       "q": "Choose: {{সে স্কুলে ___}}",
       "options": [
        "যাই",
        "যান",
        "যায়",
        "যাও"
       ],
       "answer": 2
      },
      {
       "q": "Listen. Who is the sentence about?",
       "say": "আপনি কোথায় থাকেন?",
       "options": [
        "you (polite)",
        "I",
        "he (ordinary)",
        "we"
       ],
       "answer": 0
      },
      {
       "q": "What is the root of {{করা}}?",
       "options": [
        "করি",
        "কর্",
        "কা",
        "রা"
       ],
       "answer": 1
      },
      {
       "q": "Talking about your grandmother, which is best?",
       "options": [
        "দাদি গল্প বলেন।",
        "দাদি গল্প বলে।",
        "দাদি গল্প বলিস।",
        "দাদি গল্প বলি।"
       ],
       "answer": 0
      },
      {
       "q": "Listen. What does it mean?",
       "say": "আমরা বাংলা শিখি।",
       "options": [
        "I teach Bangla.",
        "They speak Bangla.",
        "We learn Bangla.",
        "We don't know Bangla."
       ],
       "answer": 2
      },
      {
       "q": "Choose: {{তুমি কোথায় ___?}} (live)",
       "options": [
        "থাকি",
        "থাকো",
        "থাকেন",
        "থাকিস"
       ],
       "answer": 1
      }
     ]
    }
   ]
  },
  {
   "id": "u4-present-continuous",
   "icon": "করছি",
   "title": "Present Continuous",
   "subtitle": "I am doing, she is eating",
   "minutes": 12,
   "goals": [
    "Say what is happening right now",
    "Add the {{-ছ-}} / {{-চ্ছ-}} endings",
    "Use it for plans in the near future"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "“I'm reading”, “It's raining”, “What are you doing?”. For actions happening right now, Bangla adds a little {{ছ}} sound to the verb."
    },
    {
     "type": "rule",
     "name": "Root + ছ + ending",
     "color": "green",
     "desc": "Add {{ছি, ছিস, ছ, ছেন, ছে}} to the root. For roots ending in a vowel ({{খা}}, {{যা}}), it becomes {{চ্ছ}}.",
     "examples": [
      {
       "t": "আমি পড়ছি।",
       "tr": "ami porchhi",
       "mean": "I'm reading / studying.",
       "hl": "পড়ছি"
      },
      {
       "t": "সে খাচ্ছে।",
       "tr": "she khachchhe",
       "mean": "He/She is eating.",
       "hl": "খাচ্ছে"
      },
      {
       "t": "বৃষ্টি হচ্ছে।",
       "tr": "brishti hochchhe",
       "mean": "It's raining.",
       "hl": "হচ্ছে"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Pronoun",
      "করা (do)",
      "খাওয়া (eat)",
      "যাওয়া (go)"
     ],
     "rows": [
      [
       "{{আমি}} / {{আমরা}}",
       "{{করছি}} korchhi",
       "{{খাচ্ছি}} khachchhi",
       "{{যাচ্ছি}} jachchhi"
      ],
      [
       "{{তুই}} / {{তোরা}}",
       "{{করছিস}} korchhis",
       "{{খাচ্ছিস}} khachchhis",
       "{{যাচ্ছিস}} jachchhis"
      ],
      [
       "{{তুমি}} / {{তোমরা}}",
       "{{করছ}} korchho",
       "{{খাচ্ছ}} khachchho",
       "{{যাচ্ছ}} jachchho"
      ],
      [
       "{{আপনি}} / {{তিনি}}",
       "{{করছেন}} korchhen",
       "{{খাচ্ছেন}} khachchhen",
       "{{যাচ্ছেন}} jachchhen"
      ],
      [
       "{{সে}} / {{তারা}}",
       "{{করছে}} korchhe",
       "{{খাচ্ছে}} khachchhe",
       "{{যাচ্ছে}} jachchhe"
      ]
     ],
     "title": "Present continuous"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Same five endings as before: **-i, -is, -o, -en, -e**. Just slip {{ছ}} (chh) in front. {{করি}} → {{করছি}}."
    },
    {
     "type": "sentence",
     "t": "তুমি এখন কী করছ?",
     "tr": "tumi ekhon ki korchho?",
     "mean": "What are you doing now?",
     "words": [
      {
       "t": "তুমি",
       "mean": "you"
      },
      {
       "t": "এখন",
       "mean": "now"
      },
      {
       "t": "কী",
       "mean": "what"
      },
      {
       "t": "করছ",
       "mean": "are doing"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Nadia",
       "t": "হ্যালো, কী করছ?",
       "tr": "hyalo, ki korchho?",
       "mean": "Hello, what are you doing?"
      },
      {
       "who": "Tania",
       "t": "টিভি দেখছি। তুমি?",
       "tr": "tivi dekhchhi. tumi?",
       "mean": "Watching TV. You?"
      },
      {
       "who": "Nadia",
       "t": "আমি বাজারে যাচ্ছি। আসবে?",
       "tr": "ami bajare jachchhi. ashbe?",
       "mean": "I'm going to the market. Will you come?"
      },
      {
       "who": "Tania",
       "t": "হ্যাঁ, আসছি!",
       "tr": "hya, ashchhi!",
       "mean": "Yes, I'm coming!"
      }
     ],
     "title": "On the phone"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Like English, the continuous can talk about plans: {{আমি কাল ঢাকা যাচ্ছি}} = I'm going to Dhaka tomorrow."
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "{{আসছি!}} (“I'm coming!”) is what everyone shouts when Mum calls them for dinner."
    },
    {
     "type": "practice",
     "text": "Read aloud.",
     "lines": [
      "আমি পড়ছি।",
      "সে ঘুমাচ্ছে।",
      "বৃষ্টি হচ্ছে।",
      "তুমি কী করছ?",
      "আমরা খাচ্ছি।",
      "আসছি!"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "How do you say “I am reading”?",
       "options": [
        "আমি পড়ি।",
        "আমি পড়লাম।",
        "আমি পড়ব।",
        "আমি পড়ছি।"
       ],
       "answer": 3
      },
      {
       "q": "Listen. What is happening?",
       "say": "বৃষ্টি হচ্ছে।",
       "options": [
        "It's very hot.",
        "The wind is blowing.",
        "It will rain later.",
        "It's raining."
       ],
       "answer": 3
      },
      {
       "q": "Choose: {{আপনি কী ___?}} (are doing)",
       "options": [
        "করছি",
        "করছেন",
        "করছিস",
        "করছে"
       ],
       "answer": 1
      },
      {
       "q": "Choose: {{সে ভাত ___}} (is eating)",
       "options": [
        "খাচ্ছি",
        "খাচ্ছে",
        "খাই",
        "খাচ্ছেন না"
       ],
       "answer": 1
      },
      {
       "q": "Listen. What does the speaker mean?",
       "say": "আসছি!",
       "options": [
        "I'm coming!",
        "I came yesterday.",
        "Don't come here!",
        "Are you coming?"
       ],
       "answer": 0
      },
      {
       "q": "{{আমি কাল ঢাকা যাচ্ছি}} talks about…",
       "options": [
        "something from yesterday",
        "a daily habit",
        "a plan for tomorrow",
        "something impossible"
       ],
       "answer": 2
      }
     ]
    }
   ]
  },
  {
   "id": "u4-past",
   "icon": "করলাম",
   "title": "Past Simple",
   "subtitle": "I did, she went, we ate",
   "minutes": 15,
   "goals": [
    "Form the past simple with {{-ল-}}",
    "Learn the irregular {{গেলাম}} and {{এলাম}}",
    "Recognise the “have done” form"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "To talk about the past, Bangla adds an {{ল}} (l) sound. Think of the English “-ed”: Bangla's past marker is “-l-”."
    },
    {
     "type": "rule",
     "name": "Root + ল + ending",
     "color": "green",
     "desc": "The endings are {{লাম, লি, লে, লেন, ল}}.",
     "examples": [
      {
       "t": "আমি কাজটা করলাম।",
       "tr": "ami kajta korlam",
       "mean": "I did the work.",
       "hl": "করলাম"
      },
      {
       "t": "সে আমাকে দেখল।",
       "tr": "she amake dekhlo",
       "mean": "He/She saw me.",
       "hl": "দেখল"
      },
      {
       "t": "আপনি কখন এলেন?",
       "tr": "apni kokhon elen?",
       "mean": "When did you arrive?",
       "hl": "এলেন"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Pronoun",
      "করা (do)",
      "দেখা (see)",
      "খাওয়া (eat)",
      "যাওয়া (go)"
     ],
     "rows": [
      [
       "{{আমি}} / {{আমরা}}",
       "{{করলাম}}",
       "{{দেখলাম}}",
       "{{খেলাম}}",
       "{{গেলাম}}"
      ],
      [
       "{{তুই}} / {{তোরা}}",
       "{{করলি}}",
       "{{দেখলি}}",
       "{{খেলি}}",
       "{{গেলি}}"
      ],
      [
       "{{তুমি}} / {{তোমরা}}",
       "{{করলে}}",
       "{{দেখলে}}",
       "{{খেলে}}",
       "{{গেলে}}"
      ],
      [
       "{{আপনি}} / {{তিনি}}",
       "{{করলেন}}",
       "{{দেখলেন}}",
       "{{খেলেন}}",
       "{{গেলেন}}"
      ],
      [
       "{{সে}} / {{তারা}}",
       "{{করল}}",
       "{{দেখল}}",
       "{{খেল}}",
       "{{গেল}}"
      ]
     ],
     "title": "Past simple"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "**L for “last time”**: {{করলাম}} korlam, {{খেলাম}} khelam, {{গেলাম}} gelam. Hear the “l”? That's the past."
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Watch the changes: {{খাওয়া}} → {{খেলাম}} (a becomes e), {{যাওয়া}} → {{গেলাম}} (a new start!), {{আসা}} → {{এলাম}} (I came). In Bangladesh you'll also hear {{আসলাম}} for “I came” in casual talk."
    },
    {
     "type": "sentence",
     "t": "কাল আমি একটা সিনেমা দেখলাম।",
     "tr": "kal ami ekta shinema dekhlam",
     "mean": "Yesterday I watched a film.",
     "words": [
      {
       "t": "কাল",
       "mean": "yesterday"
      },
      {
       "t": "আমি",
       "mean": "I"
      },
      {
       "t": "একটা",
       "mean": "a"
      },
      {
       "t": "সিনেমা",
       "mean": "film"
      },
      {
       "t": "দেখলাম",
       "mean": "watched"
      }
     ]
    },
    {
     "type": "text",
     "text": "Bangla also has a “have done” form, very common in daily talk. It uses {{-েছ-}}.",
     "title": "“I have eaten”"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "আমি খেয়েছি।",
       "tr": "ami kheyechhi",
       "mean": "I have eaten.",
       "hl": "খেয়েছি"
      },
      {
       "t": "তুমি কী করেছ?",
       "tr": "tumi ki korechho?",
       "mean": "What have you done?",
       "hl": "করেছ"
      },
      {
       "t": "সে বাড়ি গেছে।",
       "tr": "she bari gechhe",
       "mean": "He/She has gone home.",
       "hl": "গেছে"
      },
      {
       "t": "আমি ঢাকা থেকে এসেছি।",
       "tr": "ami dhaka theke eshechhi",
       "mean": "I have come from Dhaka.",
       "hl": "এসেছি"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Remember {{খেয়েছেন?}} (Have you eaten?) from the food lesson? That's this form! Answer with {{জি, খেয়েছি}} (Yes, I have)."
    },
    {
     "type": "practice",
     "text": "Read aloud.",
     "lines": [
      "আমি ভাত খেলাম।",
      "সে বাজারে গেল।",
      "আপনি কখন এলেন?",
      "আমরা অনেক মজা করলাম।",
      "আমি খেয়েছি।"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "How do you say “I went”?",
       "options": [
        "আমি যাই।",
        "আমি যাব।",
        "আমি গেলাম।",
        "আমি যাচ্ছি।"
       ],
       "answer": 2
      },
      {
       "q": "Listen. When is this happening?",
       "say": "সে বাজারে গেল।",
       "options": [
        "in the past",
        "right now",
        "tomorrow",
        "every day"
       ],
       "answer": 0
      },
      {
       "q": "Which sound marks the past simple?",
       "options": [
        "ল (l)",
        "ছ (chh)",
        "ব (b)",
        "ন (n)"
       ],
       "answer": 0
      },
      {
       "q": "Choose: {{আপনি কখন ___?}} (came)",
       "options": [
        "এলাম",
        "এলি",
        "আসব",
        "এলেন"
       ],
       "answer": 3
      },
      {
       "q": "The past of {{খাওয়া}} with {{আমি}} is…",
       "options": [
        "খালাম",
        "খেলাম",
        "খাইলাম",
        "খাবলাম"
       ],
       "answer": 1
      },
      {
       "q": "Listen. What does it mean?",
       "say": "আমি খেয়েছি।",
       "options": [
        "I will eat.",
        "I'm eating now.",
        "I don't eat that.",
        "I have eaten."
       ],
       "answer": 3
      },
      {
       "q": "Choose: {{কাল আমরা অনেক মজা ___}}",
       "options": [
        "করি",
        "করলাম",
        "করব",
        "করছি"
       ],
       "answer": 1,
       "explain": "{{কাল}} + past ending = yesterday."
      }
     ]
    }
   ]
  },
  {
   "id": "u4-future",
   "icon": "করব",
   "title": "Future",
   "subtitle": "I will do, will you come?",
   "minutes": 12,
   "goals": [
    "Form the future with {{-ব-}}",
    "Make offers and plans",
    "Use “will be” with {{হব}}"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "The future is easy: add a {{ব}} (b) sound. “B for be-going-to”!"
    },
    {
     "type": "rule",
     "name": "Root + ব + ending",
     "color": "green",
     "desc": "The endings are {{ব, বি, বে, বেন, বে}}.",
     "examples": [
      {
       "t": "আমি কাল আসব।",
       "tr": "ami kal ashbo",
       "mean": "I'll come tomorrow.",
       "hl": "আসব"
      },
      {
       "t": "তুমি কী খাবে?",
       "tr": "tumi ki khabe?",
       "mean": "What will you eat?",
       "hl": "খাবে"
      },
      {
       "t": "বৃষ্টি হবে।",
       "tr": "brishti hobe",
       "mean": "It will rain.",
       "hl": "হবে"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Pronoun",
      "করা (do)",
      "খাওয়া (eat)",
      "যাওয়া (go)",
      "হওয়া (be)"
     ],
     "rows": [
      [
       "{{আমি}} / {{আমরা}}",
       "{{করব}} korbo",
       "{{খাব}} khabo",
       "{{যাব}} jabo",
       "{{হব}} hobo"
      ],
      [
       "{{তুই}} / {{তোরা}}",
       "{{করবি}} korbi",
       "{{খাবি}} khabi",
       "{{যাবি}} jabi",
       "{{হবি}} hobi"
      ],
      [
       "{{তুমি}} / {{তোমরা}}",
       "{{করবে}} korbe",
       "{{খাবে}} khabe",
       "{{যাবে}} jabe",
       "{{হবে}} hobe"
      ],
      [
       "{{আপনি}} / {{তিনি}}",
       "{{করবেন}} korben",
       "{{খাবেন}} khaben",
       "{{যাবেন}} jaben",
       "{{হবেন}} hoben"
      ],
      [
       "{{সে}} / {{তারা}}",
       "{{করবে}} korbe",
       "{{খাবে}} khabe",
       "{{যাবে}} jabe",
       "{{হবে}} hobe"
      ]
     ],
     "title": "Future"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "{{তুমি}} and {{সে}} share the same future form: {{তুমি যাবে}} (you will go), {{সে যাবে}} (he/she will go). The pronoun tells you who."
    },
    {
     "type": "sentence",
     "t": "আমি আগামী মাসে বাংলাদেশে যাব।",
     "tr": "ami agami mashe bangladeshe jabo",
     "mean": "I'll go to Bangladesh next month.",
     "words": [
      {
       "t": "আমি",
       "mean": "I"
      },
      {
       "t": "আগামী",
       "mean": "next"
      },
      {
       "t": "মাসে",
       "mean": "in month"
      },
      {
       "t": "বাংলাদেশে",
       "mean": "to Bangladesh"
      },
      {
       "t": "যাব",
       "mean": "will go"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "When talking about plans, many Muslims add {{ইনশাআল্লাহ}} (“if God wills”): {{কাল দেখা হবে, ইনশাআল্লাহ}}."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "চা খাবেন?",
       "tr": "cha khaben?",
       "mean": "Would you like some tea?",
       "note": "a future question = a polite offer",
       "hl": "খাবেন"
      },
      {
       "t": "আপনি কি আসবেন?",
       "tr": "apni ki ashben?",
       "mean": "Will you come?"
      },
      {
       "t": "আমি ডাক্তার হব।",
       "tr": "ami daktar hobo",
       "mean": "I will be a doctor."
      },
      {
       "t": "আমরা ঈদে গ্রামে যাব।",
       "tr": "amra ide grame jabo",
       "mean": "We'll go to the village for Eid."
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "At Eid, millions of people leave the cities to visit their family village. Buses, trains and ferries are packed!"
    },
    {
     "type": "practice",
     "text": "Say three plans for next week.",
     "lines": [
      "আমি কাল আসব।",
      "আমরা ঈদে গ্রামে যাব।",
      "তুমি কী খাবে?",
      "চা খাবেন?",
      "আমি ডাক্তার হব।"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "How do you say “I will go”?",
       "options": [
        "আমি গেলাম।",
        "আমি যাচ্ছি না।",
        "আমি যাই।",
        "আমি যাব।"
       ],
       "answer": 3
      },
      {
       "q": "Which sound marks the future?",
       "options": [
        "ল (l)",
        "ছ (chh)",
        "ব (b)",
        "ত (t)"
       ],
       "answer": 2
      },
      {
       "q": "Listen. What is the person doing?",
       "say": "চা খাবেন?",
       "options": [
        "asking for the bill",
        "offering tea",
        "refusing tea",
        "making tea now"
       ],
       "answer": 1
      },
      {
       "q": "Choose: {{আপনি কখন ___?}} (will come)",
       "options": [
        "আসব",
        "আসবি",
        "আসবেন",
        "এলেন"
       ],
       "answer": 2
      },
      {
       "q": "{{বৃষ্টি হবে}} means…",
       "options": [
        "It will rain.",
        "It's raining.",
        "It rained.",
        "It never rains."
       ],
       "answer": 0
      },
      {
       "q": "Listen. Where will they go?",
       "say": "আমরা ঈদে গ্রামে যাব।",
       "options": [
        "to the market",
        "to Dhaka",
        "to school",
        "to the village"
       ],
       "answer": 3
      }
     ]
    }
   ]
  },
  {
   "id": "u4-negation",
   "icon": "না",
   "title": "Saying No: না, নেই, নয়",
   "subtitle": "Three kinds of “not”",
   "minutes": 15,
   "goals": [
    "Put {{না}} after the verb",
    "Use {{-নি}} for the past",
    "Choose {{নেই}} or {{নয়}} for “isn't”"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Bangla has three little “no” words, each with its own job. Good news: they mostly go **after** the verb, at the very end."
    },
    {
     "type": "rule",
     "name": "না after the verb",
     "color": "red",
     "desc": "For present, continuous and future, just add {{না}} at the end.",
     "examples": [
      {
       "t": "আমি মাছ খাই না।",
       "tr": "ami machh khai na",
       "mean": "I don't eat fish.",
       "hl": "না"
      },
      {
       "t": "সে আসবে না।",
       "tr": "she ashbe na",
       "mean": "He/She won't come.",
       "hl": "না"
      },
      {
       "t": "আমি এখন পড়ছি না।",
       "tr": "ami ekhon porchhi na",
       "mean": "I'm not studying now.",
       "hl": "না"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "English puts “not” in the middle. Bangla saves it for the end, like a surprise twist: “I fish eat… **not**!”"
    },
    {
     "type": "rule",
     "name": "Past: add -নি",
     "color": "orange",
     "desc": "For “didn't” or “haven't”, take the **present** form and stick {{নি}} on the end.",
     "examples": [
      {
       "t": "আমি খাইনি।",
       "tr": "ami khaini",
       "mean": "I didn't eat / I haven't eaten.",
       "hl": "নি"
      },
      {
       "t": "সে আসেনি।",
       "tr": "she asheni",
       "mean": "He/She didn't come.",
       "hl": "নি"
      },
      {
       "t": "আমরা দেখিনি।",
       "tr": "amra dekhini",
       "mean": "We didn't see (it).",
       "hl": "নি"
      },
      {
       "t": "তুমি করোনি?",
       "tr": "tumi koroni?",
       "mean": "Didn't you do it?",
       "hl": "নি"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Don't negate the {{ল}} past form in normal speech. “I didn't go” is {{আমি যাইনি}}, built from {{যাই}} + {{নি}}."
    },
    {
     "type": "rule",
     "name": "নেই: “there isn't / don't have”",
     "color": "purple",
     "desc": "{{নেই}} is the opposite of {{আছে}}.",
     "examples": [
      {
       "t": "আমার গাড়ি নেই।",
       "tr": "amar gari nei",
       "mean": "I don't have a car.",
       "hl": "নেই"
      },
      {
       "t": "বাবা বাসায় নেই।",
       "tr": "baba bashay nei",
       "mean": "Dad isn't at home.",
       "hl": "নেই"
      },
      {
       "t": "সময় নেই!",
       "tr": "shomoy nei!",
       "mean": "There's no time!",
       "hl": "নেই"
      }
     ]
    },
    {
     "type": "rule",
     "name": "নয়: “is not” (Job 1 sentences)",
     "color": "blue",
     "desc": "For “X is not Y”, use {{নয়}} and its family. In everyday speech, {{না}} is also fine here.",
     "examples": [
      {
       "t": "আমি ডাক্তার নই।",
       "tr": "ami daktar noi",
       "mean": "I'm not a doctor.",
       "hl": "নই"
      },
      {
       "t": "উনি শিক্ষক নন।",
       "tr": "uni shikkhok non",
       "mean": "He/She is not a teacher.",
       "hl": "নন"
      },
      {
       "t": "এটা আমার নয়।",
       "tr": "eta amar noy",
       "mean": "This isn't mine.",
       "hl": "নয়"
      },
      {
       "t": "এটা আমার না।",
       "tr": "eta amar na",
       "mean": "This isn't mine. (casual)",
       "hl": "না"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Pronoun",
      "is not"
     ],
     "rows": [
      [
       "{{আমি}}",
       "{{নই}} noi"
      ],
      [
       "{{তুই}}",
       "{{নস}} nosh"
      ],
      [
       "{{তুমি}}",
       "{{নও}} no"
      ],
      [
       "{{আপনি}} / {{তিনি}}",
       "{{নন}} non"
      ],
      [
       "{{সে}} / it",
       "{{নয়}} noy"
      ]
     ],
     "title": "নয় family"
    },
    {
     "type": "table",
     "head": [
      "Yes",
      "No"
     ],
     "rows": [
      [
       "{{আমি যাই।}} I go.",
       "{{আমি যাই না।}} I don't go."
      ],
      [
       "{{আমি যাব।}} I'll go.",
       "{{আমি যাব না।}} I won't go."
      ],
      [
       "{{আমি গেলাম।}} I went.",
       "{{আমি যাইনি।}} I didn't go."
      ],
      [
       "{{টাকা আছে।}} There's money.",
       "{{টাকা নেই।}} There's no money."
      ],
      [
       "{{আমি ছাত্র।}} I'm a student.",
       "{{আমি ছাত্র নই।}} I'm not a student."
      ]
     ],
     "title": "Summary"
    },
    {
     "type": "practice",
     "text": "Read aloud, then make each sentence true for you.",
     "lines": [
      "আমি মাছ খাই না।",
      "আমি খাইনি।",
      "আমার গাড়ি নেই।",
      "আমি ডাক্তার নই।",
      "সে আসবে না।"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "How do you say “I don't eat fish”?",
       "options": [
        "আমি মাছ খাই না।",
        "আমি না মাছ খাই।",
        "আমি মাছ খাইনি।",
        "আমি মাছ নেই।"
       ],
       "answer": 0
      },
      {
       "q": "How do you say “I didn't go”?",
       "options": [
        "আমি যাইনি।",
        "আমি যাব না।",
        "আমি নেই।",
        "আমি যাই না।"
       ],
       "answer": 0
      },
      {
       "q": "Listen. What does it mean?",
       "say": "বাবা বাসায় নেই।",
       "options": [
        "Dad is at home.",
        "Dad won't come home.",
        "Dad isn't at home.",
        "Dad has no house."
       ],
       "answer": 2
      },
      {
       "q": "Which word is the opposite of {{আছে}}?",
       "options": [
        "নয়",
        "নি",
        "হবে",
        "নেই"
       ],
       "answer": 3
      },
      {
       "q": "Choose: {{আমি ডাক্তার ___}}",
       "options": [
        "নেই",
        "নই",
        "নন",
        "নি"
       ],
       "answer": 1
      },
      {
       "q": "Listen. What does the speaker say?",
       "say": "সে আসবে না।",
       "options": [
        "He came yesterday.",
        "He's coming now.",
        "He didn't eat.",
        "He won't come."
       ],
       "answer": 3
      },
      {
       "q": "Where does {{না}} usually go?",
       "options": [
        "before the subject",
        "after the verb",
        "before the verb",
        "at the start"
       ],
       "answer": 1
      }
     ]
    }
   ]
  },
  {
   "id": "u4-questions",
   "icon": "কী?",
   "title": "Asking Questions",
   "subtitle": "কী, কে, কোথায়, কখন, কেন, কত and কি",
   "minutes": 15,
   "goals": [
    "Learn the main question words",
    "Keep normal word order in questions",
    "Tell {{কী}} (what) from {{কি}} (yes/no)"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Asking questions in Bangla is easy: you **don't change the word order**. Just put the question word where the answer would be."
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "কী",
       "tr": "ki",
       "mean": "what"
      },
      {
       "t": "কে",
       "tr": "ke",
       "mean": "who"
      },
      {
       "t": "কোথায়",
       "tr": "kothay",
       "mean": "where"
      },
      {
       "t": "কখন",
       "tr": "kokhon",
       "mean": "when"
      },
      {
       "t": "কেন",
       "tr": "keno",
       "mean": "why"
      },
      {
       "t": "কত",
       "tr": "koto",
       "mean": "how much / how many"
      },
      {
       "t": "কেমন",
       "tr": "kemon",
       "mean": "how (what like)"
      },
      {
       "t": "কোন",
       "tr": "kon",
       "mean": "which"
      },
      {
       "t": "কার",
       "tr": "kar",
       "mean": "whose"
      },
      {
       "t": "কয়টা",
       "tr": "koyta",
       "mean": "how many (things)"
      }
     ],
     "title": "Question words"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Almost every question word starts with **k-**: {{কী}}, {{কে}}, {{কোথায়}}, {{কখন}}, {{কেন}}, {{কত}}. English has the “wh-” words; Bangla has the “k-” words!"
    },
    {
     "type": "rule",
     "name": "The question word sits where the answer goes",
     "color": "green",
     "desc": "Ask and answer with the same order.",
     "examples": [
      {
       "t": "তুমি কী খাচ্ছ? → আমি ভাত খাচ্ছি।",
       "tr": "tumi ki khachchho? → ami bhat khachchhi",
       "mean": "What are you eating? → I'm eating rice.",
       "hl": "কী"
      },
      {
       "t": "সে কোথায় থাকে? → সে সিলেটে থাকে।",
       "tr": "she kothay thake? → she shilete thake",
       "mean": "Where does he live? → He lives in Sylhet.",
       "hl": "কোথায়"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "আপনি কোথায় থাকেন?",
     "tr": "apni kothay thaken?",
     "mean": "Where do you live?",
     "words": [
      {
       "t": "আপনি",
       "mean": "you"
      },
      {
       "t": "কোথায়",
       "mean": "where"
      },
      {
       "t": "থাকেন",
       "mean": "live"
      }
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "কে এসেছে?",
       "tr": "ke eshechhe?",
       "mean": "Who has come?"
      },
      {
       "t": "ট্রেন কখন ছাড়বে?",
       "tr": "tren kokhon charbe?",
       "mean": "When will the train leave?"
      },
      {
       "t": "তুমি কেন কাঁদছ?",
       "tr": "tumi keno kandchho?",
       "mean": "Why are you crying?"
      },
      {
       "t": "তোমার বয়স কত?",
       "tr": "tomar boyosh koto?",
       "mean": "How old are you?"
      },
      {
       "t": "তুমি কোন ক্লাসে পড়ো?",
       "tr": "tumi kon klashe poro?",
       "mean": "Which class (year) are you in?"
      },
      {
       "t": "তোমরা কয় ভাই-বোন?",
       "tr": "tomra koy bhai-bon?",
       "mean": "How many brothers and sisters are you?"
      }
     ],
     "title": "More questions"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "কী",
       "label": "what",
       "desc": "With the long vowel sign ী. A real question word: {{তোমার নাম কী?}} (What is your name?)"
      },
      {
       "t": "কি",
       "label": "yes/no marker",
       "desc": "With the short sign ি. It turns a sentence into a yes/no question: {{তুমি কি চা খাবে?}} (Will you have tea?)"
      }
     ],
     "title": "কী or কি?"
    },
    {
     "type": "rule",
     "name": "Yes/no questions with কি",
     "color": "blue",
     "desc": "Put {{কি}} after the subject (or early in the sentence). Your voice goes up at the end.",
     "examples": [
      {
       "t": "আপনি কি বাংলা বলেন?",
       "tr": "apni ki bangla bolen?",
       "mean": "Do you speak Bangla?",
       "hl": "কি"
      },
      {
       "t": "এটা কি তোমার?",
       "tr": "eta ki tomar?",
       "mean": "Is this yours?",
       "hl": "কি"
      },
      {
       "t": "তুমি আসবে?",
       "tr": "tumi ashbe?",
       "mean": "Will you come? (no কি, rising voice)"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "To answer yes, just repeat the verb: “{{আসবে?}}” “{{আসব।}}” (Will you come? I will.) To answer no, add {{না}}: “{{আসব না।}}”"
    },
    {
     "type": "practice",
     "text": "Ask these questions aloud with a rising voice for yes/no.",
     "lines": [
      "তোমার নাম কী?",
      "আপনি কোথায় থাকেন?",
      "কয়টা বাজে?",
      "আপনি কি বাংলা বলেন?",
      "তুমি কেন কাঁদছ?"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "Which word means “where”?",
       "options": [
        "কখন",
        "কেন",
        "কে",
        "কোথায়"
       ],
       "answer": 3
      },
      {
       "q": "Which word means “why”?",
       "options": [
        "কেমন",
        "কত",
        "কেন",
        "কী"
       ],
       "answer": 2
      },
      {
       "q": "Listen. What is the person asking?",
       "say": "ট্রেন কখন ছাড়বে?",
       "options": [
        "When will the train leave?",
        "Where is the train?",
        "How much is the ticket?",
        "Who is on the train?"
       ],
       "answer": 0
      },
      {
       "q": "Which sentence is a yes/no question?",
       "options": [
        "তুমি কি চা খাবে?",
        "তুমি কী খাবে?",
        "তুমি কোথায় যাবে?",
        "তুমি কখন খাবে?"
       ],
       "answer": 0,
       "explain": "{{কি}} with the short sign makes a yes/no question."
      },
      {
       "q": "“Who has come?” is…",
       "options": [
        "কী এসেছে?",
        "কেন এসেছে?",
        "কে এসেছে?",
        "কার এসেছে?"
       ],
       "answer": 2
      },
      {
       "q": "Listen. What does it mean?",
       "say": "তোমার বয়স কত?",
       "options": [
        "What's your name?",
        "How old are you?",
        "Where are you from?",
        "How much is it?"
       ],
       "answer": 1
      },
      {
       "q": "Someone asks {{যাবে?}}. How do you say “Yes, I will”?",
       "options": [
        "যাব।",
        "যাবে।",
        "যাই না।",
        "গেলাম না।"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u4-cases",
   "icon": "-র",
   "title": "Case Endings: -র, -কে, -তে / -এ",
   "subtitle": "of, to, and in: as little endings",
   "minutes": 16,
   "goals": [
    "Use {{-র / -এর}} for “of” and “'s”",
    "Use {{-কে}} for people as the object",
    "Use {{-এ / -য় / -তে}} for “in, at, to”"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "English uses little words like “of”, “to” and “in”. Bangla glues small **endings** onto the noun instead. Three endings will take you a long way."
    },
    {
     "type": "rule",
     "name": "-র / -এর = of, 's",
     "color": "blue",
     "desc": "After a vowel add {{-র}}; after a consonant add {{-এর}}. A few words take {{-য়ের}}.",
     "examples": [
      {
       "t": "রাফির বই",
       "tr": "rafir boi",
       "mean": "Rafi's book",
       "hl": "রাফির"
      },
      {
       "t": "বাবার গাড়ি",
       "tr": "babar gari",
       "mean": "Dad's car",
       "hl": "বাবার"
      },
      {
       "t": "রহিমের বাড়ি",
       "tr": "rohimer bari",
       "mean": "Rahim's house",
       "hl": "রহিমের"
      },
      {
       "t": "বাংলাদেশের রাজধানী",
       "tr": "bangladesher rajdhani",
       "mean": "the capital of Bangladesh",
       "hl": "বাংলাদেশের"
      },
      {
       "t": "মায়ের রান্না",
       "tr": "mayer ranna",
       "mean": "Mum's cooking",
       "hl": "মায়ের"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "{{-র}} sounds like the “r” in “her” or “their”. Think: Rafi-**r** book = Rafi's book."
    },
    {
     "type": "rule",
     "name": "-কে = to / for a person (the object)",
     "color": "orange",
     "desc": "When a **person** receives the action, add {{-কে}}. Things usually take no ending.",
     "examples": [
      {
       "t": "আমি রাফিকে চিনি।",
       "tr": "ami rafike chini",
       "mean": "I know Rafi.",
       "hl": "রাফিকে"
      },
      {
       "t": "মাকে বলো।",
       "tr": "make bolo",
       "mean": "Tell Mum.",
       "hl": "মাকে"
      },
      {
       "t": "আমাকে একটা কলম দাও।",
       "tr": "amake ekta kolom dao",
       "mean": "Give me a pen.",
       "hl": "আমাকে"
      },
      {
       "t": "আমি বই পড়ি।",
       "tr": "ami boi pori",
       "mean": "I read books. (thing: no ending)"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Pronoun",
      "+ কে (me, you, him…)"
     ],
     "rows": [
      [
       "{{আমি}}",
       "{{আমাকে}} amake"
      ],
      [
       "{{তুমি}}",
       "{{তোমাকে}} tomake"
      ],
      [
       "{{আপনি}}",
       "{{আপনাকে}} apnake"
      ],
      [
       "{{সে}}",
       "{{তাকে}} take"
      ],
      [
       "{{আমরা}}",
       "{{আমাদেরকে}} amaderke / {{আমাদের}} amader"
      ]
     ],
     "title": "Me, you, him, her"
    },
    {
     "type": "rule",
     "name": "-এ / -য় / -তে = in, at, to",
     "color": "green",
     "desc": "After a consonant add {{-এ}}; after {{-া}} add {{-য়}}; after other vowels add {{-তে}}.",
     "examples": [
      {
       "t": "স্কুলে",
       "tr": "skule",
       "mean": "at / to school",
       "hl": "স্কুলে"
      },
      {
       "t": "লন্ডনে",
       "tr": "londone",
       "mean": "in London",
       "hl": "লন্ডনে"
      },
      {
       "t": "ঢাকায়",
       "tr": "dhakay",
       "mean": "in / to Dhaka",
       "hl": "ঢাকায়"
      },
      {
       "t": "বাড়িতে",
       "tr": "barite",
       "mean": "at home",
       "hl": "বাড়িতে"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Word",
      "of (-র)",
      "in / at (-এ, -য়, -তে)"
     ],
     "rows": [
      [
       "{{ঘর}} room",
       "{{ঘরের}}",
       "{{ঘরে}}"
      ],
      [
       "{{ঢাকা}} Dhaka",
       "{{ঢাকার}}",
       "{{ঢাকায়}}"
      ],
      [
       "{{বাড়ি}} house",
       "{{বাড়ির}}",
       "{{বাড়িতে}}"
      ],
      [
       "{{স্কুল}} school",
       "{{স্কুলের}}",
       "{{স্কুলে}}"
      ]
     ],
     "title": "Side by side"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "You may also hear {{ঢাকাতে}} instead of {{ঢাকায়}}. Both are fine. And for “from”, add the after-word {{থেকে}}: {{ঢাকা থেকে}} (from Dhaka)."
    },
    {
     "type": "sentence",
     "t": "আমি বোনকে বাবার বইটা দিলাম।",
     "tr": "ami bonke babar boita dilam",
     "mean": "I gave my sister Dad's book.",
     "words": [
      {
       "t": "আমি",
       "mean": "I"
      },
      {
       "t": "বোনকে",
       "mean": "to sister"
      },
      {
       "t": "বাবার",
       "mean": "Dad's"
      },
      {
       "t": "বইটা",
       "mean": "the book"
      },
      {
       "t": "দিলাম",
       "mean": "gave"
      }
     ]
    },
    {
     "type": "practice",
     "text": "Read aloud. Point to each ending.",
     "lines": [
      "রাফির বই",
      "মাকে বলো।",
      "আমি ঢাকায় থাকি।",
      "সে বাড়িতে আছে।",
      "আমাকে একটা কলম দাও।"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "How do you say “Rafi's book”?",
       "options": [
        "রাফিকে বই",
        "রাফিতে বই",
        "বই রাফি",
        "রাফির বই"
       ],
       "answer": 3
      },
      {
       "q": "Which ending marks a person as the object?",
       "options": [
        "-র",
        "-কে",
        "-তে",
        "-টা"
       ],
       "answer": 1
      },
      {
       "q": "Listen. Where does the speaker live?",
       "say": "আমি ঢাকায় থাকি।",
       "options": [
        "in Dhaka",
        "in London",
        "in a village",
        "near the school"
       ],
       "answer": 0
      },
      {
       "q": "“At home” is…",
       "options": [
        "বাড়ির",
        "বাড়িকে",
        "বাড়িতে",
        "বাড়িটা"
       ],
       "answer": 2
      },
      {
       "q": "Choose: {{___ একটা কলম দাও।}} (me)",
       "options": [
        "আমার",
        "আমি",
        "আমাকে",
        "আমায়ের"
       ],
       "answer": 2
      },
      {
       "q": "Listen. What does it mean?",
       "say": "মাকে বলো।",
       "options": [
        "Mum's cooking.",
        "Tell Mum.",
        "Mum is at home.",
        "Call Mum later."
       ],
       "answer": 1
      },
      {
       "q": "How do you say “to school”?",
       "options": [
        "স্কুলের",
        "স্কুলকে",
        "স্কুলটা",
        "স্কুলে"
       ],
       "answer": 3
      }
     ]
    }
   ]
  },
  {
   "id": "u4-classifiers",
   "icon": "টা",
   "title": "Classifiers: টা, টি, গুলো, জন",
   "subtitle": "Little counting words",
   "minutes": 14,
   "goals": [
    "Count things with {{টা}} and people with {{জন}}",
    "Say “the” with {{-টা}} / {{-টি}}",
    "Make plurals with {{গুলো}} and {{-রা}}"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "In Bangla you rarely say just “two book”. You add a small **counting word**, a classifier. The same little words also work like “the”!"
    },
    {
     "type": "rule",
     "name": "টা (and টি) after a number",
     "color": "green",
     "desc": "{{টা}} is the everyday classifier. {{টি}} is the neater, more formal version you'll see in books.",
     "examples": [
      {
       "t": "একটা আম",
       "tr": "ekta am",
       "mean": "a mango / one mango",
       "hl": "একটা"
      },
      {
       "t": "তিনটা কলম",
       "tr": "tinta kolom",
       "mean": "three pens",
       "hl": "তিনটা"
      },
      {
       "t": "একটি গল্প",
       "tr": "ekti golpo",
       "mean": "a story (more formal)",
       "hl": "একটি"
      }
     ]
    },
    {
     "type": "rule",
     "name": "টা after a noun = “the”",
     "color": "blue",
     "desc": "Stick {{-টা}} on the end of a noun to point to a particular one.",
     "examples": [
      {
       "t": "বইটা",
       "tr": "boita",
       "mean": "the book",
       "hl": "টা"
      },
      {
       "t": "ছেলেটা",
       "tr": "chheleta",
       "mean": "the boy",
       "hl": "টা"
      },
      {
       "t": "বইটা কোথায়?",
       "tr": "boita kothay?",
       "mean": "Where's the book?",
       "hl": "টা"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "{{একটা বই}} = **a** book (any book). {{বইটা}} = **the** book (that one). Same little word, different place!"
    },
    {
     "type": "rule",
     "name": "গুলো and -রা = plural “the …s”",
     "color": "orange",
     "desc": "Add {{-গুলো}} to things (formal: {{-গুলি}}), and usually {{-রা}} to people.",
     "examples": [
      {
       "t": "বইগুলো",
       "tr": "boigulo",
       "mean": "the books",
       "hl": "গুলো"
      },
      {
       "t": "আমগুলো",
       "tr": "amgulo",
       "mean": "the mangoes",
       "hl": "গুলো"
      },
      {
       "t": "ছেলেরা",
       "tr": "chhelera",
       "mean": "the boys",
       "hl": "রা"
      },
      {
       "t": "শিক্ষকরা",
       "tr": "shikkhokra",
       "mean": "the teachers",
       "hl": "রা"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "After a number, **no plural ending**: {{পাঁচটা বই}} (five books), never {{পাঁচটা বইগুলো}}."
    },
    {
     "type": "rule",
     "name": "জন = counting people",
     "color": "purple",
     "desc": "Use {{জন}} when counting people. Ask “how many people?” with {{কয়জন}}.",
     "examples": [
      {
       "t": "একজন লোক",
       "tr": "ekjon lok",
       "mean": "one person",
       "hl": "একজন"
      },
      {
       "t": "দুইজন ছাত্র",
       "tr": "duijon chhatro",
       "mean": "two students",
       "hl": "দুইজন"
      },
      {
       "t": "কয়জন আসবে?",
       "tr": "koyjon ashbe?",
       "mean": "How many people will come?",
       "hl": "কয়জন"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Noun",
      "a / one",
      "the",
      "the (plural)"
     ],
     "rows": [
      [
       "{{বই}} book",
       "{{একটা বই}}",
       "{{বইটা}}",
       "{{বইগুলো}}"
      ],
      [
       "{{আম}} mango",
       "{{একটা আম}}",
       "{{আমটা}}",
       "{{আমগুলো}}"
      ],
      [
       "{{ছেলে}} boy",
       "{{একটা ছেলে}}",
       "{{ছেলেটা}}",
       "{{ছেলেরা}}"
      ]
     ]
    },
    {
     "type": "sentence",
     "t": "আমার একটা প্রশ্ন আছে।",
     "tr": "amar ekta proshno achhe",
     "mean": "I have a question.",
     "words": [
      {
       "t": "আমার",
       "mean": "my"
      },
      {
       "t": "একটা",
       "mean": "a, one"
      },
      {
       "t": "প্রশ্ন",
       "mean": "question"
      },
      {
       "t": "আছে",
       "mean": "exists"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "In West Bengal you'll hear {{-টে}} and {{দুটো}}: {{তিনটে}}, {{দুটো বই}}. In Bangladesh, {{তিনটা}} and {{দুইটা}} are normal."
    },
    {
     "type": "practice",
     "text": "Read aloud.",
     "lines": [
      "একটা আম",
      "আমটা খুব মিষ্টি।",
      "আমগুলো কোথায়?",
      "দুইজন ছাত্র",
      "আমার একটা প্রশ্ন আছে।"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "How do you say “the book”?",
       "options": [
        "একটা বই",
        "বইগুলো",
        "বইটা",
        "বইজন"
       ],
       "answer": 2
      },
      {
       "q": "How do you say “five books”?",
       "options": [
        "পাঁচ বইগুলো",
        "পাঁচটা বইগুলো",
        "পাঁচজন বই",
        "পাঁচটা বই"
       ],
       "answer": 3
      },
      {
       "q": "Which classifier do you use to count people?",
       "options": [
        "টা",
        "জন",
        "গুলো",
        "টি"
       ],
       "answer": 1
      },
      {
       "q": "Listen. What does it mean?",
       "say": "আমগুলো",
       "options": [
        "the mangoes",
        "one mango",
        "the mango",
        "five mangoes"
       ],
       "answer": 0
      },
      {
       "q": "{{টি}} is…",
       "options": [
        "a plural ending",
        "only for people",
        "a more formal টা",
        "a question word"
       ],
       "answer": 2
      },
      {
       "q": "Listen. What is being asked?",
       "say": "কয়জন আসবে?",
       "options": [
        "When will they come?",
        "Who will come today?",
        "Will you come too?",
        "How many people will come?"
       ],
       "answer": 3
      },
      {
       "q": "“The boys” is usually…",
       "options": [
        "ছেলেরা",
        "ছেলেটা",
        "একটা ছেলে",
        "দুইজন"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u4-adjectives",
   "icon": "বড়",
   "title": "Adjectives & Comparisons",
   "subtitle": "big, bigger, biggest",
   "minutes": 14,
   "goals": [
    "Use adjectives before nouns and after them",
    "Compare with {{চেয়ে}} or {{থেকে}}",
    "Say “the most” with {{সবচেয়ে}}"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Bangla adjectives are wonderfully lazy: they **never change**. No “-er”, no “-est”, no agreement. Just learn the word and use it!"
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "বড়",
       "tr": "boro",
       "mean": "big; older"
      },
      {
       "t": "ছোট",
       "tr": "chhoto",
       "mean": "small; younger"
      },
      {
       "t": "ভালো",
       "tr": "bhalo",
       "mean": "good"
      },
      {
       "t": "খারাপ",
       "tr": "kharap",
       "mean": "bad"
      },
      {
       "t": "নতুন",
       "tr": "notun",
       "mean": "new"
      },
      {
       "t": "পুরানো",
       "tr": "purano",
       "mean": "old (things)"
      },
      {
       "t": "গরম",
       "tr": "gorom",
       "mean": "hot"
      },
      {
       "t": "ঠান্ডা",
       "tr": "thanda",
       "mean": "cold"
      },
      {
       "t": "সুন্দর",
       "tr": "shundor",
       "mean": "beautiful"
      },
      {
       "t": "লম্বা",
       "tr": "lomba",
       "mean": "tall, long"
      },
      {
       "t": "দামি",
       "tr": "dami",
       "mean": "expensive"
      },
      {
       "t": "সস্তা",
       "tr": "shosta",
       "mean": "cheap"
      }
     ],
     "title": "Useful adjectives"
    },
    {
     "type": "rule",
     "name": "Before the noun, or at the end",
     "color": "green",
     "desc": "Before a noun it describes it; at the end it works like “is …” (no verb needed).",
     "examples": [
      {
       "t": "বড় বাড়ি",
       "tr": "boro bari",
       "mean": "a big house",
       "hl": "বড়"
      },
      {
       "t": "বাড়িটা বড়।",
       "tr": "barita boro",
       "mean": "The house is big.",
       "hl": "বড়"
      },
      {
       "t": "খুব ঠান্ডা পানি",
       "tr": "khub thanda pani",
       "mean": "very cold water",
       "hl": "খুব"
      }
     ]
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "খুব",
       "tr": "khub",
       "mean": "very"
      },
      {
       "t": "একটু",
       "tr": "ektu",
       "mean": "a little"
      },
      {
       "t": "অনেক",
       "tr": "onek",
       "mean": "a lot, much"
      },
      {
       "t": "আরও",
       "tr": "aro",
       "mean": "more, even more"
      }
     ],
     "title": "Little helpers"
    },
    {
     "type": "rule",
     "name": "Comparing: X Y-এর চেয়ে …",
     "color": "blue",
     "desc": "Put the thing you compare with in the {{-র}} form, then {{চেয়ে}} (than). You can also use {{থেকে}} without {{-র}}.",
     "examples": [
      {
       "t": "রাফি সারার চেয়ে লম্বা।",
       "tr": "rafi sharar cheye lomba",
       "mean": "Rafi is taller than Sara.",
       "hl": "চেয়ে"
      },
      {
       "t": "ঢাকা সিলেট থেকে বড়।",
       "tr": "dhaka shilet theke boro",
       "mean": "Dhaka is bigger than Sylhet.",
       "hl": "থেকে"
      },
      {
       "t": "আজ কালকের চেয়ে গরম।",
       "tr": "aj kalker cheye gorom",
       "mean": "Today is hotter than yesterday.",
       "hl": "চেয়ে"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "আমার ভাই আমার চেয়ে লম্বা।",
     "tr": "amar bhai amar cheye lomba",
     "mean": "My brother is taller than me.",
     "words": [
      {
       "t": "আমার",
       "mean": "my"
      },
      {
       "t": "ভাই",
       "mean": "brother"
      },
      {
       "t": "আমার",
       "mean": "of me"
      },
      {
       "t": "চেয়ে",
       "mean": "than"
      },
      {
       "t": "লম্বা",
       "mean": "tall"
      }
     ],
     "note": "Literally: “my brother, than me, tall”. The adjective {{লম্বা}} doesn't change."
    },
    {
     "type": "rule",
     "name": "The most: সবচেয়ে",
     "color": "purple",
     "desc": "{{সবচেয়ে}} = “than all”, so “the most”.",
     "examples": [
      {
       "t": "ঢাকা বাংলাদেশের সবচেয়ে বড় শহর।",
       "tr": "dhaka bangladesher shobcheye boro shohor",
       "mean": "Dhaka is the biggest city in Bangladesh.",
       "hl": "সবচেয়ে"
      },
      {
       "t": "আম আমার সবচেয়ে প্রিয় ফল।",
       "tr": "am amar shobcheye priyo fol",
       "mean": "Mango is my favourite fruit.",
       "hl": "সবচেয়ে"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "English: big → bigger → biggest. Bangla: {{বড়}} → {{চেয়ে বড়}} (than … big) → {{সবচেয়ে বড়}} (than all, big). The adjective stays the same; only the helper word changes."
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "{{বড়}} and {{ছোট}} also mean older and younger: {{বড় ভাই}} (older brother), {{ছোট বোন}} (younger sister)."
    },
    {
     "type": "practice",
     "text": "Compare things around you.",
     "lines": [
      "বাড়িটা বড়।",
      "রাফি সারার চেয়ে লম্বা।",
      "আজ খুব গরম।",
      "আম আমার সবচেয়ে প্রিয় ফল।",
      "এটা আরও ভালো।"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "{{নতুন}} means…",
       "options": [
        "old",
        "new",
        "cheap",
        "good"
       ],
       "answer": 1
      },
      {
       "q": "How do you say “Rafi is taller than Sara”?",
       "options": [
        "রাফি সারা লম্বা।",
        "রাফি সারার চেয়ে লম্বা।",
        "রাফির সারা চেয়ে লম্বা।",
        "রাফি সবচেয়ে সারা।"
       ],
       "answer": 1
      },
      {
       "q": "Which word means “the most”?",
       "options": [
        "চেয়ে",
        "একটু",
        "খুব",
        "সবচেয়ে"
       ],
       "answer": 3
      },
      {
       "q": "Listen. What does it mean?",
       "say": "আজ খুব গরম।",
       "options": [
        "Today is very hot.",
        "Today is a bit cold.",
        "Yesterday was hot.",
        "The water is hot."
       ],
       "answer": 0
      },
      {
       "q": "{{বড় ভাই}} is…",
       "options": [
        "tall man",
        "younger brother",
        "older brother",
        "uncle"
       ],
       "answer": 2
      },
      {
       "q": "Listen. Which is bigger?",
       "say": "ঢাকা সিলেট থেকে বড়।",
       "options": [
        "Sylhet",
        "they're the same",
        "Dhaka",
        "it doesn't say"
       ],
       "answer": 2
      },
      {
       "q": "Do Bangla adjectives change for plural nouns?",
       "options": [
        "Yes, add -গুলো",
        "Yes, add -রা",
        "No, never",
        "Only for people"
       ],
       "answer": 2
      }
     ]
    }
   ]
  },
  {
   "id": "u4-possessives",
   "icon": "আমার",
   "title": "Possessives: My, Your, Their",
   "subtitle": "আমার, তোমার, আপনার, তার…",
   "minutes": 12,
   "goals": [
    "Say my, your, his, her, our, their",
    "Ask “whose?” with {{কার}}",
    "Say “mine”, “yours” and “I have”"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "You already know {{আমার}} (my). All the other possessives follow the same pattern: the {{-র}} ending again!"
    },
    {
     "type": "table",
     "head": [
      "Pronoun",
      "Possessive",
      "Say it",
      "Meaning"
     ],
     "rows": [
      [
       "{{আমি}}",
       "{{আমার}}",
       "amar",
       "my, mine"
      ],
      [
       "{{তুই}}",
       "{{তোর}}",
       "tor",
       "your (intimate)"
      ],
      [
       "{{তুমি}}",
       "{{তোমার}}",
       "tomar",
       "your (friendly)"
      ],
      [
       "{{আপনি}}",
       "{{আপনার}}",
       "apnar",
       "your (polite)"
      ],
      [
       "{{সে}}",
       "{{তার}}",
       "tar",
       "his, her"
      ],
      [
       "{{তিনি}} / {{উনি}}",
       "{{তাঁর}} / {{ওনার}}",
       "tar / onar",
       "his, her (respectful)"
      ],
      [
       "{{আমরা}}",
       "{{আমাদের}}",
       "amader",
       "our"
      ],
      [
       "{{তোমরা}}",
       "{{তোমাদের}}",
       "tomader",
       "your (plural)"
      ],
      [
       "{{তারা}}",
       "{{তাদের}}",
       "tader",
       "their"
      ]
     ],
     "title": "Possessive words"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Singular adds {{-র}} ({{আমার}}, {{তোমার}}); plural adds {{-দের}} ({{আমাদের}}, {{তোমাদের}}). Same pattern for nouns: {{ছেলেদের স্কুল}} (the boys' school)."
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "{{তার}} means “his” **and** “her”. No gender again! The little moon sign in {{তাঁর}} (chandrabindu) shows respect, though it sounds almost the same."
    },
    {
     "type": "rule",
     "name": "Same word for “my” and “mine”",
     "color": "green",
     "desc": "Put the possessive at the end and it means “mine / yours…”.",
     "examples": [
      {
       "t": "এটা আমার বই।",
       "tr": "eta amar boi",
       "mean": "This is my book.",
       "hl": "আমার"
      },
      {
       "t": "বইটা আমার।",
       "tr": "boita amar",
       "mean": "The book is mine.",
       "hl": "আমার"
      },
      {
       "t": "ব্যাগটা কি তোমার?",
       "tr": "byagta ki tomar?",
       "mean": "Is the bag yours?",
       "hl": "তোমার"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Whose? কার?",
     "color": "blue",
     "desc": "{{কার}} = whose. Answer with a possessive.",
     "examples": [
      {
       "t": "এটা কার ফোন?",
       "tr": "eta kar fon?",
       "mean": "Whose phone is this?",
       "hl": "কার"
      },
      {
       "t": "এটা সারার।",
       "tr": "eta sharar",
       "mean": "It's Sara's.",
       "hl": "সারার"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "আমাদের বাড়িতে একটা বিড়াল আছে।",
     "tr": "amader barite ekta biral achhe",
     "mean": "There's a cat in our house.",
     "words": [
      {
       "t": "আমাদের",
       "mean": "our"
      },
      {
       "t": "বাড়িতে",
       "mean": "in house"
      },
      {
       "t": "একটা",
       "mean": "a"
      },
      {
       "t": "বিড়াল",
       "mean": "cat"
      },
      {
       "t": "আছে",
       "mean": "is (there)"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Remember “have”: {{আমার একটা বিড়াল আছে}} = I have a cat (“my one cat exists”). With a polite “you”: {{আপনার কি গাড়ি আছে?}} (Do you have a car?)"
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Teacher",
       "t": "এই কলমটা কার?",
       "tr": "ei kolomta kar?",
       "mean": "Whose pen is this?"
      },
      {
       "who": "Rafi",
       "t": "ওটা আমার না। মনে হয় তানিয়ার।",
       "tr": "ota amar na. mone hoy taniar",
       "mean": "That's not mine. I think it's Tania's."
      },
      {
       "who": "Tania",
       "t": "জি, আমার। ধন্যবাদ!",
       "tr": "ji, amar. dhonnobad!",
       "mean": "Yes, it's mine. Thank you!"
      }
     ],
     "title": "Whose pen?"
    },
    {
     "type": "practice",
     "text": "Read aloud.",
     "lines": [
      "এটা আমার বই।",
      "বইটা আমার।",
      "এটা কার ফোন?",
      "তাদের বাড়ি ঢাকায়।",
      "আমাদের একটা বিড়াল আছে।"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "{{আমাদের}} means…",
       "options": [
        "my",
        "their",
        "your",
        "our"
       ],
       "answer": 3
      },
      {
       "q": "How do you say “your” to a teacher?",
       "options": [
        "আপনার",
        "তোর",
        "তোমার",
        "তার"
       ],
       "answer": 0
      },
      {
       "q": "Listen. What is being asked?",
       "say": "এটা কার ফোন?",
       "options": [
        "Whose phone is this?",
        "Where is my phone?",
        "Is this a new phone?",
        "Who is on the phone?"
       ],
       "answer": 0
      },
      {
       "q": "{{তার}} can mean…",
       "options": [
        "only his",
        "his or her",
        "their",
        "only her"
       ],
       "answer": 1
      },
      {
       "q": "How do you say “The book is mine”?",
       "options": [
        "আমি বইটা।",
        "বইটা আমার।",
        "আমার বইগুলো।",
        "বইটা আমাকে।"
       ],
       "answer": 1
      },
      {
       "q": "Listen. What does it mean?",
       "say": "আমার একটা বিড়াল আছে।",
       "options": [
        "I like cats.",
        "The cat is in the garden.",
        "We don't have a cat.",
        "I have a cat."
       ],
       "answer": 3
      },
      {
       "q": "“Their” is…",
       "options": [
        "তাদের",
        "তার",
        "তোমাদের",
        "আমাদের"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u4-requests",
   "icon": "দিন",
   "title": "Polite Requests & Commands",
   "subtitle": "Sit, come, please give…",
   "minutes": 15,
   "goals": [
    "Give commands at all three levels",
    "Make soft, polite requests",
    "Say “don't” and “let's”"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "“Come in!”, “Sit down!”, “Could you help me?”. Commands also follow the three levels of respect. Let's learn to ask nicely, Bangla style."
    },
    {
     "type": "table",
     "head": [
      "Verb",
      "তুই",
      "তুমি",
      "আপনি (spoken)",
      "আপনি (formal)"
     ],
     "rows": [
      [
       "{{করা}} do",
       "{{কর}}",
       "{{করো}}",
       "{{করেন}}",
       "{{করুন}}"
      ],
      [
       "{{বসা}} sit",
       "{{বস}}",
       "{{বসো}}",
       "{{বসেন}}",
       "{{বসুন}}"
      ],
      [
       "{{দেখা}} look",
       "{{দেখ}}",
       "{{দেখো}}",
       "{{দেখেন}}",
       "{{দেখুন}}"
      ],
      [
       "{{খাওয়া}} eat",
       "{{খা}}",
       "{{খাও}}",
       "{{খান}}",
       "{{খান}}"
      ],
      [
       "{{যাওয়া}} go",
       "{{যা}}",
       "{{যাও}}",
       "{{যান}}",
       "{{যান}}"
      ],
      [
       "{{আসা}} come",
       "{{আয়}}",
       "{{এসো}} / {{আসো}}",
       "{{আসেন}}",
       "{{আসুন}}"
      ],
      [
       "{{দেওয়া}} give",
       "{{দে}}",
       "{{দাও}}",
       "{{দেন}}",
       "{{দিন}}"
      ]
     ],
     "title": "Commands at three levels"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "In Bangladesh, everyday polite speech uses the {{-েন}} forms ({{বসেন}}, {{আসেন}}). Signs, announcements and careful speech use {{-ুন}} ({{বসুন}}, {{আসুন}}). Both are polite with {{আপনি}}."
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "The {{তুই}} command is the bare root: {{কর}}, {{বস}}, {{খা}}. Short and sharp, so only use it with very close friends!"
    },
    {
     "type": "rule",
     "name": "Softening words",
     "color": "green",
     "desc": "Add {{একটু}} (a little) to almost any request. It works like “please”.",
     "examples": [
      {
       "t": "একটু বসেন।",
       "tr": "ektu boshen",
       "mean": "Please sit down.",
       "hl": "একটু"
      },
      {
       "t": "দয়া করে অপেক্ষা করুন।",
       "tr": "doya kore opekkha korun",
       "mean": "Please wait. (formal)",
       "hl": "দয়া করে"
      },
      {
       "t": "একটু পানি দাও।",
       "tr": "ektu pani dao",
       "mean": "Give me some water, please.",
       "hl": "একটু"
      }
     ]
    },
    {
     "type": "rule",
     "name": "The most polite: ask a future question",
     "color": "blue",
     "desc": "With {{আপনি}}, a future-tense question is the gentlest way to ask.",
     "examples": [
      {
       "t": "একটু সাহায্য করবেন?",
       "tr": "ektu shahajjo korben?",
       "mean": "Could you help me a little?",
       "hl": "করবেন"
      },
      {
       "t": "দরজাটা খুলবেন?",
       "tr": "dorjata khulben?",
       "mean": "Would you open the door?",
       "hl": "খুলবেন"
      },
      {
       "t": "আবার আসবেন।",
       "tr": "abar ashben",
       "mean": "Please come again.",
       "hl": "আসবেন"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Level",
      "Don't go",
      "Don't do it"
     ],
     "rows": [
      [
       "{{তুই}}",
       "{{যাস না}}",
       "{{করিস না}}"
      ],
      [
       "{{তুমি}}",
       "{{যেও না}}",
       "{{কোরো না}}"
      ],
      [
       "{{আপনি}}",
       "{{যাবেন না}}",
       "{{করবেন না}}"
      ]
     ],
     "title": "“Don't…”"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "For “don't”, the verb changes a little: {{তুমি}} uses {{যেও না}}, {{কোরো না}}, and {{আপনি}} uses the future form + {{না}}: {{যাবেন না}}."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "চলো যাই।",
       "tr": "cholo jai",
       "mean": "Let's go.",
       "hl": "চলো"
      },
      {
       "t": "চলেন খাই।",
       "tr": "cholen khai",
       "mean": "Let's eat. (polite)",
       "hl": "চলেন"
      },
      {
       "t": "চলো খেলি।",
       "tr": "cholo kheli",
       "mean": "Let's play.",
       "hl": "চলো"
      }
     ],
     "title": "Let's…"
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Host",
       "t": "আসসালামু আলাইকুম! আসেন, ভেতরে আসেন।",
       "tr": "assalamu alaikum! ashen, bhetore ashen",
       "mean": "Hello! Come, come inside."
      },
      {
       "who": "Guest",
       "t": "ওয়ালাইকুম আসসালাম।",
       "tr": "walaikum assalam",
       "mean": "Hello."
      },
      {
       "who": "Host",
       "t": "বসেন। চা খাবেন?",
       "tr": "boshen. cha khaben?",
       "mean": "Sit down. Would you like tea?"
      },
      {
       "who": "Guest",
       "t": "জি, ধন্যবাদ। একটু পানিও দেবেন?",
       "tr": "ji, dhonnobad. ektu panio deben?",
       "mean": "Yes, thanks. Could I have some water too?"
      },
      {
       "who": "Host",
       "t": "অবশ্যই। একটু অপেক্ষা করেন।",
       "tr": "obosshoi. ektu opekkha koren",
       "mean": "Of course. Wait just a moment."
      }
     ],
     "title": "A guest arrives"
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Guests are honoured in Bangladesh. Hosts will keep offering food: {{আরেকটু নেন!}} (Take a bit more!). It's polite to accept a little."
    },
    {
     "type": "practice",
     "text": "Read aloud at all three levels.",
     "lines": [
      "বস। বসো। বসেন।",
      "একটু সাহায্য করবেন?",
      "আবার আসবেন।",
      "যেও না!",
      "চলো যাই।"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "Which is a polite command to a guest?",
       "options": [
        "বস।",
        "বসিস।",
        "বসলাম।",
        "বসেন।"
       ],
       "answer": 3
      },
      {
       "q": "What is the most polite way to ask for help?",
       "options": [
        "সাহায্য কর।",
        "সাহায্য করো।",
        "একটু সাহায্য করবেন?",
        "সাহায্য করিস না।"
       ],
       "answer": 2
      },
      {
       "q": "Listen. What does it mean?",
       "say": "আবার আসবেন।",
       "options": [
        "Please come in.",
        "Don't come here.",
        "Please come again.",
        "Let's go now."
       ],
       "answer": 2
      },
      {
       "q": "“Don't go” to a friend (তুমি) is…",
       "options": [
        "যাব না",
        "যেও না",
        "যাইনি",
        "যান"
       ],
       "answer": 1
      },
      {
       "q": "{{চলো যাই}} means…",
       "options": [
        "I'm going.",
        "Let's go.",
        "Did you go?",
        "Go away."
       ],
       "answer": 1
      },
      {
       "q": "Listen. What is the host offering?",
       "say": "চা খাবেন?",
       "options": [
        "water",
        "rice",
        "a chair",
        "tea"
       ],
       "answer": 3
      },
      {
       "q": "Which softening word works like “please”?",
       "options": [
        "একটু",
        "খুব",
        "না",
        "আরও"
       ],
       "answer": 0
      },
      {
       "q": "The formal written form of {{দেন}} (give) is…",
       "options": [
        "দাও",
        "দিন",
        "দে",
        "দিলাম"
       ],
       "answer": 1
      }
     ]
    }
   ]
  }
 ]
});
