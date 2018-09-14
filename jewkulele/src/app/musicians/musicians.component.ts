import { Component, OnInit } from '@angular/core';

import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { LocalStorageService } from 'angular-2-local-storage';



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
        transform: 'scale(0.5) translateX(900px)',
      })),  
      
      transition('large => small', animate('300ms')),
    ]),

    trigger('changeSize2', [
      state('large2', style({
        transform: 'scale(1)',
      })),
      state('small2', style({
        transform: 'scale(0.5) translateX(900px) translateY(-200px)',
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
        transform: 'translateY(-200px)',
      })),  
      
      transition('invisible => shown', animate('400ms')),
    ]),
  ]
})


export class MusiciansComponent implements OnInit {

  isOpen: any;
  state: Array <any>;
  
  readMore1: Boolean;
  readMore1b: Boolean;
  readMore2: Boolean;
  readMore2b: Boolean;
  readMore3: Boolean;
  readMore3b: Boolean;
  readMore4: Boolean;
  readMore4b: Boolean;
  

  imgHover: Array <Boolean>;

  imgClicked: Array <Boolean>;
  
  constructor(private localStorageService: LocalStorageService) {
    this.state = [['large', 'large2', 'invisible'], ['large', 'large2', 'invisible'], ['large', 'large2', 'invisible'], ['large', 'large2', 'invisible']];
  
    this.readMore1 = true;
    this.readMore1b = true;
    this.readMore2 = true;
    this.readMore2b = true;
    this.readMore3 = true;
    this.readMore3b = true;
    this.readMore4 = true;
    this.readMore4b = true;
  

    this.imgHover = [true, true, true, true];

    this.imgClicked = [false, false, false, false];
  }


  ngOnInit() {
    var jhReset = (localStorage.getItem('jhReset') === 'true');

    if (jhReset){
      localStorage.setItem('jhLink', 'false');
    }

    var jhLink = (localStorage.getItem('jhLink') === 'true');

    if (jhLink){
      document.getElementById('img4').scrollIntoView();
      setTimeout(() => this.adjust(3), 100);
      localStorage.setItem('jhReset', 'true');
    }
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
