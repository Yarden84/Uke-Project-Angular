import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap';

import { AppRoutingModule, routingComponents} from './app-routing.module';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import {Ng2CarouselamosModule} from 'ng2-carouselamos';

import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

import { LocalStorageModule } from 'angular-2-local-storage';

import { Title }  from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChordFinderComponent } from './chord-finder/chord-finder.component';
import { UkeSizesComponent } from './uke-sizes/uke-sizes.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LinksComponent } from './links/links.component';
import { UkeRelativesComponent } from './uke-relatives/uke-relatives.component';
import { UkeTypesComponent } from './uke-types/uke-types.component';
import { TunerComponent } from './tuner/tuner.component';



@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    TunerComponent,
    ChordFinderComponent,
    UkeSizesComponent,
    AboutComponent,
    GalleryComponent,
    LinksComponent,
    UkeRelativesComponent,
    UkeTypesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    AlertModule.forRoot(),
    BrowserModule,
    Ng2CarouselamosModule,
    Angular2ImageGalleryModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    })
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
