import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tuner',
  templateUrl: './tuner.component.html',
  styleUrls: ['./tuner.component.css']
})
export class TunerComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.setTitle( 'Jewkulele - טיונר' );
  }

  setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ClickG(){
    let G = new Audio();
    G.src = "assets/audio/G.wav";
    G.play();
  }

  ClickC(){
    let C = new Audio();
    C.src = "assets/audio/C.wav";
    C.play();
  }

  ClickE(){
    let E = new Audio();
    E.src = "assets/audio/E.wav";
    E.play();
  }

  ClickA(){
    let A = new Audio();
    A.src = "assets/audio/A.wav";
    A.play();
  }

}
