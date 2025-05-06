import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RouterModule } from '@angular/router';
import { ScrollTopComponent } from "./components/scroll-top/scroll-top.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, FooterComponent, RouterModule, ScrollTopComponent]
})
export class AppComponent implements OnInit { 
  title = 'Naveen Udayagiri - Portfolio';

  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.themeService.theme$.subscribe(theme => {
      if (theme === 'dark') {
        this.renderer.addClass(document.body, 'dark-theme');
        this.renderer.removeClass(document.body, 'light-theme');
      } else {
        this.renderer.addClass(document.body, 'light-theme');
        this.renderer.removeClass(document.body, 'dark-theme');
      }
    });
  }
}