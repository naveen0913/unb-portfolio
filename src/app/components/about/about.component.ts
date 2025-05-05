import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports:[CommonModule,RouterModule]
})
export class AboutComponent {
  constructor(private router:Router){}
  skills = [
    { name: 'TypeScript', level: 90 },
    { name: 'Angular', level: 85 },
    { name: 'Java/J2EE', level: 85 },
    { name: 'Spring Boot', level: 85 },
    { name: 'Micro-Services', level: 85 },
    { name: 'OOPs', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Bootstrap', level: 90 },
    { name: 'MySQL', level: 80 },
    { name: 'Angular-Material', level: 85 },
    { name: 'Git', level: 85 },
    { name: 'RESTful APIs', level: 85 }
  ];

  scrollToContact():void{
    this.router.navigate(['/contact'])
  }
}