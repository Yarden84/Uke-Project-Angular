import { Component, OnInit } from "@angular/core";

import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from "@angular/animations";

import { Title } from "@angular/platform-browser";

import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SanitizeHtmlPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) {
  }

  transform(v: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(v);
  }
}

@Component({
  selector: "app-musicians",
  templateUrl: "./musicians.component.html",
  styleUrls: ["./musicians.component.css"],
  animations: [
    trigger("scrollImg", [
      state(
        "right0",
        style({
          transform: "translateX(0)"
        })
      ),
      state(
        "right1",
        style({
          transform: "translateX(100%)"
        })
      ),
      state(
        "right2",
        style({
          transform: "translateX(200%)"
        })
      ),
      state(
        "right3",
        style({
          transform: "translateX(300%)"
        })
      ),
      state(
        "right4",
        style({
          transform: "translateX(400%)"
        })
      ),

      transition("right0 <=> right1", animate("600ms")),
      transition("right1 <=> right2", animate("600ms")),
      transition("right2 <=> right3", animate("600ms")),
      transition("right3 <=> right4", animate("600ms"))
    ]),

    trigger("artistData", [
      state(
        "hidden",
        style({
          height: "0px",
          width: "0%"
        })
      ),
      state(
        "line",
        style({
          height: "0px",
          width: "90%"
        })
      ),
      state(
        "visible",
        style({
          height: "90vh",
          width: "90%"
        })
      ),

      transition("hidden <=> line", animate("200ms")),
      transition("line <=> visible", animate("500ms"))
    ]),

    trigger("artistAbout", [
      state(
        "hidden2",
        style({
          maxHeight: "0"
        })
      ),
      state(
        "visible2",
        style({
          maxHeight: "250%"
        })
      ),

      transition("hidden2 <=> visible2", animate("1000ms"))
    ]),
  ]
})
export class MusiciansComponent implements OnInit {

  musicians: Array<any> = [];

  musician: object;
  musicianNum: number;

  text1: any;
  text2: any;
  text3: any;
  text4: any;
  musician1: object;
  musician2: object;
  musician3: object;
  musician4: object;

  position: string;

  counter: number;

  artData: string;

  showAboutText: string;

  showTextLink: boolean;

  fullText: boolean;


