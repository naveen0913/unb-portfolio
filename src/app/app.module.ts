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
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ThemeService],
  bootstrap: []
})
export class AppModule { }