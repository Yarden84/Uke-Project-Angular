import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';

import { Router } from '@angular/router';

import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService, private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.setTitle( 'Jewkulele - עמוד ראשי' );

    localStorage.setItem('jhLink', 'false');
    localStorage.setItem('ukeHarpLink', 'false');
  }

  setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  JHLink(a){
    localStorage.setItem('jhLink', 'true');
    localStorage.setItem('jhReset', 'false');
    
    this.router.navigate(["/musicians"]); 
  }

  ukeHarpLink(a){
    localStorage.setItem('ukeHarpLink', 'true');
    localStorage.setItem('ukeHarpReset', 'false');
    
    this.router.navigate(["/uketypes"]); 
  }

}