  constructor(private titleService: Title, private sanitizer: DomSanitizer) {

    this.text1 = ` "היוקוללה מבקש שלא להילקח ברצינות" אומרת פאלמר. לדבריה ההחלטה ללמוד לנגן ביוקוללה באה מתוך המחשבה שזו תהיה דרך
    מצחיקה לנגן את השיר 'קריפ' של רדיוהד. היא קנתה יוקוללה ב19.95 דולר (הלוואי והיה אפשר להשיג בארץ יוקוללה במחיר
    כזה!) ולמדה את האקורדים. כדרכם של אמנים אמיתיים החליטה אמנדה להתמסר לחלוטין לאותה גחמה מטופשת. התוצאה – אלבום
    קאברים יפהפה לרדיוהד שיצא בשנת 2010:
    <br>
    <a href="https://amandapalmer.bandcamp.com/album/amanda-palmer-performs-the-popular-hits-of-radiohead-on-her-magical-ukulele"
      target="_block">Amanda Palmer Performs The Popular Hits Of Radiohead On Her Magical Ukulele</a>
    <br><br>
    האלבום מציג נגינה מינימליסטית ופשוטה למדי. בכך הוא ממחיש את הלך הרוח הפאנקיסטי של אמנדה שמתומצת בצורה היפה
    ביותר בשיר "המנון יוקוללה" שאינו מופיע באלבום:
    <br><br>
    <iframe width="400" height="315" src="https://www.youtube.com/embed/OZaR_4us6Ec?rel=0" frameborder="0"
      allow="autoplay; encrypted-media" allowfullscreen style="width: 45vw; height: 25vw; display: block;"></iframe>
    <br><br>
    להלן קטע קטן מהשיר הנ"ל:
    <br><br>
    "<a href="https://he.wikipedia.org/wiki/%D7%A1%D7%99%D7%93_%D7%95%D7%99%D7%A9%D7%A1" target="_block">סיד
      וישס</a>
    ניגן על פנדר בס ארבעה מיתרים והוא לא היה מסוגל לשיר
    <br>
    וכולם שנאו אותו חוץ מאלה שאהבו אותו
    <br>
    ליוקוללה יש ארבעה מיתרים אבל סיד לא ניגן ביוקוללה
    <br>
    הוא השתמש בהרואין וכנראה הרג את החברה שלו ננסי ספונג'ן
    <br><br>
    אילו רק היה סיד מנגן ביוקוללה אולי הוא היה יכול להיות שמח
    <br>
    אולי הוא לא היה מסיים באופן כה עצוב
    <br>
    אולי הוא לא היה עושה כל כך הרבה הרואין
    <br>
    אולי הוא היה יושב לו ופשוט שר שירים נחמדים לחברה שלו"`;

    this.musician1 = {
      img: "assets/img/amanda-palmer.jpg",
      name: "אמנדה פאלמר",
      visibility: false,
      abstract: `עושה רושם שאחד ממאפייניו הבולטים
      של היוקוללה הוא
      מראהו הבלתי מאיים והמוניטין שיצא לו ככלי פשוט לנגינה באופן יחסי. קל לשכוח זאת כשמתבוננים בוירטואוזים כמו ג'ייק
      שימאבוקורו או ג'יימס היל. אלו הביאו את הנגינה בכלי הקטן לשיאים חדשים. עם כל הכבוד הראוי לאמנים מסוג זה, טוב שיש
      את אמנדה פאלמר להזכיר לנו כמה יופי ואמת ניתן למצוא בדברים הפשוטים, וכמה חן יש בנגינה פאנקיסטית מרושלת וחובבנית.`,
      about: {
        text: this.sanitizer.bypassSecurityTrustHtml(this.text1),
        visibility: false
      }
    };



    this.text2 = `<iframe width="400" height="315" src="https://www.youtube.com/embed/puSkP3uym5k?rel=0" frameborder="0"
      allow="autoplay; encrypted-media" allowfullscreen style="width: 45vw; height: 25vw; display: block;"></iframe>
    <br><br>
    שימאבוקורו אוהב לומר שאחד הדברים שהוא הכי אוהב ביוקוללה זה שהוא אינו כלי שמעורר יותר מדי ציפייה בקהל השומעים.
    החזות התמימה של הכלי מאפשרת לשימאבוקורו להפתיע את קהל המאזינים בנגינה וירטואוזית יוצאת דופן. כך
    הוא עשה בהופעה בTED מ-2010 כאשר בחר לבצע על היוקוללה את השיר Bohemian Rhapsody של קווין:
    <br><br>
    <iframe width="400" height="315" src="https://www.youtube.com/embed/3diSiwLBSOE?rel=0" frameborder="0"
      allow="autoplay; encrypted-media" allowfullscreen style="width: 45vw; height: 25vw; display: block;"></iframe>
    <br><br>
    שימאבוקורו, שהחל לנגן ביוקוללה בגיל 4, הוציא עד כה בקריירת הסולו שלו 13 אלבומי יוקוללה. נראה שהוא אחד מנגני
    היוקוללה העסוקים ביותר בעולם. הוא ללא ספק אחד מהנגנים הווירטואוזים ביותר בעולם, אם לא הווירטואוז שבהם. באופן אישי אני מרגיש שלמדתי ממנו לא מעט מבחינה טכנית. בנוגע
    להיותו נגן "טוב", זה כמובן כבר עניין של טעם. באופן אישי אני מתרשם מאוד מהנגינה שלו, אבל יש בו משהו שמשדר ווייב של שחקנית ברידג' חובבת בת 83 מגבעתיים. אין מה לעשות, חלק גדול מהכריזמה של אמן תלוי גם באופי שלו. אף על פי שאני לא מת על התגית הזאת, לפעמים אין
    ברירה – שימאבוקורו סאחי רצח. ושאני לא
    אתחיל לדבר על מוזיקאים שחושבים שכובע פדורה זה מגניב. אני לא מבין באופנה אבל רבאק... מספיק עם זה. איפה הייתי? בכל אופן מדובר בנגן מדהים!`

    this.musician2 = {
      img: "assets/img/jake-shimabukuro2.jpg",
      name: "ג'ייק שימאבוקורו",
      visibility: false,
      abstract: `למרבית כלי הנגינה יש אייקון מוזיקלי ששמו הוא סמל
      למימוש יוצא דופן של הפוטנציאל הגלום בהם. לכינור יש את פגניני, לגיטרה את ג'ימי הנדריקס, לבס יש את פלי מהרד הוט
      צ'ילי פפרז ואילו ליוקוללה יש את ג'ייק שימאבוקורו. שימאבוקורו עשה לעצמו שם כוירטואוז יוקוללה הרבה בזכות סרטון
      יוטיוב שלו מ-2006 בו הוא מנגן גרסה יפה להפליא של השיר While my guitar gently whips:`,
      about: {
        text: this.sanitizer.bypassSecurityTrustHtml(this.text2),
        visibility: false
      }
    };



    this.text3 = `אדי אומר שהצליל השמח של הכלי מאזן את הנטייה שלו לכתוב שירים עצובים ומונע מהתוצאה הסופית להישמע כמו 'מוזיקת
    התאבדות'. האלבום Ukulele Songs בהחלט לא נשמע כמו מוזיקת התאבדות. הוא מכיל ברובו שירים מקוריים, שיר אחד של פרל
    ג'אם (Can’t Keep) וכמה קאברים.
    <br><br>
    אדי בהופעה עם השיר Without You:
    <br>
    <iframe width="400" height="315" src="https://www.youtube.com/embed/5g8PEp47iBg?rel=0" frameborder="0"
      allow="autoplay; encrypted-media" allowfullscreen style="width: 45vw; height: 25vw; display: block;"></iframe>
    <br><br>
    אדי מנגן קאבר יחד עם הזמרת Regin Chassange. לא הביצוע המוצלח ביותר, אבל שווה לראות ולו בגלל הייבוש הסופר-מביך
    של אדי ב-0:13 ("נשיקה? לא..? אוקיי בוא נסיים עם זה מהר, אני אמורה להתאבד אח"כ"):
    <br><br>
    <iframe width="400" height="315" src="https://www.youtube.com/embed/ZFfewkiNjSA" frameborder="0"
      allow="autoplay; encrypted-media" allowfullscreen style="width: 45vw; height: 25vw; display: block;"></iframe>
    <br><br>
    והאלבום Ukulele Songs:
    <br><br>
    <iframe width="400" height="315" src="https://www.youtube.com/embed/aDDB4Vyk5ZQ" frameborder="0"
      allow="autoplay; encrypted-media" allowfullscreen style="width: 45vw; height: 25vw; display: block;"></iframe>`;

    this.musician3 = {
      img: "assets/img/eddie-vedder1.jpg",
      name: "אדי ודר",
      visibility: false,
      abstract: `נסיך סצנת הגראנג' ואחד הסולנים המעטים מאותה
      תקופה שטרם מצאו את מותם בנסיבות טרגיות (55555 מלח מים מלח מים) הוציא בשנת 2011 אלבום יוקוללה שלם הנקרא, לא
      תאמינו, חכו לזה, הנה זה בא –Ukulele Songs. אדי ודר החל לנגן בכלי באמצע שנות ה-90. היוקוללה שימש עבורו כאמצעי
      לכתיבת שירים וכבן לוויה נאמן שעזר לו להפיג את תחושת הבדידות בתקופות מסוימות. לעיתים היה עולה עם הכלי להדרן
      בהופעות. לטענתו היוקוללה מעודד שירה בצוותא, "זה כלי כזה קטן שאנשים כאילו אומרים 'בואו נעזור לו!'".`,
      about: {
        text: this.sanitizer.bypassSecurityTrustHtml(this.text3),
        visibility: false
      }
    };



    this.text4 = `<iframe width="400" height="315" src="https://www.youtube.com/embed/u778gSi94N4" frameborder="0"
    allow="autoplay; encrypted-media" allowfullscreen style="width: 45vw; height: 25vw; display: block;"></iframe>
  <br><br>
  עם תספורת מוזרה, משקפיים מהניינטיז, אזרחות קנדית והמון כישרון נראה שלהיל יש את כל הנתונים להיות אליל יוקוללה,
  והוא אכן ממלא את התפקיד הזה בהצלחה מרובה. היל הוא התוצר החינוכי של תכנית מיוחדת ללימודי יוקוללה בבתי ספר שהגה
  אדם בשם ג'ון דוויין. בעקבות התכנית הזו הוקם ה- Langley Ukulele Ensemble בו לקח היל חלק במשך 10 שנים לפני שפתח
  בקריירת סולו עצמאית. בהמשך היל ודוויין פעולה על מנת ליצור תכנית חדשה ללימוד יוקוללה.
  <br><br>
  היל נשוי לנגנית הצ'לו אן ג'נל, איתה הוא גם מופיע. הוא הוציא עד כה 7 אלבומים ומספר ספרי הדרכה על הכלי. בקטע הבא
  ניתן לראות את היל עם תספורת חדשה ומשקפיים עדכניות אך למרבה המזל הגרוב נשאר קטלני כשהיה:
  <br><br>
  <iframe width="400" height="315" src="https://www.youtube.com/embed/0wzsE67O5tE" frameborder="0"
    allow="autoplay; encrypted-media" allowfullscreen style="width: 45vw; height: 25vw; display: block;"></iframe>`;

    this.musician4 = {
      img: "assets/img/james-hill1.jpg",
      name: "ג'יימס היל",
      visibility: false,
      abstract: `עבור ג'יימס היל היוקוללה אינו סתם גיטרת צעצוע
      קטנה עם ארבעה מיתרים. היוקוללי הוא גם בס, פסנתר ומערכת תופים. בהתאם לכך, הפוטנציאל המוזיקלי של היוקוללה הוא
      אינסופי. היל מוכיח שהכלי הקטן הזה מסוגל להיות הרבה יותר מסתם עוד כלי ליווי בעל צליל מתקתק. הוא יכול להיות מכונת
      גרוב חסרת מעצורים, כפי שניתן לראות בביצוע הזה לBillie Jean של מייקל ג'קסון:`,
      about: {
        text: this.sanitizer.bypassSecurityTrustHtml(this.text4),
        visibility: false
      }
    };

    this.musicians = [this.musician1, this.musician2, this.musician3, this.musician4];

    this.position = 'right0';

    this.counter = 0;

    this.musician = {};

    this.musicianNum = 0;

    this.artData = 'hidden';

    this.showAboutText = 'hidden2';

    this.fullText = false;

    this.showTextLink = true;

  }

