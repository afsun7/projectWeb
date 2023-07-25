// import i18next from "i18next";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import HTTPAip from "i18next-http-backend";
// i18next
//   .use(initReactI18next)
//   .use(LanguageDetector)
//   .use(HTTPAip)
//   .init({ fallbackLng: "en", interpolation: { escapeValue: false } });

// export default i18next;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
const resources = {
  en: {
    translation: {
      search: "Quick Search",
      head: "FINIBUS DICTUM LOBORTIS",
      home: "home",
      pages: "pages",
      drop: "dropdown",
      link: "Link text",
      Gallery: "Gallery",
      FullWidth: "Full Width",
      SidebarLeft: "Sidebar Left",
      SidebarRight: "Sidebar Right",
      BasicGrid: "Basic Grid",
      FontIcons: "Font Icons",
      Level2: "Level 2",
      Level2Drop: " Level 2 + Drop",
      Level3: "Level 3",
      textPicture:
        "Libero sed ullamcorper nibh dignissim et curabitur cursus scelerisque metus sit amet sodales justo auctor sit amet proin quis lacus non nisi.",
      btnLeftPicture: " Pharetra etiam",
      btnRightpicture: "Sagittis massa",
      sectionHeader1: "Viverra congue",
      section1:
        "Aenean metus purus consectetur ac sagittis in malesuada quis nunc ut sed risus nulla etiam gravida velit.",
      sectionHeader2: "Libero sodales",
      section2:
        "Nec tincidunt maximus ex orci sollicitudin metus ut lacinia ligula nisi vel neque sed non quam eleifen",
      sectionHeader3: "Laoreet tortor",
      section3:
        "Pharetra etiam ut nisi non mi scelerisque consectetur maecenas vel elementum lectus cras maximus finibus.",
      sectiontitle: "Integer facilisis enim sollicitudin",
      sectionOverview: "Dolor ut pellentesque",
      sectionThirdHeader1: "EFFICITUR AUCTOR",
      sectionThirdOverview1:
        "Cras dui ac pretium egestas nunc maecenas scelerisque leo eget enim interdum at vulputate lorem pretium in.",
      sectionThirdHeader2: "TEMPOR ALIQUAM",
      sectionThirdOverview2:
        "Sagittis arcu a magna eget cursus lacus consectetur proin imperdiet bibendum elit id molestie ipsum ut tellus.",

      sectionThirdHeader3: "METUS CONVALLIS",
      sectionThirdOverview3:
        "Orci blandit ac mauris ac gravida maximus nulla curabitur convallis massa sed urna placerat sed tempor velit.",
      sectionThirdBtn: "MATTIS VESTIBULUM",
      sectionFourth1: "Magna ultrices eleifend suspendisse",
      sectionFourth2: "POSUERE VIVAMUS SEMPER",
      sectionFourth3: "TELLUS NEC MOLLIS SEM",
      sectionFourth4:
        "lacus dui pretium non elit ac interdum ullamcorper purus ut ultricies ullamcorper convallis morbi bibendum sapien in odio finibus sit amet lacinia dolor dapibus in nisl erat consectetur eu blandit.",
      sectionFourthBtn: "FERMENTUM FELIS",
      sectionFifthHeader: "Id elementum lobortis justo donec",
      sectionFifthTitle: "RUTRUM SED LIGULA VIVERRA",
      sectionFifthCard: "Job Title Here",
      sectionSixthHeader: "Nisl vitae mauris ipsum eget",
      sectionSixthTitel: "TINCIDUNT ELIT VELIT AUCTOR",
      sectionSixth1: "PHASELLUS TINCIDUNT",
      sectionSixth2: "EGESTAS MAXIMUS",
      sectionSixth3: "ALIQUAM NEQUE",
      sectionSixth4: "CURABITUR SODALES",
      sectionSeventh1:
        "suscipit tellus non ligula mattis quis iaculis nunc lobortis vestibulum vehicula bibendum malesuada curabitur quis interdum mi vestibulum consectetur leo ut viverra sagittis sapien orci rhoncus nisi.",
      sectionSeventh2: "Odio tristique quis",
      sectionSeventhBtn: "VIEW MORE",
      sectionEighthHeader: "Luctus ligula lacus non odio nunc",
      sectionEighthTitel: "Faucibus libero risus",
      sectionEighthLeftTitel: " Maecenas eu posuere velit eget ultricies enim",
      sectionEighthLeftHeader:
        "Sed nibh enim consequat ac tellus tempus interdum euismod ligula quisque quam nisl aliquet et facilisis eget.",
      sectionEighthLeftBtn: "Read More",
      sectionEighthMiddleTitel: "Condimentum quis arcu nullam id purus tortor",
      sectionEighthMiddleHeader:
        "Molestie vulputate a luctus nulla nulla eleifend justo in libero feugiat congue donec sit amet pharetra velit.",
      sectionEighthMiddleBtn: "Read More",
      sectionEighthRightTitel: "Nulla tempor faucibus tortor nulla pretium",
      sectionEighthRightHeader:
        "Cras auctor commodo metus sed pede in vitae sapien phasellus in magna sed dictum libero et nisi proin porta.",
      sectionEighthRightBtn: "Read More",
    },
  },
  ar: {
    translation: {
      search: "بحث سريع",
      head: "نهاية القول  لوبورت",
      home: "المنزل ",
      pages: "الصفحات",
      drop: "اسقاط",
      link: "نص الارتباط",
      Gallery: "صالة عرض",
      FullWidth: "العرض الكامل",
      SidebarLeft: "الشريط الجانبي الأيسر",
      SidebarRight: "الشريط الجانبي الأيمن",
      BasicGrid: "الشبكة الأساسية",
      FontIcons: "أيقونات الخط",
      Level2: "المستوي 2",
      Level2Drop: " المستوي 2 + يسقط",
      Level3: "المستوي 33",
      textPicture:
        "  لن أفعل أي شيء سوى بحيرة أعضاء المجموعة مسؤولون فقط وسيحرص على أن يكون مسار السباق لا يعرف الخوف ",
      btnLeftPicture: " حتى الجعبة",
      btnRightpicture: "كتلة من السهام",
      sectionHeader1: "قم بواجبك المنزلى",
      section1:
        "ستتبع خوف إينيان الخالص سهام في الكمامة ، التي تريد الآن أن تضحك حتى لو كانت حاملاً.",
      sectionHeader2: "أعضاء مجانيون",
      section2:
        "وأهم ما في الرعاية الطبية هو الخوف من لاکینیا لیگولا ، ما لم يكن الأمر كذلك ، ولكن ليس بقدر الإليفين.",
      sectionHeader3: "لوريت تورتور",
      section3:
        "أيضًا ، إذا لم يكن الأمر كذلك ، فسيتم مطاردة شوكولاتي بالعشب أو عنصر السرير غدًا لأهم الأغراض.",
      sectiontitle: "في الواقع ، من السهل العناية به",
      sectionOverview: "ألم عند الأطفال",
      sectionThirdHeader1: "الباني مصنوع",
      sectionThirdOverview1:
        "  يحتاج الأسد أحيانًا إلى بترغدا سأدفع والثمن الذي أريده الآن هو سعر الشوكولاتة ",
      sectionThirdHeader2: "بعض الاحيان",
      sectionThirdOverview2:
        "سهام القوس من الحاجة الماسة للبحيرة ستتم متابعتها لغرض تمويل مشروب الموظف نفسه كأرض..",
      sectionThirdHeader3: "الخوف من الوادي",
      sectionThirdOverview3:
        "يتغذى الطبيب ولن يعتني موريس والمكسيموس الحامل بكتلة الوادي ولكن الجرة ستوضع لكن الوقت سيكون.",
      sectionThirdBtn: "ماتي لوبي",
      sectionFourth1: "لاعب كرة سلة عظيم موقوف",
      sectionFourth2: "لنعيش إلى الأبد",
      sectionFourth3: "الأرض أو شبه النصف الناعم",
      sectionFourth4:
        "البحيرة لا تستحق الثمن ، وأحيانًا لا تستحق ذلك من الواضح أن الكراهية مقيدة بالكراهية أميت لاسينيا بروتين الألم في اللاعبين تلاه تملق كرة القدم.",
      sectionFourthBtn: "خميرة القط",
      sectionFifthHeader: "هذا العنصر من السياسة فقط حتى",
      sectionFifthTitle: "ماكياج ولكن الرسوم",
      sectionFifthCard: "المسمى الوظيفي هنا",
      sectionSixthHeader: "بقدر ما تحتاجه الحياة",
      sectionSixthTitel: "النخبة المصبوغة تريد أن تزن",
      sectionSixth1: "حبوب الصباغة",
      sectionSixth2: "أعظم حاجة",
      sectionSixth3: "بعض ولا",
      sectionSixth4: "سيتم الاعتناء بالأعضاء",
      sectionSeventh1:
        " وليس  ، الذي تم استهدافه الآن ، سيتم الاعتناء بسيارة الدهليز ، والمركبات التي يجب أن تكون في حالة سكر ، والتي ستطارد أحيانًا دهليزي ، الأسد ، مثل الرسوم المتحركة ، الحكيم ، orci ، إن لم يكن.",
      sectionSeventh2: "أنا أكره حزين أي شخص",
      sectionSeventhBtn: "عرض المزيد",
      sectionEighthHeader: "أنا لا أكره بحيرة الحداد الآن",
      sectionEighthTitel: "الضحك خالي من الحلق",
      sectionEighthLeftTitel: " يريد ماسناس تحديد هدف للمستقبل",
      sectionEighthLeftHeader:
        "لكن بالنسبة لمستوى النتيجة ووقت الأرض ، أحيانًا يكون أداء صغيرًا ، لكن كل واحد يحتاج إلى الكثير من الأشياء السهلة.",
      sectionEighthLeftBtn: "اقرأ أكثر",
      sectionEighthMiddleTitel: "التوابل ، لا القوس ، هذا عذاب خالص",
      sectionEighthMiddleHeader:
        "لم تكن هناك مشكلة في الحداد  فقط في واجبات فوگیات المنزلية المجانية حتى يصبح الجو باردًا حقًا.",
      sectionEighthMiddleBtn: "اقرأ أكثر",
      sectionEighthRightTitel: "لا يوجد وقت لعذاب الحلق بلا ثمن",
      sectionEighthRightHeader:
        "غدا قد يخاف الكاتب ، ولكن قدمه في حكمة الحياة.",
      sectionEighthRightBtn: "اقرأ أكثر",
    },
  },

  fr: {
    translation: {
      search: "جستجوی سریع",
      head: " در پایان سخنرانی لوبورت",
      home: "خانه",
      pages: "صفحات",
      drop: "نوار ابزار",
      link: "لینک متن",
      Gallery: "گالری",
      FullWidth: "تمام صفحه",
      SidebarLeft: "نوار کناری چپ",
      SidebarRight: "نوار کناری راست",
      BasicGrid: "شبکه پایه",
      FontIcons: "آیکن های فونت",
      Level2: "سطح 2",
      Level2Drop: "سطح 2 و دراپ",
      Level3: "سطح 3",
      textPicture:
        "من آزادام اما آدم خوبی هستم و به دوره رسیدگی میشود ترس از شکلات است بسیاری از اعضا فقط نویسنده مقدار زیادی از غذا است هیچ کس جز یک دریاچه",
      btnLeftPicture: "فارترا هم",
      btnRightpicture: "توده ای از فلش",
      sectionHeader1: "اعضا ویژه",
      section1:
        "ترس با تیر در مالسوادا تعقیب خواهد شد که اکنون می توانند بخندند، حتی اگر آناین باردار باشند.",
      sectionHeader2: "اعضا رایگان",
      section2:
        "بسیاری از سالمندان به دلیل شرایط زندگی خود با نگرانی های منحصر به فردی روبرو هستند. اضطراب و استرس می تواند باعث تشدید مسائل و مشکلات روحی او شود",
      sectionHeader3: "اعضا ویژه",
      section3:
        "همچنین، اگر نه، شکلات من فردا برای مهمترین اهداف توسط چمن یا عنصر تخت تعقیب خواهد شد.",
      sectiontitle: "در واقع مراقبت از آن آسان است",
      sectionOverview: "در حین رانندگی درد دارند",
      sectionThirdHeader1: "سازنده ساخته شده است",
      sectionThirdOverview1:
        " قیمت را الان می گیرم فردا می پردازم زیرا شیر گاهی به شکلات نیاز دارد .",
      sectionThirdHeader2: "چند وقت",
      sectionThirdOverview2:
        "تیرهای کمان از نیاز شدید دریاچه به منظور تأمین هزینه نوشیدنی خود کارمند به عنوان زمین تعقیب خواهد شد.",

      sectionThirdHeader3: "ترس از دره",
      sectionThirdOverview3:
        " چاپلوس و موریس و مهم ترین حاملگی برای توده دره مراقبت نمی شود اما کوزه آن را قرار می دهد اما زمان می برد.",
      sectionThirdBtn: "لابی متیس",
      sectionFourth1: "یک بسکتبالیست بزرگ محروم شد",
      sectionFourth2: "بیایید برای همیشه زندگی کنیم",
      sectionFourth3: "زمین و نیمه نرم",
      sectionFourth4:
        "قیمت دریاچه زیاد نیست و گاه کافر پاک است تا زخم مرض بدن در حد بغض نوشیده شود و درد درد بازیکنان به دنبال چاپلوسی یو..",
      sectionFourthBtn: "گربه مخمر",
      sectionFifthHeader: "آن عنصر سیاست فقط تا زمانی که",
      sectionFifthTitle: "اما دوستان کوچولو",
      sectionFifthCard: "اینجا عنوان شغلی",
      sectionSixthHeader: "به همان اندازه که زندگی به او نیاز دارد",
      sectionSixthTitel: "الیت در حال مرگ یک وزنه‌تر می‌خواهد",
      sectionSixth1: "لوبیا در حال مرگ",
      sectionSixth2: "بزرگترین نیاز",
      sectionSixth3: "برخی نه",
      sectionSixth4: "از اعضا مراقبت خواهد شد",
      sectionSeventh1:
        " زمین را نه لگولا ماتیس که اکنون هدف قرار می گیرد، ماشین دهلیز، وسیله نقلیه مراقبت می شود، که گاهی دهلیز من را تعقیب می کند، گویی شیر می خواهد تیرهای حکیم را بکشد، جز رنکوس.",

      sectionSeventh2: "از کسی غمگین متنفرم",
      sectionSeventhBtn: "بیشتر ببینید",
      sectionEighthHeader: "الان از دریاچه ماتم متنفر نیستم",
      sectionEighthTitel: "خنده گلو آزاد",
      sectionEighthLeftTitel: " ماکینز میخواهد برای آینده هدفی تعیین کند",
      sectionEighthLeftHeader:
        "اما برای سطح نتیجه و زمان زمین، گاهی اوقات اویسمود کم است، اما هر یک به چیزهای بسیار و آسان نیاز دارد.",
      sectionEighthLeftBtn: "بیشتر بخوانید",
      sectionEighthMiddleTitel: "چاشنی، بدون تعظیم، این یک شکنجه ناب است",
      sectionEighthMiddleHeader:
        " هیچ عزاداری نیست که ایجاد مزاحمت نکند تا زمانی که در تکالیف رایگان است.",
      sectionEighthMiddleBtn: "بیشتر بخوانید",
      sectionEighthRightTitel: "هیچ وقت برای آچار گلو بدون قیمت",
      sectionEighthRightHeader:
        "فردا ممکن است نویسنده بترسد اما پایش در حکمت زندگی است.",
      sectionEightRighttBtn: "بیشتر بخوانید",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "hn",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
