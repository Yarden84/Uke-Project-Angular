import { Component, OnInit } from '@angular/core';
// import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  // galleryOptions: NgxGalleryOptions[];
  // galleryImages: NgxGalleryImage[];


  constructor() { }
    
  ngOnInit(): void {
 
    // this.galleryOptions = [
    //     {
    //         width: '600px',
    //         height: '400px',
    //         // imageSize: NgxGalleryImageSize.Cover,
    //         imagePercent: 80,
    //         thumbnailsColumns: 6,
    //         imagePercent: 100,
    //         imageAnimation: NgxGalleryAnimation.Slide
    //     },
    //     // max-width 800
    //     {
    //         breakpoint: 800,
    //         width: '100%',
    //         height: '600px',
    //         imagePercent: 80,
    //         thumbnailsPercent: 20,
    //         thumbnailsMargin: 20,
    //         thumbnailMargin: 20
    //     },
    //     // max-width 400
    //     {
    //         breakpoint: 400,
    //         preview: false
    //     }
    // ];

    // this.galleryImages = [
    //     {
    //         small: '../../assets/img/gallery/uke1.jpg',
    //         medium: '../../assets/img/gallery/uke1.jpg',
    //         big: '../../assets/img/gallery/uke1.jpg'
    //     },
    //     {
    //         small: '../../assets/img/gallery/uke2.jpg',
    //         medium: '../../assets/img/gallery/uke2.jpg',
    //         big: '../../assets/img/gallery/uke2.jpg'
    //     },
    //     {
    //         small: '../../assets/img/gallery/uke3.jpg',
    //         medium: '../../assets/img/gallery/uke3.jpg',
    //         big: '../../assets/img/gallery/uke3.jpg'
    //     },
    //     {
    //         small: '../../assets/img/gallery/uke4.jpg',
    //         medium: '../../assets/img/gallery/uke4.jpg',
    //         big: '../../assets/img/gallery/uke4.jpg'
    //     },
    //     {
    //         small: '../../assets/img/gallery/uke5.jpg',
    //         medium: '../../assets/img/gallery/uke5.jpg',
    //         big: '../../assets/img/gallery/uke5.jpg'
    //     },
    //     {
    //         small: '../../assets/img/gallery/uke6.jpg',
    //         medium: '../../assets/img/gallery/uke6.jpg',
    //         big: '../../assets/img/gallery/uke6.jpg'
    //     },
    // ];
}

}
