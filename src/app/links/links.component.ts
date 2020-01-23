import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  links: Array<any> = [];

  link1: Object;
  link2: Object;
  link3: Object;

  constructor(private titleService: Title) {

    this.link1 = {
      title: 'Uke Hunt',
      about: `
      האתר בה' הידיעה. מה אני אוהב באתר הזה? הכל. החל בעיצוב המקורי וכלה בכמויות האדירות של מידע איזוטרי
                שמעיד על רמת המסירות המרשימה של בונה האתר ועל התשוקה שיש לו ליוקוללה ולכל מה שקשור בו. יוקוללה האנט קיים
                כבר 11 שנה (מ-2007) ויש בו כל מה שחובב יוקוללה יכול לחלום עליו. מרגישים צורך להתעדכן בסרטוני היוקוללה החדשים
                שיצאו ליוטיוב בחודש האחרון? מחפשים מידע על בוני יוקוללה? אקורדים שלא ניתן להשיג בשום מקום אחר? ליוקוללה האנט
                יש את הכל ועוד הרבה יותר.
      `,
      image: '../../assets/img/link1.jpg',
      link: 'http://ukulelehunt.com/'
    }

    this.link2 = {
      title: 'Uku World',
      about: `
      עולם היוקו נועד על מנת לאפשר לכם להכיר את היוקוללה שלכם היכרות מעמיקה יותר. בניגוד ליוק האנט המתמקד
                יותר בתחום רכישת היוקוללה, עולם היוק מתמקד בכלי עצמו. אתר זה עשיר בידע טכני ותיאורטי - אקורדים, סולמות, מבנה
                היוקוללה וכד'.
      `,
      image: '../../assets/img/link2.jpg',
      link: 'https://ukuworld.com/'
    }

    this.link3 = {
      title: 'Ukulele Underground',
      about: `
      המדונה של אתרי היוקוללה, במובן שהאתר הזה רוצה את הכסף שלכם. בתמורה תזכו לקבל שיעורי יוקוללה בליווי
                צמוד. אם זה הקטע שלכם, אז למה לא, תהנו. החסכנים מבינכם ישמחו לדעת שליוקוללה אנדרגראונד יש לא מעט סרטוני הדרכה
                חינם ביוטיוב.
                <br>
            אם הדרכה זה לא בדיוק מה שאתם מחפשים כרגע אז אולי תשמחו גם לדעת שליוקוללה אנדרגראונד יש גם <a href="https://forum.ukuleleunderground.com/"
                    target="_blank">פורום</a> רציני מאוד המכיל מידע רב, וניתן למצוא בו תשובה כמעט לכל מה שתבקשו לדעת על היוקוללה.
      `,
      image: '../../assets/img/link3.jpg',
      link: 'https://ukuleleunderground.com/'
    }

    this.links = [this.link1, this.link2, this.link3];

  }

  ngOnInit() {
    this.setTitle('Jewkulele - קישורים');
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
