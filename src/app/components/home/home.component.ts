import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  featuredProjects = [
    {
      title: 'Food Delivery App',
      description: 'Pickmybox is a dynamic food delivery service that specializes in transporting meals from home kitchens directly to schools.',
      imageUrl: 'https://pickmybox.in/assets/images/logo-removebg.png',
      technologies: 'Angular, TypeScript, Bootstrap, Angular-Material, PrimeNg, Php, MySQL and Git',
      projectUrl: 'https://pickmybox.in',
      githubUrl: 'https://github.com/pparimi89/pickmybox_app'
    },
    {
      title: 'E-commerce Platform',
      description: 'A feature-rich online shopping platform with product management, cart, and checkout functionality.',
      imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      technologies: 'Angular, Express, PostgreSQL',
      projectUrl: '#',
      githubUrl: 'https://github.com/naveen0913'
    }
  ];

  scrollToContact(): void {
    this.router.navigate(['/contact']);
  }

  scrollToProjects():void{
    this.router.navigate(['/projects'])
  }

  scrollToExperience():void{
    this.router.navigate(['/experience'])
  }

}