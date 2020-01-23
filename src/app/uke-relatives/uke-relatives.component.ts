import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-uke-relatives',
  templateUrl: './uke-relatives.component.html',
  styleUrls: ['./uke-relatives.component.css']
})
export class UkeRelativesComponent implements OnInit {


  ukuleles: Array<any> = [];

  ukulele1: Object;
  ukulele2: Object;
  ukulele3: Object;
  ukulele4: Object;

  about: Array<boolean> = [];
  pics: Array<boolean> = [];
  vid: Array<boolean> = [];


  constructor(private titleService: Title) {

    this.ukulele1 = {
      header: "קוואטרו ונצואליאני",
      aboutText: `זוכרים את הפרק בסיינפלד בו אליין פוגשת חברים חדשים, דומים מאוד לג'רי, ג'ורג' וקריימר
      מבחינה חיצונית אבל שונים מהם לחלוטין באופי? ובכן זה קצת מזכיר את הדמיון בין הקואטרו הונצואליאני
      ליוקוללה.
      חיצונית הכלים דומים למדי זה לזה אם כי הקואטרו מעט ארוך יותר ודומה יותר ספציפית ליוקוללה
      בריטון.
      אך ישנו הבדל אחד משמעותי - המיתרים של הקוואטרו הם מעין תמונת מראה הפוכה למיתרי היוקוללה.
      בעוד
      שביוקוללה שני המיתרים החיצוניים הם הגבוהים ביותר, בקוואטרו שני מיתרים אלו הם מיתרי הבס, מה
      שיוצר
      חוויית נגינה מוזרה ביותר עבור מי שרגיל לנגן ביוקוללה.
      <br>
על כל פנים מדובר בכלי מגניב ביותר שמפיק צליל מעניין שדומה מאוד לצליל של היוקוללה אבל עם
      מעט
      יותר עומק.`,
      ukeImg: "../../assets/img/cuatro.jpg",
      picsSet: [
        '../../assets/img/cuatro1.jpg',
        '../../assets/img/cuatro2.jpg',
        '../../assets/img/cuatro3.jpg',
        '../../assets/img/cuatro4.jpg'
      ],
      vids: [
        'https://www.youtube.com/embed/D0Vifmv1RAU',
        'https://www.youtube.com/embed/NZ123ysut9s'
      ]
    };

    this.ukulele2 = {
      header: "קווקיניו",
      aboutText: `מקובל לחשוב שהיוקוללה הוא כלי שמוצאו בהוואי. זה נכון באופן חלקי בלבד. הכלי הומצא בהוואי
      על
      ידי שלושה מהגרים פורטוגלים ואומץ בחום על-ידי האוכלוסייה המקומית. לפיכך, ההשראה להמצאת
      היוקוללה
      הגיעה מכלי נגינה שמוצאם מפורטוגל וממסורת המוזיקה הפורטוגזית. אחד מהכלים הללו השייכים לעולם
      זה
      הוא הקווקיניו. הקווקיניו הוא כלי מפתח במוזיקה הפורטוגזית בפורטוגל ובברזיל.
      <br>
הקווקיניו דומה מאוד ליוקוללה בצורתו החיצונית ובצלילים שהוא מפיק, אם כי צלילים אלו הם בעלי
      אופי מתכתי יותר.`,
      ukeImg: "../../assets/img/cava.jpg",
      picsSet: [
        '../../assets/img/cava1.jpg',
        '../../assets/img/cava2.jpg',
        '../../assets/img/cava3.jpg',
        '../../assets/img/cava4.jpg'
      ],
      vids: [
        'https://www.youtube.com/embed/cILU9TpQwxA',
        'https://www.youtube.com/embed/ABpmMCIxdBU'
      ]
    };

    this.ukulele3 = {
      header: "צ'רנגו",
      aboutText: `הצ'רנגו נוצר לראשונה כאשר ארמדילו אלמוני החליט להתחפש בפורים ליוקוללה. התוצאה - כלי
      המזכיר
      בגודלו ובצורתו יוקוללה סופרן שמחלקו האחורי מבצבץ שריונו של הארמדילו.
      <br>
  הסיפור הזה הוא כמובן שקר וכזב, אך הצ'רנגו המסורתי לרוב אכן היו בנויים משיריון של
      ארמדילו.
      היום נראה שבנייה מסוג זה היא פחות מקובלת. את הארמדילו החליפה חתיכת עץ שגולפה למעין קערה
      הדומה
      בצורתה לשיריון הארמדילו. לצ'רנגו יש חמישה זוגות מיתרים והוא מפיק צליל עשיר ומעניין.`,
      ukeImg: "../../assets/img/charango.jpg",
      picsSet: [
        '../../assets/img/charango1.jpg',
        '../../assets/img/charango2.jpg',
        '../../assets/img/charango3.jpg',
        '../../assets/img/charango4.jpg'
      ],
      vids: [
        'https://www.youtube.com/embed/86XBnkXk3Po',
        'https://www.youtube.com/embed/PuBNVdsymQA'
      ]
    };

    this.ukulele4 = {
      header: "טימפלה",
      aboutText: `הטימפלה הוא כלי מיתר שמקורו באיים הקנריים. הטימפלה מזכיר מעט בצורתו ובצליליו את הצ'רנגו
      אך
      ללא האפקט שמפיקים המיתרים הכפולים של הצ'רנגו.
      <br>
  לטימפלה חמישה מיתרים. פאן פאקט - לפי ויקיפדיה נגנים רבים מוותרים על המיתר החמישי על מנת
      לנגן
      בכלי כמו ביוקוללה (אז למה הם לא פשוט קונים יוקוללה?).`,
      ukeImg: "../../assets/img/timple.jpg",
      picsSet: [
        '../../assets/img/timple1.jpg',
        '../../assets/img/timple2.jpg',
        '../../assets/img/timple3.jpg',
        '../../assets/img/timple4.jpg'
      ],
      vids: [
        'https://www.youtube.com/embed/jNipYm8yJQ8',
        'https://www.youtube.com/embed/bhnSehFCbco'
      ]
    };

    this.ukuleles = [this.ukulele1, this.ukulele2, this.ukulele3, this.ukulele4];









    this.about = [true, true, true, true];
    this.pics = [false, false, false, false];
    this.vid = [false, false, false, false];


  }


  ngOnInit() {
    this.setTitle('Jewkulele - קרובי משפחה');
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  showAbout(a) {
    this.about[a] = true;
    this.pics[a] = false;
    this.vid[a] = false;
  }

  showPics(a) {
    this.about[a] = false;
    this.pics[a] = true;
    this.vid[a] = false;
  }

  showVid(a) {
    this.about[a] = false;
    this.pics[a] = false;
    this.vid[a] = true;
  }

}
