import { Component, OnInit } from '@angular/core';

import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';



@Component({
  selector: 'app-musicians',
  templateUrl: './musicians.component.html',
  styleUrls: ['./musicians.component.css'],
  animations: [
    trigger('changeSize', [
      state('large', style({
        transform: 'scale(1)',
      })),
      state('small', style({
        transform: 'scale(0.5) translateX(1000px)',
      })),  
      
      transition('large => small', animate('300ms')),
    ]),

    trigger('changeSize2', [
      state('large2', style({
        transform: 'scale(1)',
      })),
      state('small2', style({
        transform: 'scale(0.5) translateX(1000px) translateY(-200px)',
      })),  
      
      transition('large2 => small2', animate('400ms')),
    ]),

    trigger('moveText', [
      state('invisible', style({
        opacity: 0,
        transform: 'translateX(0)',
      })),
      state('shown', style({
        opacity: 1,
        transform: 'translateX(-70px) translateY(-200px)',
      })),  
      
      transition('invisible => shown', animate('400ms')),
    ]),
  ]
})


export class MusiciansComponent implements OnInit {

  
  state = [['large', 'large2', 'invisible'], ['large', 'large2', 'invisible'], ['large', 'large2', 'invisible'], ['large', 'large2', 'invisible']];
  
  readMore1 = true;
  readMore1b = true;
  readMore2 = true;
  readMore2b = true;
  readMore3 = true;
  readMore3b = true;
  readMore4 = true;
  readMore4b = true;
  

  imgHover = [true, true, true, true];

  imgClicked = [false, false, false, false];

  constructor() {}

  ngOnInit() {
  }

  adjust(a){
      let x = +a;
      this.state[x][0] = (this.state[x][0] === 'large' ? 'small': 'small');
      this.state[x][1] = (this.state[x][1] === 'large2' ? 'small2': 'small2');
      this.state[x][2] = (this.state[x][2] === 'invisible' ? 'shown': 'shown');
      this.imgHover[x] = false;
      this.imgClicked[a] = true;    
  }

  mouseEnter(a){
    if (!this.imgClicked[a-1]){
      let img = document.getElementById('img-'+a);
      let text = document.getElementById('textImg'+a);
      img.style.opacity = '1';
      text.style.color = 'white';
      text.style.textShadow = '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black';
    }
  }

  mouseLeave(a){
    if (!this.imgClicked[a-1]){
      let img = document.getElementById('img-'+a);
      let text = document.getElementById('textImg'+a);
      img.style.opacity = '0.6';
      text.style.color = 'black';
      text.style.textShadow = 'none';
    }
  }

 }
