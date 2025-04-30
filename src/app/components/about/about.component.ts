import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports:[CommonModule]
})
export class AboutComponent {
  skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Angular', level: 80 },
    { name: 'Node.js', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'MongoDB', level: 75 },
    { name: 'PostgreSQL', level: 70 },
    { name: 'TypeScript', level: 80 },
    { name: 'Git', level: 85 },
    { name: 'RESTful APIs', level: 85 }
  ];
}