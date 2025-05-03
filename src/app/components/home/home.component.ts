import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectCardComponent } from "../project-card/project-card.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ProjectCardComponent]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

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