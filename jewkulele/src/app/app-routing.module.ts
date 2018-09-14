import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ChordFinderComponent } from './chord-finder/chord-finder.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LinksComponent } from './links/links.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MusiciansComponent } from './musicians/musicians.component';
import { TunerComponent } from './tuner/tuner.component';
import { UkeRelativesComponent } from './uke-relatives/uke-relatives.component';
import { UkeSizesComponent } from './uke-sizes/uke-sizes.component';
import { UkeTypesComponent } from './uke-types/uke-types.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'chordfinder', component: ChordFinderComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'links', component: LinksComponent},
  {path: 'mainpage', component: MainPageComponent}, 
  {path: 'musicians', component: MusiciansComponent},
  {path: 'tuner', component: TunerComponent},
  {path: 'ukerelatives', component: UkeRelativesComponent},
  {path: 'ukesizes', component: UkeSizesComponent},
  {path: 'uketypes', component: UkeTypesComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

export const routingComponents = [AboutComponent, ChordFinderComponent, GalleryComponent, LinksComponent, MainPageComponent, MusiciansComponent, TunerComponent, UkeRelativesComponent, UkeSizesComponent, UkeTypesComponent];