  ngOnInit() {
    this.setTitle("Jewkulele - נגנים מפורסמים");
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  moveRight() {
    if (this.counter < 3) {
      this.counter++;
      this.position = 'right' + this.counter;
      console.log('document.getElementById(arrowL).style.opacity = ', document.getElementById('arrowL').style.opacity)
      if (window.getComputedStyle(document.getElementById('arrowL')).getPropertyValue('opacity') === '0.3') {
        document.getElementById('arrowL').style.opacity = "1";
      }
    }
    if (this.counter === 3) {
      document.getElementById('arrowR').style.opacity = "0.3";
    }
  }

  moveLeft() {
    if (this.counter > 0) {
      this.counter--;
      this.position = 'right' + this.counter;
      if (document.getElementById('arrowR').style.opacity === "0.3") {
        document.getElementById('arrowR').style.opacity = "1";
      }
    }
    if (this.counter === 0) {
      document.getElementById('arrowL').style.opacity = "0.3";
    }
  }

  openArtistData(a) {

    this.musicians[a].visibility = true;

    this.musicianNum = a;

    this.musician = this.musicians[a];

    setTimeout(() => { this.artData = 'line'; }, 100);

    setTimeout(() => { this.artData = 'visible'; }, 300);

    setTimeout(() => { document.getElementById('about').style.overflowY = "auto"; }, 900);

    setTimeout(() => { document.getElementById('xBtn').style.display = "initial"; }, 900);

  }

  closeArtistData() {

    document.getElementById('about').style.overflowY = "hidden";

    setTimeout(() => { this.artData = 'line'; }, 100);

    setTimeout(() => { document.getElementById('xBtn').style.display = "none"; }, 100);

    setTimeout(() => { this.artData = 'hidden'; }, 650);

    setTimeout(() => { this.musicians[this.musicianNum].visibility = false; }, 950);

    setTimeout(() => { this.hideText(); }, 1000);

  }

  showText() {
    this.fullText = true;
    this.showTextLink = false;
    setTimeout(() => { this.showAboutText = 'visible2'; }, 100);
  }

  hideText() {
    this.showAboutText = 'hidden2';
    setTimeout(() => { this.fullText = false; }, 1000);
    this.showTextLink = true;
  }


  ////////////////////////////////////////////////////////////////////////////////

  ngAfterViewChecked() {
    var jhReset = localStorage.getItem("jhReset") === "true";

    if (jhReset) {
      localStorage.setItem("jhLink", "false");
    }

    var jhLink = localStorage.getItem("jhLink") === "true";

    if (jhLink) {
      localStorage.setItem("jhReset", "true");
      document.getElementById("img4").scrollIntoView();
      // setTimeout(() => this.adjust(3), 100);
    }
  }

}
