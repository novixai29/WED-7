/* ==========================================================
   WED-007 — THE MARRIAGE FOLIO

   غيّر بيانات الزبون من هنا فقط
========================================================== */

const WEDDING = {

  /* ========================================================
     COUPLE
  ======================================================== */

  groom:
    "كرم",

  bride:
    "هبة",


  groomEnglish:
    "KARAM",

  brideEnglish:
    "HIBA",


  /* ========================================================
     FATHER
  ======================================================== */

  groomFather:
    "السيد أحمد قاسم",

  brideFather:
    "",


  /* ========================================================
     EVENT
  ======================================================== */

  startAt:
    "2027-10-14T19:00:00+03:00",

  durationHours:
    3,

  timeZone:
    "Asia/Baghdad",


  /* ========================================================
     VENUE
  ======================================================== */

  venue:
    "قاعة السراي",

  city:
    "النجف",

  address:
    "النجف - العراق",


  /* ========================================================
     MAP
  ======================================================== */

  mapsUrl:
    "",


  /* ========================================================
     SHARE URL
  ======================================================== */

  shareUrl:
    "",


  /* ========================================================
     PAGE
  ======================================================== */

  title:
    "دعوة زفاف كرم وهبة",


  /* ========================================================
     TEXT
  ======================================================== */

  heroMessage:
    "وأن تشهدوا معنا بداية عهد جديد يجمعهما على المودة والرحمة",


  invitationText:
    "بسم الله وعلى بركة الله يسر السيد أحمد قاسم أن يدعوكم لمشاركته فرحة زفاف ابنه كرم على الآنسة هبة وأن تشهدوا معنا بداية عهد جديد يجمعهما على المودة والرحمة.",


  /* ========================================================
     OPENING
  ======================================================== */

  openingStorageKey:
    "WED007_MARRIAGE_FOLIO_OPENED"

};



/* ==========================================================
   DOM
========================================================== */

const $ = (selector) =>
  document.querySelector(selector);



function setText(
  selector,
  value
) {

  const element =
    $(selector);


  if (element) {

    element.textContent =
      value;

  }

}



/* ==========================================================
   DATE
========================================================== */

const EVENT_DATE =
  new Date(
    WEDDING.startAt
  );



