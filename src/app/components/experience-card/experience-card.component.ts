import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
  imports:[CommonModule]
})
export class ExperienceCardComponent {
  @Input() company: string = '';
  @Input() role: string = '';
  @Input() duration: string = '';
  @Input() description: string = '';
  @Input() achievements: string[] = [];
  @Input() technologies: string[] = [];

  static counter = 0;
  position: 'left' | 'right';

  constructor() {
    this.position = ExperienceCardComponent.counter % 2 === 0 ? 'left' : 'right';
    ExperienceCardComponent.counter++;
  }
}