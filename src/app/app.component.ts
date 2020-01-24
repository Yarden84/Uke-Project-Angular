import { Component } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('navbarTog', [
      state('navShown', style({
        height: '570px',
      })),
      state('navHidden', style({
        height: '0'
      })),
      transition('navHidden <=> navShown', animate('400ms ease-in')),
    ])
  ]
})
export class AppComponent {
  title = 'app';

  state = 'navHidden';

  public active1 = "";
  public active2 = "";
  public active3 = "";

  public navbar = true;

  onSelect() {
    this.active1 = "active";
    this.active2 = "sr-only";
    this.active3 = "(current)";
  }

  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  toggleNav() {
    if (this.navbar) {
      this.state = 'navShown';
      // document.getElementById('navbar').style.zIndex = "-1";
    }
    else {
      this.state = 'navHidden';
      // setTimeout(function () { document.getElementById('navbar').style.zIndex = "1"; }, 400);

    }
    this.navbar = !this.navbar;
  }
}