function getArabicDateParts() {

  const weekday =
    new Intl.DateTimeFormat(
      "ar-IQ",
      {
        weekday:
          "long",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  const fullDate =
    new Intl.DateTimeFormat(
      "ar-IQ",
      {
        day:
          "numeric",

        month:
          "long",

        year:
          "numeric",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  const time =
    new Intl.DateTimeFormat(
      "ar-IQ",
      {
        hour:
          "numeric",

        minute:
          "2-digit",

        hour12:
          true,

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  return {
    weekday,
    fullDate,
    time
  };

}



function getEnglishDateParts() {

  const day =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        day:
          "2-digit",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  const month =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        month:
          "short",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      )
      .toUpperCase();


  const year =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        year:
          "numeric",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  const time =
    new Intl.DateTimeFormat(
      "en-US",
      {
        hour:
          "numeric",

        minute:
          "2-digit",

        hour12:
          true,

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  return {
    day,
    month,
    year,
    time
  };

}



/* ==========================================================
   NAME
========================================================== */

function cleanHonorific(
  name
) {

  return name
    .replace(
      /^السيد\s+/u,
      ""
    )
    .trim();

}



/* ==========================================================
   DOCUMENT CODE
========================================================== */

function getDocumentNumber() {

  const english =
    getEnglishDateParts();


  const monthNumber =
    String(
      EVENT_DATE.getMonth() + 1
    )
      .padStart(
        2,
        "0"
      );


  return (
    `MF-${english.day}${monthNumber}${english.year.slice(-2)}`
  );

}



/* ==========================================================
   RENDER
========================================================== */

function renderWeddingData() {

  const arabic =
    getArabicDateParts();


  const english =
    getEnglishDateParts();


  const coupleArabic =
    `${WEDDING.groom} × ${WEDDING.bride}`;


  const coupleEnglish =
    `${WEDDING.groomEnglish} & ${WEDDING.brideEnglish}`;


  const documentNumber =
    getDocumentNumber();


  document.title =
    WEDDING.title;



  /* ========================================================
     OPENING
  ======================================================== */

  setText(
    "#previewNames",
    coupleArabic
  );


  setText(
    "#previewDate",
    `${english.day} ${english.month} ${english.year}`
  );


  setText(
    "#folioNames",
    coupleEnglish
  );


  setText(
    "#folioIssued",
    `ISSUED ${english.day}.${String(
      EVENT_DATE.getMonth() + 1
    ).padStart(2, "0")}.${english.year}`
  );



  /* ========================================================
     HERO
  ======================================================== */

  setText(
    "#heroDocumentCode",
    documentNumber
  );


  setText(
    "#fatherName",
    WEDDING.groomFather
  );


  setText(
    "#heroIntro",
    `يسر ${WEDDING.groomFather} أن يدعوكم لمشاركته فرحة زفاف ابنه`
  );


  setText(
    "#groomName",
    WEDDING.groom
  );


  setText(
    "#brideName",
    WEDDING.bride
  );


  setText(
    "#heroMessage",
    WEDDING.heroMessage
  );


  setText(
    "#heroDate",
    `${english.day} ${english.month} ${english.year}`
  );


  setText(
    "#heroTime",
    english.time
  );


  setText(
    "#heroVenue",
    WEDDING.venue
  );



  /* ========================================================
     INVITATION
  ======================================================== */

  setText(
    "#invitationText",
    WEDDING.invitationText
  );


  setText(
    "#fatherSignature",
    cleanHonorific(
      WEDDING.groomFather
    )
  );



  /* ========================================================
     EVENT
  ======================================================== */

  setText(
    "#eventWeekday",
    arabic.weekday
  );


  setText(
    "#eventDate",
    arabic.fullDate
  );


  setText(
    "#eventTime",
    arabic.time
  );


  setText(
    "#documentNumber",
    documentNumber
  );



  /* ========================================================
     LOCATION
  ======================================================== */

  setText(
    "#venueTitle",
    WEDDING.venue
  );


  setText(
    "#venueCity",
    WEDDING.city
  );


  setText(
    "#locationVenue",
    WEDDING.venue
  );


  setText(
    "#locationAddress",
    WEDDING.address
  );


  setText(
    "#locationTime",
    arabic.time
  );



  /* ========================================================
     CLOSING
  ======================================================== */

  setText(
    "#closingNames",
    coupleArabic
  );


  setText(
    "#closingDate",
    `${english.day} · ${english.month} · ${english.year}`
  );


  setText(
    "#closingFather",
    WEDDING.groomFather
  );


  setText(
    "#footerDocument",
    documentNumber
  );


  setText(
    "#footerNames",
    `${WEDDING.groomEnglish} × ${WEDDING.brideEnglish}`
  );

}



/* ==========================================================
   OPENING
========================================================== */

const folioOpening =
  $("#folioOpening");


const openFolio =
  $("#openFolio");


const invitationMain =
  $("#invitationMain");


const reduceMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );



function invitationWasOpened() {

  try {

    return (
      sessionStorage.getItem(
        WEDDING.openingStorageKey
      ) === "true"
    );

  } catch {

    return false;

  }

}



function rememberOpening() {

  try {

    sessionStorage.setItem(
      WEDDING.openingStorageKey,
      "true"
    );

  } catch {

    /* ignore */

  }

}



function completeOpening() {

  folioOpening
    .classList
    .add(
      "is-complete"
    );


  folioOpening
    .setAttribute(
      "aria-hidden",
      "true"
    );


  document.body
    .classList
    .add(
      "invitation-ready"
    );


  document.body.style.overflow =
    "";


  window.setTimeout(
    () => {

      invitationMain.focus({
        preventScroll:
          true
      });

    },
    80
  );

}



function startFolioOpening() {

  if (
    folioOpening
      .classList
      .contains(
        "is-opening"
      )
  ) {

    return;

  }


  rememberOpening();


  if (
    reduceMotion.matches
  ) {

    completeOpening();

    return;

  }


  /*
    STEP 1
    سحب الـTab
  */

  folioOpening
    .classList
    .add(
      "is-opening"
    );


  /*
    STEP 2
    فتح غلاف الوثيقة
  */

  window.setTimeout(
    () => {

      folioOpening
        .classList
        .add(
          "cover-open"
        );

    },
    470
  );


  /*
    STEP 3
    إرسال الغلاف للخلف
  */

  window.setTimeout(
    () => {

      folioOpening
        .classList
        .add(
          "cover-back"
        );

    },
    920
  );


  /*
    STEP 4
    الوثيقة تصبح أمام الحافظة
  */

  window.setTimeout(
    () => {

      folioOpening
        .classList
        .add(
          "document-front"
        );

    },
    990
  );


  /*
    STEP 5
    تثبيت الوثيقة
  */

  window.setTimeout(
    () => {

      folioOpening
        .classList
        .add(
          "finish-opening"
        );

    },
    1500
  );


  /*
    STEP 6
    دخول الدعوة
  */

  window.setTimeout(
    () => {

      completeOpening();

    },
    2200
  );

}



function initializeOpening() {

  if (
    invitationWasOpened()
  ) {

    folioOpening
      .classList
      .add(
        "is-complete"
      );


    folioOpening
      .setAttribute(
        "aria-hidden",
        "true"
      );


    document.body
      .classList
      .add(
        "invitation-ready"
      );


    return;

  }


  document.body
    .classList
    .remove(
      "invitation-ready"
    );

}



openFolio
  .addEventListener(
    "click",
    startFolioOpening
  );



/* ==========================================================
   COUNTDOWN
========================================================== */

let countdownTimer =
  null;



function padCountdown(
  value
) {

  return String(
    Math.max(
      0,
      value
    )
  )
    .padStart(
      2,
      "0"
    );

}



function updateCountdown() {

  const difference =
    EVENT_DATE.getTime() -
    Date.now();


  if (
    difference <= 0
  ) {

    setText(
      "#days",
      "00"
    );


    setText(
      "#hours",
      "00"
    );


    setText(
      "#minutes",
      "00"
    );


    setText(
      "#seconds",
      "00"
    );


    setText(
      "#countdownStatus",
      "دخل الميثاق حيز الفرح"
    );


    if (
      countdownTimer
    ) {

      clearInterval(
        countdownTimer
      );

    }


    return;

  }


  const second =
    1000;


  const minute =
    second * 60;


  const hour =
    minute * 60;


  const day =
    hour * 24;


  const days =
    Math.floor(
      difference /
      day
    );


  const hours =
    Math.floor(
      (
        difference %
        day
      ) /
      hour
    );


  const minutes =
    Math.floor(
      (
        difference %
        hour
      ) /
      minute
    );


  const seconds =
    Math.floor(
      (
        difference %
        minute
      ) /
      second
    );


  setText(
    "#days",
    padCountdown(
      days
    )
  );


  setText(
    "#hours",
    padCountdown(
      hours
    )
  );


  setText(
    "#minutes",
    padCountdown(
      minutes
    )
  );


  setText(
    "#seconds",
    padCountdown(
      seconds
    )
  );

}



function initializeCountdown() {

  updateCountdown();


  countdownTimer =
    window.setInterval(
      updateCountdown,
      1000
    );

}



/* ==========================================================
   GOOGLE MAPS
========================================================== */

function getMapsUrl() {

  if (
    WEDDING.mapsUrl &&
    WEDDING.mapsUrl.trim()
  ) {

    return (
      WEDDING.mapsUrl.trim()
    );

  }


  const query =
    [
      WEDDING.venue,
      WEDDING.address
    ]
      .filter(Boolean)
      .join(" ");


  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      query
    )
  );

}



function initializeMaps() {

  $("#mapsButton").href =
    getMapsUrl();

}



/* ==========================================================
   SHARE URL
========================================================== */

function getShareUrl() {

  if (
    WEDDING.shareUrl &&
    WEDDING.shareUrl.trim()
  ) {

    return (
      WEDDING.shareUrl.trim()
    );

  }


  return window.location.href;

}



/* ==========================================================
   ICS HELPERS
========================================================== */

function pad2(
  value
) {

  return String(
    value
  )
    .padStart(
      2,
      "0"
    );

}



function formatUTCForICS(
  date
) {

  return (
    date.getUTCFullYear() +

    pad2(
      date.getUTCMonth() + 1
    ) +

    pad2(
      date.getUTCDate()
    ) +

    "T" +

    pad2(
      date.getUTCHours()
    ) +

    pad2(
      date.getUTCMinutes()
    ) +

    pad2(
      date.getUTCSeconds()
    ) +

    "Z"
  );

}



function escapeICS(
  value
) {

  return String(
    value
  )
    .replace(
      /\\/g,
      "\\\\"
    )
    .replace(
      /\n/g,
      "\\n"
    )
    .replace(
      /,/g,
      "\\,"
    )
    .replace(
      /;/g,
      "\\;"
    );

}



/* ==========================================================
   CREATE ICS
========================================================== */

function createICS() {

  const start =
    new Date(
      WEDDING.startAt
    );


  const end =
    new Date(
      start.getTime() +
      WEDDING.durationHours *
      60 *
      60 *
      1000
    );


  const now =
    new Date();


  const url =
    getShareUrl();


  const location =
    [
      WEDDING.venue,
      WEDDING.address
    ]
      .filter(Boolean)
      .join(" - ");


  const description =
    `يسر ${WEDDING.groomFather} دعوتكم لمشاركته فرحة زفاف ابنه ${WEDDING.groom} على الآنسة ${WEDDING.bride}.${url ? ` رابط الدعوة: ${url}` : ""}`;


  const uid =
    `wed007-${start.getTime()}@inviteus.party`;


  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//InviteUs//The Marriage Folio//AR
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${formatUTCForICS(now)}
DTSTART:${formatUTCForICS(start)}
DTEND:${formatUTCForICS(end)}
SUMMARY:${escapeICS(`زفاف ${WEDDING.groom} و${WEDDING.bride}`)}
DESCRIPTION:${escapeICS(description)}
LOCATION:${escapeICS(location)}
URL:${escapeICS(url)}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

}



/* ==========================================================
   DOWNLOAD ICS
========================================================== */

function downloadICS() {

  const content =
    createICS();


  const blob =
    new Blob(
      [content],
      {
        type:
          "text/calendar;charset=utf-8"
      }
    );


  const url =
    URL.createObjectURL(
      blob
    );


  const link =
    document.createElement(
      "a"
    );


  link.href =
    url;


  link.download =
    `wedding-${WEDDING.groom}-${WEDDING.bride}.ics`;


  document.body
    .appendChild(
      link
    );


  link.click();


  link.remove();


  window.setTimeout(
    () => {

      URL.revokeObjectURL(
        url
      );

    },
    500
  );


  showToast(
    "تم إنشاء ملف التقويم"
  );

}



$("#calendarButton")
  .addEventListener(
    "click",
    downloadICS
  );



/* ==========================================================
   SHARE
========================================================== */

function getShareText() {

  const date =
    getArabicDateParts();


  return (
    `يسر ${WEDDING.groomFather} دعوتكم لمشاركته فرحة زفاف ابنه ` +
    `${WEDDING.groom} على الآنسة ${WEDDING.bride}، ` +
    `وذلك يوم ${date.weekday} ${date.fullDate} ` +
    `في ${WEDDING.venue}.`
  );

}



async function copyToClipboard(
  text
) {

  if (
    navigator.clipboard &&
    window.isSecureContext
  ) {

    await navigator.clipboard
      .writeText(
        text
      );


    return;

  }


  const textarea =
    document.createElement(
      "textarea"
    );


  textarea.value =
    text;


  textarea.setAttribute(
    "readonly",
    ""
  );


  textarea.style.position =
    "fixed";


  textarea.style.opacity =
    "0";


  document.body
    .appendChild(
      textarea
    );


  textarea.select();


  document.execCommand(
    "copy"
  );


  textarea.remove();

}



async function shareInvitation() {

  const text =
    getShareText();


  const url =
    getShareUrl();


  if (
    navigator.share
  ) {

    try {

      await navigator.share(
        {
          title:
            WEDDING.title,

          text:
            text,

          url:
            url
        }
      );


      return;

    } catch (
      error
    ) {

      if (
        error?.name ===
        "AbortError"
      ) {

        return;

      }

    }

  }


  try {

    await copyToClipboard(
      `${text}\n${url}`
    );


    showToast(
      "تم نسخ نص الدعوة والرابط"
    );

  } catch {

    showToast(
      "تعذر نسخ رابط الدعوة"
    );

  }

}



$("#shareButton")
  .addEventListener(
    "click",
    shareInvitation
  );



/* ==========================================================
   TOAST
========================================================== */

let toastTimer =
  null;



function showToast(
  message
) {

  const toast =
    $("#toast");


  toast.textContent =
    message;


  toast
    .classList
    .add(
      "is-visible"
    );


  if (
    toastTimer
  ) {

    clearTimeout(
      toastTimer
    );

  }


  toastTimer =
    window.setTimeout(
      () => {

        toast
          .classList
          .remove(
            "is-visible"
          );

      },
      2600
    );

}



/* ==========================================================
   REVEAL
========================================================== */

function initializeReveal() {

  const elements =
    document
      .querySelectorAll(
        ".reveal"
      );


  if (
    reduceMotion.matches ||
    !(
      "IntersectionObserver"
      in window
    )
  ) {

    elements.forEach(
      (element) => {

        element
          .classList
          .add(
            "is-visible"
          );

      }
    );


    return;

  }


  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target
                .classList
                .add(
                  "is-visible"
                );


              observer
                .unobserve(
                  entry.target
                );

            }

          }
        );

      },

      {
        threshold:
          0.14,

        rootMargin:
          "0px 0px -40px 0px"
      }

    );


  elements.forEach(
    (element) => {

      observer.observe(
        element
      );

    }
  );

}



/* ==========================================================
   INITIALIZE
========================================================== */

function initialize() {

  renderWeddingData();

  initializeOpening();

  initializeCountdown();

  initializeMaps();

  initializeReveal();

}



document.addEventListener(
  "DOMContentLoaded",
  initialize
);
