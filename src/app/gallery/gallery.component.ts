import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {



  constructor(private titleService: Title) { }
    
  ngOnInit(): void {
    this.setTitle( 'Jewkulele - גלריה' );
  }

  setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

}
