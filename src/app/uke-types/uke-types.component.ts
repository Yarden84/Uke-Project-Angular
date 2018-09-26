import { Component, OnInit } from "@angular/core";

import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-uke-types",
  templateUrl: "./uke-types.component.html",
  styleUrls: ["./uke-types.component.css"]
})
export class UkeTypesComponent implements OnInit {
  about: Array<boolean> = [];
  carousel: Array<boolean> = [];
  vid: Array<boolean> = [];

  items1: Array<any> = [];
  items2: Array<any> = [];
  items3: Array<any> = [];
  items4: Array<any> = [];

  constructor(private titleService: Title) {
    this.about = [true, true, true, true];
    this.carousel = [false, false, false, false];
    this.vid = [false, false, false, false];

    this.items1 = [
      { name: "../../assets/img/bjl1.jpg" },
      { name: "../../assets/img/bjl2.jpg" },
      { name: "../../assets/img/bjl3.JPG" },
      { name: "../../assets/img/bjl4.jpg" },
      { name: "../../assets/img/bjl5.jpg" },
      { name: "../../assets/img/bjl6.jpg" },
      { name: "../../assets/img/bjl7.jpg" },
      { name: "../../assets/img/bjl8.jpg" },
      { name: "../../assets/img/bjl9.jpg" },
      { name: "../../assets/img/bjl10.jpg" },
      { name: "../../assets/img/bjl11.jpg" },
      { name: "../../assets/img/bjl12.jpg" }
    ];

    this.items2 = [
      { name: "../../assets/img/uhrp1.jpg" },
      { name: "../../assets/img/uhrp2.jpg" },
      { name: "../../assets/img/uhrp3.jpg" },
      { name: "../../assets/img/uhrp4.jpg" },
      { name: "../../assets/img/uhrp5.jpg" },
      { name: "../../assets/img/uhrp6.jpg" },
      { name: "../../assets/img/uhrp7.jpg" },
      { name: "../../assets/img/uhrp8.jpg" },
      { name: "../../assets/img/uhrp9.jpg" },
      { name: "../../assets/img/uhrp10.jpg" },
      { name: "../../assets/img/uhrp11.jpg" },
      { name: "../../assets/img/uhrp12.jpg" }
    ];

    this.items3 = [
      { name: "../../assets/img/eleuke1.jpg" },
      { name: "../../assets/img/eleuke2.jpg" },
      { name: "../../assets/img/eleuke3.jpg" },
      { name: "../../assets/img/eleuke4.jpg" },
      { name: "../../assets/img/eleuke5.jpg" },
      { name: "../../assets/img/eleuke6.jpg" },
      { name: "../../assets/img/eleuke7.jpg" },
      { name: "../../assets/img/eleuke8.jpg" },
      { name: "../../assets/img/eleuke9.jpg" },
      { name: "../../assets/img/eleuke10.jpg" },
      { name: "../../assets/img/eleuke11.jpg" },
      { name: "../../assets/img/eleuke12.jpg" }
    ];

    this.items4 = [
      { name: "../../assets/img/uBass1.jpg" },
      { name: "../../assets/img/uBass2.jpg" },
      { name: "../../assets/img/uBass3.jpg" },
      { name: "../../assets/img/uBass4.jpg" },
      { name: "../../assets/img/uBass5.jpg" },
      { name: "../../assets/img/uBass6.jpg" },
      { name: "../../assets/img/uBass7.jpg" },
      { name: "../../assets/img/uBass8.jpg" },
      { name: "../../assets/img/uBass9.jpg" },
      { name: "../../assets/img/uBass10.jpg" },
      { name: "../../assets/img/uBass11.jpg" },
      { name: "../../assets/img/uBass12.jpg" }
    ];
  }

  ngOnInit() {
    this.setTitle("Jewkulele - הכלאות");

    var ukeHarpReset = localStorage.getItem("ukeHarpReset") === "true";

    if (ukeHarpReset) {
      localStorage.setItem("ukeHarpLink", "false");
    }

    var ukeHarpLink = localStorage.getItem("ukeHarpLink") === "true";

    if (ukeHarpLink) {
      document.getElementById("vidBtn1").scrollIntoView();
      localStorage.setItem("ukeHarpReset", "true");
    }
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  showAbout(a) {
    this.about[a] = true;
    this.carousel[a] = false;
    this.vid[a] = false;
  }

  showCarousel(a) {
    this.about[a] = false;
    this.carousel[a] = true;
    this.vid[a] = false;
  }

  showVid(a) {
    this.about[a] = false;
    this.carousel[a] = false;
    this.vid[a] = true;
  }
}
