import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from '../../services/theme.service';
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [ThemeToggleComponent,CommonModule,RouterModule]
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  activeSection = '';
  menuOpen = false;
  
  constructor(
    private router: Router,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.activeSection = event.url.slice(1) || '';
      this.menuOpen = false;
    });

    this.onScroll();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  isActive(route: string): boolean {
    return this.activeSection === route;
  }
}