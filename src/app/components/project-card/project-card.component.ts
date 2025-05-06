import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  imports:[CommonModule]
})
export class ProjectCardComponent implements OnInit{
  

  allProjects = [
    {
      title: 'Food Delivery System (Pickmybox)',
      description: 'A dynamic food delivery platform transporting meals from home kitchens to schools.',
      imageUrl: 'https://pickmybox.in/assets/images/logo-removebg.png',
      technologies: 'Angular, TypeScript, Bootstrap, Angular Material, PrimeNG, PHP, MySQL, Git',
      projectUrl: 'https://pickmybox-live.example.com',
      githubUrl: 'https://github.com/yourusername/pickmybox'
    },
    {
      title: 'E-Commerce Web Application',
      description: 'A full-stack online shopping platform with product management, cart, and secure checkout.',
      imageUrl: 'assets/images/ecommerce.jpg',
      technologies: 'Angular, Express, PostgreSQL',
      projectUrl: 'https://ecommerce-live-demo.example.com',
      githubUrl: 'https://github.com/yourusername/ecommerce-frontend'
    },
    
    {
      title: 'Table Reservation System',
      description: 'An online platform for reserving tables at restaurants with real-time availability tracking.',
      imageUrl: 'assets/images/table-reservation.jpg',
      technologies: 'Angular, Firebase, Bootstrap',
      projectUrl: 'https://tablereserve.example.com',
      githubUrl: 'https://github.com/yourusername/table-reservation'
    },
    {
      title: 'Fitness Tracker Application',
      description: 'A health and workout tracking app to monitor daily progress, goals, and exercises.',
      imageUrl: 'assets/images/fitness.jpg',
      technologies: 'Angular, Node.js, MongoDB',
      projectUrl: 'https://fittrack.example.com',
      githubUrl: 'https://github.com/yourusername/fitness-tracker'
    }
  ];

  ngOnInit(): void {
  
    
    
  }
  
}