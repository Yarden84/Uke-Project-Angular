import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-uke-relatives',
  templateUrl: './uke-relatives.component.html',
  styleUrls: ['./uke-relatives.component.css']
})
export class UkeRelativesComponent implements OnInit {

  about: Array<boolean> = [];
  pics: Array<boolean> = [];
  vid: Array<boolean> = [];

  pic1Sets: Array<any> = [];
  pic2Sets: Array<any> = [];
  pic3Sets: Array<any> = [];
  pic4Sets: Array<any> = [];

  constructor(private titleService: Title) { 

    this.about = [true, true, true, true];
    this.pics = [false, false, false, false];
    this.vid = [false, false, false, false];

    this.pic1Sets = [
      '../../assets/img/cuatro1.jpg',
      '../../assets/img/cuatro2.jpg',
      '../../assets/img/cuatro3.jpg',
      '../../assets/img/cuatro4.jpg',
    ];

    this.pic2Sets = [
      '../../assets/img/cava1.jpg',
      '../../assets/img/cava2.jpg',
      '../../assets/img/cava3.jpg',
      '../../assets/img/cava4.jpg',
    ];

    this.pic3Sets = [
      '../../assets/img/charango1.jpg',
      '../../assets/img/charango2.jpg',
      '../../assets/img/charango3.jpg',
      '../../assets/img/charango4.jpg',
    ];

    this.pic4Sets = [
      '../../assets/img/timple1.jpg',
      '../../assets/img/timple2.jpg',
      '../../assets/img/timple3.jpg',
      '../../assets/img/timple4.jpg',
    ];
  }


  ngOnInit() {
    this.setTitle( 'Jewkulele - קרובי משפחה' );
  }

  setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  showAbout(a){
    this.about[a] = true;
    this.pics[a] = false;
    this.vid[a] = false;
  }

  showPics(a){
    this.about[a] = false;
    this.pics[a] = true;
    this.vid[a] = false;
  }

  showVid(a){
    this.about[a] = false;
    this.pics[a] = false;
    this.vid[a] = true;
  }

}
