import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  public active1 = "";
  public active2 = "";
  public active3 = "";

  onSelect(){
    this.active1 = "active";
    this.active2 = "sr-only";
    this.active3 = "(current)";
  }
}
