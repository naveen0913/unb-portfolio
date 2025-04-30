import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ThemeService } from './services/theme.service';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectCardComponent },
  {
    path:'experience',component:ExperienceCardComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ThemeService],
  bootstrap: []
})
export class AppModule { }