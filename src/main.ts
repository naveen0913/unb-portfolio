import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './app/components/home/home.component';
import { AboutComponent } from './app/components/about/about.component';
import { ProjectCardComponent } from './app/components/project-card/project-card.component';
import { ExperienceCardComponent } from './app/components/experience-card/experience-card.component';
import { ContactComponent } from './app/components/contact/contact.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectCardComponent },
  {
    path:'experience',component:ExperienceCardComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
    )
  ]
}).catch(err => console.error(err));