/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Verse {
  id: number;
  hindi: string;
  english: string;
  meaning: string;
  startTime?: number; // in seconds for audio sync
}

export const HANUMAN_CHALISA: Verse[] = [
  {
    id: 1,
    hindi: "श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि ।\nबरनऊँ रघुबर बिमल जसु जो दायकु फल चारि ॥",
    english: "Shri Guru Charan Saroj Raj, Nij Manu Mukuru Sudhari |\nBarnau Raghuvar Bimal Jasu, Jo Dayaku Phal Chari ||",
    meaning: "Having cleansed the mirror of my mind with the dust of my Guru's lotus feet, I sing the pure fame of the chief of the Raghu dynasty (Lord Rama), which bestows the four fruits (Dharma, Artha, Kama, and Moksha).",
    startTime: 0
  },
  {
    id: 2,
    hindi: "बुद्धिहीन तनु जानिके सुमिरौं पवन-कुमार ।\nबल बुधि बिद्या देहु मोहिं हरहु कलेस बिकार ॥",
    english: "Buddhiheen Tanu Janike, Sumirau Pavan Kumar |\nBal Buddhi Vidya Dehu Mohi, Harahu Kalesh Bikar ||",
    meaning: "Knowing myself to be devoid of intelligence, I remember the Son of the Wind (Hanuman). Grant me strength, wisdom, and knowledge, and remove all my miseries and impurities.",
    startTime: 15
  },
  {
    id: 3,
    hindi: "जय हनुमान ज्ञान गुन सागर ।\nजय कपीस तिहुँ लोक उजागर ॥",
    english: "Jai Hanuman Gyaan Gun Sagar |\nJai Kapis Tihun Lok Ujagar ||",
    meaning: "Victory to Hanuman, the ocean of wisdom and virtue! Victory to the Lord of monkeys, who enlightens the three worlds.",
    startTime: 30
  },
  {
    id: 4,
    hindi: "राम दूत अतुलित बल धामा ।\nअंजनि-पुत्र पवनसुत नामा ॥",
    english: "Ram Doot Atulit Bal Dhama |\nAnjani-Putra Pavansut Nama ||",
    meaning: "Messenger of Rama, repository of immeasurable strength, Son of Anjani, you are known as the Son of the Wind.",
    startTime: 37
  },
  {
    id: 5,
    hindi: "महाबीर बिक्रम बजरंगी ।\nकुमति निवार सुमति के संगी ॥",
    english: "Mahavir Vikram Bajrangi |\nKumati Nivar Sumati Ke Sangi ||",
    meaning: "Great hero, possessor of great valor and a diamond-like body, you dispel evil thoughts and are a companion to those of good wisdom.",
    startTime: 44
  },
  {
    id: 6,
    hindi: "कंचन बरन बिराज सुबेसा ।\nकानन कुंडल कुंचित केसा ॥",
    english: "Kanchan Baran Biraj Subesa |\nKanan Kundal Kunchit Kesa ||",
    meaning: "You shine with a golden complexion and are beautifully dressed. You have earrings on your ears and curly hair.",
    startTime: 51
  },
  {
    id: 7,
    hindi: "हाथ बज्र औ ध्वजा बिराजै ।\nकाँधे मूँज जनेऊ साजै ॥",
    english: "Hath Bajra Au Dhvaja Virajai |\nKandhe Munj Janeu Sajai ||",
    meaning: "A thunderbolt (mace) and a flag shine in your hands; a sacred thread made of Munj grass adorns your shoulder.",
    startTime: 58
  },
  {
    id: 8,
    hindi: "संकर सुवन केसरीनंदन ।\nतेज प्रताप महा जग बंदन ॥",
    english: "Sankar Suvan Kesarinandan |\nTej Pratap Maha Jag Bandan ||",
    meaning: "Incarnation of Shiva and son of Kesari, your brilliance and glory are worshiped by the whole world.",
    startTime: 65
  },
  {
    id: 9,
    hindi: "बिद्यावान गुनी अति चातुर ।\nराम काज करिबे को आतुर ॥",
    english: "Vidyavan Guni Ati Chatur |\nRam Kaj Karibe Ko Aatur ||",
    meaning: "Extremely wise, virtuous, and clever, you are always eager to do Lord Rama's work.",
    startTime: 72
  },
  {
    id: 10,
    hindi: "प्रभु चरित्र सुनिबे को रसिया ।\nराम लखन सीता मन बसिया ॥",
    english: "Prabhu Charitra Sunibe Ko Rasiya |\nRam Lakhan Sita Man Basiya ||",
    meaning: "You delight in listening to the stories of the Lord. Rama, Lakshmana, and Sita reside in your heart.",
    startTime: 79
  },
  {
    id: 11,
    hindi: "सूक्ष्म रूप धरि सियहिं दिखावा ।\nबिकट रूप धरि लंक जरावा ॥",
    english: "Sukshm Roop Dhari Siyahin Dikhava |\nBikat Roop Dhari Lank Jarava ||",
    meaning: "You appeared before Sita in a tiny form, but in a fearsome form, you burnt the city of Lanka.",
    startTime: 86
  },
  {
    id: 12,
    hindi: "भीम रूप धरि असुर सँहारे ।\nरामचंद्र के काज सँवारे ॥",
    english: "Bheem Roop Dhari Asur Sanhare |\nRamachandra Ke Kaj Sanvare ||",
    meaning: "In a gigantic form, you killed the demons and accomplished Lord Rama's mission.",
    startTime: 93
  },
  {
    id: 13,
    hindi: "लाय सजीवन लखन जियाये ।\nश्रीरघुबीर हरषि उर लाये ॥",
    english: "Lay Sajivan Lakhan Jiyaye |\nShri Raghubir Harashi Ur Laye ||",
    meaning: "You brought the Sanjivani herb and revived Lakshmana. Lord Rama embraced you joyfully.",
    startTime: 100
  },
  {
    id: 14,
    hindi: "रघुपति कीन्ही बहुत बड़ाई ।\nतुम मम प्रिय भरतहि सम भाई ॥",
    english: "Raghupati Kinhi Bahut Badai |\nTum Mam Priya Bharatahi Sam Bhai ||",
    meaning: "Lord Rama praised you highly, saying, \"You are as dear to me as my brother Bharata.\"",
    startTime: 107
  },
  {
    id: 15,
    hindi: "सहस बदन तुम्हरो जस गावैं ।\nअस कहि श्रीपति कंठ लगावैं ॥",
    english: "Sahas Badan Tumharo Jas Gavain |\nAs Kahi Shripati Kanth Lagavain ||",
    meaning: "\"May the thousand-headed Seshanaga sing your glory,\" saying this, the Lord of Shri (Rama) embraced you once more.",
    startTime: 114
  },
  {
    id: 16,
    hindi: "सनकादिक ब्रह्मादि मुनीसा ।\nनारद सारद सहित अहीसा ॥",
    english: "Sanakadik Brahmadi Munisa |\nNarad Sarad Sahit Ahisa ||",
    meaning: "Sanaka and other sages, Brahma and other gods, Narada, Sarada (Saraswati), and the king of serpents (Seshanaga) sing your glory.",
    startTime: 121
  },
  {
    id: 17,
    hindi: "जम कुबेर दिगपाल जहाँ ते ।\nकबि कोबिद कहि सके कहाँ ते ॥",
    english: "Jam Kuber Digpal Jahan Te |\nKabi Kobid Kahi Sake Kahan Te ||",
    meaning: "Even Yama, Kubera, and the guardians of the directions strive to sing your fame; how can a mere poet or scholar describe your glory?",
    startTime: 128
  },
  {
    id: 18,
    hindi: "तुम उपकार सुग्रीवहिं कीन्हा ।\nराम मिलाय राज पद दीन्हा ॥",
    english: "Tum Upkar Sugrivahin Kinha |\nRam Milay Raj Pad Dinha ||",
    meaning: "You rendered great help to Sugriva by introducing him to Rama and helping him regain his kingship.",
    startTime: 135
  },
  {
    id: 19,
    hindi: "तुम्हरो मंत्र बिभीषन माना ।\nलंकेस्वर भए सब जग जाना ॥",
    english: "Tumharo Mantra Bibhishan Mana |\nLankesvar Bhaye Sab Jag Jana ||",
    meaning: "Vibhishana followed your advice, and he became the King of Lanka, as the whole world knows.",
    startTime: 142
  },
  {
    id: 20,
    hindi: "जुग सहस्र जोजन पर भानू ।\nलील्यो ताहि मधुर फल जानू ॥",
    english: "Jug Sahasra Jojan Par Bhanu |\nLilyo Tahi Madhur Phal Janu ||",
    meaning: "Though the Sun is millions of miles away, you swallowed it, thinking it to be a sweet fruit.",
    startTime: 149
  },
  {
    id: 21,
    hindi: "प्रभु मुद्रिका मेलि मुख माहीं ।\nजलधि लाँधि गये अचरज नाहीं ॥",
    english: "Prabhu Mudrika Meli Mukh Mahin |\nJaladhi Landhi Gaye Achraj Nahin ||",
    meaning: "Carrying the Lord's signet ring in your mouth, you leaped across the ocean; it is no surprise for you.",
    startTime: 156
  },
  {
    id: 22,
    hindi: "दुर्गम काज जगत के जेते ।\nसुगम अनुग्रह तुम्हरे तेते ॥",
    english: "Durgam Kaj Jagat Ke Jete |\nSugam Anugrah Tumhare Tete ||",
    meaning: "All difficult tasks in the world become easy by your grace.",
    startTime: 163
  },
  {
    id: 23,
    hindi: "राम दुआरे तुम रखवारे ।\nहोत न आज्ञा बिनु पैसारे ॥",
    english: "Ram Duare Tum Rakhvare |\nHot Na Agya Binu Paisare ||",
    meaning: "You are the sentinel at Lord Rama's door; no one can enter without your permission.",
    startTime: 170
  },
  {
    id: 24,
    hindi: "सब सुख लहै तुम्हारी सरना ।\nतुम रक्षक काहू को डरना ॥",
    english: "Sab Sukh Lahai Tumhari Sarna |\nTum Rakshak Kahu Ko Darna ||",
    meaning: "Refuge in you brings all happiness; when you are the protector, what is there to fear?",
    startTime: 177
  },
  {
    id: 25,
    hindi: "आपन तेज सम्हारो आपै ।\nतीनों लोक हाँक ते काँपै ॥",
    english: "Aapan Tej Samharo Aapai |\nTinon Lok Hank Te Kanpai ||",
    meaning: "Only you can withstand your own brilliance; all three worlds tremble at your roar.",
    startTime: 184
  },
  {
    id: 26,
    hindi: "भूत पिसार निकट नहिं आवै ।\nमहाबीर जब नाम सुनावै ॥",
    english: "Bhoot Pisar Nikat Nahin Aavai |\nMahavir Jab Nam Sunavai ||",
    meaning: "Ghosts and evil spirits do not venture near when the name of Mahavir is chanted.",
    startTime: 191
  },
  {
    id: 27,
    hindi: "नासै रोग हरै सब पीरा ।\nजपत निरंतर हनुमत बीरा ॥",
    english: "Nasai Rog Harai Sab Pira |\nJapat Nirantar Hanumat Bira ||",
    meaning: "All diseases flee and all pains vanish when the name of the brave Hanuman is continuously chanted.",
    startTime: 198
  },
  {
    id: 28,
    hindi: "संकट तें हनुमान छुड़ावै ।\nमन क्रम बचन ध्यान जो लावै ॥",
    english: "Sankat Ten Hanuman Chhudavai |\nMan Kram Bachan Dhyan Jo Lavai ||",
    meaning: "Hanuman releases from trouble those who remember him in thought, word, and deed.",
    startTime: 205
  },
  {
    id: 29,
    hindi: "सब पर राम तपस्वी राजा ।\nतिन के काज सकल तुम साजा ॥",
    english: "Sab Par Ram Tapasvi Raja |\nTin Ke Kaj Sakal Tum Saja ||",
    meaning: "Lord Rama is the supreme King of ascetics, and you accomplished all his tasks.",
    startTime: 212
  },
  {
    id: 30,
    hindi: "और मनोरथ जो कोई लावै ।\nसोइ अमित जीवन फल पावै ॥",
    english: "Aur Manorath Jo Koi Lavai |\nSoi Amit Jivan Phal Pavai ||",
    meaning: "Whoever brings any desire to you will obtain the unending fruit of life.",
    startTime: 219
  },
  {
    id: 31,
    hindi: "चारों जुग परताप तुम्हारा ।\nहै परसिद्ध जगत उजियारा ॥",
    english: "Charon Jug Pratap Tumhara |\nHai Parasiddh Jagat Ujiyara ||",
    meaning: "Your glory prevails through all four ages; your fame enlightens the whole world.",
    startTime: 226
  },
  {
    id: 32,
    hindi: "साधु संत के तुम रखवारे ।\nअसुर निकंदन राम दुलारे ॥",
    english: "Sadhu Sant Ke Tum Rakhvare |\nAsur Nikandan Ram Dulare ||",
    meaning: "You are the protector of saints and sages, the destroyer of demons, and the darling of Lord Rama.",
    startTime: 233
  },
  {
    id: 33,
    hindi: "अष्ट सिद्धि नौ निधि के दाता ।\nअस बर दीन जानकी माता ॥",
    english: "Ashta Siddhi Nau Nidhi Ke Data |\nAs Bar Din Janaki Mata ||",
    meaning: "Mother Sita granted you the boon to be the giver of the eight Siddhis and nine Nidhis.",
    startTime: 240
  },
  {
    id: 34,
    hindi: "राम रसायन तुम्हरे पासा ।\nसदा रहो रघुपति के दासा ॥",
    english: "Ram Rasayan Tumhare Pasa |\nSada Raho Raghupati Ke Dasa ||",
    meaning: "You possess the elixir of Rama's name; may you always remain a servant of Lord Rama.",
    startTime: 247
  },
  {
    id: 35,
    hindi: "तुम्हरे भजन राम को पावै ।\nजनम जनम के दुख बिसरावै ॥",
    english: "Tumhare Bhajan Ram Ko Pavai |\nJanam Janam Ke Dukh Bisravai ||",
    meaning: "By singing your praise, one finds Lord Rama and forgets the miseries of many births.",
    startTime: 254
  },
  {
    id: 36,
    hindi: "अंत काल रघुबर पुर जाई ।\nजहाँ जन्म हरि भक्त कहाई ॥",
    english: "Ant Kal Raghubar Pur Jai |\nJahan Janm Hari Bhakt Kahai ||",
    meaning: "At the time of death, such a person goes to the abode of Lord Rama and is called a devotee of Hari in any future birth.",
    startTime: 261
  },
  {
    id: 37,
    hindi: "और देवता चित्त न धरई ।\nहनुमत सेइ सर्ब सुख करई ॥",
    english: "Aur Devata Chitt Na Dharai |\nHanumat Sei Sarb Sukh Karai ||",
    meaning: "Without turning to any other deity, one who serves Hanuman obtains all happiness.",
    startTime: 268
  },
  {
    id: 38,
    hindi: "संकट कटै मिटै सब पीरा ।\nजो सुमिरै हनुमत बलबीरा ॥",
    english: "Sankat Katai Mitai Sab Pira |\nJo Sumirai Hanumat Balbira ||",
    meaning: "All troubles cease and all pains vanish for those who remember the powerful Hanuman.",
    startTime: 275
  },
  {
    id: 39,
    hindi: "जय जय जय हनुमान गोसाईं ।\nकृपा करहु गुरुदेब की नाईं ॥",
    english: "Jai Jai Jai Hanuman Gosain |\nKripa Karahu Gurudeb Ki Nain ||",
    meaning: "Victory, victory, victory to Hanuman! Show your grace upon me like a divine Guru.",
    startTime: 282
  },
  {
    id: 40,
    hindi: "जो सत बार पाठ कर कोई ।\nछूटहि बंदि महा सुख होई ॥",
    english: "Jo Sat Bar Path Kar Koi |\nChhutahi Bandi Maha Sukh Hoi ||",
    meaning: "Whoever recites this a hundred times will be released from bondage and attain great happiness.",
    startTime: 289
  },
  {
    id: 41,
    hindi: "जो यह पढ़ै हनुमान चालीसा ।\nहोय सिद्धि साखी गौरीसा ॥",
    english: "Jo Yeh Padhai Hanuman Chalisa |\nHoy Siddhi Sakhi Gaurisa ||",
    meaning: "Whoever recites this Hanuman Chalisa will attain success, as Lord Shiva is the witness.",
    startTime: 296
  },
  {
    id: 42,
    hindi: "तुलसीदास सदा हरि चेरा ।\nकीजै नाथ हृदय मँह डेरा ॥",
    english: "Tulsidas Sada Hari Chera |\nKijai Nath Hriday Manh Dera ||",
    meaning: "Tulsidas is ever the servant of Lord Hari; O Lord, please reside in my heart.",
    startTime: 303
  },
  {
    id: 43,
    hindi: "पवनतनय संकट हरन मंगल मूरति रूप ।\nराम लखन सीता सहित हृदय बसहु सुर भूप ॥",
    english: "Pavantanay Sankat Haran, Mangal Murti Roop |\nRam Lakhan Sita Sahit, Hriday Basahu Sur Bhup ||",
    meaning: "O Son of the Wind, dispeller of miseries, embodiment of auspiciousness! reside in my heart along with Lord Rama, Lakshmana, and Sita, O King of Gods.",
    startTime: 310
  }
];
