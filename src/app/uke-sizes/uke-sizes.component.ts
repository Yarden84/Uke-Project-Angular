import { Component, OnInit } from '@angular/core';

import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-uke-sizes',
  templateUrl: './uke-sizes.component.html',
  styleUrls: ['./uke-sizes.component.css'],
  animations: [
    trigger('titleMove', [
      state('overUke', style({
        transform: 'translateX(0)'
      })),
      state('overText', style({
        transform: 'translateX(-5vw)'
      })),
      transition('overUke <=> overText', animate('400ms ease-in')),
    ]),
    trigger('ukeMove', [
      state('default', style({
        transform: 'translateX(0)'
      })),
      state('clicked', style({
        transform: 'translateX(6em)'
      })),
      transition('default <=> clicked', animate('400ms ease-in')),
    ]),
    trigger('fadeIn', [
      state('transparent', style({
        opacity: 0,
      })),
      state('shown', style({
        opacity: 1,
      })),
      transition('transparent <=> shown', animate('400ms ease-in')),
    ]),
  ]
})

export class UkeSizesComponent implements OnInit {

  state = [['overUke', 'default', 'transparent'], ['overUke', 'default', 'transparent'], ['overUke', 'default', 'transparent'], ['overUke', 'default', 'transparent']];
  data = [['baritone', false], ['tenor', false], ['concert', false], ['soprano', false]];

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.setTitle('Jewkulele - גדלי היוקוללה');
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  showData(a) {
    var x = +a;
    this.state[x][0] = (this.state[x][0] === 'overUke' ? 'overText' : 'overText');
    this.state[x][1] = (this.state[x][1] === 'default' ? 'clicked' : 'clicked');
    this.state[x][2] = (this.state[x][2] === 'transparent' ? 'shown' : 'shown');
    this.data[a][1] = true;

    for (let i = 0; i <= 4; i++) {
      if (i != x) {
        this.state[i][0] = (this.state[i][0] === 'overText' ? 'overUke' : 'overUke');
        this.state[i][1] = (this.state[i][1] === 'clicked' ? 'default' : 'default');
        this.state[i][2] = (this.state[i][2] === 'shown' ? 'transparent' : 'transparent');
        this.data[i][1] = false;
        this.mouseLeave(i);
      }
    }
  }

  mouseEnter(a) {
    if (!this.data[a][1]) {
      let img = document.getElementById(this.data[a][0] + 'Img');
      img.style.opacity = '1';
    }
  }

  mouseLeave(a) {
    if (!this.data[a][1]) {
      let img = document.getElementById(this.data[a][0] + 'Img');
      img.style.opacity = '0.7';
    }
  }
}
