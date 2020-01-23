import { Component, OnInit } from "@angular/core";

import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-uke-types",
  templateUrl: "./uke-types.component.html",
  styleUrls: ["./uke-types.component.css"]
})
export class UkeTypesComponent implements OnInit {

  ukuleles: Array<any> = [];

  ukulele1: Object;
  ukulele2: Object;
  ukulele3: Object;
  ukulele4: Object;

  about: Array<boolean> = [];
  carousel: Array<boolean> = [];
  vid: Array<boolean> = [];

  constructor(private titleService: Title) {

    this.ukulele1 = {
      header: "בנג'וללה",
      aboutText: ` הבנג'ו יוקוללה, א.ק.א בנג'וללה, הוא שילוב בין, ניחשתם נכון, בנג'ו ויוקוללה. הבנג'וללה
      הופיע
      לראשונה ב-1917 ואומץ על ידי אמני וודויל שהיו צריכים כלי נגינה עם הניידות של היוקוללה אבל עם
      ווליום
      חזק יותר (כך לפחות לפי ויקיפדיה, לבנג'וללה שיצא לי לנגן בו לא היה ווליום חזק במיוחד, והוא
      היה
      כבד יותר משמעותית מיוקוללה רגיל).
<br>
גוף הכלי זהה לזה של הבנג'ו אך מותאם לגודל של היוקוללה. גודל הכלי לרוב תואם את הגודל של
      היוקוללה
      סופרן או היוקוללה קונצרט. הצליל שהבנג'וללי מפיק דומה מאוד לצליל שמפיק הבנג'ו בשילוב עם
      הסאונד
      הדינמי של פריטה על יוקוללה.</strong></p>
<br>
      <a href="https://en.wikipedia.org/wiki/George_Formby" target="_block">ג'ורג' פורמבי</a>
      היה אחד מהפרפורמרים המזוהים ביותר עם הכלי והרבה לשלב אותו בהופעותיו. אמנים נוספים שגילו
      עניין בכלי הם
      <a href="https://www.youtube.com/watch?v=YKrOs_CT-SY" target="_block"
          style="padding-left: 5px;">ג'ורג'
          האריסון</a>
      <a href="https://www.youtube.com/watch?v=POsOP3TF-XY" target="_block">ובריאן מיי</a>.`,
      ukeImg: "../../assets/img/Banjolele3.jpg",
      vids: [
        'https://www.youtube.com/embed/NrtDtTBkfb8',
        'https://www.youtube.com/embed/bPrFnyOdpO0'
      ],
      items: [
        { name: "../../assets/img/bjl1.jpg" },
        { name: "../../assets/img/bjl2.jpg" },
        { name: "../../assets/img/bjl3.JPG" },
        { name: "../../assets/img/bjl4.jpg" },
        { name: "../../assets/img/bjl5.jpg" },
        { name: "../../assets/img/bjl6.jpg" },
        { name: "../../assets/img/bjl7.jpg" },
        { name: "../../assets/img/bjl8.jpg" },
        { name: "../../assets/img/bjl9.jpg" },
        { name: "../../assets/img/bjl10.jpg" },
        { name: "../../assets/img/bjl11.jpg" },
        { name: "../../assets/img/bjl12.jpg" }
      ]
    };

    this.ukulele2 = {
      header: "יוקוללה-נבל",
      aboutText: `היוקוללה-נבל (או כמו שאני אוהב לקרוא לו, הנבללה) הוא למעשה גירסת היוקוללה לגיטרת הנבל
      שזכתה
      לפופולאריות מסוימת בתחילת המאה הקודמת. מאז ירדה קרנו של היוקוללה-נבל, אולם החל משנות ה-90
      החלו
      לצוץ פה ושם יוקלליים מהסוג הנ"ל. בימינו ניתן למצוא את הנבללה במרשתת בדומה לכל פריט איזוטרי
      אחר.
<br>
נוסף לארבעת מיתרי היוקוללי, ליוקוללי-נבל יש בין 2 ל-6 מיתרים נמוכים יותר ללא סריגים (ניתן
      לפרוט עליהם במצב "פתוח" בלבד). לרוב, יש למיתרים אלו חור תהודה נוסף. כלי זה עשוי להתאים
      לחובבי
      יוקוללה מושבעים שמעוניינים להתנסות ביוקוללה עם טווח צלילים רחב יותר ו/או לאנשים שאוהבים
      להרגיש
      מיוחדים.`,
      ukeImg: "../../assets/img/harpUke2.jpg",
      vids: [
        'https://www.youtube.com/embed/ZEHqlBb94GQ',
        'https://www.youtube.com/embed/Xxzjjj-tGM0'
      ],
      items: [
        { name: "../../assets/img/uhrp1.jpg" },
        { name: "../../assets/img/uhrp2.jpg" },
        { name: "../../assets/img/uhrp3.jpg" },
        { name: "../../assets/img/uhrp4.jpg" },
        { name: "../../assets/img/uhrp5.jpg" },
        { name: "../../assets/img/uhrp6.jpg" },
        { name: "../../assets/img/uhrp7.jpg" },
        { name: "../../assets/img/uhrp8.jpg" },
        { name: "../../assets/img/uhrp9.jpg" },
        { name: "../../assets/img/uhrp10.jpg" },
        { name: "../../assets/img/uhrp11.jpg" },
        { name: "../../assets/img/uhrp12.jpg" }
      ]
    };

    this.ukulele3 = {
      header: "יוקוללה חשמלי",
      aboutText: `היוקוללה החשמלי הוא למעשה כל יוקוללה שניתן לחבר למגבר, אולם לרוב כשאומרים יוקוללה
      חשמלי
      מתכוונים
      ליוקוללי מוגבר בעל צורה הדומה לגיטרה חשמלית. ישנם יוקולליים חשמליים הדומים לגיטרה חשמלית
      באופן
      שיטחי בלבד, והם למעשה מתפקדים בתור יוקוללה רגיל בעל תיבת תהודה שניתן לנגן עליו גם ללא
      הגברה.
      לעומת זאת, ישנם יוקולליים שדומים לגיטרה חשמלית גם באופן בו הורכבו. ליוקולליים מסוג זה יש
      פיקאפים
      דומים לאלו שקיימים בגיטרה חשמלית, ומיתרי מתכת. אחת החברות הידועות באגף היוקולליים
      החשמליים
      היא
      חברת Risa הגרמנית.`,
      ukeImg: "../../assets/img/electricUke3.jpg",
      vids: [
        'https://www.youtube.com/embed/o0grrM0FpqE',
        'https://www.youtube.com/embed/D5UuKsiJXHc'
      ],
      items: [
        { name: "../../assets/img/eleuke1.jpg" },
        { name: "../../assets/img/eleuke2.jpg" },
        { name: "../../assets/img/eleuke3.jpg" },
        { name: "../../assets/img/eleuke4.jpg" },
        { name: "../../assets/img/eleuke5.jpg" },
        { name: "../../assets/img/eleuke6.jpg" },
        { name: "../../assets/img/eleuke7.jpg" },
        { name: "../../assets/img/eleuke8.jpg" },
        { name: "../../assets/img/eleuke9.jpg" },
        { name: "../../assets/img/eleuke10.jpg" },
        { name: "../../assets/img/eleuke11.jpg" },
        { name: "../../assets/img/eleuke12.jpg" }
      ]
    };

    this.ukulele4 = {
      header: "יוקוללה-בס",
      aboutText: `היוקוללה-בס הוא פיתוח מעניין של Kala, אחת מהחברות הבולטות בשוק היוקוללה. הרעיון לייצר
      יוקללה-בס
      התאפשר הודות לפיתוח של מיתרים מיוחדים דמוי גומי העשויים מחומר הנקרא פוליאוריתן. הצליל
      שהכלי
      מפיק
      עם מיתרים אלו מזכיר מעט את הקונטרבס. חשוב לציין שהיוקוללה בס תלוי לחלוטין
      בהגברה.`,
      ukeImg: "../../assets/img/uBass-1.jpg",
      vids: [
        'https://www.youtube.com/embed/29wgbMBKvFE',
        'https://www.youtube.com/embed/fzepx9cI-mw'
      ],
      items: [
        { name: "../../assets/img/uBass1.jpg" },
        { name: "../../assets/img/uBass2.jpg" },
        { name: "../../assets/img/uBass3.jpg" },
        { name: "../../assets/img/uBass4.jpg" },
        { name: "../../assets/img/uBass5.jpg" },
        { name: "../../assets/img/uBass6.jpg" },
        { name: "../../assets/img/uBass7.jpg" },
        { name: "../../assets/img/uBass8.jpg" },
        { name: "../../assets/img/uBass9.jpg" },
        { name: "../../assets/img/uBass10.jpg" },
        { name: "../../assets/img/uBass11.jpg" },
        { name: "../../assets/img/uBass12.jpg" }
      ]
    };


    this.ukuleles = [this.ukulele1, this.ukulele2, this.ukulele3, this.ukulele4];


    this.about = [true, true, true, true];
    this.carousel = [false, false, false, false];
    this.vid = [false, false, false, false];

  }

  ngOnInit() {
    this.setTitle("Jewkulele - הכלאות");

    var ukeHarpReset = localStorage.getItem("ukeHarpReset") === "true";

    if (ukeHarpReset) {
      localStorage.setItem("ukeHarpLink", "false");
    }

    var ukeHarpLink = localStorage.getItem("ukeHarpLink") === "true";

    if (ukeHarpLink) {
      document.getElementById("vidBtn1").scrollIntoView();
      localStorage.setItem("ukeHarpReset", "true");
    }
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  showAbout(a) {
    this.about[a] = true;
    this.carousel[a] = false;
    this.vid[a] = false;
  }

  showCarousel(a) {
    this.about[a] = false;
    this.carousel[a] = true;
    this.vid[a] = false;
  }

  showVid(a) {
    this.about[a] = false;
    this.carousel[a] = false;
    this.vid[a] = true;
  }
}
